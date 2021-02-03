import Student,{Beasiswa,Reguler} from "./student.js"

export const totalStudent = () =>{
    return Student.totalStudent; 
}

export const totalBeasiswa = () =>{
    return Beasiswa.totalBeasiswa; 
}

export const totalSaku = () =>{
    return Beasiswa.totalInsentif; 
}

export const totalReguler = () =>{
    return Reguler.totalReguler; 
}

export const totalPrice = () =>{
    return Reguler.totalPrice; 
}

export const totalStudentByBootcamp = (bootcamp, ...list) =>{
    let count = 0;
    // for (const i of list) {
    //   if (i.bootcamp === bootcamp) {
    //     count++;
    //   }
    // }
    list.map(element=> 
          {
            if (element.bootcamp === bootcamp) {
                count++;
              }
          }
    )
    return count;
}