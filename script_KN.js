$(document).ready(function() {
    $('#category-select').change(function() {
        var category = $(this).val();
        $.get('/data/' + category, function(response) {
            var data = response.data;
            var output = '<ul>';
            for (var i = 0; i < data.length; i++) {
                if (category === 'characters') {
                    output += '<li>' + data[i][1] + ' - ' + data[i][2] + ', ' + data[i][3] + 'cm</li>';
                } else if (category === 'species') {
                    output += '<li>' + data[i][1] + ' - ' + data[i][2] + '</li>';
                }
            }
            output += '</ul>';
            $('#data-container').html(output);
        });
    });
});

// Function to generate charts
function generateCharts() {
    // Make a POST request to generate charts
    $.post('/generate_charts', function(response) {
        // Reload the page to display the generated charts
        location.reload();
    });
}

// Call the generateCharts function when the document is loaded
$(document).ready(function() {
    generateCharts();
});
