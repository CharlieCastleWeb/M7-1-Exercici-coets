
let rockets:Rocket[] = [];
let divShowRockets = document.getElementsByClassName("showRocket")[0] as HTMLDivElement;
let acceleration:number = 10;

function printRocket(rocket:Rocket){
    let showRocket = document.createElement("p");
    showRocket.innerHTML = rocket.printRocket();
    divShowRockets.appendChild(showRocket);
    
}

//////////////////////////////// CREAR FUNCTION PARA CREACION DE BOTONES GENERICOS //////////////////////

function createRocket(code:string, engines:number[]) {
    let rocket:Rocket = new Rocket(code, engines);
    console.log(rocket);
    rockets.push(rocket);
    
    let accelerateRocketsDiv = document.getElementsByClassName("accelerateRockets")[0];
    let printRocketsDiv = document.getElementsByClassName("printRockets")[0];
    
    let accelerateDiv = document.createElement("div");
    let accelerateButton = document.createElement("button");
    accelerateButton.className = "accelerateRocket"+code;
    accelerateButton.innerHTML = "Accelerate Rocket "+code;
    accelerateButton.addEventListener("click", function(){
        rockets[0].accelerate(acceleration);
    });
    accelerateDiv.appendChild(accelerateButton);

    let brakeButton = document.createElement("button");
    brakeButton.className = "brakeRocket"+code;
    brakeButton.innerHTML = "Brake Rocket "+code;
    brakeButton.addEventListener("click", function(){
        rockets[0].accelerate(-acceleration);
    });
    accelerateDiv.appendChild(brakeButton);
    accelerateRocketsDiv.appendChild(accelerateDiv);

    let printButton = document.createElement("button");
    printButton.className = "printRocket"+code;
    printButton.innerHTML = "Print Rocket "+code+" info";
    printButton.addEventListener("click", function(){
        divShowRockets.innerHTML = "";
        printRocket(rockets[0]);
    });
    printRocketsDiv.appendChild(printButton);

}

let createRocket1Input = document.getElementById("createRocket1");
createRocket1Input?.addEventListener("click", function(){
    createRocket("32WESSDS",[10,30,80]);
    createRocket1Input.disabled = true;
});


let createRocket2Input = document.getElementById("createRocket2");
createRocket2Input?.addEventListener("click", function(){
    createRocket("LDSFJA32",[30,40,50,50,30,10]);
    createRocket2Input.disabled = true;
});

let printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput?.addEventListener("click", function(){
    divShowRockets.innerHTML = "";
    
    rockets.forEach(element => printRocket(element));
    
});


