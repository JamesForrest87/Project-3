// Create our first trace
let trace1 = {
  x: planets.p_name,
  y: planets.diameter,
  type: "bar"
};

// Create our second trace
let trace2 = {
  x: planets.P_name,
  y: planets.population,
  type: "scatter"
};

// The data array consists of both traces
let data1 = [trace1];
let data2 = [trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot1", data1);
Plotly.newPlot("plot2", data2);
