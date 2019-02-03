/*
ADD COMMENTS AND CREATE A CHEMICAL ENGINEERING CONVERTER
LIKE VESSEL THICKNESS CALCULATIONS.
*/
// REMEMBER YOU ARE IN A BRANCH
// Variables -- Grabbing DOM elements.
let outputView = document.getElementById("output");
let formula = document.getElementById("formula");
let scale = document.getElementById("scale");
let option1 = scale.querySelectorAll("option");
let choice = document.getElementById("choice");
let option2 = choice.querySelectorAll("option");
let calc = document.getElementById("pCalculations");
let toCalculate = document.querySelector("#calculate");
outputView.style.display = "none";
let array = [];

// Functions/Actions
// Calculation when area is choosen in the scale
function mass() {
  //Get input
  outputView.style.display = "block";
  let inputs = parseFloat(document.getElementById("lbsInput").value);
  let lb = document.getElementById("output1");
  let gram = document.getElementById("output2");
  let kg = document.getElementById("output3");
  let oz = document.getElementById("output4");
  if (choice.value == "pounds") {
    lb.innerHTML = inputs;
    gram.innerHTML = inputs / 0.0022046;
    kg.innerHTML = inputs / 2.2046;
    oz.innerHTML = inputs * 16;
  } else if (choice.value == "grams") {
    lb.innerHTML = inputs / 453.592;
    gram.innerHTML = inputs;
    kg.innerHTML = inputs / 1000;
    oz.innerHTML = inputs / 28.35;
  } else if (choice.value == "kilograms") {
    lb.innerHTML = inputs * 2.20462;
    gram.innerHTML = inputs * 1000;
    kg.innerHTML = inputs;
    oz.innerHTML = inputs * 35.274;
  } else {
    lb.innerHTML = inputs / 16;
    gram.innerHTML = inputs * 28.35;
    kg.innerHTML = inputs / 35.274;
    oz.innerHTML = inputs;
  }
}
// Calculation when area is choosen in the scale
function temperature() {
  //Get input
  outputView.style.display = "block";
  let inputs = document.getElementById("lbsInput").value;
  let celsius = document.getElementById("output1");
  let kelvin = document.getElementById("output2");
  let fahrenheit = document.getElementById("output3");
  if (choice.value == "celsius") {
    celsius.innerHTML = inputs;
    kelvin.innerHTML = +inputs + 273.15;
    fahrenheit.innerHTML = +inputs * (9 / 5) + 32;
  } else if (choice.value == "kelvin") {
    celsius.innerHTML = inputs - 273.15;
    kelvin.innerHTML = inputs;
    fahrenheit.innerHTML = ((inputs - 273.15) * 9) / 5 + 32;
  } else {
    celsius.innerHTML = ((inputs - 32) * 5) / 9;
    kelvin.innerHTML = ((inputs - 32) * 5) / 9 + 273.15;
    fahrenheit.innerHTML = inputs;
  }
  
}
// Calculation when area is choosen in the scale
function time() {
  outputView.style.display = "block";
  // Get input
  let inputs = parseInt(document.getElementById("lbsInput").value);
  let hour = document.getElementById("output1");
  let minute = document.getElementById("output2");
  let second = document.getElementById("output3");
  if (choice.value == "hours") {
    hour.innerHTML = inputs;
    minute.innerHTML = inputs * 60;
    second.innerHTML = inputs * 3600;
  } else if (choice.value == "minutes") {
    hour.innerHTML = inputs / 60;
    minute.innerHTML = inputs;
    second.innerHTML = inputs * 60;
  } else {
    hour.innerHTML = inputs / 3600;
    minute.innerHTML = inputs / 60;
    second.innerHTML = inputs;
  }
}
// Calculation when area is choosen in the scale
function area() {
  outputView.style.display = "block";
  let inputs = parseInt(document.getElementById("lbsInput").value);
  let mt = document.getElementById("output1");
  let m = document.getElementById("output2");
  let f = document.getElementById("output3");
  if (choice.value == "squaremetre") {
    mt.innerHTML = inputs;
    m.innerHTML = inputs / (2.59 * 10 ** 6);
    f.innerHTML = inputs / 10.764;
  } else if (choice.value == "squaremile") {
    mt.innerHTML = inputs * (2.59 * 10 ** 6);
    m.innerHTML = inputs;
    f.innerHTML = inputs * (2.788 * 10 ** 7);
  } else {
    mt.innerHTML = inputs / 10.764;
    m.innerHTML = inputs / (2.788 * 10 ** 7);
    f.innerHTML = inputs;
  }
}

