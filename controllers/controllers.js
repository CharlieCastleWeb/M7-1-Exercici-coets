var rockets = []; // Crea un array para almacenar cohetes
var divShowRockets = document.getElementsByClassName("showRocket")[0];
var acceleration = 10; // Determina la aceleración
// Función pora imprimir cohete
function printRocket(rocket) {
    var showRocket = document.createElement("p");
    showRocket.innerHTML = rocket.printRocket();
    divShowRockets.appendChild(showRocket);
}
// Función pora crear cohete y mostrar sus botones de control e impresión
function createRocket(code, engines) {
    var rocket = new Rocket(code, engines); // Crea instancia de cohete
    console.log(rocket); // Muestra cohete en consola
    rockets.push(rocket); // Añade cohete al array de cohetes
    var accelerateRocketsDiv = document.getElementsByClassName("accelerateRockets")[0];
    var printRocketsDiv = document.getElementsByClassName("printRockets")[0];
    // Crea botón de aceleración
    var accelerateDiv = document.createElement("div");
    var accelerateButton = document.createElement("button");
    accelerateButton.className = "accelerateRocket" + code;
    accelerateButton.innerHTML = "Accelerate Rocket " + code;
    accelerateButton.addEventListener("click", function () {
        rocket.accelerate(acceleration);
    });
    accelerateDiv.appendChild(accelerateButton);
    // Crea botón de freno
    var brakeButton = document.createElement("button");
    brakeButton.className = "brakeRocket" + code;
    brakeButton.innerHTML = "Brake Rocket " + code;
    brakeButton.addEventListener("click", function () {
        rocket.accelerate(-acceleration);
    });
    accelerateDiv.appendChild(brakeButton);
    accelerateRocketsDiv.appendChild(accelerateDiv);
    // Crea botón de impresión
    var printButton = document.createElement("button");
    printButton.className = "printRocket" + code;
    printButton.innerHTML = "Print Rocket " + code + " info";
    printButton.addEventListener("click", function () {
        divShowRockets.innerHTML = "";
        printRocket(rocket);
    });
    printRocketsDiv.appendChild(printButton);
}
// Crea rocket 1
var createRocket1Input = document.getElementById("createRocket1");
createRocket1Input === null || createRocket1Input === void 0 ? void 0 : createRocket1Input.addEventListener("click", function () {
    createRocket("32WESSDS", [10, 30, 80]);
    createRocket1Input.disabled = true;
});
// Crea rocket 2
var createRocket2Input = document.getElementById("createRocket2");
createRocket2Input === null || createRocket2Input === void 0 ? void 0 : createRocket2Input.addEventListener("click", function () {
    createRocket("LDSFJA32", [30, 40, 50, 50, 30, 10]);
    createRocket2Input.disabled = true;
});
// Imprime información de todos los cohetes
var printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput === null || printAllRocketsInput === void 0 ? void 0 : printAllRocketsInput.addEventListener("click", function () {
    divShowRockets.innerHTML = "";
    rockets.forEach(function (element) { return printRocket(element); });
});
