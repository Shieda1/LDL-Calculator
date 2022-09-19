// https://www.omnicalculator.com/health/ldl

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lowdensitylipoproteinRadio = document.getElementById('lowdensitylipoproteinRadio');
const totalcholesterolRadio = document.getElementById('totalcholesterolRadio');
const highdensitylipoproteinsRadio = document.getElementById('highdensitylipoproteinsRadio');
const triglyceridesRadio = document.getElementById('triglyceridesRadio');

let lowdensitylipoprotein;
let totalcholesterol = v1;
let highdensitylipoproteins = v2;
let triglycerides = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

lowdensitylipoproteinRadio.addEventListener('click', function() {
  variable1.textContent = 'Total cholesterol';
  variable2.textContent = 'High-density lipoproteins';
  variable3.textContent = 'Triglycerides';
  totalcholesterol = v1;
  highdensitylipoproteins = v2;
  triglycerides = v3;
  result.textContent = '';
});

totalcholesterolRadio.addEventListener('click', function() {
  variable1.textContent = 'Low-density lipoprotein';
  variable2.textContent = 'High-density lipoproteins';
  variable3.textContent = 'Triglycerides';
  lowdensitylipoprotein = v1;
  highdensitylipoproteins = v2;
  triglycerides = v3;
  result.textContent = '';
});

highdensitylipoproteinsRadio.addEventListener('click', function() {
  variable1.textContent = 'Low-density lipoprotein';
  variable2.textContent = 'Total cholesterol';
  variable3.textContent = 'Triglycerides';
  lowdensitylipoprotein = v1;
  totalcholesterol = v2;
  triglycerides = v3;
  result.textContent = '';
});

triglyceridesRadio.addEventListener('click', function() {
  variable1.textContent = 'Low-density lipoprotein';
  variable2.textContent = 'Total cholesterol';
  variable3.textContent = 'High-density lipoproteins';
  lowdensitylipoprotein = v1;
  totalcholesterol = v2;
  highdensitylipoproteins = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lowdensitylipoproteinRadio.checked)
    result.textContent = `Low-density lipoprotein = ${computelowdensitylipoprotein().toFixed(2)}`;

  else if(totalcholesterolRadio.checked)
    result.textContent = `Total cholesterol = ${computetotalcholesterol().toFixed(2)}`;

  else if(highdensitylipoproteinsRadio.checked)
    result.textContent = `High-density lipoproteins = ${computehighdensitylipoproteins().toFixed(2)}`;

  else if(triglyceridesRadio.checked)
    result.textContent = `Triglycerides = ${computetriglycerides().toFixed(2)}`;
})

// calculation

// lowdensitylipoprotein = totalcholesterol - highdensitylipoproteins - 0.2 × triglycerides

function computelowdensitylipoprotein() {
  return Number(totalcholesterol.value) - Number(highdensitylipoproteins.value) - 0.2 * Number(triglycerides.value);
}

function computetotalcholesterol() {
  return Number(lowdensitylipoprotein.value) + Number(highdensitylipoproteins.value) + 0.2 * Number(triglycerides.value);
}

function computehighdensitylipoproteins() {
  return Math.abs(Number(lowdensitylipoprotein.value) - Number(totalcholesterol.value) + 0.2 * Number(triglycerides.value));
}

function computetriglycerides() {
  return Math.abs((Number(lowdensitylipoprotein.value) - Number(totalcholesterol.value) + Number(highdensitylipoproteins.value)) / 0.2);
}