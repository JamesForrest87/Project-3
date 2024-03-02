// Create our first trace
let trace1 = {
  x: planets.p_name,
  y: planets.diameter,
  type: "scatter"
};

// Create our second trace
let trace2 = {
  x: planets.P_name,
  y: planets.population,
  type: "scatter"
};
// Create our third trace
let trace3 = {
  x: planets.P_name,
  y: planets.rotation_period,
  type: "scatter"
};// Create our fourth trace
let trace4 = {
  x: planets.P_name,
  y: planets.orbital_period,
  type: "scatter"
};
// Create our fifth trace
let trace5 = {
  x: planets.P_name,
  y: planets.urface_water,
  type: "scatter"
};

// The data array consists of both traces
let data1 = [trace1];
let data2 = [trace2];
let data3 = [trace3];
let data4 = [trace4];
let data5 = [trace5];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot1", data1);
Plotly.newPlot("plot2", data2);
Plotly.newPlot("plot2", data3);
Plotly.newPlot("plot2", data4);
Plotly.newPlot("plot2", data5);