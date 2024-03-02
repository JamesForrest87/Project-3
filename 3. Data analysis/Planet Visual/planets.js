let planets = [
  {
    p_name: "Alderaan",
    rotation_period: "24",
    orbital_period: "364",
    diameter: "12500",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grasslands, mountains",
    surface_water: "40",
    population: "2000000000"
  },
  {
    p_name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical",
    gravity: "1 standard",
    terrain: "jungle, rainforests",
    surface_water: "8",
    population: "1000"
  },
  {
    p_name: "Hoth",
    rotation_period: "23",
    orbital_period: "549",
    diameter: "7200",
    climate: "frozen",
    gravity: "1.1 standard",
    terrain: "tundra, ice caves, mountain ranges",
    surface_water: "100",
    population: ""
  },
  {
    p_name: "Dagobah",
    rotation_period: "23",
    orbital_period: "341",
    diameter: "8900",
    climate: "murky",
    gravity: "N/A",
    terrain: "swamp, jungles",
    surface_water: "8",
    population: ""
  },
  {
    p_name: "Bespin",
    rotation_period: "12",
    orbital_period: "5110",
    diameter: "118000",
    climate: "temperate",
    gravity: "1.5 (surface), 1 standard (Cloud City)",
    terrain: "gas giant",
    surface_water: "0",
    population: "6000000"
  },
  {
    p_name: "Endor",
    rotation_period: "18",
    orbital_period: "402",
    diameter: "4900",
    climate: "temperate",
    gravity: "0.85 standard",
    terrain: "forests, mountains, lakes",
    surface_water: "8",
    population: "30000000"
  },
  {
    p_name: "Naboo",
    rotation_period: "26",
    orbital_period: "312",
    diameter: "12120",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grassy hills, swamps, forests, mountains",
    surface_water: "12",
    population: "4500000000"
  },
  {
    p_name: "Coruscant",
    rotation_period: "24",
    orbital_period: "368",
    diameter: "12240",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "cityscape, mountains",
    surface_water: "",
    population: "1000000000000"
  },
  {
    p_name: "Kamino",
    rotation_period: "27",
    orbital_period: "463",
    diameter: "19720",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "ocean",
    surface_water: "100",
    population: "1000000000"
  },
  {
    p_name: "Geonosis",
    rotation_period: "30",
    orbital_period: "256",
    diameter: "11370",
    climate: "temperate, arid",
    gravity: "0.9 standard",
    terrain: "rock, desert, mountain, barren",
    surface_water: "5",
    population: "100000000000"
  },
  {
    p_name: "Utapau",
    rotation_period: "27",
    orbital_period: "351",
    diameter: "12900",
    climate: "temperate, arid, windy",
    gravity: "1 standard",
    terrain: "scrublands, savanna, canyons, sinkholes",
    surface_water: "0.9",
    population: "95000000"
  },
  {
    p_name: "Mustafar",
    rotation_period: "36",
    orbital_period: "412",
    diameter: "4200",
    climate: "hot",
    gravity: "1 standard",
    terrain: "volcanoes, lava rivers, mountains, caves",
    surface_water: "0",
    population: "20000"
  },
  {
    p_name: "Kashyyyk",
    rotation_period: "26",
    orbital_period: "381",
    diameter: "12765",
    climate: "tropical",
    gravity: "1 standard",
    terrain: "jungle, forests, lakes, rivers",
    surface_water: "60",
    population: "45000000"
  },
  {
    p_name: "Polis Massa",
    rotation_period: "24",
    orbital_period: "590",
    diameter: "0",
    climate: "artificial temperate ",
    gravity: "0.56 standard",
    terrain: "airless asteroid",
    surface_water: "0",
    population: "1000000"
  },
  {
    p_name: "Mygeeto",
    rotation_period: "12",
    orbital_period: "167",
    diameter: "10088",
    climate: "frigid",
    gravity: "1 standard",
    terrain: "glaciers, mountains, ice canyons",
    surface_water: "",
    population: "19000000"
  },
  {
    p_name: "Felucia",
    rotation_period: "34",
    orbital_period: "231",
    diameter: "9100",
    climate: "hot, humid",
    gravity: "0.75 standard",
    terrain: "fungus forests",
    surface_water: "",
    population: "8500000"
  },
  {
    p_name: "Cato Neimoidia",
    rotation_period: "25",
    orbital_period: "278",
    diameter: "0",
    climate: "temperate, moist",
    gravity: "1 standard",
    terrain: "mountains, fields, forests, rock arches",
    surface_water: "",
    population: "10000000"
  },
  {
    p_name: "Saleucami",
    rotation_period: "26",
    orbital_period: "392",
    diameter: "14920",
    climate: "hot",
    gravity: "NA",
    terrain: "caves, desert, mountains, volcanoes",
    surface_water: "",
    population: "1400000000"
  },
  {
    p_name: "Stewjon",
    rotation_period: "",
    orbital_period: "",
    diameter: "0",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "grass",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Eriadu",
    rotation_period: "24",
    orbital_period: "360",
    diameter: "13490",
    climate: "polluted",
    gravity: "1 standard",
    terrain: "cityscape",
    surface_water: "",
    population: "22000000000"
  },
  {
    p_name: "Corellia",
    rotation_period: "25",
    orbital_period: "329",
    diameter: "11000",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "plains, urban, hills, forests",
    surface_water: "70",
    population: "3000000000"
  },
  {
    p_name: "Rodia",
    rotation_period: "29",
    orbital_period: "305",
    diameter: "7549",
    climate: "hot",
    gravity: "1 standard",
    terrain: "jungles, oceans, urban, swamps",
    surface_water: "60",
    population: "1300000000"
  },
  {
    p_name: "Nal Hutta",
    rotation_period: "87",
    orbital_period: "413",
    diameter: "12150",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "urban, oceans, swamps, bogs",
    surface_water: "",
    population: "7000000000"
  },
  {
    p_name: "Dantooine",
    rotation_period: "25",
    orbital_period: "378",
    diameter: "9830",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "oceans, savannas, mountains, grasslands",
    surface_water: "",
    population: "1000"
  },
  {
    p_name: "Bestine IV",
    rotation_period: "26",
    orbital_period: "680",
    diameter: "6400",
    climate: "temperate",
    gravity: "NA",
    terrain: "rocky islands, oceans",
    surface_water: "98",
    population: "62000000"
  },
  {
    p_name: "Ord Mantell",
    rotation_period: "26",
    orbital_period: "334",
    diameter: "14050",
    climate: "temperate",
    gravity: "1 standard",
    terrain: "plains, seas, mesas",
    surface_water: "10",
    population: "4000000000"
  },
  {
    p_name: "NA",
    rotation_period: "0",
    orbital_period: "0",
    diameter: "0",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Trandosha",
    rotation_period: "25",
    orbital_period: "371",
    diameter: "0",
    climate: "arid",
    gravity: "0.62 standard",
    terrain: "mountains, seas, grasslands, deserts",
    surface_water: "",
    population: "42000000"
  },
  {
    p_name: "Socorro",
    rotation_period: "20",
    orbital_period: "326",
    diameter: "0",
    climate: "arid",
    gravity: "1 standard",
    terrain: "deserts, mountains",
    surface_water: "",
    population: "300000000"
  },
  {
    p_name: "Mon Cala",
    rotation_period: "21",
    orbital_period: "398",
    diameter: "11030",
    climate: "temperate",
    gravity: "1",
    terrain: "oceans, reefs, islands",
    surface_water: "100",
    population: "27000000000"
  },
  {
    p_name: "Chandrila",
    rotation_period: "20",
    orbital_period: "368",
    diameter: "13500",
    climate: "temperate",
    gravity: "1",
    terrain: "plains, forests",
    surface_water: "40",
    population: "1200000000"
  },
  {
    p_name: "Sullust",
    rotation_period: "20",
    orbital_period: "263",
    diameter: "12780",
    climate: "superheated",
    gravity: "1",
    terrain: "mountains, volcanoes, rocky deserts",
    surface_water: "5",
    population: "18500000000"
  },
  {
    p_name: "Toydaria",
    rotation_period: "21",
    orbital_period: "184",
    diameter: "7900",
    climate: "temperate",
    gravity: "1",
    terrain: "swamps, lakes",
    surface_water: "",
    population: "11000000"
  },
  {
    p_name: "Malastare",
    rotation_period: "26",
    orbital_period: "201",
    diameter: "18880",
    climate: "arid, temperate, tropical",
    gravity: "1.56",
    terrain: "swamps, deserts, jungles, mountains",
    surface_water: "",
    population: "2000000000"
  },
  {
    p_name: "Dathomir",
    rotation_period: "24",
    orbital_period: "491",
    diameter: "10480",
    climate: "temperate",
    gravity: "0.9",
    terrain: "forests, deserts, savannas",
    surface_water: "",
    population: "5200"
  },
  {
    p_name: "Ryloth",
    rotation_period: "30",
    orbital_period: "305",
    diameter: "10600",
    climate: "temperate, arid, subartic",
    gravity: "1",
    terrain: "mountains, valleys, deserts, tundra",
    surface_water: "5",
    population: "1500000000"
  },
  {
    p_name: "Aleen Minor",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Vulpter",
    rotation_period: "22",
    orbital_period: "391",
    diameter: "14900",
    climate: "temperate, artic",
    gravity: "1",
    terrain: "urban, barren",
    surface_water: "",
    population: "421000000"
  },
  {
    p_name: "Troiken",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "desert, tundra, rainforests, mountains",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Tund",
    rotation_period: "48",
    orbital_period: "1770",
    diameter: "12190",
    climate: "NA",
    gravity: "NA",
    terrain: "barren, ash",
    surface_water: "",
    population: "0"
  },
  {
    p_name: "Haruun Kal",
    rotation_period: "25",
    orbital_period: "383",
    diameter: "10120",
    climate: "temperate",
    gravity: "0.98",
    terrain: "toxic cloudsea, plateaus, volcanoes",
    surface_water: "",
    population: "705300"
  },
  {
    p_name: "Cerea",
    rotation_period: "27",
    orbital_period: "386",
    diameter: "",
    climate: "temperate",
    gravity: "1",
    terrain: "verdant",
    surface_water: "20",
    population: "450000000"
  },
  {
    p_name: "Glee Anselm",
    rotation_period: "33",
    orbital_period: "206",
    diameter: "15600",
    climate: "tropical, temperate",
    gravity: "1",
    terrain: "lakes, islands, swamps, seas",
    surface_water: "80",
    population: "500000000"
  },
  {
    p_name: "Iridonia",
    rotation_period: "29",
    orbital_period: "413",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "rocky canyons, acid pools",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Tholoth",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Iktotch",
    rotation_period: "22",
    orbital_period: "481",
    diameter: "",
    climate: "arid, rocky, windy",
    gravity: "1",
    terrain: "rocky",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Quermia",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Dorin",
    rotation_period: "22",
    orbital_period: "409",
    diameter: "13400",
    climate: "temperate",
    gravity: "1",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Champala",
    rotation_period: "27",
    orbital_period: "318",
    diameter: "",
    climate: "temperate",
    gravity: "1",
    terrain: "oceans, rainforests, plateaus",
    surface_water: "",
    population: "3500000000"
  },
  {
    p_name: "Mirial",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "deserts",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Serenno",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "rainforests, rivers, mountains",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Concord Dawn",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "jungles, forests, deserts",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Zolan",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Ojom",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "frigid",
    gravity: "NA",
    terrain: "oceans, glaciers",
    surface_water: "100",
    population: "500000000"
  },
  {
    p_name: "Skako",
    rotation_period: "27",
    orbital_period: "384",
    diameter: "",
    climate: "temperate",
    gravity: "1",
    terrain: "urban, vines",
    surface_water: "",
    population: "500000000000"
  },
  {
    p_name: "Muunilinst",
    rotation_period: "28",
    orbital_period: "412",
    diameter: "13800",
    climate: "temperate",
    gravity: "1",
    terrain: "plains, forests, hills, mountains",
    surface_water: "25",
    population: "5000000000"
  },
  {
    p_name: "Shili",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "temperate",
    gravity: "1",
    terrain: "cities, savannahs, seas, plains",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Kalee",
    rotation_period: "23",
    orbital_period: "378",
    diameter: "13850",
    climate: "arid, temperate, tropical",
    gravity: "1",
    terrain: "rainforests, cliffs, canyons, seas",
    surface_water: "",
    population: "4000000000"
  },
  {
    p_name: "Umbara",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "NA",
    surface_water: "",
    population: ""
  },
  {
    p_name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000"
  },
  {
    p_name: "Jakku",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "NA",
    gravity: "NA",
    terrain: "deserts",
    surface_water: "",
    population: ""
  },
]