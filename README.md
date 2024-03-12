# Project-3
Exploring the Star Wars Universe through Data Analysis

Group 4 members: Khalid Naji, Eyasu Yilma, Nicholas Lym, James Forrest 

Introduction:
Welcome to our GitHub repository dedicated to the exploration of the Star Wars universe through data analysis. In this project, we leverage CSV files containing various datasets related to Star Wars and store them in an SQLite database for efficient data management and analysis. Our aim is to delve into the rich lore and vast expanse of the Star Wars galaxy, uncovering fascinating insights and for users to have fun.

Data Sources:

* Star Wars 5 CSV files (https://www.kaggle.com/datasets/jsphyg/star-wars)
o 87 characters
o 61 planets
o 37 species
o 39 vehicles
o 37 starships
* SWAPI Star Wars API: (https://swapi.dev/documentation)
* Legos CSV: (https://brickset.com/sets)
* Website star background code source: (https://codepen.io/riley-pearce/pen/OJWPjZM?fbclid=IwAR2HwzINeVhFg7-YQvFDV8Teh-IH6akXO9RY3uMTapRobDt-R9fJ6-GIMkY)
* SWAPI Star Wars API: (https://swapi.dev/documentation)

Software: 
* VS Code
* SQLite DB Pro
* Quick DBD
* JavaScript
o Node.js
o Plotly.js
* HTML

How to use:
On the website there are numerous drop-down menus, where the user picks an entry to see the data.  There are five drop down menus with various visuals. Visuals include showing informational text on characters and species. Information on Star Wars Legos datasets including links to a JPEG of the sets. Planet bar graphs can be viewed and a gauge showing the speed of various starships and vehicles.

Ethical considerations:
In the Star Wars Universe, ethical considerations revolve around the portrayal of violence and characters representing various cultures/races and sexes. Star Wars creators strive for storylines that capture a global audience.  Storylines focused on the struggle between good vs evil, redemption, friendship are explored deeply in the movies and shows. Star Wars is a worldwide recognized franchise that brings in billions of dollars in revenue.  This is shown in our dataset that has hundreds of Legos datasets that could be seen as profiting off of children or promoting creativity, collaboration and play for them.       

SQLite Database:
To facilitate efficient data access and analysis, we have organized the collected data into an SQLite database. SQLite is a lightweight, serverless database engine ideal for handling small to medium-sized datasets. The use of SQLite allows for seamless integration with various programming languages and data analysis tools, enabling smooth exploration and manipulation of the Star Wars data.

Project Structure:
Data: This directory contains the CSV files obtained from various sources, including SWAPI and other relevant datasets.
Scripts: Here, you will find scripts for importing data from CSV files into the SQLite database. These scripts automate the process of creating tables, importing data, and ensuring data integrity.
Queries: This directory houses SQL queries for performing various analyses on the Star Wars dataset stored in the SQLite database.
Visualizations: Contains code and files for generating visualizations based on the analyzed data. Visualizations may include charts, graphs, and other graphical representations of insights derived from the data.

Getting Started:
To get started with exploring the Star Wars dataset and conducting data analysis:
Clone this repository to your local machine.
Open the repository in terminal, gitbash or terminal in VScode within the terminal or gitbash, run npm install 
After running npm install, then run npm run start  
After that, select the local host at the bottom and it should take you to the server 
Enjoy some Star Wars graphs! 

Acknowledgments:
We would like to express our gratitude to the contributors of the Star Wars API (SWAPI), Legos Brickset and Kaggle CSV datasets used in this project. Their efforts in compiling and maintaining these datasets have been instrumental in enabling our exploration of the Star Wars universe through data analysis and visualization. We would also like to thank Nicholas' cousin for his help in understanding how to launch the site fully and intigrate our graphs in an easy way on the website.
