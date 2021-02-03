import { totalBeasiswa, totalPrice, totalReguler, totalSaku, totalStudent, totalStudentByBootcamp } from './apiStudent.js';
import { Beasiswa, Reguler } from './student.js'

function main(){
    const one = new Beasiswa('Asep','Bandung','S1',3.45,'NodeJS',1,2019,3,100000);
    const two = new Beasiswa('Ami','Bogor','S1',3.10,'NodeJS',1,2019,3,100000);
    const three = new Beasiswa('Budi','Depok','S1',3.25,'Java',2,2020,3,100000);
    const four = new Beasiswa('Cindy','Jakarta','D3',3.30,'Java',2,2020,3,100000);
    const five = new Beasiswa('Dedy','Bekasi','S2',2.98,'NodeJS',1,2019,4,100000);
    const six = new Reguler('Desta','Jakarta','S1',3.15,'Golang',3,2021,3,5000000);
    const seven = new Reguler('Shinta','Jakarta','S1',3.15,'Golang',3,2021,4,5000000);
    const eight = new Reguler('Meita','Jakarta','S1',3.00,'Python',3,2021,4,7000000);
    const NodeJS = totalStudentByBootcamp('NodeJS',one,two,three,four,five,six,seven,eight)
    const Golang = totalStudentByBootcamp('Golang',one,two,three,four,five,six,seven,eight)
    const Python = totalStudentByBootcamp('Python',one,two,three,four,five,six,seven,eight)

    console.log(totalStudent());
    console.log(totalBeasiswa());
    console.log(totalReguler());    
    console.log(totalSaku());
    console.log(totalPrice());    
    console.log(NodeJS)
    console.log(Golang)
    console.log(Python)
}

main()