const countries = {
    "Afghanistan": "Afghanistan",
    "Albania": "Albania",
    "Algeria": "Algeria",
    "Anguilla": "Anguilla",
    "Armenia": "Armenia",
    "Aruba": "Aruba",
    "Australia" : "Australia",
    "Austria": "Austria",
    "Bahrain": "Bahrain",
    "Bangladesh": "Bangladesh",
    "Barbados": "Barbados",
    "Belarus": "Belarus",
    "Belgium": "Belgium",
    "Belize": "Belize",
    "Benin": "Benin",
    "Bermuda": "Bermuda",
    "Bhutan": "Bhutan",
    "Bolivia": "Bolivia",
    "Bosnia and Herzegovina": "Bosnia and Herzegovina",
    "Botswana": "Botswana",
    "Brazil": "Brazil",
    "British Virgin Islands": "British Virgin Islands",
    "Brunei": "Brunei",
    "Bulgaria": "Bulgaria",
    "Burkina Faso": "Burkina Faso",
    "Burundi": "Burundi",
    "Canada" : "Canada",
    "Cambodia": "Cambodia",
    "Cameroon": "Cameroon",
    "Central African Republic": "Central African Republic",
    "Chad": "Chad",
    "Colombia": "Colombia",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croatia",
    "Cuba": "Cuba",
    "Curaçao": "Curaçao",
    "Czechia": "Czechia",
    "Cote d'Ivoire": "Cote d'Ivoire",
    "North Korea": "North Korea",
    "Democratic Republic of Congo": "Democratic Republic of Congo",
    "Djibouti": "Djibouti",
    "Dominica": "Dominica",
    "Dominican Republic": "Dominican Republic",
    "Ecuador": "Ecuador",
    "Egypt": "Egypt",
    "El Salvador": "El Salvador",
    "Equatorial Guinea": "Equatorial Guinea",
    "Eritrea": "Eritrea",
    "Estonia": "Estonia",
    "Ethiopia": "Ethiopia",
    "Finland": "Finland",
    "French Guiana": "French Guiana",
    "Gabon": "Gabon",
    "Georgia": "Georgia",
    "Germany": "Germany",
    "Ghana": "Ghana",
    "Greenland": "Greenland",
    "Grenada": "Grenada",
    "Guam": "Guam",
    "Guatemala": "Guatemala",
    "Guinea": "Guinea",
    "Guinea-Bissau": "Guinea-Bissau",
    "Guyana": "Guyana",
    "Haiti": "Haiti",
    "Honduras": "Honduras",
    "Hungary": "Hungary",
    "Iceland": "Iceland",
    "India": "India",
    "Iran": "Iran",
    "Iraq": "Iraq",
    "Ireland": "Ireland",
    "Israel": "Israel",
    "Jamaica": "Jamaica",
    "Jordan": "Jordan",
    "Kazakhstan": "Kazakhstan",
    "Kenya": "Kenya",
    "Kosovo": "Kosovo",
    "Kuwait": "Kuwait",
    "Kyrgyzstan": "Kyrgyzstan",
    "Laos": "Laos",
    "Latvia": "Latvia",
    "Lebanon": "Lebanon",
    "Lesotho": "Lesotho",
    "Liberia": "Liberia",
    "Libya": "Libya",
    "Lithuania": "Lithuania",
    "Luxembourg": "Luxembourg",
    "North Macedonia": "North Macedonia",
    "Madagascar": "Madagascar",
    "Malawi": "Malawi",
    "Maldives": "Maldives",
    "Mali": "Mali",
    "Marshall Islands": "Marshall Islands",
    "Martinique": "Martinique",
    "Mauritania": "Mauritania",
    "Mayotte": "Mayotte",
    "Mexico": "Mexico",
    "Moldova": "Moldova",
    "Mongolia": "Mongolia",
    "Montenegro": "Montenegro",
    "Montserrat": "Montserrat",
    "Morocco": "Morocco",
    "Mozambique": "Mozambique",
    "Myanmar": "Myanmar",
    "Namibia": "Namibia",
    "Nauru": "Nauru",
    "Nepal": "Nepal",
    "Netherlands": "Netherlands",
    "Nicaragua": "Nicaragua",
    "Niger": "Niger",
    "Nigeria": "Nigeria",
    "Pakistan": "Pakistan",
    "Palau": "Palau",
    "Palestine": "Palestine",
    "Panama": "Panama",
    "Paraguay": "Paraguay",
    "Peru": "Peru",
    "Poland": "Poland",
    "Portugal": "Portugal",
    "Qatar": "Qatar",
    "Congo": "Congo",
    "South Korea": "South Korea",
    "Reunion": "Reunion",
    "Romania": "Romania",
    "Rwanda": "Rwanda",
    "Saint Lucia": "Saint Lucia",
    "Saint Vincent and the Grenadines": "Saint Vincent and the Grenadines",
    "Saint-Barthélemy": "Saint-Barthélemy",
    "Saint-Martin": "Saint-Martin",
    "Saudi Arabia": "Saudi Arabia",
    "Senegal": "Senegal",
    "Serbia": "Serbia",
    "Sierra Leone": "Sierra Leone",
    "Sint Maarten": "Sint Maarten",
    "Slovakia": "Slovakia",
    "Slovenia": "Slovenia",
    "Somalia": "Somalia",
    "South Africa": "South Africa",
    "South Sudan": "South Sudan",
    "Spain": "Spain",
    "Sri Lanka": "Sri Lanka",
    "Sudan": "Sudan",
    "Suriname": "Suriname",
    "Swaziland": "Swaziland",
    "Sweden": "Sweden",
    "Switzerland": "Switzerland",
    "Syria": "Syria",
    "Taiwan": "Taiwan",
    "Tajikistan": "Tajikistan",
    "Tanzania": "Tanzania",
    "Thailand": "Thailand",
    "The Gambia": "The Gambia",
    "East Timor": "East Timor",
    "Togo": "Togo",
    "Tunisia": "Tunisia",
    "Turkmenistan": "Turkmenistan",
    "Tuvalu": "Tuvalu",
    "Uganda": "Uganda",
    "Ukraine": "Ukraine",
    "United Arab Emirates": "United Arab Emirates",
    "Uruguay": "Uruguay",
    "Uzbekistan": "Uzbekistan",
    "Venezuela": "Venezuela",
    "Vietnam": "Vietnam",
    "Western Sahara": "Western Sahara",
    "Yemen": "Yemen",
    "Zambia": "Zambia",
    "Zimbabwe": "Zimbabwe",
    "Russia" : "Russia",
    "Chile" : "Chile",
    "Argentina" : "Argentina",
    "French Polynesia" : "French Polynesia",
    "Canary Island" : "Canary Island",
    "United States" : "United States",
    "Fiji" : "Fiji",
    "Solomon Islands" : "Solomon Islands",
    "Bahamas" : "Bahamas",
    "Indonesia" : "Indonesia",
    "China" : "China",
    "New Zealand" : "New Zealand",
    "Papua New Guinea" : "Papua New Guinea",
    "New Caledonia" : "New Caledonia",
    "Philippines" : "Philippines",
    "Japan" : "Japan",
    "Norway" : "Norway",
    "Angola" : "Angola",
    "Oman" : "Oman",
    "Turkey" : "Turkey",
    "Azerbaijan" : "Azerbaijan",
    "Greece" : "Greece",
    "France" : "France",
    "Italy" : "Italy",
    "United Kingdom" : "United Kingdom"
};

