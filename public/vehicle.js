function showError(error) {
    const errorElem = document.getElementById("errorContainer");
    const textNode = document.createTextNode(error);
    errorElem.appendChild(textNode);
    console.error(respJson.error)
}

async function initApp() {
    const nameSelectElem = document.getElementById("vehiclesDropdown");
    let myChart;
    nameSelectElem.addEventListener("change", async () => {
        const selectedName = nameSelectElem.value
        console.debug("nameSelectElem change handler:", { selectedName });
        if (!selectedName) {
            return;
        }

        if (selectedName == "maxSpeed") {
            fetch('/vehicle/speed')
                .then(response => response.json())
                .then(dat => {
                    // Extract the "label" column from the JSON data
                    console.log(dat)
                    const labels = dat.data.map(item => item.name);
                    const values = dat.data.map(item => item.max_atmosphering_speed);

                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('myChart').getContext('2d');
                    if (myChart) {
                        myChart.destroy()
                    };
                    myChart = new Chart(ctx, {
                        type: 'radar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Max Atmospheric Speed (km/h)',
                                // Use the "value" column as the data for the chart
                                data: values,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1
                            }]
                        },
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        };

        if (selectedName == "length") {
            fetch('/vehicle/length')
                .then(response => response.json())
                .then(datal => {
                    // Extract the "label" column from the JSON data
                    console.log(datal)
                    const labels = datal.data.map(item => item.name);
                    const values = datal.data.map(item => item.length);
                    
                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('myChart').getContext('2d');
                    if (myChart) {
                        myChart.destroy()
                    };
                    myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Vehicle Length (m)',
                                // Use the "value" column as the data for the chart
                                data: values,
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1
                            }]
                        },
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }; 
    })
};

initApp();