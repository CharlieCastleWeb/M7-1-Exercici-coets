class Rocket {
    code:string;
    engines:number[]=new Array();
    maximumPower:number;
    currentPowerArr:number[] = new Array();
    currentPower:number = 0;

    

    constructor(code:string,engines:number[]) {
        this.code = code;
        this.engines = engines;
        this.maximumPower = this.maxPower();
        this.currentPowerArr = this.createCurrentPower();
    }

    /* Eliminar addEngine --------------------*/
    addEngine(engine:number):void {
        this.engines.push(engine);
    }
    
    maxPower() {
        let maxpower:number = 0;
        const length = this.engines.length;
        for (let i = 0; i<length; i++) {
            maxpower += this.engines[i];
        }
        return maxpower;
    }

    createCurrentPower() {
        for ( let j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] = 0;
        }
        return this.currentPowerArr;
    }

    accelerate() {
        this.currentPower = 0;
        for ( let j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] += 10;
            if(this.currentPowerArr[j]>this.engines[j]) {
                this.currentPowerArr[j] = this.engines[j];
            }
            this.currentPower += this.currentPowerArr[j];
        }
        console.log(`${this.currentPowerArr} i ${this.currentPower}`);
        return this.currentPower;
    }

    brake() {
        for ( let j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] -= 10;
            if(this.currentPowerArr[j]<0) {
                this.currentPowerArr[j] = 0;
            }
            this.currentPower -= this.currentPowerArr[j];
        }
        console.log(`${this.currentPowerArr} i ${this.currentPower}`);
        return this.currentPower;
    }
}