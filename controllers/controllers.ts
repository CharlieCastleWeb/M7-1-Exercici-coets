
let rockets:Rocket[] = [];

function createRocket1() {
    let rocket1: Rocket = new Rocket("32WESSDS",[10,30,80]);
    console.log(rocket1);
    rockets.push(rocket1);
}

function createRocket2() {
    let rocket2: Rocket = new Rocket("LDSFJA32",[30,40,50,50,30,10]);
    console.log(rocket2);
    rockets.push(rocket2);
}

function printRocket(rocket:Rocket, rocketNumber:number){
    let divShowRockets = document.getElementsByClassName("showRocket")[rocketNumber] as HTMLDivElement;
    let showRockets:string = `
        <p>Rocket ${rocket.code} boosters max power ${rocket.engines}</p>
    `;
    divShowRockets.innerHTML = showRockets;
}

let createRocket1Input = document.getElementById("createRocket1");
createRocket1Input?.addEventListener("click", function(){
    createRocket1();
});

let createRocket2Input = document.getElementById("createRocket2");
createRocket2Input?.addEventListener("click", function(){
    createRocket2();
});

let accelerateRocket1Input = document.getElementById("accelerateRocket1");
accelerateRocket1Input?.addEventListener("click", function(){
    rockets[0].accelerate();
});

let accelerateRocket2Input = document.getElementById("accelerateRocket2");
accelerateRocket2Input?.addEventListener("click", function(){
    rockets[1].accelerate();
});

let brakeRocket1Input = document.getElementById("brakeRocket1");
brakeRocket1Input?.addEventListener("click", function(){
    rockets[0].brake();
});

let brakeRocket2Input = document.getElementById("brakeRocket2");
brakeRocket2Input?.addEventListener("click", function(){
    rockets[1].brake();
});

let printRocket1Input = document.getElementById("printRocket1");
printRocket1Input?.addEventListener("click", function(){
    printRocket(rockets[0], 0);
});

let printRocket2Input = document.getElementById("printRocket2");
printRocket2Input?.addEventListener("click", function(){
    printRocket(rockets[1], 1);
});

let printAllRocketsInput = document.getElementById("printAll");
printAllRocketsInput?.addEventListener("click", function(){
    printRocket(rockets[0], 0);
    printRocket(rockets[1], 1);
});


