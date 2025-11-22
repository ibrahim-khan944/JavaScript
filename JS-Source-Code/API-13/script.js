// const baseurl= "https://api.currencyapi.com/v3/latest?apikey=YOUR_API_KEY&base_currency=USD"

let dropdowns = document.querySelectorAll(".dropdown select")
let btn = document.querySelector("form button")
let fromc = document.querySelector(".from select")
let toc = document.querySelector(".to select")

for (let select of dropdowns) {
  for (let i in countryList) {
    let newelement = document.createElement("option");
    newelement.innerText = i;
    newelement.value = i;

    if (select.name === "from" && i === "USD") {
      newelement.selected = "selected"
    } else if (select.name === "to" && i === "PKR") {
      newelement.selected = "selected"
    }
    select.append(newelement);
  }
  select.addEventListener("change", (evt) => {
    updatef(evt.target)
  });
}

const updatef = (element) => {
  let i = element.value;
  let countrycode = countryList[i];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
  let img = element.parentElement.querySelector("img")
  img.src = newsrc;
}

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtval = amount.value;

  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }

  const url = `https://api.frankfurter.app/latest?amount=${amtval}&from=${fromc.value}&to=${toc.value}`;
  let response = await fetch(url);
  let data = await response.json();
  let finalAmount = data.rates[toc.value];
  console.log("Converted Amount:", finalAmount);
  document.querySelector(".result").innerText =
    `${amtval} ${fromc.value} = ${finalAmount} ${toc.value}`;
});