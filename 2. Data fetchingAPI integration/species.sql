drop table species

create table species (s_name varchar(50),	
					  classification varchar(50),	
					  designation	varchar(50),
					  average_height	int,
					  skin_colors	varchar(50),
					  hair_colors 	varchar(50),
					  eye_colors varchar(50),	
					  average_lifespan	int,
					  s_language 	varchar(50),
					  homeworld varchar(50)
);

select * from species