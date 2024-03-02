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

let layout1 =  { title: "Diameter", 
xaxis:{title:"Planets Name"}
}
let layout2 =  { title: "Population", 
xaxis:{title:"Planets Name"}
}
let layout3 =  { title: "Rotation Period - Day", 
xaxis:{title:"Planets Name"}
}
let layout4 =  { title: "Orbital Period - Year", 
xaxis:{title:"Planets Name"}
}
let layout5 =  { title: "Surface Water", 
xaxis:{title:"Planets Name"}
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
Plotly.newPlot("plot1", data1,layout1);
Plotly.newPlot("plot2", data2,layout2);
Plotly.newPlot("plot3", data3,layout3);
Plotly.newPlot("plot4", data4,layout4);
Plotly.newPlot("plot5", data5,layout5);



// // Create data array
// let data = [trace1, trace2];

// // Apply a title to the layout
// let layout = {
//   title: "Planets Data",
//   barmode: "group",
//   // Include margins in the layout so the x-tick labels display correctly
//   xaxis :{
//     tickangle: -45
//   },
//   margin: {
//     l: 50,
//     r: 50,
//     b: 200,
//     t: 50,
//     pad: 4
//   }
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);
