z = 0
const howManyFrogJump = (X,Y,K) =>{
    if(X<Y && X+K < Y){
        z++
    }
    while( X+K < Y)
    {
        X+=K
        console.log(X);
        z++
    }
    
    return z
}

console.log(howManyFrogJump(10,10,10));
