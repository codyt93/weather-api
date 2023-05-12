document.querySelector("#search")
.addEventListener("click",function(){
    var input = document.querySelector("#input").value
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=9f865020817046fc5bfad746c0602024&units=imperial"
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById("cityname").innerHTML=data.name
    document.getElementById("date").innerHTML=moment.unix(data.dt).format("MMMM Do YYYY")
    document.getElementById("wind").innerHTML=data.wind.speed
    document.getElementById("temp").innerHTML=data.main.temp
    document.getElementById("humidity").innerHTML=data.main.humidity
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+input+"&appid=9f865020817046fc5bfad746c0602024&units=imperial"
fetch(url)
.then(res=>res.json())
.then(data=>{
  console.log(data)
  for (let index = 7; index < data.list.length; index+=8) {
    const element = data.list[index];
   const date = document.createElement("p")
   date.innerHTML=moment.unix(element.dt).format("MMMM Do YYYY") 
   document.getElementById("five").appendChild(date)
   const wind =document.createElement("p")
   wind.innerHTML=element.wind.speed
   document.getElementById("five").appendChild(wind)
   const temp = document.createElement("p")
   temp.innerHTML=element.main.temp
   document.getElementById("five").appendChild(temp)
   const humidity = document.createElement("p")
   temp.innerHTML=element.main.humidity
   document.getElementById("five").appendChild(humidity)

  }
})
})
})