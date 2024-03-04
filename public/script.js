// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            // Extract the "label" column from the JSON data
            const labels = data.map(item => item.name);

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Max Atmospheric Speed',
                        // Use the "value" column as the data for the chart
                        data: data.map(item => item.max_atmosphering_speed),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
