drop table planets
create table planets (p_name varchar(50),
rotation_period	int,
orbital_period	int,
diameter int,	
climate	varchar(50),
gravity	varchar(50),
terrain	varchar(50),
surface_water numeric,
population bigint
);

select * from planets