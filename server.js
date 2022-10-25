const express = require("express");
const path = require("path");
const app =express();
const port = 3300;
const cors = require("cors");
const { url } = require("inspector");
const axios = require("axios");
const { response } = require("express");
const e = require("express");

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname))
app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Server is up and running on port: ${port}`))

const APIKey = "50e0521477329a65ba7e7a567c265cc1";

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})

app.get("/:city", checkWeather)

app.get("/:lat/:lon", checkPollution)

async function checkWeather(req, res) 
{
    //Make API call
    // const x = {
    //     x:"Hello world"
    // }
    console.log(req.params)
    let city = req.params.city;
    console.log(city)
    let url;
    try {
        url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&cnt=33&units=metric&appid="+APIKey
        console.log(url)
        let responseData = await axios.get(url);
        console.log(responseData);
        res.send(responseData.data);
    } catch(error) {
        console.log("City not found!")
        res.send({cod:"404",message:"City not found"})
    }
    //Defining variables
    let weather_type =""
    let rain =""
    let date =""
    let feels_like=""
}
async function checkPollution(req, res) {
    let url = "https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat="+req.params.lat+"&lon="+req.params.lon+"&appid="+APIKey
    let response = await axios.get(url)
    console.log("pollution data in server from api:")
    console.log(response)
    res.send(response.data)
}