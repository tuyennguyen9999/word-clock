function updateTime() {
  // Los Angeles
  let hoChiMinhElement = document.querySelector("#ho-chi-minh");
  if (hoChiMinhElement) {
    let hoChiMinhDateElement = hoChiMinhElement.querySelector(".date");
    let hoChiMinhTimeElement = hoChiMinhElement.querySelector(".time");
    let hoChiMinhTime = moment().tz("Asia/Ho_Chi_Minh");

    hoChiMinhDateElement.innerHTML = hoChiMinhTime.format("MMMM	Do YYYY");
    hoChiMinhTimeElement.innerHTML = hoChiMinhTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let italyElement = document.querySelector("#italy");
  if (italyElement) {
    let italyDateElement = italyElement.querySelector(".date");
    let italyTimeElement = italyElement.querySelector(".time");
    let italyTime = moment().tz("Europe/Italy");

    italyDateElement.innerHTML = italyTime.format("MMMM	Do YYYY");
    italyTimeElement.innerHTML = italyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html"> All cities </a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
