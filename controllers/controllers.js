var rockets = [];
function createRocket1() {
    var rocket1 = new Rocket("32WESSDS", [10, 30, 80]);
    console.log(rocket1);
    rockets.push(rocket1);
}
function createRocket2() {
    var rocket2 = new Rocket("LDSFJA32", [30, 40, 50, 50, 30, 10]);
    console.log(rocket2);
    rockets.push(rocket2);
}
function printRocket(rocket, rocketNumber) {
    var divShowRockets = document.getElementsByClassName("showRocket")[rocketNumber];
    var showRockets = "\n        <p>Rocket " + rocket.code + " boosters max power " + rocket.engines + "</p>\n    ";
    divShowRockets.innerHTML = showRockets;
}
var createRocket1Input = document.getElementById("createRocket1");
createRocket1Input === null || createRocket1Input === void 0 ? void 0 : createRocket1Input.addEventListener("click", function () {
    createRocket1();
});
var createRocket2Input = document.getElementById("createRocket2");
createRocket2Input === null || createRocket2Input === void 0 ? void 0 : createRocket2Input.addEventListener("click", function () {
    createRocket2();
});
var accelerateRocket1Input = document.getElementById("accelerateRocket1");
accelerateRocket1Input === null || accelerateRocket1Input === void 0 ? void 0 : accelerateRocket1Input.addEventListener("click", function () {
    rockets[0].accelerate();
});
var accelerateRocket2Input = document.getElementById("accelerateRocket2");
accelerateRocket2Input === null || accelerateRocket2Input === void 0 ? void 0 : accelerateRocket2Input.addEventListener("click", function () {
    rockets[1].accelerate();
});
var brakeRocket1Input = document.getElementById("brakeRocket1");
brakeRocket1Input === null || brakeRocket1Input === void 0 ? void 0 : brakeRocket1Input.addEventListener("click", function () {
    rockets[0].brake();
});
var brakeRocket2Input = document.getElementById("brakeRocket2");
brakeRocket2Input === null || brakeRocket2Input === void 0 ? void 0 : brakeRocket2Input.addEventListener("click", function () {
    rockets[1].brake();
});
var printRocket1Input = document.getElementById("printRocket1");
printRocket1Input === null || printRocket1Input === void 0 ? void 0 : printRocket1Input.addEventListener("click", function () {
    printRocket(rockets[0], 0);
});
var printRocket2Input = document.getElementById("printRocket2");
printRocket2Input === null || printRocket2Input === void 0 ? void 0 : printRocket2Input.addEventListener("click", function () {
    printRocket(rockets[1], 1);
});
var printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput === null || printAllRocketsInput === void 0 ? void 0 : printAllRocketsInput.addEventListener("click", function () {
    printRocket(rockets[0], 0);
    printRocket(rockets[1], 1);
});
