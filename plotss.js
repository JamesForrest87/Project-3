// Initializes the page with a default plot
function init() {
  data = 
    [{
        x: p_name,
        y: diameter,
        type: "bar",
         } ]
    layout1 =  { title: "Planets data compared to Earth", 
         xaxis:{title:"Planets Name"},
        //  yaxis:{title:"Diamter in km"}
         }
   Plotly.newPlot("plot", data, layout1);
};
  // ----

//  let layout =  { title: "Planets - Diameter  Earth = 40k", 
//       xaxis:{title:"Planets Name"},
//       yaxis:{title:"Diamter in km"},
//       type : "bar",
  // let trace1 = {
  //       x: p_name,
  //       y: diameter,
  // let data1 = [trace1];
  //       type: "bar"
  //     };


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];
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

  if (dataset === 'dataset1') {
    x = p_name;
    y = diameter;
    layout =  { title: "Planets - Diameter  Earth = 40k", 
    xaxis:{title:"Planets Name"},
    yaxis:{title:"Diamter in km"},
    }
    }
  else if (dataset === 'dataset2') {
    x = p_name;
    y = population;
    layout =  { title: "Planets - Diameter  Earth = 40k", 
    xaxis:{title:"Planets Name"},
    yaxis:{title:"Diamter in km"},
  }}
  else if (dataset === 'dataset3') {
    x = p_name;
    y =rotation_period;
    layout = layout2
  }
  else if (dataset === 'dataset4') {
    x = p_name;
    y =  orbital_period;
  }
  else if (dataset === 'dataset5') {
    x = p_name;
    y = surface_water;
  }
  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
    // Plotly.restyle("plot","layout");
}

init();

// // Initializes the page with a default plot
// function init() {
//   data = 
//     [{
//         x: p_name,
//         y: diameter,
//         type: "bar",
//          } ]
//     layout1 =  { title: "Planets data compared to Earth", 
//          xaxis:{title:"Planets Name"},
//         //  yaxis:{title:"Diamter in km"}
//          }
//    Plotly.newPlot("plot", data, layout1);
// };
//   // ----

// //  let layout =  { title: "Planets - Diameter  Earth = 40k", 
// //       xaxis:{title:"Planets Name"},
// //       yaxis:{title:"Diamter in km"},
// //       type : "bar",
//   // let trace1 = {
//   //       x: p_name,
//   //       y: diameter,
//   // let data1 = [trace1];
//   //       type: "bar"
//   //     };


// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset_a").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset_a");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   let x = [];
//   let y = [];
//   let c_name = []
//   let height = []
//   let mass = []

//   // For loop to populate arrays
//   for (let i = 0; i < characters.length; i++) {
//     row = characters[i];
//     c_name.push(row.p_name);
//     height.push(row.height);
//     mass.push(row.mass);
  
//   }

//   if (dataset_a === 'dataset1') {
//     x = c_name;
//     y = height;
//     layout =  { title: "Planets - Diameter  Earth = 40k", 
//     xaxis:{title:"Planets Name"},
//     yaxis:{title:"Diamter in km"},
//     }
//     }
//   else if (dataset_a === 'dataset2') {
//     x = c_name;
//     y = mass;
//     layout =  { title: "Planets - Diameter  Earth = 40k", 
//     xaxis:{title:"Planets Name"},
//     yaxis:{title:"Diamter in km"},
//   }}
  
//   }
//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
//     // Plotly.restyle("plot","layout");
// }

// init();