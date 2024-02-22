drop table starwar

create table starwar (SetID	int,
					   startwar_number varchar(50),	
					   Variant	int,
					   Theme	varchar(50),
					   Subtheme	varchar(50),
					   startwar_year int,	 
					   starwar_name	varchar(200),
					   Minifigs	int,					   
					   Pieces	int,
					   UKPrice	numeric,
					   USPrice	numeric,
					   CAPrice	numeric,
					   EUPrice	numeric,
					   ImageURL	varchar(200),
					   starward_owned	varchar(50),
					   Wanted	varchar(50),
					   QtyOwned int
);

select * from startwar