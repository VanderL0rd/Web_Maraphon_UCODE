let key = "6fcecb0fe50d1b873091db9a9e3e85a8";
let cityID = 5128581;

function weatherBallon() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}
function drawWeather(d) {
    let all = document.createElement("div");
    all.style.display = "flex";
    all.className = "all";
    let loc = document.getElementById('location').innerHTML = d.city.name;
    for (let ind = 0; ind < d.list.length; ind += 8) {
        var celcius = Math.round(parseFloat(d.list[ind].main.temp) - 273.15);
        var description = d.list[ind].weather[0].description;

        let dat = new Date(d.list[ind].dt_txt);

        let desc = document.createElement("p");
        desc.innerHTML = dat.getMonth() + "." + dat.getDate();
        let temp = document.createElement("h1");
        temp.innerHTML = celcius + '&deg;';

        let item = document.createElement("div");
        item.appendChild(desc);
        item.appendChild(temp);

        let img = document.createElement("img");
        if (description.indexOf('rain') > 0) {
            item.className = "item rainy";
            img.className = "rain";
            img.setAttribute("src", "assets/images/Rain.png");
        } else if (description.indexOf('cloud') > 0) {
            item.className = "item cloudy";
            img.className = "rain";
            img.setAttribute("src", "assets/images/Cloud.png");
        } else if (description.indexOf('sunny') > 0) {
            item.className = "item sunny";
            img.className = "rain";
            img.setAttribute("src", "assets/images/Sunny.png");
        } else if (description.indexOf('snow') > 0) {
            item.className = "item snow";
            img.className = "rain";
            img.setAttribute("src", "assets/images/Snow.png");
        } else {
            item.className = "item clear";
            img.className = "rain";
            img.setAttribute("src", "assets/images/Sunny.png");
        }
        item.appendChild(img);
        all.appendChild(item);
    }
    document.body.appendChild(all);
}
window.onload = function () {
    weatherBallon();
}