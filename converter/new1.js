/*
ADD COMMENTS AND CREATE A CHEMICAL ENGINEERING CONVERTER
LIKE VESSEL THICKNESS CALCULATIONS.
*/

// Variables

let outputView = document.getElementById("output");
outputView.style.visibility = "hidden";
let formula = document.getElementById("formula");
let scale = document.getElementById("scale");
let option1 = scale.querySelectorAll("option");
let choice = document.getElementById("choice");
let option2 = choice.querySelectorAll("option");
let calc = document.getElementById("pCalculations");

// Functions/Actions

function h1() {
  //Get input
  let inputs = parseFloat(document.getElementById("lbsInput").value);
  let lb = document.getElementById("lbOutput");
  let gram = document.getElementById("gramsOutput");
  let kg = document.getElementById("kgOutput");
  let oz = document.getElementById("ozOutput");
  lb.innerHTML = inputs;
  gram.innerHTML = inputs / 0.0022046;
  kg.innerHTML = inputs / 2.2046;
  oz.innerHTML = inputs * 16;
  let pounds = {
    input1: inputs,
    lb1: lb,
    gram1: gram,
    kg1: kg,
    oz1: oz
  };
  if (
    choice.value !== "grams" &&
    choice.value !== "kilograms" &&
    choice.value !== "ounces"
  ) {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-warning mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input1
                                            }lbs and the corresponding values are ${
        x.gram1
      }grams; ${x.kg1}kg; ${x.oz1}oz.
                                        </div>
                                  </div>`;
    });
  }
}
function h2() {
  //Get input
  let inputs = parseInt(document.getElementById("lbsInput").value);
  let lb = document.getElementById("lbOutput");
  let gram = document.getElementById("gramsOutput");
  let kg = document.getElementById("kgOutput");
  let oz = document.getElementById("ozOutput");
  lb.innerHTML = inputs / 453.592;
  gram.innerHTML = inputs;
  kg.innerHTML = inputs / 1000;
  oz.innerHTML = inputs / 28.35;

  let pounds = {
    input2: inputs,
    lb2: lb,
    gram2: gram,
    kg2: kg,
    oz2: oz
  };
  if (
    choice.value !== "pounds" &&
    choice.value !== "kilograms" &&
    choice.value !== "ounces"
  ) {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-warning mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input2
                                            }grams and the corresponding values are ${
        x.lb2
      }lbs; ${x.kg2}kg; ${x.oz2}oz.
                                        </div>
                                  </div>`;
    });
  }
}
function h3() {
  //Get input
  let inputs = parseInt(document.getElementById("lbsInput").value);
  let lb = document.getElementById("lbOutput");
  let gram = document.getElementById("gramsOutput");
  let kg = document.getElementById("kgOutput");
  let oz = document.getElementById("ozOutput");
  lb.innerHTML = inputs * 2.20462;
  gram.innerHTML = inputs * 1000;
  kg.innerHTML = inputs;
  oz.innerHTML = inputs * 35.274;
  let pounds = {
    input3: inputs,
    lb3: lb,
    gram3: gram,
    kg3: kg,
    oz3: oz
  };
  if (
    choice.value !== "pounds" &&
    choice.value !== "grams" &&
    choice.value !== "ounces"
  ) {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-warning mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input3
                                            }kg and the corresponding values are ${
        x.lb3
      }lbs; ${x.gram3}grams; ${x.oz3}oz.
                                        </div>
                                  </div>`;
    });
  }
}
function h4() {
  //Get input
  let inputs = document.getElementById("lbsInput").value;
  let lb = document.getElementById("lbOutput");
  let gram = document.getElementById("gramsOutput");
  let kg = document.getElementById("kgOutput");
  let oz = document.getElementById("ozOutput");
  lb.innerHTML = inputs / 16;
  gram.innerHTML = inputs * 28.35;
  kg.innerHTML = inputs / 35.274;
  oz.innerHTML = inputs;
  let pounds = {
    input4: inputs,
    lb4: lb,
    gram4: gram,
    kg4: kg,
    oz4: oz
  };
  if (
    choice.value !== "pounds" &&
    choice.value !== "grams" &&
    choice.value !== "kilograms"
  ) {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-warning mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input4
                                            }oz and the corresponding values are ${
        x.lb4
      }lbs; ${x.gram4}grams; ${x.kg4}kg.
                                        </div>
                                  </div>`;
    });
  }
}
function h5() {
  //Get input
  let inputs5 = document.getElementById("lbsInput").value;
  let celsius = document.getElementById("celsiusOutput");
  let kelvin = document.getElementById("kelvinOutput");
  let fahrenheit = document.getElementById("fahrenheitOutput");
  celsius.innerHTML = inputs5;
  kelvin.innerHTML = Number(inputs5) + 273.15;
  fahrenheit.innerHTML = Number(inputs5) * (9 / 5) + 32;
  let pounds = {
    input5: inputs5,
    celsius1: celsius,
    kelvin1: kelvin,
    fahrenheit1: fahrenheit
  };
  if (choice.value == "celsius") {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-info mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input5
                                            }°C and the corresponding values are ${
        x.kelvin1
      }K; ${x.fahrenheit1}°F.
                                        </div>
                                  </div>`;
    });
  }
}
function h6() {
  //Get input
  let inputs6 = parseInt(document.getElementById("lbsInput").value);
  let celsius = document.getElementById("celsiusOutput");
  let kelvin = document.getElementById("kelvinOutput");
  let fahrenheit = document.getElementById("fahrenheitOutput");
  celsius.innerHTML = inputs6 - 273.15;
  kelvin.innerHTML = inputs6;
  fahrenheit.innerHTML = ((inputs6 - 273.15) * 9) / 5 + 32;
  let pounds = {
    input6: inputs6,
    celsius2: celsius,
    kelvin2: kelvin,
    fahrenheit2: fahrenheit
  };
  if (choice.value == "kelvin") {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-info mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input6
                                            }K and the corresponding values are ${
        x.celsius2
      }°C and ${x.fahrenheit2}°F.
                                        </div>
                                  </div>`;
    });
  }
}
function h7() {
  //Get input
  let inputs7 = parseInt(document.getElementById("lbsInput").value);
  let celsius = document.getElementById("celsiusOutput");
  let kelvin = document.getElementById("kelvinOutput");
  let fahrenheit = document.getElementById("fahrenheitOutput");
  celsius.innerHTML = ((inputs7 - 32) * 5) / 9;
  kelvin.innerHTML = ((inputs7 - 32) * 5) / 9 + 273.15;
  fahrenheit.innerHTML = inputs7;
  let pounds = {
    input7: inputs7,
    celsius3: celsius,
    kelvin3: kelvin,
    fahrenheit3: fahrenheit
  };
  if (choice.value == "kelvin") {
    let history = [];
    history.push(pounds);
    localStorage.setItem("hist", JSON.stringify(history));
    let data = JSON.parse(localStorage.getItem("hist"));
    data.forEach(x => {
      document.getElementById("pCalculations").innerHTML += ` 
                                  <div class="card bg-info mb-2">
                                        <div class="card-block">
                                            Your input was : ${
                                              x.input7
                                            }°F and the corresponding values are ${
        x.celsius3
      }°C and ${x.kelvin3}K.
                                        </div>
                                  </div>`;
    });
  }
}

