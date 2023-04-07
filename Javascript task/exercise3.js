names=["Kousalya","NithyaKalyani","Nalini","Ramesh"]
largest=names.reduce(lengthiest)
console.log(largest)
function lengthiest(first,now)
{
  return first.length > now.length ? first : now;
  //if(first.length > now.length)
    //return a
    //else
    //return b
}