function scaleSelect() {
  outputView.style.display = "none";
  let cl = document.querySelector(".cl");
  let ch = document.querySelectorAll(".ch");
  choice.value = option2[0].value;
  outputView.style.visibility = "visible";
  document.getElementById("lbsInput").value = "";
  if (scale.value == "mass") {
    cl.style.display = "block";
    document
      .getElementById("calculate")
      .removeEventListener("click", temperature);
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" data-placement="left" title="Mass Conversion Formulae:" data-trigger="focus" data-content="1lb = 453.592grams, 0.453592kg, 16oz | 1gram = 0.00220462lbs, 0.001kg, 0.035274oz | 1kg = 2.205lbs, 1000gram, 35.274oz | 1oz = 0.0625lbs, 28.3495grams, 0.02835kg">Formula</button>
                   <p id="formulaOutput"> </p>`;
    ch[0].textContent = "Pound(s):";
    ch[1].textContent = "Gram(s):";
    ch[2].textContent = "Kilogram(s):";
    ch[3].textContent = "Oz:";
    option2[1].innerHTML = "Pounds";
    option2[2].innerHTML = "Grams";
    option2[3].innerHTML = "Kilograms";
    option2[4].style.display = "block";
    option2[4].innerHTML = "Ounce";
    option2[1].value = "pounds";
    option2[2].value = "grams";
    option2[3].value = "kilograms";
    option2[4].value = "ounce";
    toCalculate.addEventListener("click", mass);
  } else if (scale.value == "temperature") {
    if (cl) {
      cl.style.display = "none";
    }
    document.getElementById("calculate").removeEventListener("click", mass);
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" data-placement="left" data-trigger="focus" title="Temperature Conversion Formulae:" 
        data-content="0°C + 273.15 = 273.15K, (0°C × 9/5) + 32 = 32°F">
        Formula</button>
                    <p id="formulaOutput"> </p>`;
    ch[0].textContent = "Celsius";
    ch[1].textContent = "Kelvin";
    ch[2].textContent = "Fahrenheit";
    option2[1].innerHTML = "Celsius";
    option2[2].innerHTML = "Kelvin";
    option2[3].innerHTML = "Fahrenheit";
    option2[4].style.display = "none";
    option2[1].value = "celsius";
    option2[2].value = "kelvin";
    option2[3].value = "fahrenheit";
    toCalculate.addEventListener("click", temperature);
  } else if (scale.value == "time") {
    if (cl) {
      cl.style.display = "none";
    }
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" title="Time Conversion Formula:" data-placement="left" data-trigger="focus" 
        data-content="1 hr = 60mins, 3600secs | 1 min = 0.0166667hrs, 60secs | 1 sec = 0.0166667mins, 0.000277778hrs">Formula</button>
                    <p id="formulaOutput"> </p>`;
    ch[0].textContent = "Hour(s)";
    ch[1].textContent = "Minute(s)";
    ch[2].textContent = "Second(s)";
    option2[1].innerHTML = "Hours";
    option2[2].innerHTML = "Minutes";
    option2[3].innerHTML = "Seconds";
    option2[4].style.display = "none";
    option2[1].value = "hours";
    option2[2].value = "minutes";
    option2[3].value = "seconds";
    toCalculate.addEventListener("click", time);
  } else {
    if (cl) {
      cl.style.display = "none";
    }
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" title="Area Conversion Formula:" data-trigger="focus" data-placement="left" data-content="1 square metre = 1e-6 square kilometre, 3.861e-7 square mile | 1 square mile = 2.59e+6 square metre, 2.59 square kilometre | 1 square kilometre = 0.386102 square mile, 1e+6 square metre">Formula</button>
                    <p id="formulaOutput"> </p>`;
    ch[0].textContent = "Square Metre";
    ch[1].textContent = "Square Mile";
    ch[2].textContent = "Square Foot";
    option2[1].innerHTML = "Square Metre";
    option2[2].innerHTML = "Square Mile";
    option2[3].innerHTML = "Square Foot";
    option2[4].style.display = "none";
    option2[1].value = "squaremetre";
    option2[2].value = "squaremile";
    option2[3].value = "squarefoot";
    toCalculate.addEventListener("click", area);
  }
  // Listen for event
  $(document).ready(function() {
    $("[data-toggle=popover]").popover();
  });
}
choice.addEventListener("change", () => {
  document.getElementById("lbsInput").value = "";
});
scale.addEventListener("change", scaleSelect);
document.getElementById("calc").addEventListener("click", function display() {
  calc.classList.toggle("hide");
});
