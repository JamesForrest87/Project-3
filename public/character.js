function showError(error) {
    const errorElem = document.getElementById("errorContainer");
    const textNode = document.createTextNode(error);
    errorElem.appendChild(textNode);
    console.error(respJson.error)
}

async function charApp() {
    const nameSelectElem = document.getElementById("characterDropdown");
    let charChart;
    nameSelectElem.addEventListener("change", async () => {
        const selectedName = nameSelectElem.value
        console.debug("nameSelectElem change handler:", { selectedName });
        if (!selectedName) {
            return;
        }

        if (selectedName == "height") {
            fetch('/character/height')
                .then(response => response.json())
                .then(datah => {
                    // Extract the "label" column from the JSON data
                    console.log(datah)
                    const labels = datah.data.map(item => item.name);
                    const values = datah.data.map(item => item.height);

                    //render chart
                    console.log(labels)
                    console.log(values)
                    const ctx = document.getElementById('charChart').getContext('2d');
                    if (charChart) {
                        charChart.destroy()
                    };
                    charChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Character Height',
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

        // Render the heading.
        //  const graphTitleElem = document.getElementById("title");
        // const graphTitleText = document.createTextNode(`${selectedName} speed`)
        // graphTitleElem.replaceChildren(graphTitleText);
    })
};

charApp();