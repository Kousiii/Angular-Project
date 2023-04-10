const fs=require("fs")

fs.readFile("package.json","utf-8",function(error,data)
{
  if (error)
    console.log("Error in reading files")
  else
    console.log(data)
})
console.log("After reading file")

