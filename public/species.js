function showError(error) {
    const errorElem = document.getElementById("errorContainer");
    const textNode = document.createTextNode(error);
    errorElem.appendChild(textNode);
    console.error(respJson.error)
}

async function specApp() {
    const nameSelectElem = document.getElementById("speciesDropdown");
    let specChart;
    nameSelectElem.addEventListener("change", async () => {
        const selectedName = nameSelectElem.value
        console.debug("nameSelectElem change handler:", { selectedName });
        if (!selectedName) {
            return;
        }

        if (selectedName == "avgHeight") {
            fetch('/species/avgHeight')
                .then(response => response.json())
                .then(datas => {
                    // Extract the "label" column from the JSON data
                    console.log(datas)
                    const labels = datas.data.map(item => item.name);
                    const values = datas.data.map(item => item.average_height);

                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('specChart').getContext('2d');
                    if (specChart) {
                        specChart.destroy()
                    };
                    specChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Average Heigh in Centimeters (cm)',
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

specApp();