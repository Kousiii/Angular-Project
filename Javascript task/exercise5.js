marks=[
    {RollNo:1,Name:"Jaan",Marks:463},
    {RollNo:2,Name:"Bhageera",Marks:450},
    {RollNo:3,Name:"Tom",Marks:471},
    {RollNo:4,Name:"SK",Marks:455},
    {RollNo:6,Name:"Kousimaa",Marks:473}
]
topper=marks.map(markalone)

function markalone(marks)
{
    return marks.Marks
}
a=(Math.max.apply(null,topper))

console.log ("Highest marks in the list:"+a)
for(let i of marks)
{
    if(i.Marks==a)
{
    console.log("Scored by :"+(i.Name))
}
}
