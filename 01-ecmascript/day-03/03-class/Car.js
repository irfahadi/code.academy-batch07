export default class Car{
    static totalCar=0;
    constructor(merek,tahun){
        this.merek = merek;
        this.tahun = tahun;
        Car.totalCar++;
    }
}

export class Taxi extends Car{
    constructor(merek,tahun,brand){
        super(merek,tahun)
        this.brand = brand;
    }

    Taxi(brand){ // ovarloading
        this.brand = brand;
    }

    totalRevenue(rate,km){
        return rate * km;
    }

    info(){
        return console.log(this)
    }
}

export class Angkot extends Car{
    constructor(rute,merek,tahun){
        super(merek,tahun)
        this.rute = rute;
    }

    seat(count){
        return count
    }
}