function scaleSelect() {
  choice.value = option2[0].value;
  outputView.style.visibility = "visible";
  if (scale.value == "mass") {
    document.getElementById("calculate").removeEventListener("click", h5);
    document.getElementById("calculate").removeEventListener("click", h6);
    document.getElementById("calculate").removeEventListener("click", h7);
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" data-placement="left" title="Mass Conversion Formulae:" data-trigger="focus" data-content="1lb = 453.592grams, 0.453592kg, 16oz | 1gram = 0.00220462lbs, 0.001kg, 0.035274oz | 1kg = 2.205lbs, 1000gram, 35.274oz | 1oz = 0.0625lbs, 28.3495grams, 0.02835kg">Formula</button>
                    <p id="formulaOutput"> </p>`;
    outputView.innerHTML = `<div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Pounds:</h4>
                            <div id="lbOutput"></div>
                        </div>
                    </div>
                    
                    <div class="card bg-primary mb-2">
                        <div class="card-block">
                            <h4>Grams:</h4>
                            <div id="gramsOutput"></div>
                        </div>
                    </div>

                    <div class="card bg-success mb-2">
                        <div class="card-block">
                            <h4>Kilograms:</h4>
                            <div id="kgOutput"></div>
                        </div>
                    </div>

                    <div class="card bg-danger mb-2">
                        <div class="card-block">
                            <h4>Ounces:</h4>
                            <div id="ozOutput"></div>
                        </div>
                    </div>`;
    option2[1].innerHTML = "Pounds";
    option2[2].innerHTML = "Grams";
    option2[3].innerHTML = "Kilograms";
    option2[4].style.display = "block";
    option2[4].innerHTML = "Ounce";
    option2[1].value = "pounds";
    option2[2].value = "grams";
    option2[3].value = "kilograms";
    option2[4].value = "ounces";

    choice.addEventListener("change", function choices() {
        document.getElementById("lbsInput").value = "";
      if (scale.value == "mass" && choice.value == "pounds") {
        document.getElementById("calculate").addEventListener("click", h1);
      } else if (scale.value == "mass" && choice.value == "grams") {
        document.getElementById("calculate").addEventListener("click", h2);
      } else if (scale.value == "mass" && choice.value == "kilograms") {
        document.getElementById("calculate").addEventListener("click", h3);
      } else if (scale.value == "mass" && choice.value == "ounces") {
        document.getElementById("calculate").addEventListener("click", h4);
      }
    });
    //hereee
  } else if (scale.value == "temperature") {
    document.getElementById("calculate").removeEventListener("click", h1);
    document.getElementById("calculate").removeEventListener("click", h2);
    document.getElementById("calculate").removeEventListener("click", h3);
    document.getElementById("calculate").removeEventListener("click", h4);
    document.getElementById("lbsInput").value = "";
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" data-placement="left" data-trigger="focus" title="Temperature Conversion Formulae:" 
        data-content="0°C + 273.15 = 273.15K, (0°C × 9/5) + 32 = 32°F">
        Formula</button>
                    <p id="formulaOutput"> </p>`;
    document.getElementById("output").style.visibility = "visible";
    document.getElementById(
      "output"
    ).innerHTML = `<div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Celsius:</h4>
                            <div id="celsiusOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2">
                        <div class="card-block">
                            <h4>Kelvin</h4>
                            <div id="kelvinOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-success mb-2">
                        <div class="card-block">
                            <h4>Fahrenheit</h4>
                            <div id="fahrenheitOutput"></div>
                        </div>
                    </div>`;
    option2[1].innerHTML = "Celsius";
    option2[2].innerHTML = "Kelvin";
    option2[3].innerHTML = "Fahrenheit";
    option2[4].style.display = "none";
    option2[1].value = "celsius";
    option2[2].value = "kelvin";
    option2[3].value = "fahrenheit";
    choice.addEventListener("change", function choices() {
      //This clears the input after choosing scale and choice respectively.
      document.getElementById("lbsInput").value = "";

      if (scale.value == "temperature" && choice.value == "celsius") {
        document.getElementById("lbsInput").value = "";
        document.getElementById("calculate").addEventListener("click", h5);
      } else if (scale.value == "temperature" && choice.value == "kelvin") {
        document.getElementById("lbsInput").value = "";
        document.getElementById("calculate").addEventListener("click", h6);
      } else if (scale.value == "temperature" && choice.value == "fahrenheit") {
        document.getElementById("lbsInput").value = "";
        document.getElementById("calculate").addEventListener("click", h7);
      }
    });
  } else if (scale.value == "time") {
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" title="Time Conversion Formula:" data-placement="left" data-trigger="focus" 
        data-content="1 hr = 60mins, 3600secs | 1 min = 0.0166667hrs, 60secs | 1 sec = 0.0166667mins, 0.000277778hrs">Formula</button>
                    <p id="formulaOutput"> </p>`;
    document.getElementById("output").style.visibility = "visible";
    document.getElementById(
      "output"
    ).innerHTML = `<div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Hours:</h4>
                            <div id="hoursOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2">
                        <div class="card-block">
                            <h4>Minutes:</h4>
                            <div id="minutesOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-success mb-2">
                        <div class="card-block">
                            <h4>Seconds:</h4>
                            <div id="secondsOutput"></div>
                        </div>
                    </div>`;
    option2[1].innerHTML = "Hours";
    option2[2].innerHTML = "Minutes";
    option2[3].innerHTML = "Seconds";
    option2[4].style.display = "none";
    option2[1].value = "hours";
    option2[2].value = "minutes";
    option2[3].value = "seconds";
    choice.addEventListener("change", function choices() {
      //This clears the input after choosing scale and choice respectively.
      document.getElementById("lbsInput").value = "";

      if (scale.value == "time" && choice.value == "hours") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";

            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("hoursOutput").innerHTML = inputs;
            document.getElementById("minutesOutput").innerHTML = inputs * 60;
            document.getElementById("secondsOutput").innerHTML = inputs * 3600;
          });
      } else if (scale.value == "time" && choice.value == "minutes") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";
            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("hoursOutput").innerHTML = inputs / 60;
            document.getElementById("minutesOutput").innerHTML = inputs;
            document.getElementById("secondsOutput").innerHTML = inputs * 60;
          });
      } else if (scale.value == "time" && choice.value == "seconds") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";

            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("hoursOutput").innerHTML = inputs / 3600;
            document.getElementById("minutesOutput").innerHTML = inputs / 60;
            document.getElementById("secondsOutput").innerHTML = inputs;
          });
      }
    }); //here
  } else {
    formula.innerHTML = `<button type="button" class="btn btn-md btn-warning" data-toggle="popover" title="Area Conversion Formula:" data-trigger="focus" data-placement="left" data-content="1 square metre = 1e-6 square kilometre, 3.861e-7 square mile | 1 square mile = 2.59e+6 square metre, 2.59 square kilometre | 1 square kilometre = 0.386102 square mile, 1e+6 square metre">Formula</button>
                    <p id="formulaOutput"> </p>`;
    document.getElementById("output").style.visibility = "visible";
    document.getElementById(
      "output"
    ).innerHTML = `<div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Square Metre:</h4>
                            <div id="squaremtOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2">
                        <div class="card-block">
                            <h4>Square Mile:</h4>
                            <div id="squaremOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-success mb-2">
                        <div class="card-block">
                            <h4>Square Foot:</h4>
                            <div id="squarefOutput"></div>
                        </div>
                    </div>`;
    option2[1].innerHTML = "Square Metre";
    option2[2].innerHTML = "Square Mile";
    option2[3].innerHTML = "Square Foot";
    option2[4].style.display = "none";
    option2[1].value = "squaremetre";
    option2[2].value = "squaremile";
    option2[3].value = "squarefoot";
    choice.addEventListener("change", function choices() {
      //This clears the input after choosing scale and choice respectively.
      document.getElementById("lbsInput").value = "";

      if (scale.value == "area" && choice.value == "squaremetre") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";

            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("squaremtOutput").innerHTML = inputs;
            document.getElementById("squaremOutput").innerHTML =
              inputs / (2.59 * 10 ** 6);
            document.getElementById("squarefOutput").innerHTML =
              inputs / 10.764;
          });
      } else if (scale.value == "area" && choice.value == "squaremile") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";
            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("squaremtOutput").innerHTML =
              inputs * (2.59 * 10 ** 6);
            document.getElementById("squaremOutput").innerHTML = inputs;
            document.getElementById("squarefOutput").innerHTML =
              inputs * (2.788 * 10 ** 7);
          });
      } else if (scale.value == "area" && choice.value == "squarefoot") {
        document.getElementById("lbsInput").value = "";
        document
          .getElementById("calculate")
          .addEventListener("click", function h() {
            outputView.style.visibility = "visible";

            //Get input
            let inputs = parseInt(document.getElementById("lbsInput").value);
            document.getElementById("squaremtOutput").innerHTML =
              inputs / 10.764;
            document.getElementById("squaremOutput").innerHTML =
              inputs / (2.788 * 10 ** 7);
            document.getElementById("squarefOutput").innerHTML = inputs;
          });
      }
    });
  }

  $(document).ready(function() {
    $("[data-toggle=popover]").popover();
  });
}

scale.addEventListener("change", scaleSelect);
document.getElementById("calc").addEventListener("click", function display() {
  calc.classList.toggle("hide");
});
