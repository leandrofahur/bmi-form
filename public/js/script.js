const age = document.getElementById('age');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const result = document.getElementById('result');
const button = document.getElementById('calc');

async function action(e) {
  e.preventDefault();

  const response = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      height: height.value / 100,
      weight: weight.value,
    }),
  });

  const data = await response.json();
  return (result.innerHTML = `Your BMI result is: ${parseFloat(
    data.result
  ).toFixed(2)}`);
}

button.addEventListener('click', (e) => action(e));
