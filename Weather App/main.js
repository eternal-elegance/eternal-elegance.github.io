window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperaturedegree = document.querySelector(".temperature-degree");
    let locationtimezone = document.querySelector(".location-timezone");
    const temp1 = document.querySelector(".temperature");
    const tempSpan = document.querySelector(".temperature span");
   


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            console.log(lat);

           // const proxy = 'https://cors-anywhere.herokuapp.com/'

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
            exclude=minutely&appid=4b1f27dc2d67c4566f7f734bf3d5f525`

            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=22&lon=134&
            //exclude=minutely&appid=4b1f27dc2d67c4566f7f734bf3d5f525`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.current  // This is a short-hand notation
                    const icon1 = data.current.weather[0].description;
                    console.log(temp);
                    console.log(data.current.weather[0].main);
                    console.log(data.timezone);
                    temperaturedegree.textContent = temp;
                    temperatureDescription.textContent = data.current.weather[0].main;
                    locationtimezone.textContent = data.timezone;
                    //setIcons(icon1, document.querySelector("#icon1"));
                    //              SETTING THE ICON
                    let locationIcon = document.querySelector('.weather-icon');
                    const {icon} = data.current.weather[0];
                    locationIcon.innerHTML = `<img src="icons/${icon}.png">`;

                    //              Defining Celsius Function
                    let celsius = temp-273.15;

                    //              CHANGING CELSIUS TO FAHRENHEIT AND VICE-VERSA
                    temp1.addEventListener("click",()=>{
                        if(tempSpan.textContent==="K"){
                            tempSpan.textContent="C";
                            temperaturedegree.textContent=Math.floor(celsius);
                        }
                        else{
                            tempSpan.textContent="K";
                            temperaturedegree.textContent=temp;
                        }
                    });


                });

        });
    }

    /*function setIcons(icon,iconID){
        const skycons=new Skycons({color:"white"});
        const currentIcon=icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }*/
});