let dataLookup = {}
let currentType = 'total_cases'
function getColor(value, dataType) {
if (dataType == "total_deaths"){
    if (value > 100000) return "#800026";
    else if (value > 50000) return "#BD0026";
    else if (value > 10000) return "#E31A1C";
    else if (value > 5000) return "#FC4E2A";
    else if (value > 1000) return "#FD8D3C";
    else if (value > 500) return "#FEB24C";
    else if (value > 100) return "#FED976";
    else return "#FFEDA0";
}else if(dataType == "total_cases"){
    if (value > 5000000) return "#800026";
    else if (value > 1000000) return "#BD0026";
    else if (value > 100000) return "#E31A1C";
    else if (value > 50000) return "#FC4E2A";
    else if (value > 10000) return "#FD8D3C";
    else if (value > 5000) return "#FEB24C";
    else if (value > 1000) return "#FED976";
    else return "#FFEDA0";
}
}

function Choropleth_map(data, dataType) {
currentType = dataType;
dataLookup = data.reduce((acc, countryData) => {
    acc[countryData.location] = parseInt(countryData[dataType], 10) || 0;
    return acc;
}, {});

document.querySelectorAll("path").forEach(path => {
    const countryId = path.id;
    if (dataLookup[countryId] !== undefined) {
        const color = getColor(dataLookup[countryId], dataType);
        path.style.fill = color;
    } else {
        path.style.fill = "#D3D3D3";
    }
});
}

