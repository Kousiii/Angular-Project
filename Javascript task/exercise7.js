mark=[
    {RollNo:1,Name:"Abi",Marks:80},
    {RollNo:2,Name:"Blessy",Marks:70},
    {RollNo:3,Name:"Celcia",Marks:71},
    {RollNo:4,Name:"Dhana",Marks:89},
    {RollNo:5,Name:"Edith",Marks:68}

]
topper=mark.filter(above)
console.log(topper)
function above(mark)
{
    if(mark.Marks>70)
      return true
    else 
      return false
}