var employeee = /** @class */ (function () {
    function employeee(sno, name, city) {
        this.sno = sno;
        this.name = name;
        this.city = city;
    }
    employeee.prototype.display = function () {
        console.log(this.sno, this.name, this.city);
    };
    return employeee;
}());
