const input = document.getElementById("city");
const container = document.getElementById("main");

const giveMeWeatherReport = (url, city) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((allData) => {
      const crTempareture = allData.main.temp;
      const maxTempareture = allData.main.temp_max;
      const minTempareture = allData.main.temp_min;
      const des = allData.weather[0].description;
      const icon = allData.weather[0].icon;
      let imge = document.createElement("img");
      imge.src = `http://openweathermap.org/img/w/${icon}.png`;
      let name = document.createElement("h1");
      name.innerText = city;
      container.appendChild(name);
      let maxT = document.createElement("p");
      let minT = document.createElement("p");
      let crT = document.createElement("p");
      crT.innerText = `Tem ${crTempareture} F`;
      container.appendChild(crT);
      maxT.innerText = `Max Tem ${maxTempareture} F`;
      container.appendChild(maxT);
      minT.innerText = `Min Tem ${minTempareture} F`;
      container.appendChild(minT);
      container.appendChild(imge);
      let description = document.createElement("h2");
      description.innerText = `${des} weather`;
      container.appendChild(description);
    })
    .catch((error) => {
      return "Ohho It's An Error !!!!!!";
    });
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    container.innerHTML = "";
    const city = input.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d82e8baba60415cbff65d94fea64b7d3
`;
    giveMeWeatherReport(url, city);
    input.value = "";
  }
});
