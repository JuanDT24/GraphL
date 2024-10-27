const continents = {
  'Africa': 'Africa',
  'Asia': 'Asia',
  'Europe': 'Europe',
  'North America': 'North America',
  'South America': 'South America',
  'Oceania': 'Oceania'
};

let dataLookup = {}
let currentType = 'total_cases'
function getColor(value, dataType) {
if (dataType == "total_deaths"){
    if (value > 2000000) return "#800026";
    else if (value > 1000000) return "#FC4E2A";
    else return "#FFEDA0";
}else if(dataType == "total_cases"){
    if (value > 200000000) return "#800026";
    else if (value > 50000000) return "#FC4E2A";
    else return "#FFEDA0";
}
}

function Choropleth_map(data, dataType) {
currentType = dataType;
dataLookup = data.reduce((acc, continentData) => {
    acc[continentData.continent] = parseInt(continentData[dataType], 10) || 0;
    return acc;
}, {});

document.querySelectorAll("path").forEach(path => {
    const continentId = path.id;
    if (dataLookup[continentId] !== undefined) {
        const color = getColor(dataLookup[continentId], dataType);
        path.style.fill = color;
    } else {
        path.style.fill = "#D3D3D3";
    }
});
}

function fetchData(dataType) {
fetch('/api/continents/total_per_continent')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json(); 
    })
    .then(data => {
        Choropleth_map(data, dataType); 
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
      const continentName = continents[this.id]; // Assuming each path has an ID like 'continent1'
      tooltip.textContent = continentName;
      const value = dataLookup[this.id] || 'No data';
      tooltip.textContent = `${continentName}: ${value}`;
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
