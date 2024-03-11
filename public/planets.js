function showError(error) {
    const errorElem = document.getElementById("errorContainer");
    const textNode = document.createTextNode(error);
    errorElem.appendChild(textNode);
    console.error(respJson.error)
}

async function planetApp() {
    const nameSelectElem = document.getElementById("planetsDropdown");
    let planChart;
    nameSelectElem.addEventListener("change", async () => {
        const selectedName = nameSelectElem.value
        console.debug("nameSelectElem change handler:", { selectedName });
        if (!selectedName) {
            return;
        }

        if (selectedName == "rotation") {
            fetch('/planet/rotation')
                .then(response => response.json())
                .then(dataplanr => {
                    // Extract the "label" column from the JSON data
                    console.log(dataplanr)
                    const labels = dataplanr.data.map(item => item.name);
                    const values = dataplanr.data.map(item => item.rotation_period);

                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('planChart').getContext('2d');
                    if (planChart) {
                        planChart.destroy()
                    };
                    planChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Rotational Period of Planets in Earth Hours (hr)',
                                // Use the "value" column as the data for the chart
                                data: values,
                                backgroundColor: ['rgb(255, 0, 0)',
                                    'rgb(0, 0, 255)',
                                    'rgb(0, 255, 0)',
                                    'rgb(255, 255, 0)',
                                    'rgb(128, 0, 128)',
                                    'rgb(255, 165, 0)',
                                    'rgb(255, 182, 193)',
                                    'rgb(165, 42, 42)',
                                    'rgb(128, 128, 128)',
                                    'rgb(0, 255, 255)',
                                    'rgb(255, 0, 255)',
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgb(54, 162, 235)',
                                    'rgba(255, 0, 0, 0.5)',
                                    'rgba(0, 0, 255, 0.5)',
                                    'rgba(0, 255, 0, 0.5)',
                                    'rgba(255, 255, 0, 0.5)',
                                    'rgba(128, 0, 128, 0.5)',
                                    'rgba(255, 165, 0, 0.5)',
                                    'rgba(255, 182, 193, 0.5)',
                                    'rgba(165, 42, 42, 0.5)',
                                    'rgba(128, 128, 128, 0.5)',
                                    'rgba(0, 255, 255, 0.5)',
                                    'rgba(255, 0, 255, 0.5)'],
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1
                            }]
                        },
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        };
    
        if (selectedName == "orbit") {
            fetch('/planet/orbit')
                .then(response => response.json())
                .then(dataplanr => {
                    // Extract the "label" column from the JSON data
                    console.log(dataplanr)
                    const labels = dataplanr.data.map(item => item.name);
                    const values = dataplanr.data.map(item => item.orbital_period);

                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('planChart').getContext('2d');
                    if (planChart) {
                        planChart.destroy()
                    };
                    planChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Orbital Period of Planets in Earth Days (days)',
                                // Use the "value" column as the data for the chart
                                data: values,
                                backgroundColor: ['rgb(255, 0, 0)',
                                    'rgb(0, 0, 255)',
                                    'rgb(0, 255, 0)',
                                    'rgb(255, 255, 0)',
                                    'rgb(128, 0, 128)',
                                    'rgb(255, 165, 0)',
                                    'rgb(255, 182, 193)',
                                    'rgb(165, 42, 42)',
                                    'rgb(128, 128, 128)',
                                    'rgb(0, 255, 255)',
                                    'rgb(255, 0, 255)',
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgb(54, 162, 235)',
                                    'rgba(255, 0, 0, 0.5)',
                                    'rgba(0, 0, 255, 0.5)',
                                    'rgba(0, 255, 0, 0.5)',
                                    'rgba(255, 255, 0, 0.5)',
                                    'rgba(128, 0, 128, 0.5)',
                                    'rgba(255, 165, 0, 0.5)',
                                    'rgba(255, 182, 193, 0.5)',
                                    'rgba(165, 42, 42, 0.5)',
                                    'rgba(128, 128, 128, 0.5)',
                                    'rgba(0, 255, 255, 0.5)',
                                    'rgba(255, 0, 255, 0.5)'],
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

planetApp();