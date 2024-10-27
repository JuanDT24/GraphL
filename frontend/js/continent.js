const urlParams = new URLSearchParams(window.location.search);
        const continentName = urlParams.get('continent');
        if (continentName){
            document.getElementById('continent-title').textContent = continentName;
        }

        if (continentName){
            document.getElementById('continent-title').textContent = continentName;
        }

        let bars;

        async function fetchData() {
            try {
                const response = await fetch('/api/continents/total_per_continent');
                const data = await response.json();
                return data;
            } catch(error) {
                console.error('Error fetching data:', error);
                return [];
            }
        }

        async function createChart(barmode) {
            const jsonData = await fetchData();
        
            const continent = jsonData.map(data => data.continent);
            let dataset = [];
            if (barmode === 'cases') {
                dataset = jsonData.map(data => data.total_cases);
            } else if (barmode === 'deaths') {
                dataset = jsonData.map(data => data.total_deaths);
            }
        
            const highlightColor = 'rgba(255, 165, 0, 0.8)';
            const defaultColor = 'rgba(4, 170, 109, 0.8)';
            const backgroundColors = continent.map(cont => cont === continentName ? highlightColor : defaultColor);
        
            const ctx = document.getElementById('barra').getContext('2d');
        
            if (bars) {
                bars.destroy();
            }
        
            bars = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: continent,
                    datasets: [
                        {
                            label: barmode === 'cases' ? 'Total Cases' : 'Total Deaths',
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
                            text: barmode === 'Cases' ? 'Total Cases' : 'Total Deaths'
                          }
                    },
                },
            });
        }
        
        
        function setupToggleButtons() {
            const casesButton = document.getElementById('total_cases');
            const deathsButton = document.getElementById('total_deaths');
            casesButton.addEventListener('change', () => {
                if (casesButton.checked) {
                    createChart('cases');
                }
            });
            
            deathsButton.addEventListener('change', () => {
                if (deathsButton.checked) {
                    createChart('deaths');
                }
            });
        }

        createChart('cases');
        setupToggleButtons();
        
        async function fetchData2() {
            try {
                const response = await fetch(`/api/continents/${continentName}/continent_totals`);
                const data = await response.json();
                return data;
            } catch(error) {
                console.error('Error fetching data:', error);
                return [];
            }
        }
        let polar;
        async function createPolarAreaChart(){
            const jsonData2 = await fetchData2();

            const cases = jsonData2[0].total_cases
            const population = jsonData2[0].population

            const ctx = document.getElementById('polar').getContext('2d')

            if (polar) {
                polar.destroy();
            }
            
            polar = new Chart(ctx,{
                type:'polarArea',
                data:{
                    labels: ['Cases', 'Population'],
                    datasets: [{
                        data: [cases, population],
                        backgroundColor: ['rgba(255, 165, 0, 0.8)' , 'rgba(4, 170, 109, 0.8)']
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
                            text: 'Cases vs Population'
                          }
                    },
                },
            })
        }
        createPolarAreaChart();