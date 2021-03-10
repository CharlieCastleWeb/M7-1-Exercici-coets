var Rocket = /** @class */ (function () {
    function Rocket(code, engines) {
        this.engines = new Array();
        this.currentPowerArr = new Array(); // Potencia actual de cada propulsor
        this.currentPower = 0; // Potencia total actual
        this.code = code;
        this.engines = engines;
        this.maximumPower = this.maxPower();
        this.currentPowerArr = this.createCurrentPower();
    }
    // Calcula la máxima potencia total
    Rocket.prototype.maxPower = function () {
        var maxpower = 0;
        var length = this.engines.length;
        for (var i = 0; i < length; i++) {
            maxpower += this.engines[i];
        }
        return maxpower;
    };
    // Crea e inicializa a 0 el array de potencia de cada propulsor
    Rocket.prototype.createCurrentPower = function () {
        for (var j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] = 0;
        }
        return this.currentPowerArr;
    };
    // Calcula la potencia total (Suma de todos los propulsores)
    Rocket.prototype.totalPower = function (arr) {
        for (var j = 0; j < arr.length; j++) {
            this.currentPower += this.currentPowerArr[j];
        }
    };
    // Acelera o decelera según el increment definido
    Rocket.prototype.accelerate = function (increment) {
        this.currentPower = 0; // Resetea potencia actual
        for (var i = 0; i < this.engines.length; i++) {
            this.currentPowerArr[i] += increment; // Suma o resta increment a la potencia actual de cada propulsor
            if (this.currentPowerArr[i] > this.engines[i]) { // Comprueba que el valor no sobrepase la potencia max del propulsor
                this.currentPowerArr[i] = this.engines[i];
            }
            else if (this.currentPowerArr[i] < 0) { // Comprueba que el valor calculado no sea negativo
                this.currentPowerArr[i] = 0;
            }
        }
        this.totalPower(this.currentPowerArr);
        // Muestra resultados en consola y retorna potencia total
        console.log("Potencia de propulsores: " + this.currentPowerArr + " i Potencia total: " + this.currentPower);
        return this.currentPower;
    };
    // Muestra rocket en pantalla
    Rocket.prototype.printRocket = function () {
        var showRocket = "\n            <p>Rocket " + this.code + " boosters max power " + this.engines + "</p>\n        ";
        return showRocket;
    };
    return Rocket;
}());
