document.getElementById("output").style.visibility = "hidden";

let choi = document.getElementById("choice");

document.getElementById("scale").addEventListener("change", scales);
function scales() {


    let scale = document.getElementById("scale").value;
    let x = document.getElementById("scale");
    let scalec = x.getElementsByTagName("option");

    if (scale == scalec[1].value) {
        let c = document.getElementById("choice")
        // c.value = " ";
        let ch = c.getElementsByTagName("option")
        ch[1].innerHTML = "Pounds";
        ch[2].innerHTML = "Grams";
        ch[3].innerHTML = "Kilograms";
        ch[4].innerHTML = "Ounces";
        console.log(scale);
        choi.addEventListener("change", choices);
        function choices() {
            let choice = document.getElementById("choice").value;
            //console.log(choice);
            let y = document.getElementById("choice")
            let option = y.getElementsByTagName("option");
            if (choice == option[1].value) {
                console.log("pounds");
                document.getElementById("lbsInput").value = 0;
                document.getElementById("output").style.visibility = "hidden"
                document.getElementById("lbsInput").addEventListener("input",
                    function h() {
                        document.getElementById("output").style.visibility = "visible";

                        //Get input
                        let lbs = document.getElementById("lbsInput").value;
                        document.getElementById("lbOutput").innerHTML = lbs;
                        document.getElementById("gramsOutput").innerHTML =
                            lbs / 0.0022046;
                        document.getElementById("kgOutput").innerHTML =
                            lbs / 2.2046;
                        document.getElementById("ozOutput").innerHTML =
                            lbs * 16;


                    })


            }

            else if (choice == option[2].value) {
                console.log("grams");
                document.getElementById("lbsInput").value = 0;
                document.getElementById("output").style.visibility = "hidden"
                document.getElementById("lbsInput").addEventListener("input",
                    function h() {
                        document.getElementById("output").style.visibility = "visible";

                        //Get input
                        let inputs = document.getElementById("lbsInput").value;
                        document.getElementById("lbOutput").innerHTML = inputs / 453.592;
                        document.getElementById("gramsOutput").innerHTML =
                            inputs;
                        document.getElementById("kgOutput").innerHTML =
                            inputs / 1000;
                        document.getElementById("ozOutput").innerHTML =
                            inputs / 28.35;

                    })
            }

            else if (choice == option[3].value) {
                console.log("kilo");
                document.getElementById("lbsInput").value = 0;
                document.getElementById("output").style.visibility = "hidden"
                document.getElementById("lbsInput").addEventListener("input",
                    function h() {
                        document.getElementById("output").style.visibility = "visible";

                        //Get input
                        let inputs = document.getElementById("lbsInput").value;
                        document.getElementById("lbOutput").innerHTML = inputs * parseFloat(2.20462);
                        document.getElementById("gramsOutput").innerHTML =
                            inputs * 1000;
                        document.getElementById("kgOutput").innerHTML =
                            inputs;
                        document.getElementById("ozOutput").innerHTML =
                            inputs * 35.274;

                    })
            }

            //(choice == option[2].value) 
            else {
                console.log("Ounces");
                document.getElementById("lbsInput").value = 0;
                document.getElementById("output").style.visibility = "hidden"
                document.getElementById("lbsInput").addEventListener("input",
                    function h() {
                        document.getElementById("output").style.visibility = "visible";

                        //Get input
                        let inputs = document.getElementById("lbsInput").value;
                        document.getElementById("lbOutput").innerHTML = inputs / 16;
                        document.getElementById("gramsOutput").innerHTML =
                            inputs * 28.35;
                        document.getElementById("kgOutput").innerHTML =
                            inputs / 35.274;
                        document.getElementById("ozOutput").innerHTML =
                            inputs;

                    })
            }

        }

    } else if (scale == scalec[2].value) {
        //document.getElementById("scale")
        let c = document.getElementById("choice")

        // c.value = " ";
        let ch = c.getElementsByTagName("option")
        ch[1].innerHTML = "Celsius";
        ch[2].innerHTML = "Kelvin";
        ch[3].innerHTML = "Fahrenheit";
        ch[4].style.display = "none";
        ch[1].value = "Celsius";
        ch[2].value = "Kelvin";
        ch[3].value = "Fahrenheit";

        c.addEventListener("change", temp);
        function temp() {
            document.getElementById("output").innerHTML =
            `<div class="card bg-secondary mb-2">
                        <div class="card-block">
                            <h4>Celsius:</h4>
                            <div id="lbOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-primary mb-2">
                        <div class="card-block">
                            <h4>Kelvin</h4>
                            <div id="gramsOutput"></div>
                        </div>
                    </div>
                    <div class="card bg-success mb-2">
                        <div class="card-block">
                            <h4>Fahrenheit</h4>
                            <div id="kgOutput"></div>
                        </div>
                    </div>`
            document.getElementById("output").style.visibility = "visible";
            let chV = c.value;
            if (chV == ch[1].value ) {
                console.log("You chose Celsius");
            } else if (chV == ch[2].value) {
                console.log("You chose Kelvin");
            } else if (chV == ch[3].value) {
                console.log("You chose Fahrenheit");
            }
            
            
        }

    } else if (scale == scalec[3].value) {
        //document.getElementById("scale")
        let c = document.getElementById("choice")
        // c.value = " ";
        let ch = c.getElementsByTagName("option")
        ch[1].innerHTML = "Hours";
        ch[2].innerHTML = "Minutes";
        ch[3].innerHTML = "Seconds";
        ch[4].style.display = "none"
        ch[1].value = "Hours";
        ch[2].value = "Minutes";
        ch[3].value = "Seconds";

        c.addEventListener("change", temp);
        function temp() {
            let chV = c.value;
            switch (chV) {
                case "Hours":
                    console.log("You chose hours");
                    break;
                case "Minutes":
                    console.log("You chose minutes");
                    break;
                case "Seconds":
                    console.log("You chose seconds");
                    break;
                default:
                    console.log("You chose nothing mate..");
            }
            c.removeEventListener("change", temp);

        }
    } else if (scale == scalec[4].value) {
        //document.getElementById("scale")
        let c = document.getElementById("choice")
        // c.value = " ";
        let ch = c.getElementsByTagName("option")
        ch[1].innerHTML = "Square metre";
        ch[2].innerHTML = "Square mile";
        ch[3].innerHTML = "Square foot";
        ch[4].style.display = "none"
        ch[1].value = "Square metre";
        ch[2].value = "Square mile";
        ch[3].value = "Square foot";

        c.addEventListener("change", temp);
        function temp() {
            let chV = c.value;
            switch (chV) {
                case "Square metre":
                    console.log("You chose Square metre");
                    break;
                case "Square mile":
                    console.log("You chose Square mile");
                    break;
                case "Square foot":
                    console.log("You chose Square foot");
                    break;
                default:
                    console.log("You chose nothing mate..");
            }
            c.removeEventListener("change", temp);

        }
    } else {
        alert("Please choose a scale...")
    }


}
