const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const result = document.querySelector('#result');
const btn = document.querySelector('#btnCalcular');
const date = document.querySelector('#date');

form.addEventListener('submit', multInputValues);

function multInputValues(event) {

  
  console.log(date);
  const formattedDate = new Date().toISOString().replace(/[-:.]/g, "").replace("T", "_").split(".")[0];
  console.log(formattedDate);



  console.log(event);
  event.preventDefault();
  const multi = input1.value * input2.value;
  result.innerText = date.value;
}
