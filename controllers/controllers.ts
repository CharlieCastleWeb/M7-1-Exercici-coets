
let rockets:Rocket[] = [];      // Crea un array para almacenar cohetes
let divShowRockets = document.getElementsByClassName("showRocket")[0] as HTMLDivElement;
let acceleration:number = 10;   // Determina la aceleración

// Función pora imprimir cohete
function printRocket(rocket:Rocket){
    let showRocket = document.createElement("p");
    showRocket.innerHTML = rocket.printRocket();
    divShowRockets.appendChild(showRocket);
}

// Función pora crear cohete y mostrar sus botones de control e impresión
function createRocket(code:string, engines:number[]) {
    let rocket:Rocket = new Rocket(code, engines);      // Crea instancia de cohete
    console.log(rocket);        // Muestra cohete en consola
    rockets.push(rocket);       // Añade cohete al array de cohetes
    
    let accelerateRocketsDiv = document.getElementsByClassName("accelerateRockets")[0];
    let printRocketsDiv = document.getElementsByClassName("printRockets")[0];
    
    // Crea botón de aceleración
    let accelerateDiv = document.createElement("div");
    let accelerateButton = document.createElement("button");
    accelerateButton.className = "accelerateRocket"+code;
    accelerateButton.innerHTML = "Accelerate Rocket "+code;
    accelerateButton.addEventListener("click", function(){
        rocket.accelerate(acceleration);
    });
    accelerateDiv.appendChild(accelerateButton);

    // Crea botón de freno
    let brakeButton = document.createElement("button");
    brakeButton.className = "brakeRocket"+code;
    brakeButton.innerHTML = "Brake Rocket "+code;
    brakeButton.addEventListener("click", function(){
        rocket.accelerate(-acceleration);
    });
    accelerateDiv.appendChild(brakeButton);
    accelerateRocketsDiv.appendChild(accelerateDiv);

    // Crea botón de impresión
    let printButton = document.createElement("button");
    printButton.className = "printRocket"+code;
    printButton.innerHTML = "Print Rocket "+code+" info";
    printButton.addEventListener("click", function(){
        divShowRockets.innerHTML = "";
        printRocket(rocket);
    });
    printRocketsDiv.appendChild(printButton);

}

// Crea rocket 1
let createRocket1Input = document.getElementById("createRocket1") as HTMLButtonElement;
createRocket1Input?.addEventListener("click", function(){
    createRocket("32WESSDS",[10,30,80]);
    createRocket1Input.disabled = true;
});

// Crea rocket 2
let createRocket2Input = document.getElementById("createRocket2") as HTMLButtonElement;
createRocket2Input?.addEventListener("click", function(){
    createRocket("LDSFJA32",[30,40,50,50,30,10]);
    createRocket2Input.disabled = true;
});

// Imprime información de todos los cohetes
let printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput?.addEventListener("click", function(){
    divShowRockets.innerHTML = "";
    
    rockets.forEach(element => printRocket(element));
});


