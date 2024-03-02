// Initialized arrays
let p_name = []
let diameter = []
let population = []
let rotation_period= []
let orbital_period = []
let surface_water = []
// For loop to populate arrays
for (let i = 0; i < planets.length; i++) {
  row = planets[i];
  p_name.push(row.p_name );
  diameter.push(row.diameter);
  population.push(row.population);
  rotation_period.push(row.rotation_period);
  orbital_period.push(row.orbital_period);
  surface_water.push(row.surface_water);
}
// Create our first trace
let trace1 = {
  x: p_name,
  y: diameter,
  type: "bar"
};

// Create our second trace
let trace2 = {
  x: p_name,
  y: population,
  type: "bar"
};
// Create our third trace
let trace3 = {
  x: p_name,
  y: rotation_period,
  type: "scatter"
};// Create our fourth trace
let trace4 = {
  x: p_name,
  y: orbital_period,
  type: "scatter"
};
// Create our fifth trace
let trace5 = {
  x: p_name,
  y: surface_water,
  type: "scatter"
};

// The data array consists of five traces
let data1 = [trace1];
let data2 = [trace2];
let data3 = [trace3];
let data4 = [trace4];
let data5 = [trace5];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot1", data1);
Plotly.newPlot("plot2", data2);
Plotly.newPlot("plot3", data3);
Plotly.newPlot("plot4", data4);
Plotly.newPlot("plot5", data5);