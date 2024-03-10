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
  p_name.push(row.p_name);
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

let layout1 =  { title: "Planets - Diameter  Earth = 40k", 
xaxis:{title:"Planets Name"},
yaxis:{title:"Diamter in km"}
}
let layout2 =  { title: "Planets - Population Earth = 8b", 
xaxis:{title:"Planets Name"},
yaxis:{title:"Population"}
}
let layout3 =  { title: "Planets - Rotation period = 18 Earth hours or 0.75 Earth days", 
xaxis:{title:"Planets Name"},
yaxis:{title:"Rotation Period"}
}
let layout4 =  { title: "Planets - Orbital period = 402 standard days or Earth = 1.1 year", 
xaxis:{title:"Planets Name"},
yaxis:{title:"Orbital Period"}
}

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
  type: "bar"
};// Create our fourth trace
let trace4 = {
  x: p_name,
  y: orbital_period,
  type: "bar"
};
// Create our fifth trace
let trace5 = {
  x: p_name,
  y: surface_water,
  type: "bar"
};

// The data array consists of five traces
let data1 = [trace1];
let data2 = [trace2];
let data3 = [trace3];
let data4 = [trace4];
let data5 = [trace5];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot1", data1,layout1);
Plotly.newPlot("plot2", data2,layout2);
Plotly.newPlot("plot3", data3,layout3);
Plotly.newPlot("plot4", data4,layout4);
Plotly.newPlot("plot5", data5,layout5);


