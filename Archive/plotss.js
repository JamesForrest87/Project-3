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
         yaxis:{title:"Value"},
        //  yaxis:{title:"Diamter in km"}
         }
   Plotly.newPlot("plot", data, layout1);
   CreateMenu2();
};
  // ----

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
    yaxis:{title:"Diamter in km"}
  }}
  else if (dataset === 'dataset3') {
    x = p_name;
    y =rotation_period;
 
  }
  else if (dataset === 'dataset4') {
    x = p_name;
    y =  orbital_period;
  }
  else if (dataset === 'dataset5') {
    x = p_name;
    y = surface_water;
  }

//---------Characters Chart Start -----------//

d3.selectAll("#selDataset2").on("change", updatePlotly);

  let dataset2 = dropdownMenu.property("value");
  let c_name = []
  let height = []
  let mass = []
  for (let i = 0; i < characters.length; i++) {
    row = characters[i];
    c_name.push(row.c_name);
    height.push(row.height);
    mass.push(row.mass);
  if (dataset2 === 'dataset6') {
      x = c_name;
      y =  height;
    }
  else if (dataset2 === 'dataset7') {
      x = c_name;
      y = mass;
    }
  }
//---------Characters Chart Ends -----------//

//---------Species Chart Start -----------//
d3.selectAll("#selDataset3").on("change", updatePlotly);
let dataset3 = dropdownMenu.property("value");
let s_name = []
let avg_height = []
let avg_lifespan = []
for (let i = 0; i < species.length; i++) {
  row = species[i];
  s_name.push(row.s_name);
  avg_height.push(row.average_height);
  avg_lifespan.push(row.average_lifespan);
if (dataset3 === 'dataset8') {
    x = s_name;
    y =  avg_height;
  }
else if (dataset3 ==='dataset9') {
    x = s_name;
    y = avg_lifespan;
  }
}
// ---------Species Char Ends -----------//

//---------Vehicle Chart Start -----------//
d3.selectAll("#selDataset4").on("change", updatePlotly);
let dataset4 = dropdownMenu.property("value");
let v_name = []
let crew = []
let passanger = []
let cargo_capacity = []
for (let i = 0; i < vehicle.length; i++) {
  row = vehicle[i];
  v_name.push(row.v_name);
  crew.push(row.crew);
  passanger.push(row.passanger);
  cargo_capacity.push(row.cargo_capacity)
if (dataset4 === 'dataset10') {
    x = v_name;
    y =  crew;
  }
else if (dataset4 ==='dataset11') {
    x = v_name;
    y = passanger;
  }
else if (dataset4 ==='dataset12') {
    x = v_name;
    y = cargo_capacity;
  }
}
//---------Vehicle Char Ends -----------//

//---------Starships Chart Start -----------//
d3.selectAll("#selDataset5").on("change", updatePlotly);
let dataset5 = dropdownMenu.property("value");
let st_name = []
let st_cargo_capacity = []
let st_passanger = []

for (let i = 0; i < starships.length; i++) {
  row = starships[i];
  st_name.push(row.s_name);
  st_cargo_capacity.push(row.cargo_capacity);
  st_passanger.push(row.crew);
  
if (dataset5 === 'dataset13') {
    x = st_name_name;
    y =  st_passanger;
  }
else if (dataset5 ==='dataset14') {
    x = st_name;
    y = st_cargo_capacity;
  }

}
//---------Starships Chart Ends -----------//

//---------Starwars Chart Start -----------//
d3.selectAll("#selDataset6").on("change", updatePlotly);
let dataset6 = dropdownMenu.property("value");
let SetID = []
let Year = []
let Pieces = []

for (let i = 0; i < starwars.length; i++) {
  row = starwars[i];
  SetID.push(row.SetID);
  Year.push(row.Year)
  Pieces.push(row.Pieces);
 
if (dataset6 === 'dataset15') {
    x = SetID;
    y =  Year;
  }
else if (dataset6 ==='dataset16') {
    x = SetID;
    y = Pieces;
  }
}
//---------Starwars Chart Ends -----------//

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);

    // Plotly.restyle("plot","layout");
}

init();