const legends = {
    total_cases: [
        { color: "#800026", label: "> 5,000,000" },
        { color: "#BD0026", label: "1,000,001 - 5,000,000" },
        { color: "#E31A1C", label: "100,001 - 1,000,000" },
        { color: "#FC4E2A", label: "50,001 - 100,000" },
        { color: "#FD8D3C", label: "10,001 - 50,000" },
        { color: "#FEB24C", label: "5,001 - 10,000" },
        { color: "#FED976", label: "1,001 - 5,000" },
        { color: "#FFEDA0", label: "1 - 1,000" }
    ],
    total_deaths: [
        { color: "#800026", label: "> 100,000" },
        { color: "#BD0026", label: "50,001 - 100,000" },
        { color: "#E31A1C", label: "10,001 - 50,000" },
        { color: "#FC4E2A", label: "5,001 - 10,000" },
        { color: "#FD8D3C", label: "1,001 - 5,000" },
        { color: "#FEB24C", label: "501 - 1,000" },
        { color: "#FED976", label: "101 - 500" },
        { color: "#FFEDA0", label: "1 - 100" }
    ]
};

function updateLegend(dataType) {
    const legendContainer = document.getElementById('legend');
    legendContainer.innerHTML = '';  // Clear previous legend

    legends[dataType].forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        const colorBox = document.createElement('div');
        colorBox.classList.add('legend-color');
        colorBox.style.backgroundColor = item.color;

        const label = document.createElement('span');
        label.textContent = item.label;

        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        legendContainer.appendChild(legendItem);
    });
}

function fetchData(dataType) {
fetch('/api/countries/total_per_country')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json(); 
    })
    .then(data => {
        Choropleth_map(data, dataType); 
        updateLegend(dataType);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
function setupToggleButtons() {
const casesButton = document.getElementById('total_cases');
const deathsButton = document.getElementById('total_deaths');

casesButton.addEventListener('change', () => {
    if (casesButton.checked) {
        fetchData('total_cases');
    }
});

deathsButton.addEventListener('change', () => {
    if (deathsButton.checked) {
        fetchData('total_deaths');
    }
});
}
setupToggleButtons();
fetchData('total_cases');


document.querySelectorAll('.container path').forEach(path => {
path.addEventListener('mouseover', function(event) {
    const tooltip = document.getElementById('tooltip');
    const countryName = countries[this.id]; 
    tooltip.textContent = countryName;
    const value = dataLookup[this.id] || 'No data';
    tooltip.textContent = `${countryName}: ${value}`;
    tooltip.style.display = 'block';
});

path.addEventListener('mousemove', function(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.top = event.pageY + 10 + 'px';
    tooltip.style.left = event.pageX + 10 + 'px';
});

path.addEventListener('mouseout', function() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
});

});

document.getElementById('buttons').addEventListener('click', function(e) {  
    let li = e.target.closest('li[data-endpoint]');
    if (li) {
    const endpoint = li.getAttribute('data-endpoint');
    window.location.href = endpoint; 
    }
});
document.querySelectorAll('.dropdown-item').forEach(item => {
item.addEventListener('click', function (e) {
    e.preventDefault(); 
    const endpoint = item.getAttribute('data-endpoint'); 
    window.location.href = endpoint; 
});

});