let bagitems;
onload();

function onload() {
  let bagitemsstr = localStorage.getItem('bagitems');
  bagitems = bagitemsstr ? JSON.parse(bagitemsstr) : [];

  displayitemsonhomepaage();
  dispalybagicon();
}

function addtobage(itemid) {
  bagitems.push(itemid);
  localStorage.setItem('bagitems', JSON.stringify(bagitems))
  dispalybagicon();
}

function dispalybagicon() {
  let bagitemcountelement = document.querySelector('.bag-item-count');
  if (bagitems.length > 0) {
    bagitemcountelement.style.visibility = 'visible';
    bagitemcountelement.innerText = bagitems.length;
  }
  else {
    bagitemcountelement.style.visibility = 'hidden';
  }
}
function displayitemsonhomepaage() {

  let itemscontainerelemnt = document.querySelector('.items-container');
  if (!itemscontainerelemnt) {
    return;
  }

  let innerHTML = '';
  items.forEach(item => {
    innerHTML += `<div class="item-container">
       <img class="item-image" src=" ${item.image}"
        alt="myntra logo here">
       <div class="rating">
         ${item.rating.stars} ⭐ | ${item.rating.count}
       </div>
       <div class="company-name">${item.company}</div>
       <div class="item-name">${item.item_name} </div>
       <div class="price">
         <span class="current-price">RS ${item.current_price}</span>
         <span class="origional-price">RS ${item.original_price} </span>
         <span class="discount-price">(${item.discount_percentage} % OFF)</span>
       </div>
       <button class="btn-add-bag" onclick= "addtobage(${item.id})">Add to bag</button>
     </div>`
  })

  itemscontainerelemnt.innerHTML = innerHTML;
}
