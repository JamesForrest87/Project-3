drop table vehicle
create table vehicle (v_name varchar(50),
					  model	varchar(50),
					  manufacturer	varchar(200),
					  cost_in_credits	int,
					  v_length	numeric,
					  max_atmosphering_speed int,	
					  crew	int,
					  passengers int,	
					  cargo_capacity bigint,	
					  consumables	varchar(50),
					  vehicle_class varchar(50)
);
select * from vehicle