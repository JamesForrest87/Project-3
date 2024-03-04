BEGIN TRANSACTION QUICKDBD

CREATE TABLE [characters] (
    [name] TEXT  NOT NULL ,
    [height] INT  NOT NULL ,
    [mass] INT  NOT NULL ,
    [hair_color] TEXT  NOT NULL ,
    [skin_color] TEXT  NOT NULL ,
    [eye_color] TEXT  NOT NULL ,
    [birth_year] TEXT  NOT NULL ,
    [gender] TEXT  NOT NULL ,
    [planet] TEXT  NOT NULL ,
    [species] TEXT  NOT NULL 
)

CREATE TABLE [planets] (
    [planet] TEXT  NOT NULL ,
    [rotation_period] INT  NOT NULL ,
    [orbital_period] INT  NOT NULL ,
    [diameter] INT  NOT NULL ,
    [cliamte] TEXT  NOT NULL ,
    [gravity] TEXT  NOT NULL ,
    [terrain] TEXT  NOT NULL ,
    [surface_water] TEXT  NOT NULL ,
    [population] INT  NOT NULL ,
    CONSTRAINT [PK_planets] PRIMARY KEY CLUSTERED (
        [planet] ASC
    )
)

CREATE TABLE [species] (
    [name] TEXT  NOT NULL ,
    [classification] TEXT  NOT NULL ,
    [designation] INT  NOT NULL ,
    [average_height] INT  NOT NULL ,
    [skin_colors] TEXT  NOT NULL ,
    [hair_colors] TEXT  NOT NULL ,
    [eye_colors] TEXT  NOT NULL ,
    [average_lifespan] TEXT  NOT NULL ,
    [language] TEXT  NOT NULL ,
    [planet] TEXT  NOT NULL 
)

CREATE TABLE [starwarslegos] (
    [Subtheme] TEXT  NOT NULL ,
    [Theme] TEXT  NOT NULL ,
    [Name] INT  NOT NULL ,
    [SetID] INT  NOT NULL ,
    [Number] INT  NOT NULL ,
    [Year] INT  NOT NULL ,
    [Pieces] INT  NOT NULL ,
    [USPrice] REAL  NOT NULL ,
    [ImageURL] TEXT  NOT NULL 
)

CREATE TABLE [starships] (
    [name] TEXT  NOT NULL ,
    [model] TEXT  NOT NULL ,
    [Manufacturer] INT  NOT NULL ,
    [cost_in_credits] INT  NOT NULL ,
    [length] INT  NOT NULL ,
    [max_atmosphering_speed] INT  NOT NULL ,
    [crew] INT  NOT NULL ,
    [passengers] INT  NOT NULL ,
    [cargo_capacity] INT  NOT NULL ,
    [consumables] INT  NOT NULL ,
    [hyperdrive_rating] NUMERIC  NOT NULL ,
    [MGLT] INT  NOT NULL ,
    [starship_class] TEXT  NOT NULL ,
    CONSTRAINT [PK_starships] PRIMARY KEY CLUSTERED (
        [model] ASC,[Manufacturer] ASC,[cost_in_credits] ASC,[length] ASC,[max_atmosphering_speed] ASC,[crew] ASC,[passengers] ASC,[cargo_capacity] ASC,[consumables] ASC
    )
)

CREATE TABLE [vehicles] (
    [name] TEXT  NOT NULL ,
    [model] TEXT  NOT NULL ,
    [Manufacturer] TEXT  NOT NULL ,
    [cost_in_credits] INT  NOT NULL ,
    [length] INT  NOT NULL ,
    [max_atmosphering_speed] INT  NOT NULL ,
    [crew] INT  NOT NULL ,
    [passengers] INT  NOT NULL ,
    [cargo_capacity] INT  NOT NULL ,
    [consumables] INT  NOT NULL ,
    [vehicle_class] TEXT  NOT NULL 
)

ALTER TABLE [characters] WITH CHECK ADD CONSTRAINT [FK_characters_planet] FOREIGN KEY([planet])
REFERENCES [planets] ([planet])

ALTER TABLE [characters] CHECK CONSTRAINT [FK_characters_planet]

ALTER TABLE [species] WITH CHECK ADD CONSTRAINT [FK_species_planet] FOREIGN KEY([planet])
REFERENCES [planets] ([planet])

ALTER TABLE [species] CHECK CONSTRAINT [FK_species_planet]

ALTER TABLE [vehicles] WITH CHECK ADD CONSTRAINT [FK_vehicles_model_Manufacturer_cost_in_credits_length_max_atmosphering_speed_crew_passengers_cargo_capacity_consumables] FOREIGN KEY([model], [Manufacturer], [cost_in_credits], [length], [max_atmosphering_speed], [crew], [passengers], [cargo_capacity], [consumables])
REFERENCES [starships] ([model], [Manufacturer], [cost_in_credits], [length], [max_atmosphering_speed], [crew], [passengers], [cargo_capacity], [consumables])

ALTER TABLE [vehicles] CHECK CONSTRAINT [FK_vehicles_model_Manufacturer_cost_in_credits_length_max_atmosphering_speed_crew_passengers_cargo_capacity_consumables]

COMMIT TRANSACTION QUICKDBD