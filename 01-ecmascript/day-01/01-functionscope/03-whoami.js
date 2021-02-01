function WhoAmI(value){
    switch( typeof value){
        case "number":
        return "you are "+typeof value
        case "string":
        return "you are "+typeof value
        case "boolean":
        return "you are "+typeof value
        case "object":
        return "you are "+typeof value
        case "function":
        return "you are "+typeof value
        default:
        return "undefined"        
    }
}

console.log(WhoAmI(45));
console.log(WhoAmI());
console.log(WhoAmI("hello"))
console.log(WhoAmI(true))
console.log(WhoAmI({}))
console.log(WhoAmI(()=>{}))
