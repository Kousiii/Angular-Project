//number,string,bool

function sample(a:number,b:number):number{
    return a+b;
}

//sample() //error
//sample(12) //error
//sample(12,"hi") //error
console.log(sample(23,43.34))