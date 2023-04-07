a=[3,5,8,22,29,24,17,9,6]
console.log("Prime Numbers are:"+a.filter(checkPrime))
function checkPrime(a)
{
    if (a <= 1) 
    {
        return false;
    } else 
    {
        for (let i = 2; i < a; i++) {
          if (a % i == 0) {
            return false;
          }
        }
        return true;
    }    
}