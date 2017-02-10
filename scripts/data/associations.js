module.exports = {
	actions: [{
		label: 'Board Up',
		show: ['Door', 'Window', 'Metal', 'Power Tool']
	}, {
		label: 'Clean',
		show: ['Beams Ceiling', 'Beams Floor', 'Beams Wall', 'Building', 'Bus Duct', 'Cabinet Exterior', 'Cabinet Interior', 'Cabinets', 'Ceiling  ', 'Content', 'Countertop', 'Door', 'Electrical Fixtures', 'Exterior Building', 'Exterior Grounds', 'Floor', 'HVAC - Exterior', 'HVAC - Interior', 'Piping', 'Plumbing Fixture', 'Rack/Shelves', 'Wall', 'Brush', 'Compressed Air', 'Media blast', 'Pressure Wash - Chemical', 'Pressure Wash - Hot Chemical', 'Pressure Wash - Hot Water', 'Pressure Wash - Water', 'Vaccum - HEPA', 'Vaccum - Wet/Dry', 'Wipe - Dry Cloth', 'Wipe - Dry Sponge', 'Wipe - Water Only', 'Wipe - Wet Heavy Chem', 'Wipe - Wet Light Chem', 'Apply Rust Inhibitor', 'Air Scubbers', 'Sweep - Broom', 'Extractor - Truck Mount', 'Mop', 'Scraping - Hand Tools', 'Air Whip']
	}, {
		label: 'Contain',
		show: ['Ceiling', 'Door', 'Wall', 'Window', 'Poly <1 Mil and Tape', 'Poly 6 Mil And Poles', 'Poly 6 Mil and Tape', 'Misc Material']
	}, {
		label: 'Demo',
		show: ['Cabinets', 'Ceiling', 'Door', 'Floor', 'Rack/Shelves', 'Wall', 'Cart and Dispose', 'Disassemble', 'Dispose', 'Hand Power Tools', 'Hand Tools', 'Bag and Dispose', 'Metal' ,'Wood', 'Acoustic Tile', 'Drywall', 'Drywall-Double', 'Insulation', 'Plaster', 'Spray Foam', 'Carpet', 'Rubber', 'Sheet Goods' ,'Tile','VCT (Vinyl)', 'Paneling']
	}, {
		label: 'Deodorize',
		show: ['Building', 'Air Scubbers', 'Bad Air Sponge', 'Elephant Nose', 'Hydroxyl', 'Ozone', 'Pump Spray', 'Thermal Fog']
	}, {
		label: 'Detach',
		show: ['Cabinets', 'Electrical Fixtures', 'Plumbing Fixture', 'Rack/Shelves', 'Railing ', 'Hand Power Tools', 'Hand Tools']
	}, {
		label: 'Dry',
		show: ['Building', 'Air Movers', 'Air Scubbers', 'Chiller/DX Unit', 'Dehumidifier - Desiccant', 'Dehumidifier - LGR']
	}, {
		label: 'Encapsulate',
		show: ['Beams Ceiling', 'Beams Floor', 'Beams Wall', 'Ceiling  ', 'Floor', 'Wall', 'Paint - Hand  - Shallac', 'Paint - Hand - Latex', 'Paint - Sprayer - Latex', 'Paint - Sprayer - Shallac']
	}, {
		label: 'Extract',
		show: ['Extractor - Hand (Squeegee, Mop)', 'Extractor - Portable', 'Extractor - Truck Mount - Black', 'Extractor - Truck Mount - Clean']
	}, {
		label: 'Manipulate',
		show: ['Content', 'Move to Another Area onsite', 'Move to Another Building', 'Move to Another Room', 'Move to Center of Room', 'Move to Storage Container', 'Move to Storage Offsite']
	}, {
		label: 'Monitor',
		show: ['Building', 'Hand Tools']
	}, {
		label: 'Muck Out',
		show: ['Floor', 'Extractor - < 1in pump', 'Extractor - > 1in pump', 'Extractor - Hand (Squeegee, Mop)', 'Extractor - Portable', 'Extractor - Truck Mount - Black', 'Extractor - Truck Mount - Clean', 'Extractor - Vac Truck']
	}, {
		label: 'Pack Up',
		show: ['Content', 'Bagging', 'Boxing']
	}, {
		label: 'Protect',
		show: ['Floor', 'Content', 'Piping', 'Countertop', 'Floor Protection - Paper', 'Floor Protection - Plastic', 'Floor Protection - Plywood', 'Floor Protection - Ram Board', 'Poly <1 Mil and Tape', 'Poly 6 Mil and Tape', 'Wrap Contents - Bubble', 'Wrap Contents - Pad/Blanket']
	}, {
		label: 'Sanitize',
		show: ['Building', 'Beams Ceiling', 'Beams Floor', 'Beams Wall', 'Cabinets', 'Content', 'Exterior Grounds', 'Floor', 'HVAC - Interior', 'Rack/Shelves', 'Wall']
	}, {
		label: 'Stabilize',
		show: ['Building', 'Air Movers', 'Air Scubbers', 'Dehumidifier - Desiccant', 'Dehumidifier - LGR ', 'Chiller/DX Unit', 'Air Movers', 'Air Scubbers', 'Dehumidifier - Desiccant', 'Dehumidifier - LGR ', 'Chiller/DX Unit']
	}],
	components: [{
		label: 'Door',
		show: [ 'Board Up', 'Clean', 'Contain', 'Demo', 'Metal', 'Wood', 'Misc Materia;', 'Power Tool', 'Brush', 'Compressed Air', 'Vaccum - HEPA', 'Vaccum - Wet/Dry', 'Wipe - Dry Cloth', 'Wipe - Dry Sponge', 'Wipe - Water Only', 'Wipe - Wet Heavy Chem', 'Wipe - Wet Light Chem', 'Poly <1 Mil and Tape', 'Poly 6 Mil And Poles', 'Poly 6 Mil and Tape', 'Hand Tools']
	}, {
		label: 'Window',
		show: ['Board Up','Contain','Metal','Misc Material','Power Tool','Poly <1 Mil and Tape','Poly 6 Mil And Poles','Poly 6 Mil and Tape']
	}, {
		label: 'Beams Ceiling',
		show: ['Clean','Encapsulate','Sanitize','Concrete','Spray Foam','Steel','Wood','Misc Material','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Apply Rust Inhibitor','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Pump Spray']
	}, {
		label: 'Beams Floor',
		show: ['Clean','Encapsulate','Sanitize','Concrete','Steel','Wood','Misc Material','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Apply Rust Inhibitor','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Pump Spray']
	}, {
		label: 'Beams Wall',
		show: ['Clean','Encapsulate','Sanitize','Concrete','Metal','Spray Foam','Steel','Wood','Misc Material','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Apply Rust Inhibitor','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Pump Spray']
	}, {
		label: 'Building',
		show: ['Clean','Deodorize','Dry','Monitor','Sanitize','Stabilize','Air','Air Scubbers','Bad Air Sponge','Elephant Nose','Hydroxyl','Ozone','Pump Spray','Thermal Fog','Air Movers','Chiller/DX Unit','Dehumidifier - Desiccant','Dehumidifier - LGR ','Hand Tools']
	}, {
		label: 'Bus Duct',
		show: ['Clean','Metal','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge']
	}, {
		label: 'Cabinet Exterior',
		show: [	'Clean', 'Metal', 'Wood', 'Wipe - Dry Cloth', 'Wipe - Dry Sponge', 'Wipe - Water Only', 'Wipe - Wet Heavy Chem', 'Wipe - Wet Light Chem']
	}, {
		label: 'Cabinet Interior',
		show: ['Clean', 'Metal', 'Wood', 'Wipe - Dry Cloth', 'Wipe - Dry Sponge', 'Wipe - Water Only', 'Wipe - Wet Heavy Chem', 'Wipe - Wet Light Chem']
	}, {
		label: 'Cabinets',
		show: ['Clean','Demo','Detach','Sanitize','Metal','Wood','Misc Material','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Cart and Dispose','Disassemble','Dispose','Hand Power Tools','Hand Tools','Pump Spray']
	}, {
		label: 'Ceiling',
		show: ['Clean','Contain','Demo','Encapsulate','Acoustic Tile','Concrete','Corrugated Metal','Drywall','Metal','Wood','Misc Material','Drywall - Double','Insulation','Plaster','Spray Foam','Compressed Air','Vaccum - HEPA','Wipe - Dry Cloth','Wipe - Wet Light Chem','Brush','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - Wet/Dry','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Apply Rust Inhibitor','Poly <1 Mil and Tape','Poly 6 Mil And Poles','Poly 6 Mil and Tape','Bag and Dispose','Cart and Dispose','Hand Tools','Hand Power Tools','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac']
	}, {
		label: 'Content',
		show: ['Sanitize','Pack Up','Protect','Clean','Manipulate','Misc Material','Vaccum - HEPA','Wipe - Dry Cloth','Wipe - Wet Light Chem','Move to Another Area onsite','Move to Another Building','Move to Another Room','Move to Center of Room','Move to Storage Container','Move to Storage Offsite','Bagging','Boxing','Poly <1 Mil and Tape','Poly 6 Mil and Tape','Wrap Contents - Bubble','Wrap Contents - Pad/Blanket','Pump Spray','Wipe - Wet Heavy Chem']
	}, {
		label: 'Countertop',
		show: ['Clean','Protect','Concrete','Stone','Wood','Misc Material','Brush','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Floor Protection - Ram Board']
	}, {
		label: 'Electrical Fixtures',
		show: ['Clean','Detach','Misc Material','Vaccum - HEPA','Wipe - Dry Cloth','Wipe - Wet Light Chem','Hand Tools']
	}, {
		label: 'Exterior Building',
		show: ['Clean','Brick Masonry','Concrete','Fiberglass','Metal','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem'	]
	}, {
		label: 'Exterior Grounds',
		show: ['Clean','Sanitize','Concrete','Misc Material','Sweep - Broom','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Pump Spray','Wipe - Wet Heavy Chem']
	}, {
		label: 'Floor',
		show: ['Clean','Demo','Encapsulate','Extract','Muck Out','Protect','Sanitize','Carpet','Concrete','Sheet Goods','Stone','Tile','VCT (Vinyl)','Wood','Rubber','Misc Material','Brush','Extractor - Truck Mount','Vaccum - HEPA','Vaccum - Wet/Dry','Mop','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Scraping - Hand Tools','Sweep - Broom','Wipe - Water Only','Bag and Dispose','Hand Tools','Cart and Dispose','Hand Power Tools','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board','Pump Spray','Wipe - Wet Heavy Chem'	]
	}, {
		label: 'HVAC - Exterior',
		show: ['Clean','Metal','Brush','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem']
	}, {
		label: 'HVAC - Interior',
		show: ['Clean','Sanitize','Metal','Misc Material','Air Whip','Brush','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Pump Spray','Wipe - Wet Heavy Chem']
	}, {
		label: 'Piping',
		show: ['Clean','Protect','Metal','Misc Material','Vaccum - HEPA','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Poly 6 Mil and Tape']
	}, {
		label: 'Plumbing Fixture',
		show: ['Clean','Detach','Misc Material','Vaccum - HEPA','Wipe - Water Only','Hand Tools']
	}, {
		label: 'Rack/Shelves',
		show: ['Clean','Demo','Detach','Sanitize','Metal','Misc Material','Compressed Air','Vaccum - HEPA','Wipe - Water Only','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools','Pump Spray','Wipe - Wet Heavy Chem']
	}, {
		label: 'Wall',
		show: ['Clean','Contain','Demo','Encapsulate','Sanitize','Concrete','Corrugated Metal','Drywall','Metal','Wood','Misc Material','Drywall - Double','Insulation','Paneling','Plaster','Spray Foam','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Apply Rust Inhibitor','Poly <1 Mil and Tape','Poly 6 Mil And Poles','Poly 6 Mil and Tape','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Pump Spray']
	}, {
		label: 'Railing ',
		show: ['Detach','Misc Material','Hand Tools']
	}],
	materials: [{
		label: 'Acoustic Tile',
		show: ['Clean','Demo','Ceiling','Compressed Air','Vaccum - HEPA','Wipe - Dry Cloth','Wipe - Wet Light Chem','Bag and Dispose','Cart and Dispose','Hand Tools']
	}, {
		label: 'Air',
		show: ['Clean','Deodorize','Dry','Monitor','Sanitize','Stabilize','Building','Air Scubbers','Bad Air Sponge','Elephant Nose','Hydroxyl','Ozone','Pump Spray','Thermal Fog','Air Movers','Chiller/DX Unit','Dehumidifier - Desiccant','Dehumidifier - LGR ','Hand Tools']
	}, {
		label: 'Brick Masonry',
		show: ['Clean', 'Exterior Building', 'Media Bast', 'Pressure Wash - Chemical', 'Pressure Wash - Hot Chemical', 'Pressure Wash - Hot Water', 'Pressure Wash - Water', 'Vaccum - HEPA', 'Wipe - Dry Sponge', 'Wipe - Water Only', 'Wipe - Wet Heavy Chem', 'Wipe - Wet Light Chem'	]
	}, {
		label: 'Carpet',
		show: ['Clean','Demo','Extract','Muck Out','Protect','Floor','Brush','Extractor - Truck Mount','Vaccum - HEPA','Vaccum - Wet/Dry','Bag and Dispose','Hand Tools','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board']
	}, {
		label: 'Concrete',
		show: ['Clean','Extract','Muck Out','Protect','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Countertop','Exterior Building','Exterior Grounds','Floor','Wall','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Sweep - Broom','Mop','Scraping - Hand Tools','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board']
	}, {
		label: 'Corrugated Metal',
		show: ['Clean','Ceiling','Wall','Apply Rust Inhibitor','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem']
	}, {
		label: 'Drywall',
		show: ['Clean','Demo','Ceiling','Wall','Brush','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools']
	}, {
		label: 'Drywall - Double',
		show:['Demo','Ceiling','Wall','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools']
	}, {
		label: 'Fiberglass',
		show:['Clean','Exterior Building','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem']
	}, {
		label: 'Insulation',
		show:['Demo','Ceiling','Wall','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools']
	}, {
		label: 'Metal',
		show:['Board Up','Clean','Demo','Detach','Door','Window','Beams Wall','Bus Duct','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Exterior Building','HVAC - Exterior','HVAC - Interior','Piping','Rack/Shelves','Wall','Power Tool','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Apply Rust Inhibitor','Air Whip','Cart and Dispose','Disassemble','Dispose','Hand Power Tools','Hand Tools','Bag and Dispose']
	}, {
		label: 'Misc Material',
		show:[
			'Clean','Contain','Detach','Encapsulate','Manipulate','Pack Up','Protect','Sanitize','Content','Electrical Fixtures','Plumbing Fixture','Ceiling','Door','Wall','Window','Rack/Shelves','Railing ','Beams Ceiling','Beams Floor','Beams Wall','Floor','Piping','Countertop','Cabinets','Exterior Grounds','HVAC - Interior','Vaccum - HEPA','Wipe - Dry Cloth','Wipe - Wet Light Chem','Wipe - Water Only','Poly <1 Mil and Tape','Poly 6 Mil And Poles','Poly 6 Mil and Tape','Hand Tools','Paint - Hand  - Shallac','Paint - Hand - Latex','Paint - Sprayer - Latex','Paint - Sprayer - Shallac','Move to Another Area onsite','Move to Another Building','Move to Another Room','Move to Center of Room','Move to Storage Container','Move to Storage Offsite','Bagging','Boxing','Wrap Contents - Bubble','Wrap Contents - Pad/Blanket','Floor Protection - Ram Board','Pump Spray','Wipe - Wet Heavy Chem']
	}, {
		label: 'Paneling',
		show:['Demo','Wall','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools']
	}, {
		label: 'Plaster',
		show:['Demo','Ceiling','Wall','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools','Bag and Dispose','Cart and Dispose','Hand Power Tools']
	}, {
		label: 'Rubber',
		show:['Demo','Floor','Bag and Dispose','Hand Tools'	]
	}, {
		label: 'Sheet Goods',
		show:['Clean','Demo','Floor','Brush','Mop','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Sweep - Broom','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Water Only','Bag and Dispose','Hand Tools']
	}, {
		label: 'Spray Foam',
		show:['Clean','Demo','Beams Ceiling','Beams Wall','Ceiling','Wall','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools']
	}, {
		label: 'Steel',
		show:['Clean','Beams Ceiling','Beams Floor','Beams Wall','Apply Rust Inhibitor','Brush','Compressed Air','Media Bast','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem']
	}, {
		label: 'Stone',
		show:['Clean','Countertop','Floor','Brush','Compressed Air','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Brush','Mop','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Sweep - Broom','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Water Only']
	}, {
		label: 'Tile',
		show:['Clean','Demo','Extract','Muck Out','Protect','Floor','Brush','Mop','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Sweep - Broom','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Water Only','Bag and Dispose','Cart and Dispose','Hand Power Tools','Hand Tools','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board']
	}, {
		label: 'VCT (Vinyl)',
		show:['Clean','Demo','Extract','Muck Out','Protect','Floor','Brush','Mop','Pressure Wash - Chemical','Pressure Wash - Hot Chemical','Pressure Wash - Hot Water','Pressure Wash - Water','Sweep - Broom','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Water Only','Bag and Dispose','Hand Tools','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board']
	}, {
		label: 'Wood',
		show:['Clean','Demo','Detach','Extract','Muck Out','Protect','Beams Ceiling','Beams Floor','Beams Wall','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Countertop','Door','Floor','Wall','Brush','Compressed Air','Media Bast','Vaccum - HEPA','Vaccum - Wet/Dry','Wipe - Dry Cloth','Wipe - Dry Sponge','Wipe - Water Only','Wipe - Wet Heavy Chem','Wipe - Wet Light Chem','Mop','Sweep - Broom','Cart and Dispose','Disassemble','Dispose','Hand Power Tools','Hand Tools','Bag and Dispose','Extractor - Hand (Squeegee, Mop)','Extractor - Portable','Extractor - Truck Mount - Black','Extractor - Truck Mount - Clean','Extractor - < 1in pump','Extractor - > 1in pump','Extractor - Vac Truck','Floor Protection - Paper','Floor Protection - Plastic','Floor Protection - Plywood','Floor Protection - Ram Board'	]
	}, ],
	methods: [{
		label: 'Power Tool',
		show: ['Board Up','Door','Window','Metal']
	}, {
		label: 'Brush',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Countertop','Door','Floor','HVAC - Exterior','HVAC - Interior','Wall','Concrete','Steel','Wood','Metal','Corrugated Metal','Drywall','Stone','Carpet','Sheet Goods','Tile','VCT (Vinyl)']
	}, {
		label: 'Compressed Air',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Bus Duct','Ceiling','Countertop','Door','HVAC - Interior','Rack/Shelves','Wall','Concrete','Spray Foam','Steel','Wood','Metal','Acoustic Tile','Corrugated Metal','Drywall','Stone']
	}, {
		label: 'Media blast',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Exterior Building','Wall','Concrete','Steel','Wood','Metal','Corrugated Metal','Brick Masonry','Fiberglass']
	}, {
		label: 'Pressure Wash - Chemical',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Exterior Building','Exterior Grounds','Floor','Wall','Concrete','Steel','Metal','Corrugated Metal','Brick Masonry','Fiberglass','Sheet Goods','Stone','Tile','VCT (Vinyl)']
	}, {
		label: 'Pressure Wash - Hot Chemical',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Exterior Building','Exterior Grounds','Floor','Wall','Concrete','Steel','Metal','Corrugated Metal','Brick Masonry','Fiberglass','Sheet Goods','Stone','Tile','VCT (Vinyl)']
	}, {
		label: 'Pressure Wash - Hot Water',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Exterior Building','Exterior Grounds','Floor','Wall','Concrete','Steel','Metal','Corrugated Metal','Brick Masonry','Fiberglass','Sheet Goods','Stone','Tile','VCT (Vinyl)']
	}, {
		label: 'Pressure Wash - Water',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Exterior Building','Exterior Grounds','Floor','Wall','Concrete','Steel','Metal','Corrugated Metal','Brick Masonry','Fiberglass','Sheet Goods','Stone','Tile','VCT (Vinyl)']
	}, {
		label: 'Vaccum - HEPA',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Bus Duct','Ceiling','Content','Countertop','Door','Electrical Fixtures','Exterior Building','Floor','HVAC - Exterior','HVAC - Interior','Piping','Plumbing Fixture','Rack/Shelves','Wall','Concrete','Spray Foam','Steel','Wood','Metal','Acoustic Tile','Corrugated Metal','Drywall','Misc Material','Stone','Brick Masonry','Fiberglass','Carpet','Sheet Goods','Tile','VCT (Vinyl)']
	}, {
		label: 'Vaccum - Wet/Dry',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Bus Duct','Ceiling','Countertop','Door','Floor','HVAC - Exterior','HVAC - Interior','Wall','Concrete','Spray Foam','Steel','Wood','Metal','Corrugated Metal','Drywall','Stone','Carpet','Sheet Goods','Tile','VCT (Vinyl)']
	}, {
		label: 'Wipe - Dry Cloth',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Bus Duct','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Content','Countertop','Door','Electrical Fixtures','HVAC - Exterior','Wall','Concrete','Steel','Wood','Metal','Acoustic Tile','Corrugated Metal','Drywall','Misc Material','Stone']
	}, {
		label: 'Wipe - Dry Sponge',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Bus Duct','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Countertop','Door','Exterior Building','Wall','Concrete','Steel','Wood','Metal','Corrugated Metal','Drywall','Stone','Brick Masonry','Fiberglass']
	}, {
		label: 'Wipe - Water Only',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Countertop','Door','Exterior Building','Floor','HVAC - Exterior','HVAC - Interior','Piping','Plumbing Fixture','Rack/Shelves','Wall','Concrete','Steel','Wood','Metal','Corrugated Metal','Drywall','Stone','Brick Masonry','Fiberglass','Sheet Goods','Tile','VCT (Vinyl)','Misc Material']
	}, {
		label: 'Wipe - Wet Heavy Chem',
		show: ['Clean','Sanitize','Beams Ceiling','Beams Floor','Beams Wall','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Countertop','Door','Exterior Building','HVAC - Exterior','HVAC - Interior','Piping','Wall','Content','Exterior Grounds','Floor','Rack/Shelves','Concrete','Steel','Wood','Metal','Corrugated Metal','Drywall','Stone','Brick Masonry','Fiberglass','Misc Material']
	}, {
		label: 'Wipe - Wet Light Chem',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Cabinet Exterior','Cabinet Interior','Cabinets','Ceiling','Content','Countertop','Door','Electrical Fixtures','Exterior Building','HVAC - Exterior','HVAC - Interior','Piping','Wall','Concrete','Steel','Wood','Metal','Acoustic Tile','Corrugated Metal','Drywall','Misc Material','Stone','Brick Masonry','Fiberglass']
	}, {
		label: 'Apply Rust Inhibitor',
		show: ['Clean','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Wall','Steel','Corrugated Metal']
	}, {
		label: 'Air Scubbers',
		show: ['Clean','Deodorize','Dry','Building','Air'		]
	}, {
		label: 'Sweep - Broom',
		show: ['Clean','Exterior Grounds','Floor','Concrete','Sheet Goods','Stone','Tile','VCT (Vinyl)','Wood']
	},  {
		label: 'Mop',
		show: ['Clean','Floor','Concrete','Sheet Goods','Stone','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Scraping - Hand Tools',
		show: ['Clean','Floor','Concrete']
	}, {
		label: 'Air Whip',
		show: ['Clean','HVAC - Interior','Metal']
	}, {
		label: 'Poly <1 Mil and Tape',
		show: ['Contain','Protect','Ceiling','Door','Wall','Window','Content','Misc Material']
	}, {
		label: 'Poly 6 Mil And Poles',
		show: ['Contain','Ceiling','Door','Wall','Window','Misc Material']
	}, {
		label: 'Poly 6 Mil and Tape',
		show: ['Contain','Protect','Ceiling','Door','Wall','Window','Content','Piping','Misc Material']
	}, {
		label: 'Cart and Dispose',
		show: ['Demo','Cabinets','Ceiling','Floor','Rack/Shelves','Wall','Metal','Wood','Acoustic Tile','Drywall','Drywall - Double','Insulation','Plaster','Spray Foam','Tile','Paneling']
	}, {
		label: 'Disassemble',
		show: ['Demo','Cabinets','Metal','Wood'
		]
	}, {
		label: 'Dispose',
		show: ['Demo','Cabinets','Metal','Wood']
	}, {
		label: 'Hand Power Tools',
		show: ['Demo','Detach','Cabinets','Ceiling','Floor','Rack/Shelves','Wall','Metal','Wood','Drywall','Drywall - Double','Insulation','Plaster','Spray Foam','Tile','Paneling']
	}, {
		label: 'Hand Tools',
		show: ['Demo','Detach','Monitor','Cabinets','Ceiling','Door','Floor','Rack/Shelves','Wall','Electrical Fixtures','Plumbing Fixture','Railing ','Building','Metal','Wood','Acoustic Tile','Drywall','Drywall - Double','Insulation','Plaster','Spray Foam','Carpet','Rubber','Sheet Goods','Tile','VCT (Vinyl)','Paneling','Misc Material','Air'	]
	}, {
		label: 'Bag and Dispose',
		show: ['Demo','Ceiling','Floor','Rack/Shelves','Wall','Acoustic Tile','Drywall','Drywall - Double','Insulation','Plaster','Spray Foam','Wood','Carpet','Rubber','Sheet Goods','Tile','VCT (Vinyl)','Metal','Paneling'
		]
	}, {
		label: 'Bad Air Sponge',
		show: ['Deodorize','Building','Air']
	}, {
		label: 'Elephant Nose',
		show: ['Deodorize','Sanitize','Building','Air']
	}, {
		label: 'Hydroxyl',
		show: ['Deodorize','Building','Air']
	}, {
		label: 'Ozone',
		show: ['Deodorize','Building','Air']
	}, {
		label: 'Pump Spray',
		show: ['Deodorize','Sanitize','Building','Beams Ceiling','Beams Floor','Beams Wall','Cabinets','Content','Exterior Grounds','Floor','HVAC - Interior','Rack/Shelves','Wall','Air','Misc Material']
	}, {
		label: 'Thermal Fog',
		show: ['Deodorize','Building','Air'	]
	}, {
		label: 'Air Movers',
		show: ['Dry','Stabilize','Building','Air']
	}, {
		label: 'Chiller/DX Unit',
		show: ['Dry', 'Stabilize', 'Building', 'Air']
	}, {
		label: 'Dehumidifier - Desiccant',
		show: ['Dry','Stabilize','Building','Air']
	}, {
		label: 'Dehumidifier - LGR ',
		show: ['Dry','Stabilize','Building','Air']
	}, {
		label: 'Paint - Hand  - Shallac',
		show: ['Encapsulate','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Floor','Wall','Misc Material']
	}, {
		label: 'Paint - Hand - Latex',
		show: ['Encapsulate','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Floor','Wall','Misc Material']
	}, {
		label: 'Paint - Sprayer - Latex',
		show: ['Encapsulate','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Floor','Wall','Misc Material']
	}, {
		label: 'Paint - Sprayer - Shallac',
		show: ['Encapsulate','Beams Ceiling','Beams Floor','Beams Wall','Ceiling','Floor','Wall','Misc Material']
	}, {
		label: 'Extractor - Hand (Squeegee, Mop)',
		show: ['Extract','Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood'		]
	}, {
		label: 'Extractor - Portable',
		show: ['Extract','Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Extractor - Truck Mount - Black',
		show: ['Extract','Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Extractor - Truck Mount - Clean',
		show: ['Extract','Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Extractor - Truck Mount',
		show: ['Clean','Floor','Carpet']
	}, 	{
		label: 'Move to Another Area onsite',
		show: ['Manipulate','Content','Misc Material']
	}, {
		label: 'Move to Another Building',
		show: ['Manipulate','Content','Misc Material']
	}, {
		label: 'Move to Another Room',
		show: ['Manipulate','Content','Misc Material']
	}, {
		label: 'Move to Center of Room',
		show: ['Manipulate','Content','Misc Material']
	}, {
		label: 'Move to Storage Container',
		show: ['Manipulate','Content','Misc Material'	]
	}, {
		label: 'Move to Storage Offsite',
		show: ['Manipulate','Content','Misc Material']
	}, {
		label: 'Extractor - < 1in pump',
		show: ['Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Extractor - > 1in pump',
		show: ['Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']

	}, {
		label: 'Extractor - Vac Truck',
		show: ['Muck Out','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Bagging',
		show: ['Pack Up','Content','Misc Material']
	}, {
		label: 'Boxing',
		show: ['Pack Up','Content','Misc Material']
	}, {
		label: 'Floor Protection - Paper',
		show: ['Protect','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Floor Protection - Plastic',
		show: ['Protect', 		'Floor', 		'Carpet', 		'Concrete', 		'Tile', 		'VCT (Vinyl)'	]
	}, {
		label: 'Floor Protection - Plywood',
		show: ['Protect','Floor','Carpet','Concrete','Tile','VCT (Vinyl)','Wood']
	}, {
		label: 'Floor Protection - Ram Board',
		show: ['Protect','Floor','Countertop','Carpet','Concrete','Tile','VCT (Vinyl)','Wood','Misc Material']
	}, {
		label: 'Wrap Contents - Bubble',
		show: ['Protect','Content','Misc Material']
	}, {
		label: 'Wrap Contents - Pad/Blanke',
		show: ['Protect','Content','Misc Material']
	}]
};
