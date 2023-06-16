fetch("https://mbo-sd.nl/period3-fetch/racing-driver-formula-one")
    .then((response) => response.json())
    .then(audiData => {
        showAudi(audiData)
    });

const audi = document.querySelector('.audi');

function showAudi(audiData) {
    // console.log(audiData);
    for (let i = 0; i < audiData.length; i++) {
        const a = audiData[i];

        const audiCard = ` 
            <div class="col-md-4 pt">
            <div class="card">
            <img class="card-img-top" src="${a.imageUrl}" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title pad">${a.title}</h4>
              <p class="card-text ">${a.drivers}</p>
              <p class="card-text ">${a.description}</p>
              <p class="card-text pad">${a.sponsors}</p>
            </div>
          </div>
        </div>
          `;
        audi.innerHTML += audiCard
    }
}

fetch("https://mbo-sd.nl/period3-fetch/racing-driver-fia-world-endurance")
    .then((response) => response.json())
    .then(jotaData => {
        showJota(jotaData)
    });

const jota = document.querySelector('.jota');

function showJota(jotaData) {
    // console.log(jotaData);
    for (let i = 0; i < jotaData.length; i++) {
        const a = jotaData[i];

        const jotaCard = ` 
            <div class="col-md-4 pt">
            <div class="card">
            <img class="card-img-top" src="${a.imageUrl}" alt="Card image cap">
            <div class="card-body">
            <p class="card-text pad">${a.brand}</p>
              <h4 class="card-title pad">${a.title}</h4>
              <p class="card-text ">${a.drivers}</p>
              <p class="card-text pad">${a.description}</p>
              <p class="card-text ">${a.engine}</p>
              <p class="card-text pad">${a.speedInKMH}</p>
            </div>
          </div>
        </div>
          `;
        audi.innerHTML += jotaCard
    }
}

fetch("https://mbo-sd.nl/period3-fetch/racing-driver-gt-world-challenge-europe")
    .then((response) => response.json())
    .then(mercedesData => {
        showMercedes(mercedesData)
    });

const mercedes = document.querySelector('.mercedes');

function showMercedes(mercedesData) {
    // console.log(mercedesData);
    for (let i = 0; i < mercedesData.length; i++) {
        const a = mercedesData[i];

        const mercedesCard = ` 
            <div class="col-md-4 pt">
            <div class="card">
            <img class="card-img-top" src="${a.imageUrl}" alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title pad">${a.title}</h4>
              <p class="card-text ">${a.drivers}</p>
              <p class="card-text ">${a.description}</p>
              <p class="card-text pad">${a.sponsors}</p>
            </div>
          </div>
        </div>
          `;
        audi.innerHTML += mercedesCard
    }
}

