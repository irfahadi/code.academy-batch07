export default class Student{
    static totalStudent = 0;
    constructor(fullname,city,education,grade,bootcamp,batch, year, skillpoint){
        this.fullname = fullname;
        this.city = city;
        this.education = education;
        this.grade = grade;
        this.bootcamp = bootcamp;
        this.batch = batch;
        this.year = year;
        this.skillpoint = skillpoint;
        Student.totalStudent++; // totalstudent = 0 => totalstudent = 0 + 1
    }
}

export class Beasiswa extends Student{
    static totalBeasiswa = 0;
    static totalInsentif = 0;
    constructor(fullname,city,education,grade,bootcamp,batch, year, skillpoint,insentif){
        super(fullname,city,education,grade,bootcamp,batch, year, skillpoint);
        this.insentif=insentif;
        Beasiswa.totalInsentif += insentif
        Beasiswa.totalBeasiswa++;
    }
}

export class Reguler extends Student{
    static totalReguler = 0;
    static totalPrice = 0;
    constructor(fullname,city,education,grade,bootcamp,batch, year, skillpoint,netprice){
        super(fullname,city,education,grade,bootcamp,batch, year, skillpoint);
        this.netprice=netprice;
        Reguler.totalReguler++;
        Reguler.totalPrice += netprice;
    }
}