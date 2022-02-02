const age = document.getElementById('age');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const result = document.getElementById('result');
const btn = document.getElementById('calc');
const form = document.getElementById('form');

async function bmiCalc(event) {
  event.preventDefault();
  const response = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      weight: weight.value,
      height: height.value / 100,
    }),
  });

  const data = await response.json();
  return (result.innerHTML = `Your BMI result is: ${parseFloat(
    data.result
  ).toFixed(2)}`);
}

btn.addEventListener('submit', bmiCalc);
form.addEventListener('submit', bmiCalc);
