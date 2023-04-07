a=["Kousalya","Nithyakalyani","Nalini","Ramesh"]
ArrayLength=a.map(len)
function len(a)
{
    return lenArr=a.length
}

SumOfarray=ArrayLength.reduce(sum)
function sum(a,b)
{
    return a+b
}
console.log(SumOfarray)
