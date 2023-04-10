//import axios from "axios";
const axios=require('axios')
function randomQuote()
{
    axios.get('https://api.quotable.io/random').then(
        (response)=>{console.log(response.data)},
        (error)=>{console.log(error)}
    )
}
randomQuote()
console.log("Processing...")