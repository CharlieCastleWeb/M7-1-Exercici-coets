class Rocket {
    code:string;
    engines:number[]=new Array();
    maximumPower:number;                         // Máxima potencia
    currentPowerArr:number[] = new Array();      // Potencia actual de cada propulsor
    currentPower:number = 0;                     // Potencia total actual

    constructor(code:string,engines:number[]) {
        this.code = code;
        this.engines = engines;
        this.maximumPower = this.maxPower();
        this.currentPowerArr = this.createCurrentPower();
    }
    
    // Calcula la máxima potencia total
    maxPower() {
        let maxpower:number = 0;
        const length = this.engines.length;
        for (let i = 0; i<length; i++) {
            maxpower += this.engines[i];
        }
        return maxpower;
    }

    // Crea e inicializa a 0 el array de potencia de cada propulsor
    createCurrentPower() {
        for ( let j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] = 0;
        }
        return this.currentPowerArr;
    }

    // Calcula la potencia total (Suma de todos los propulsores)
    totalPower(arr:number[]) {
        for (let j = 0; j < arr.length; j++) {
            this.currentPower += this.currentPowerArr[j];
        }
    }

    // Acelera o decelera según el increment definido
    accelerate(increment:number) {
        this.currentPower = 0;                              // Resetea potencia actual
        
        for (let i = 0; i < this.engines.length; i++) {
            this.currentPowerArr[i] += increment;           // Suma o resta increment a la potencia actual de cada propulsor
            if(this.currentPowerArr[i]>this.engines[i]) {   // Comprueba que el valor no sobrepase la potencia max del propulsor
                this.currentPowerArr[i] = this.engines[i];
            } else if(this.currentPowerArr[i]<0) {          // Comprueba que el valor calculado no sea negativo
                this.currentPowerArr[i] = 0;
            }
        }
        this.totalPower(this.currentPowerArr);

        // Muestra resultados en consola y retorna potencia total
        console.log(`Potencia de propulsores: ${this.currentPowerArr} i Potencia total: ${this.currentPower}`);
        return this.currentPower;
    }

    // Muestra rocket en pantalla
    printRocket(){
        let showRocket:string = `
            <p>Rocket ${this.code} boosters max power ${this.engines}</p>
        `;
        return showRocket;
    }
}