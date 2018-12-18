document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input",
    function () {
        document.getElementById("output").style.visibility = "visible";

        //Get input
        let lbs = document.getElementById("lbsInput").value;
        document.getElementById("gramsOutput").innerHTML =
            lbs / 0.0022046;
        document.getElementById("kgOutput").innerHTML =
            lbs / 2.2046;
        document.getElementById("ozOutput").innerHTML =
            lbs * 16;

    })