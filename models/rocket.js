var Rocket = /** @class */ (function () {
    function Rocket(code, engines) {
        this.engines = new Array();
        this.currentPowerArr = new Array();
        this.currentPower = 0;
        this.code = code;
        this.engines = engines;
        this.maximumPower = this.maxPower();
        this.currentPowerArr = this.createCurrentPower();
    }
    /* Eliminar addEngine --------------------*/
    Rocket.prototype.addEngine = function (engine) {
        this.engines.push(engine);
    };
    Rocket.prototype.maxPower = function () {
        var maxpower = 0;
        var length = this.engines.length;
        for (var i = 0; i < length; i++) {
            maxpower += this.engines[i];
        }
        return maxpower;
    };
    Rocket.prototype.createCurrentPower = function () {
        for (var j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] = 0;
        }
        return this.currentPowerArr;
    };
    Rocket.prototype.accelerate = function () {
        this.currentPower = 0;
        for (var j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] += 10;
            if (this.currentPowerArr[j] > this.engines[j]) {
                this.currentPowerArr[j] = this.engines[j];
            }
            this.currentPower += this.currentPowerArr[j];
        }
        console.log(this.currentPowerArr + " i " + this.currentPower);
        return this.currentPower;
    };
    Rocket.prototype.brake = function () {
        for (var j = 0; j < this.engines.length; j++) {
            this.currentPowerArr[j] -= 10;
            if (this.currentPowerArr[j] < 0) {
                this.currentPowerArr[j] = 0;
            }
            this.currentPower -= this.currentPowerArr[j];
        }
        console.log(this.currentPowerArr + " i " + this.currentPower);
        return this.currentPower;
    };
    return Rocket;
}());
