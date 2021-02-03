import { listCar } from './apiCar.js';
import  Car,{Taxi} from './Car.js'


function main (){
    const hrv = new Car("Honda", 2015);
    console.log(hrv)
    const grab = new Taxi("honda",2020,"Grab")
    console.log(grab)
    console.log(grab.totalRevenue(4000.00,2))

    const gojek = new Taxi("Gojek");
    const bird = new Taxi("Blue Bird");
    console.log("gojek") //overloading
    console.log(`Total Car : ${Car.totalCar}`)

    const cars = listCar(hrv,grab,gojek,bird)
    console.log(cars)
}

main();