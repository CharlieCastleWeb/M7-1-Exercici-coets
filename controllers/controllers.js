var rockets = [];
var divShowRockets = document.getElementsByClassName("showRocket")[0];
var acceleration = 10;
function printRocket(rocket) {
    var showRocket = document.createElement("p");
    showRocket.innerHTML = rocket.printRocket();
    divShowRockets.appendChild(showRocket);
}
//////////////////////////////// CREAR FUNCTION PARA CREACION DE BOTONES GENERICOS //////////////////////
function createRocket(code, engines) {
    var rocket = new Rocket(code, engines);
    console.log(rocket);
    rockets.push(rocket);
    var accelerateRocketsDiv = document.getElementsByClassName("accelerateRockets")[0];
    var printRocketsDiv = document.getElementsByClassName("printRockets")[0];
    var accelerateDiv = document.createElement("div");
    var accelerateButton = document.createElement("button");
    accelerateButton.className = "accelerateRocket" + code;
    accelerateButton.innerHTML = "Accelerate Rocket " + code;
    accelerateButton.addEventListener("click", function () {
        rockets[0].accelerate(acceleration);
    });
    accelerateDiv.appendChild(accelerateButton);
    var brakeButton = document.createElement("button");
    brakeButton.className = "brakeRocket" + code;
    brakeButton.innerHTML = "Brake Rocket " + code;
    brakeButton.addEventListener("click", function () {
        rockets[0].accelerate(-acceleration);
    });
    accelerateDiv.appendChild(brakeButton);
    accelerateRocketsDiv.appendChild(accelerateDiv);
    var printButton = document.createElement("button");
    printButton.className = "printRocket" + code;
    printButton.innerHTML = "Print Rocket " + code + " info";
    printButton.addEventListener("click", function () {
        divShowRockets.innerHTML = "";
        printRocket(rockets[0]);
    });
    printRocketsDiv.appendChild(printButton);
}
var createRocket1Input = document.getElementById("createRocket1");
createRocket1Input === null || createRocket1Input === void 0 ? void 0 : createRocket1Input.addEventListener("click", function () {
    createRocket("32WESSDS", [10, 30, 80]);
    createRocket1Input.disabled = true;
});
var createRocket2Input = document.getElementById("createRocket2");
createRocket2Input === null || createRocket2Input === void 0 ? void 0 : createRocket2Input.addEventListener("click", function () {
    createRocket("LDSFJA32", [30, 40, 50, 50, 30, 10]);
    createRocket2Input.disabled = true;
});
var printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput === null || printAllRocketsInput === void 0 ? void 0 : printAllRocketsInput.addEventListener("click", function () {
    divShowRockets.innerHTML = "";
    rockets.forEach(function (element) { return printRocket(element); });
});
