async function fetchDataVS(){
    try {
        const response = await fetch(`/api/countries/${countryName}/total_cases_vs_total_deaths`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
    let line
async function createLineChart(){
    const jsonDataVS = await fetchDataVS()

    const month = jsonDataVS.map(data => data.mes)
    const cases = jsonDataVS.map(data => data.total_cases)
    const deaths = jsonDataVS.map(data => data.total_deaths)

    const ctx = document.getElementById('vs').getContext('2d')
    line=new Chart(ctx,{
        type: 'line',
        data: {
            labels: month,
            datasets:[
            {
                label: 'Cases',
                data: cases,
                backgroundColor: 'rgba(4, 170, 109, 0.8)',
                borderColor: 'rgba(4, 170, 109, 0.8)',
                fill : false,
                yAxisID: 'y',
            },
            {
                label: 'Deaths',
                data: deaths,
                backgroundColor: 'rgba(255, 165, 0, 0.8)',
                borderColor: 'rgba(255, 165, 0, 0.8)',
                fill: false,
                yAxisID : 'y1'
            }
            ]
        },
        options: {
            responsive: true,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            stacked: false,
            plugins: {
              title: {
                display: true,
                text: 'Total Cases vs Total Deaths'
              }
            },
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
        
                grid: {
                  drawOnChartArea: false, 
                },
              },
            }
        }    
    })
}
createLineChart()

async function fetchDataPerMonth(){
    try {
        const response = await fetch(`/api/countries/${countryName}/new_per_month`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
let bars

async function createBarChart(barmode){
    const jsonDataNew = await fetchDataPerMonth();
    const mes = jsonDataNew.map(data => data.mes);
    const dataset = barmode === 'Cases' ? jsonDataNew.map(data => data.new_cases) : jsonDataNew.map(data => data.new_deaths);
    const backgroundColors = mes.map(() => barmode === 'Cases' ? 'rgba(4, 170, 109, 0.8)' : 'rgba(255, 165, 0, 0.8)');

    const ctx = document.getElementById('bar').getContext('2d')
    if (bars) {
        bars.destroy();
    }
    bars=new Chart(ctx,{
        type: 'bar',
        data:{
            labels: mes,
            datasets:[
            {
                label: barmode === 'Cases' ? 'New Cases' : 'New Deaths',
                data: dataset,
                backgroundColor: backgroundColors,
            }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: barmode === 'Cases' ? 'Cases per Month' : 'Deaths per Month'
                  }
            },
        },
    })
}
function setupToggleButtons() {
    const casesButton = document.getElementById('total_cases');
    const deathsButton = document.getElementById('total_deaths');
    casesButton.addEventListener('change', () => {
        if (casesButton.checked) {
            createBarChart('Cases');
        }
    });
    
    deathsButton.addEventListener('change', () => {
        if (deathsButton.checked) {
            createBarChart('Deaths');
        }
    });
}
createBarChart('Cases')
setupToggleButtons()