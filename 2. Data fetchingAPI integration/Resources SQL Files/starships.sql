drop table starships
create table starships (s_name varchar(50),
						model	varchar(50),
						manufacturer varchar(100),	
						cost_in_credits bigint,
						s_length	int,
						max_atmosphering_speed	int,
						crew	int,
						passengers	int,
						cargo_capacity bigint,	
						consumables	varchar(50),
						hyperdrive_rating	numeric,
						MGLT	int,
						starship_class varchar(50)
);

select * from starships