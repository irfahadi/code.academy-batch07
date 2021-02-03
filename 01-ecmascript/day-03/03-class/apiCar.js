export const listCar = (...list) =>{
    return list;
}

export const findCarByMerk=(listCar,merek)=>{
    return listCar.filter(x=> x.merek===merek);
}
