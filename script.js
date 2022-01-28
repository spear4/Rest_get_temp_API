var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all/',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    for(var i=0;i<250;i++){
        try{
        var cname = data[i].name;
        var lang = data[i].latlng;
        if(lang.length===0) throw new Error("Longitude for this place is not defined");
        weatherdata(cname,...lang);
    }catch(e){
        console.log("Error has been handled"+cname+" "+e.message);
    }
    }
}

//this function recieves the country name, latitude and longitude values
//within this it will append it to the open weathermap API
function weatherdata(name,lat,lang){
    var req= new XMLHttpRequest();
    var url= 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=4e98ed8e602a212a543696ea11d0b684';
    req.open('GET',url,true);
    req.send();
    req.onload=function(){
        var data = JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp}`)
    }
    

}