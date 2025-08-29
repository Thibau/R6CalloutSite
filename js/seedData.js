//bm = basement
//gf = ground floor
//2f = second floor
//tf = top floor



const mapData = {
    bank: {
        name: 'Bank',
        callouts: [
            //#region Bank Basement
            {
                id: 'ba_bm_back-server',
                name: 'Back Server',
                image: '../images/siege/bank/bank-basement/back-server.PNG'
            },
            {
                id: 'ba_bm_blue-stairs',
                name: 'Blue Stairs',
                image: '../images/siege/bank/bank-basement/blue-stairs.PNG'
            },
            {
                id: 'ba_bm_bottom-blue',
                name: 'Bottom Blue',
                image: '../images/siege/bank/bank-basement/bottom-blue.PNG'
            },
            {
                id: 'ba_bm_burger',
                name: 'Burger',
                image: '../images/siege/bank/bank-basement/burger.PNG'
            },
            {
                id: 'ba_bm_cash',
                name: 'Cash',
                image: '../images/siege/bank/bank-basement/cash.PNG'
            },
            {
                id: 'ba_bm_cctv',
                name: 'CCTV',
                image: '../images/siege/bank/bank-basement/cctv.PNG'
            },
            {
                id: 'ba_bm_default',
                name: 'Default',
                image: '../images/siege/bank/bank-basement/default.PNG'
            },
            {
                id: 'ba_bm_elevators',
                name: 'Elevators',
                image: '../images/siege/bank/bank-basement/elevators.PNG'
            },
            {
                id: 'ba_bm_garage',
                name: 'Garage',
                image: '../images/siege/bank/bank-basement/garage.PNG'
            },
            {
                id: 'ba_bm_gold',
                name: 'Gold',
                image: '../images/siege/bank/bank-basement/gold.PNG'
            },
            {
                id: 'ba_bm_jail',
                name: 'Jail',
                image: '../images/siege/bank/bank-basement/jail.PNG'
            },
            {
                id: 'ba_bm_pc',
                name: 'PC',
                image: '../images/siege/bank/bank-basement/pc.PNG'
            },
            {
                id: 'ba_bm_ramp',
                name: 'Ramp',
                image: '../images/siege/bank/bank-basement/ramp.PNG'
            },
            {
                id: 'ba_bm_red',
                name: 'Red',
                image: '../images/siege/bank/bank-basement/red.PNG'
            },
            {
                id: 'ba_bm_security',
                name: 'Security',
                image: '../images/siege/bank/bank-basement/security.PNG'
            },
            {
                id: 'ba_bm_servers',
                name: 'Servers',
                image: '../images/siege/bank/bank-basement/servers.PNG'
            },
            {
                id: 'ba_bm_tunnel',
                name: 'Tunnel',
                image: '../images/siege/bank/bank-basement/tunnel.PNG'
            },
            {
                id: 'ba_bm_tv',
                name: 'TV',
                image: '../images/siege/bank/bank-basement/tv.PNG'
            },
            {
                id: 'ba_bm_vault',
                name: 'Vault',
                image: '../images/siege/bank/bank-basement/vault.PNG'
            },
            {
                id: 'ba_bm_vault-lobby',
                name: 'Vault Lobby',
                image: '../images/siege/bank/bank-basement/vault-lobby.PNG'
            },
            {
                id: 'ba_bm_white-hall',
                name: 'White Hall',
                image: '../images/siege/bank/bank-basement/white-hall.PNG'
            },
            //#endregion

            //#region Bank Groundfloor
            {
                id: 'ba_gf_admin',
                name: 'Admin',
                image: '../images/siege/bank/bank-groundfloor/admin.PNG'
            },
            {
                id: 'ba_gf_archives',
                name: 'Archives',
                image: '../images/siege/bank/bank-groundfloor/archives.PNG'
            },
            {
                id: 'ba_gf_cafe',
                name: 'Cafe',
                image: '../images/siege/bank/bank-groundfloor/cafe.PNG'
            },
            {
                id: 'ba_gf_electrical',
                name: 'Electrical',
                image: '../images/siege/bank/bank-groundfloor/electrical.PNG'
            },
            {
                id: 'ba_gf_elevator',
                name: 'Elevator',
                image: '../images/siege/bank/bank-groundfloor/elevator.PNG'
            },
            {
                id: 'ba_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/bank/bank-groundfloor/kitchen.PNG'
            },
            {
                id: 'ba_gf_lobby-stairs',
                name: 'Lobby Stairs',
                image: '../images/siege/bank/bank-groundfloor/lobby-stairs.PNG'
            },
            {
                id: 'ba_gf_lower-square',
                name: 'Lower Square',
                image: '../images/siege/bank/bank-groundfloor/lower-square.PNG'
            },
            {
                id: 'ba_gf_office-1',
                name: 'Office 1',
                image: '../images/siege/bank/bank-groundfloor/office-1.PNG'
            },
            {
                id: 'ba_gf_office-2',
                name: 'Office 2',
                image: '../images/siege/bank/bank-groundfloor/office-2.PNG'
            },
            {
                id: 'ba_gf_office-3',
                name: 'Office 3',
                image: '../images/siege/bank/bank-groundfloor/office-3.PNG'
            },
            {
                id: 'ba_gf_open-area',
                name: 'Open Area',
                image: '../images/siege/bank/bank-groundfloor/open-area.PNG'
            },
            {
                id: 'ba_gf_square-stairs',
                name: 'Square Stairs',
                image: '../images/siege/bank/bank-groundfloor/square-stairs.PNG'
            },
            {
                id: 'ba_gf_tellers',
                name: 'Tellers',
                image: '../images/siege/bank/bank-groundfloor/tellers.PNG'
            },
            {
                id: 'ba_gf_tellers-doors',
                name: 'Tellers Doors',
                image: '../images/siege/bank/bank-groundfloor/tellers-doors.PNG'
            },
            //#endregion

            //#region Bank Topfloor
            {
                id: 'ba_2f_90',
                name: '90',
                image: '../images/siege/bank/bank-topfloor/90.PNG'
            },
            {
                id: 'ba_2f_atm',
                name: 'ATM',
                image: '../images/siege/bank/bank-topfloor/atm.PNG'
            },
            {
                id: 'ba_2f_banana',
                name: 'Banana',
                image: '../images/siege/bank/bank-topfloor/banana.PNG'
            },
            {
                id: 'ba_2f_ceo',
                name: 'CEO',
                image: '../images/siege/bank/bank-topfloor/ceo.PNG'
            },
            {
                id: 'ba_2f_conf',
                name: 'Conf',
                image: '../images/siege/bank/bank-topfloor/conf.PNG'
            },
            {
                id: 'ba_2f_conf-hall',
                name: 'Conf Hall',
                image: '../images/siege/bank/bank-topfloor/conf-hall.PNG'
            },
            {
                id: 'ba_2f_connector',
                name: 'Connector',
                image: '../images/siege/bank/bank-topfloor/connector.PNG'
            },
            {
                id: 'ba_2f_elevator',
                name: 'Elevator',
                image: '../images/siege/bank/bank-topfloor/elevator.PNG'
            },
            {
                id: 'ba_2f_front-desk',
                name: 'Front Desk',
                image: '../images/siege/bank/bank-topfloor/front-desk.PNG'
            },
            {
                id: 'ba_2f_janitor',
                name: 'Janitor',
                image: '../images/siege/bank/bank-topfloor/janitor.PNG'
            },
            {
                id: 'ba_2f_janitor-door',
                name: 'Janitor Door',
                image: '../images/siege/bank/bank-topfloor/janitor-door.PNG'
            },
            {
                id: 'ba_2f_loan',
                name: 'Loan',
                image: '../images/siege/bank/bank-topfloor/loan.PNG'
            },
            {
                id: 'ba_2f_lobby',
                name: 'Lobby',
                image: '../images/siege/bank/bank-topfloor/lobby.PNG'
            },
            {
                id: 'ba_2f_lounge',
                name: 'Lounge',
                image: '../images/siege/bank/bank-topfloor/lounge.PNG'
            },
            {
                id: 'ba_2f_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/bank/bank-topfloor/main-stairs.PNG'
            },
            {
                id: 'ba_2f_stocks',
                name: 'Stocks',
                image: '../images/siege/bank/bank-topfloor/stocks.PNG'
            },
            {
                id: 'ba_2f_terrace',
                name: 'Terrace',
                image: '../images/siege/bank/bank-topfloor/terrace.PNG'
            },
            {
                id: 'ba_2f_top-lobby',
                name: 'Top Lobby',
                image: '../images/siege/bank/bank-topfloor/top-lobby.PNG'
            },
            {
                id: 'ba_2f_top-square',
                name: 'Top Square',
                image: '../images/siege/bank/bank-topfloor/top-square.PNG'
            }
            //#endregion
        ]
    }, 
    border: {
        name: 'Border',
        callouts: [
            //#region Border Groundfloor

            {
                id: 'bo_gf_admin',
                name: 'Admin',
                image: '../images/siege/border/border-groundfloor/admin.PNG'
            },
            {
                id: 'bo_gf_bottom-square',
                name: 'Bottom Square',
                image: '../images/siege/border/border-groundfloor/bottom-square.PNG'
            },
            {
                id: 'bo_gf_connector',
                name: 'Connector',
                image: '../images/siege/border/border-groundfloor/connector.PNG'
            },
            {
                id: 'bo_gf_cub',
                name: 'Cub',
                image: '../images/siege/border/border-groundfloor/cub.PNG'
            },
            {
                id: 'bo_gf_customs',
                name: 'Customs',
                image: '../images/siege/border/border-groundfloor/customs.PNG'
            },
            {
                id: 'bo_gf_jail',
                name: 'Jail',
                image: '../images/siege/border/border-groundfloor/jail.PNG'
            },
            {
                id: 'bo_gf_lobby',
                name: 'Lobby',
                image: '../images/siege/border/border-groundfloor/lobby.PNG'
            },
            {
                id: 'bo_gf_main',
                name: 'Main',
                image: '../images/siege/border/border-groundfloor/main.PNG'
            },
            {
                id: 'bo_gf_passport',
                name: 'Passport',
                image: '../images/siege/border/border-groundfloor/passport.PNG'
            },
            {
                id: 'bo_gf_pc',
                name: 'PC',
                image: '../images/siege/border/border-groundfloor/pc.PNG'
            },
            {
                id: 'bo_gf_servers',
                name: 'Servers',
                image: '../images/siege/border/border-groundfloor/servers.PNG'
            },
            {
                id: 'bo_gf_showers',
                name: 'Showers',
                image: '../images/siege/border/border-groundfloor/showers.PNG'
            },
            {
                id: 'bo_gf_soda',
                name: 'Soda',
                image: '../images/siege/border/border-groundfloor/soda.PNG'
            },
            {
                id: 'bo_gf_supply',
                name: 'Supply',
                image: '../images/siege/border/border-groundfloor/supply.PNG'
            },
            {
                id: 'bo_gf_tellers',
                name: 'Tellers',
                image: '../images/siege/border/border-groundfloor/tellers.PNG'
            },
            {
                id: 'bo_gf_vent',
                name: 'Vent',
                image: '../images/siege/border/border-groundfloor/vent.PNG'
            },
            {
                id: 'bo_gf_workshop',
                name: 'Workshop',
                image: '../images/siege/border/border-groundfloor/workshop.PNG'
            },

            //#endregion

            //#region Border Topfloor

             {
                id: 'bo_2f_90',
                name: '90',
                image: '../images/siege/border/border-topfloor/90.PNG'
            },
            {
                id: 'bo_2f_africa',
                name: 'Africa',
                image: '../images/siege/border/border-topfloor/africa.PNG'
            },
            {
                id: 'bo_2f_archive',
                name: 'Archive',
                image: '../images/siege/border/border-topfloor/archive.PNG'
            },
            {
                id: 'bo_2f_armory',
                name: 'Armory',
                image: '../images/siege/border/border-topfloor/armory.PNG'
            },
            {
                id: 'bo_2f_back-armory-lockers',
                name: 'Back Armory Lockers',
                image: '../images/siege/border/border-topfloor/back-armory-lockers.PNG'
            },
            {
                id: 'bo_2f_box',
                name: 'Box',
                image: '../images/siege/border/border-topfloor/box.PNG'
            },
            {
                id: 'bo_2f_breach',
                name: 'Breach',
                image: '../images/siege/border/border-topfloor/breach.PNG'
            },
            {
                id: 'bo_2f_break',
                name: 'Break',
                image: '../images/siege/border/border-topfloor/break.PNG'
            },
            {
                id: 'bo_2f_cctv',
                name: 'CCTV',
                image: '../images/siege/border/border-topfloor/cctv.PNG'
            },
            {
                id: 'bo_2f_cement',
                name: 'Cement',
                image: '../images/siege/border/border-topfloor/cement.PNG'
            },
            {
                id: 'bo_2f_default',
                name: 'Default',
                image: '../images/siege/border/border-topfloor/default.PNG'
            },
            {
                id: 'bo_2f_desk',
                name: 'Desk',
                image: '../images/siege/border/border-topfloor/desk.PNG'
            },
            {
                id: 'bo_2f_fountain',
                name: 'Fountain',
                image: '../images/siege/border/border-topfloor/fountain.PNG'
            },
            {
                id: 'bo_2f_fridge',
                name: 'Fridge',
                image: '../images/siege/border/border-topfloor/fridge.PNG'
            },
            {
                id: 'bo_2f_gen',
                name: 'Gen',
                image: '../images/siege/border/border-topfloor/gen.PNG'
            },
            {
                id: 'bo_2f_half',
                name: 'Half',
                image: '../images/siege/border/border-topfloor/half.PNG'
            },
            {
                id: 'bo_2f_head',
                name: 'Head',
                image: '../images/siege/border/border-topfloor/head.PNG'
            },
            {
                id: 'bo_2f_long-hallway',
                name: 'Long Hallway',
                image: '../images/siege/border/border-topfloor/long-hallway.PNG'
            },
            {
                id: 'bo_2f_office',
                name: 'Office',
                image: '../images/siege/border/border-topfloor/office.PNG'
            },
            {
                id: 'bo_2f_radio',
                name: 'Radio',
                image: '../images/siege/border/border-topfloor/radio.PNG'
            },
            {
                id: 'bo_2f_top-main',
                name: 'Top Main',
                image: '../images/siege/border/border-topfloor/top-main.PNG'
            },
            {
                id: 'bo_2f_top-square',
                name: 'Top Square',
                image: '../images/siege/border/border-topfloor/top-square.PNG'
            },
            {
                id: 'bo_2f_welcome',
                name: 'Welcome',
                image: '../images/siege/border/border-topfloor/welcome.PNG'
            }

            //#endregion

        ]
    },
    chalet: {
        name: 'Chalet',
        callouts: [
            //#region Chalet Basement

            {
                id: 'cha_bm_barrels',
                name: 'Barrels',
                image: '../images/siege/chalet/chalet-basement/barrels.PNG'
            },
            {
                id: 'cha_bm_blue',
                name: 'Blue',
                image: '../images/siege/chalet/chalet-basement/blue.PNG'
            },
            {
                id: 'cha_bm_blue-stairs',
                name: 'Blue Stairs',
                image: '../images/siege/chalet/chalet-basement/blue-stairs.PNG'
            },
            {
                id: 'cha_bm_boat',
                name: 'Boat',
                image: '../images/siege/chalet/chalet-basement/boat.PNG'
            },
            {
                id: 'cha_bm_boiler',
                name: 'Boiler',
                image: '../images/siege/chalet/chalet-basement/boiler.PNG'
            },
            {
                id: 'cha_bm_bottles',
                name: 'Bottles',
                image: '../images/siege/chalet/chalet-basement/bottles.PNG'
            },
            {
                id: 'cha_bm_breach',
                name: 'Breach',
                image: '../images/siege/chalet/chalet-basement/breach.PNG'
            },
            {
                id: 'cha_bm_connector',
                name: 'Connector',
                image: '../images/siege/chalet/chalet-basement/connector.PNG'
            },
            {
                id: 'cha_bm_garage',
                name: 'Garage',
                image: '../images/siege/chalet/chalet-basement/garage.PNG'
            },
            {
                id: 'cha_bm_garage-hall',
                name: 'Garage Hall',
                image: '../images/siege/chalet/chalet-basement/garage-hall.PNG'
            },
            {
                id: 'cha_bm_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/chalet/chalet-basement/main-stairs.PNG'
            },
            {
                id: 'cha_bm_red',
                name: 'Red',
                image: '../images/siege/chalet/chalet-basement/red.PNG'
            },
            {
                id: 'cha_bm_shelf',
                name: 'Shelf',
                image: '../images/siege/chalet/chalet-basement/shelf.PNG'
            },
            {
                id: 'cha_bm_snowmobile',
                name: 'Snowmobile',
                image: '../images/siege/chalet/chalet-basement/snowmobile.PNG'
            },

            //#endregion

            //#region Chalet Groundfloor

            {
                id: 'cha_gf_bar',
                name: 'Bar',
                image: '../images/siege/chalet/chalet-groundfloor/bar.PNG'
            },
            {
                id: 'cha_gf_bar-desk',
                name: 'Bar Desk',
                image: '../images/siege/chalet/chalet-groundfloor/bar-desk.PNG'
            },
            {
                id: 'cha_gf_bar-hall',
                name: 'Bar Hall',
                image: '../images/siege/chalet/chalet-groundfloor/bar-hall.PNG'
            },
            {
                id: 'cha_gf_bar-lounge',
                name: 'Bar Lounge',
                image: '../images/siege/chalet/chalet-groundfloor/bar-lounge.PNG'
            },
            {
                id: 'cha_gf_closet',
                name: 'Closet',
                image: '../images/siege/chalet/chalet-groundfloor/closet.PNG'
            },
            {
                id: 'cha_gf_dining',
                name: 'Dining',
                image: '../images/siege/chalet/chalet-groundfloor/dining.PNG'
            },
            {
                id: 'cha_gf_dining-hall',
                name: 'Dining Hall',
                image: '../images/siege/chalet/chalet-groundfloor/dining-hall.PNG'
            },
            {
                id: 'cha_gf_games',
                name: 'Games',
                image: '../images/siege/chalet/chalet-groundfloor/games.PNG'
            },
            {
                id: 'cha_gf_games-lounge',
                name: 'Games Lounge',
                image: '../images/siege/chalet/chalet-groundfloor/games-lounge.PNG'
            },
            {
                id: 'cha_gf_halfwall',
                name: 'Hallway',
                image: '../images/siege/chalet/chalet-groundfloor/halfwall.PNG'
            },
            {
                id: 'cha_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/chalet/chalet-groundfloor/kitchen.PNG'
            },
            {
                id: 'cha_gf_landing',
                name: 'Landing',
                image: '../images/siege/chalet/chalet-groundfloor/landing.PNG'
            },
            {
                id: 'cha_gf_lobby',
                name: 'Lobby',
                image: '../images/siege/chalet/chalet-groundfloor/lobby.PNG'
            },
            {
                id: 'cha_gf_lobby-stairs',
                name: 'Lobby Stairs',
                image: '../images/siege/chalet/chalet-groundfloor/lobby-stairs.PNG'
            },
            {
                id: 'cha_gf_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/chalet/chalet-groundfloor/main-stairs.PNG'
            },
            {
                id: 'cha_gf_stock',
                name: 'Stock',
                image: '../images/siege/chalet/chalet-groundfloor/stock.PNG'
            },
            {
                id: 'cha_gf_trophy',
                name: 'Trophy',
                image: '../images/siege/chalet/chalet-groundfloor/trophy.PNG'
            },
            {
                id: 'cha_gf_trophy-stairs',
                name: 'Trophy Stairs',
                image: '../images/siege/chalet/chalet-groundfloor/trophy-stairs.PNG'
            },
            {
                id: 'cha_gf_west-main',
                name: 'West Main',
                image: '../images/siege/chalet/chalet-groundfloor/west-main.PNG'
            },

            //#endregion

            //#region Chalet Topfloor

            {
                id: 'cha_2f_balcony',
                name: 'Balcony',
                image: '../images/siege/chalet/chalet-topfloor/balcony.PNG'
            },
            {
                id: 'cha_2f_bath',
                name: 'Bath',
                image: '../images/siege/chalet/chalet-topfloor/bath.PNG'
            },
            {
                id: 'cha_2f_box',
                name: 'Box',
                image: '../images/siege/chalet/chalet-topfloor/box.PNG'
            },
            {
                id: 'cha_2f_closet',
                name: 'Closet',
                image: '../images/siege/chalet/chalet-topfloor/closet.PNG'
            },
            {
                id: 'cha_2f_hallway',
                name: 'Hallway',
                image: '../images/siege/chalet/chalet-topfloor/hallway.PNG'
            },
            {
                id: 'cha_2f_hallway',
                name: 'Hallway',
                image: '../images/siege/chalet/chalet-topfloor/hallway.PNG'
            },
            {
                id: 'cha_2f_library',
                name: 'Library',
                image: '../images/siege/chalet/chalet-topfloor/library.PNG'
            },
            {
                id: 'cha_2f_long',
                name: 'Long',
                image: '../images/siege/chalet/chalet-topfloor/long.PNG'
            },
            {
                id: 'cha_2f_master',
                name: 'Master',
                image: '../images/siege/chalet/chalet-topfloor/master.PNG'
            },
            {
                id: 'cha_2f_office',
                name: 'Office',
                image: '../images/siege/chalet/chalet-topfloor/office.PNG'
            },
            {
                id: 'cha_2f_piano-hall',
                name: 'Piano Hall',
                image: '../images/siege/chalet/chalet-topfloor/piano-hall.PNG'
            },
            {
                id: 'cha_2f_piano',
                name: 'Piano',
                image: '../images/siege/chalet/chalet-topfloor/piano.PNG'
            },
            {
                id: 'cha_2f_sandwich',
                name: 'Sandwich',
                image: '../images/siege/chalet/chalet-topfloor/sandwich.PNG'
            },
            {
                id: 'cha_2f_short',
                name: 'Short',
                image: '../images/siege/chalet/chalet-topfloor/short.PNG'
            },
            {
                id: 'cha_2f_solar',
                name: 'Solar',
                image: '../images/siege/chalet/chalet-topfloor/solar.PNG'
            }

            //#endregion
        ]
    },
    clubhouse: {
        name: 'Clubhouse',
        callouts: [
            //#region Clubhouse Basement

            {
                id: 'ch_bm_armory',
                name: 'Armory',
                image: '../images/siege/clubhouse/clubhouse-basement/armory.PNG'
            },
            {
                id: 'ch_bm_back-armory',
                name: 'Back Armory',
                image: '../images/siege/clubhouse/clubhouse-basement/back-armory.PNG'
            },
            {
                id: 'ch_bm_bar',
                name: 'Bar',
                image: '../images/siege/clubhouse/clubhouse-basement/bar.PNG'
            },
            {
                id: 'ch_bm_bike',
                name: 'Bike',
                image: '../images/siege/clubhouse/clubhouse-basement/bike.PNG'
            },
            {
                id: 'ch_bm_blue',
                name: 'Blue',
                image: '../images/siege/clubhouse/clubhouse-basement/blue.PNG'
            },
            {
                id: 'ch_bm_blue-hall',
                name: 'Blue Hall',
                image: '../images/siege/clubhouse/clubhouse-basement/blue-hall.PNG'
            },
            {
                id: 'ch_bm_blue-stairs',
                name: 'Blue Stairs',
                image: '../images/siege/clubhouse/clubhouse-basement/blue-stairs.PNG'
            },
            {
                id: 'ch_bm_bottom-main',
                name: 'Bottom Main',
                image: '../images/siege/clubhouse/clubhouse-basement/bottom-main.PNG'
            },
            {
                id: 'ch_bm_church',
                name: 'Church',
                image: '../images/siege/clubhouse/clubhouse-basement/church.PNG'
            },
            {
                id: 'ch_bm_cool-late',
                name: 'Cool Late',
                image: '../images/siege/clubhouse/clubhouse-basement/cool-late.PNG'
            },
            {
                id: 'ch_bm_dirt',
                name: 'Dirt',
                image: '../images/siege/clubhouse/clubhouse-basement/dirt.PNG'
            },
            {
                id: 'ch_bm_dummies',
                name: 'Dummies',
                image: '../images/siege/clubhouse/clubhouse-basement/dummies.PNG'
            },
            {
                id: 'ch_bm_gen',
                name: 'Gen',
                image: '../images/siege/clubhouse/clubhouse-basement/gen.PNG'
            },
            {
                id: 'ch_bm_guns',
                name: 'Guns',
                image: '../images/siege/clubhouse/clubhouse-basement/guns.PNG'
            },
            {
                id: 'ch_bm_long',
                name: 'Long',
                image: '../images/siege/clubhouse/clubhouse-basement/long.PNG'
            },
            {
                id: 'ch_bm_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/clubhouse/clubhouse-basement/main-stairs.PNG'
            },
            {
                id: 'ch_bm_pit',
                name: 'Pit',
                image: '../images/siege/clubhouse/clubhouse-basement/pit.PNG'
            },
            {
                id: 'ch_bm_short',
                name: 'Short',
                image: '../images/siege/clubhouse/clubhouse-basement/short.PNG'
            },

            //#endregion
            
            //#region Clubhouse Groundfloor

            {
                id: 'ch_gf_bar',
                name: 'Bar',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/bar.PNG'
            },
            {
                id: 'ch_gf_blue',
                name: 'Blue',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/blue.PNG'
            },
            {
                id: 'ch_gf_freezer',
                name: 'Freezer',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/freezer.PNG'
            },
            {
                id: 'ch_gf_garage',
                name: 'Garage',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/garage.PNG'
            },
            {
                id: 'ch_gf_garage-stairs',
                name: 'Garage Stairs',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/garage-stairs.PNG'
            },
            {
                id: 'ch_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/kitchen.PNG'
            },
            {
                id: 'ch_gf_kitchen-hall',
                name: 'Kitchen Hall',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/kitchen-hall.PNG'
            },
            {
                id: 'ch_gf_lounge',
                name: 'Lounge',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/lounge.PNG'
            },
            {
                id: 'ch_gf_main',
                name: 'Main',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/main.PNG'
            },
            {
                id: 'ch_gf_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/main-stairs.PNG'
            },
            {
                id: 'ch_gf_pool',
                name: 'Pool',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/pool.PNG'
            },
            {
                id: 'ch_gf_red-stairs',
                name: 'Red Stairs',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/red-stairs.PNG'
            },
            {
                id: 'ch_gf_stage',
                name: 'Stage',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/stage.PNG'
            },
            {
                id: 'ch_gf_stock',
                name: 'Stock',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/stock.PNG'
            },
            {
                id: 'ch_gf_strip',
                name: 'Strip',
                image: '../images/siege/clubhouse/clubhouse-groundfloor/strip.PNG'
            },

            //#endregion
            
            //#region Clubhouse Topfloor

            {
                id: 'ch_2f_90',
                name: '90',
                image: '../images/siege/clubhouse/clubhouse-topfloor/90.PNG'
            },
            {
                id: 'ch_2f_bedroom-hall',
                name: 'Bedroom Hall',
                image: '../images/siege/clubhouse/clubhouse-topfloor/bedroom-hall.PNG'
            },
            {
                id: 'ch_2f_breach',
                name: 'Breach',
                image: '../images/siege/clubhouse/clubhouse-topfloor/breach.PNG'
            },
            {
                id: 'ch_2f_cash',
                name: 'Cash',
                image: '../images/siege/clubhouse/clubhouse-topfloor/cash.PNG'
            },
            {
                id: 'ch_2f_cash-table',
                name: 'Cash Table',
                image: '../images/siege/clubhouse/clubhouse-topfloor/cash-table.PNG'
            },
            {
                id: 'ch_2f_catwalk',
                name: 'Catwalk',
                image: '../images/siege/clubhouse/clubhouse-topfloor/catwalk.PNG'
            },
            {
                id: 'ch_2f_cctv',
                name: 'CCTV',
                image: '../images/siege/clubhouse/clubhouse-topfloor/cctv.PNG'
            },
            {
                id: 'ch_2f_constructor',
                name: 'Constructor',
                image: '../images/siege/clubhouse/clubhouse-topfloor/constructor.PNG'
            },
            {
                id: 'ch_2f_green',
                name: 'Green',
                image: '../images/siege/clubhouse/clubhouse-topfloor/green.PNG'
            },
            {
                id: 'ch_2f_gym',
                name: 'Gym',
                image: '../images/siege/clubhouse/clubhouse-topfloor/gym.PNG'
            },
            {
                id: 'ch_2f_gym-hall',
                name: 'Gym Hall',
                image: '../images/siege/clubhouse/clubhouse-topfloor/gym-hall.PNG'
            },
            {
                id: 'ch_2f_logistics',
                name: 'Logistics',
                image: '../images/siege/clubhouse/clubhouse-topfloor/logistics.PNG'
            },
            {
                id: 'ch_2f_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/clubhouse/clubhouse-topfloor/main-stairs.PNG'
            },
            {
                id: 'ch_2f_master',
                name: 'Master',
                image: '../images/siege/clubhouse/clubhouse-topfloor/master.PNG'
            },
            {
                id: 'ch_2f_secret',
                name: 'Secret',
                image: '../images/siege/clubhouse/clubhouse-topfloor/secret.PNG'
            },
            {
                id: 'ch_2f_showers',
                name: 'Showers',
                image: '../images/siege/clubhouse/clubhouse-topfloor/showers.PNG'
            },
            {
                id: 'ch_2f_top-red',
                name: 'Top Red',
                image: '../images/siege/clubhouse/clubhouse-topfloor/top-red.PNG'
            }

            //#endregion
        ]
    },
    coastline: {
        name: 'Coastline',
        callouts: [
            //#region Coastline Groundfloor

            {
                id: 'co_gf_back-lobby',
                name: 'Back Lobby',
                image: '../images/siege/coastline/coastline-groundfloor/back-lobby.PNG'
            },
            {
                id: 'co_gf_bathroom-hallway',
                name: 'Bathroom Hallway',
                image: '../images/siege/coastline/coastline-groundfloor/bathroom-hallway.PNG'
            },
            {
                id: 'co_gf_bathroom',
                name: 'Bathroom',
                image: '../images/siege/coastline/coastline-groundfloor/bathroom.PNG'
            },
            {
                id: 'co_gf_blue-bar',
                name: 'Blue Bar',
                image: '../images/siege/coastline/coastline-groundfloor/blue-bar.PNG'
            },
            {
                id: 'co_gf_closet',
                name: 'Closet',
                image: '../images/siege/coastline/coastline-groundfloor/closet.PNG'
            },
            {
                id: 'co_gf_connector',
                name: 'Connector',
                image: '../images/siege/coastline/coastline-groundfloor/connector.PNG'
            },
            {
                id: 'co_gf_coolvibes',
                name: 'Coolvibes',
                image: '../images/siege/coastline/coastline-groundfloor/coolvibes.PNG'
            },
            {
                id: 'co_gf_courtyard',
                name: 'Courtyard',
                image: '../images/siege/coastline/coastline-groundfloor/courtyard.PNG'
            },
            {
                id: 'co_gf_desk',
                name: 'Desk',
                image: '../images/siege/coastline/coastline-groundfloor/desk.PNG'
            },
            {
                id: 'co_gf_kitchen-hallway',
                name: 'Kitchen Hallway',
                image: '../images/siege/coastline/coastline-groundfloor/kitchen-hallway.PNG'
            },
            {
                id: 'co_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/coastline/coastline-groundfloor/kitchen.PNG'
            },
            {
                id: 'co_gf_lobby',
                name: 'Lobby',
                image: '../images/siege/coastline/coastline-groundfloor/lobby.PNG'
            },
            {
                id: 'co_gf_office',
                name: 'Office',
                image: '../images/siege/coastline/coastline-groundfloor/office.PNG'
            },
            {
                id: 'co_gf_pantry',
                name: 'Pantry',
                image: '../images/siege/coastline/coastline-groundfloor/pantry.PNG'
            },
            {
                id: 'co_gf_pink',
                name: 'Pink',
                image: '../images/siege/coastline/coastline-groundfloor/pink.PNG'
            },
            {
                id: 'co_gf_security',
                name: 'Security',
                image: '../images/siege/coastline/coastline-groundfloor/security.PNG'
            },
            {
                id: 'co_gf_service',
                name: 'Service',
                image: '../images/siege/coastline/coastline-groundfloor/service.PNG'
            },
            {
                id: 'co_gf_stock',
                name: 'Stock',
                image: '../images/siege/coastline/coastline-groundfloor/stock.PNG'
            },
            {
                id: 'co_gf_sunrise-hallway',
                name: 'Sunrise Hallway',
                image: '../images/siege/coastline/coastline-groundfloor/sunrise-hallway.PNG'
            },
            {
                id: 'co_gf_sunrise',
                name: 'Sunrise',
                image: '../images/siege/coastline/coastline-groundfloor/sunrise.PNG'
            },
            {
                id: 'co_gf_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/coastline/coastline-groundfloor/white-stairs.PNG'
            },

            //#endregion
            
            //#region Coastline Topfloor

            {
                id: 'co_2f_90',
                name: '90',
                image: '../images/siege/coastline/coastline-topfloor/90.PNG'
            },
            {
                id: 'co_2f_aqua-bar',
                name: 'Aqua Bar',
                image: '../images/siege/coastline/coastline-topfloor/aqua-bar.PNG'
            },
            {
                id: 'co_2f_aqua-couches',
                name: 'Aqua Couches',
                image: '../images/siege/coastline/coastline-topfloor/aqua-couches.PNG'
            },
            {
                id: 'co_2f_aqua',
                name: 'Aqua',
                image: '../images/siege/coastline/coastline-topfloor/aqua.PNG'
            },
            {
                id: 'co_2f_bar',
                name: 'Bar',
                image: '../images/siege/coastline/coastline-topfloor/bar.PNG'
            },
            {
                id: 'co_2f_bathroom',
                name: 'Bathroom',
                image: '../images/siege/coastline/coastline-topfloor/bathroom.PNG'
            },
            {
                id: 'co_2f_bookshelf',
                name: 'Bookshelf',
                image: '../images/siege/coastline/coastline-topfloor/bookshelf.PNG'
            },
            {
                id: 'co_2f_couches',
                name: 'Couches',
                image: '../images/siege/coastline/coastline-topfloor/couches.PNG'
            },
            {
                id: 'co_2f_default-penthouse',
                name: 'Default Penthouse',
                image: '../images/siege/coastline/coastline-topfloor/default-penthouse.PNG'
            },
            {
                id: 'co_2f_default',
                name: 'Default',
                image: '../images/siege/coastline/coastline-topfloor/default.PNG'
            },
            {
                id: 'co_2f_halfwall',
                name: 'Halfwall',
                image: '../images/siege/coastline/coastline-topfloor/halfwall.PNG'
            },
            {
                id: 'co_2f_hall-of-fame',
                name: 'Hall Of Fame',
                image: '../images/siege/coastline/coastline-topfloor/hall-of-fame.PNG'
            },
            {
                id: 'co_2f_hatch',
                name: 'Hatch',
                image: '../images/siege/coastline/coastline-topfloor/hatch.PNG'
            },
            {
                id: 'co_2f_hookah',
                name: 'Hookah',
                image: '../images/siege/coastline/coastline-topfloor/hookah.PNG'
            },
            {
                id: 'co_2f_luggage',
                name: 'Luggage',
                image: '../images/siege/coastline/coastline-topfloor/luggage.PNG'
            },
            {
                id: 'co_2f_penthouse',
                name: 'Penthouse',
                image: '../images/siege/coastline/coastline-topfloor/penthouse.PNG'
            },
            {
                id: 'co_2f_pool-bar',
                name: 'Pool Bar',
                image: '../images/siege/coastline/coastline-topfloor/pool-bar.PNG'
            },
            {
                id: 'co_2f_pool',
                name: 'Pool',
                image: '../images/siege/coastline/coastline-topfloor/pool.PNG'
            },
            {
                id: 'co_2f_theater-hallway',
                name: 'Theater Hallway',
                image: '../images/siege/coastline/coastline-topfloor/theater-hallway.PNG'
            },
            {
                id: 'co_2f_theater',
                name: 'Theater',
                image: '../images/siege/coastline/coastline-topfloor/theater.PNG'
            },
            {
                id: 'co_2f_top-cool-vibes',
                name: 'Top Cool Vibes',
                image: '../images/siege/coastline/coastline-topfloor/top-cool-vibes.PNG'
            },
            {
                id: 'co_2f_top-white',
                name: 'Top White',
                image: '../images/siege/coastline/coastline-topfloor/top-white.PNG'
            },
            {
                id: 'co_2f_vase',
                name: 'Vase',
                image: '../images/siege/coastline/coastline-topfloor/vase.PNG'
            },
            {
                id: 'co_2f_vip-boxes',
                name: 'VIP Boxes',
                image: '../images/siege/coastline/coastline-topfloor/vip-boxes.PNG'
            },
            {
                id: 'co_2f_vip-hallway',
                name: 'VIP Hallway',
                image: '../images/siege/coastline/coastline-topfloor/vip-hallway.PNG'
            },
            {
                id: 'co_2f_vip',
                name: 'VIP',
                image: '../images/siege/coastline/coastline-topfloor/vip.PNG'
            }

            //#endregion
        ]
    },
    kafe: {
        name: 'Kafé',
        callouts: [
            //#region Kafé Groundfloor

            {
                id: 'kafe_gf_bakery',
                name: 'Bakery',
                image: '../images/siege/kafe/kafe-groundfloor/bakery.PNG'
            },
            {
                id: 'kafe_gf_bottom-red',
                name: 'Bottom Red',
                image: '../images/siege/kafe/kafe-groundfloor/bottom-red.PNG'
            },
            {
                id: 'kafe_gf_coffee',
                name: 'Coffee',
                image: '../images/siege/kafe/kafe-groundfloor/coffee.PNG'
            },
            {
                id: 'kafe_gf_freezer',
                name: 'Freezer',
                image: '../images/siege/kafe/kafe-groundfloor/freezer.PNG'
            },
            {
                id: 'kafe_gf_garage',
                name: 'Garage',
                image: '../images/siege/kafe/kafe-groundfloor/garage.PNG'
            },
            {
                id: 'kafe_gf_harry-potter',
                name: 'Harry Potter',
                image: '../images/siege/kafe/kafe-groundfloor/harry-potter.PNG'
            },
            {
                id: 'kafe_gf_k1',
                name: 'K1',
                image: '../images/siege/kafe/kafe-groundfloor/k1.PNG'
            },
            {
                id: 'kafe_gf_k2',
                name: 'K2',
                image: '../images/siege/kafe/kafe-groundfloor/k2.PNG'
            },
            {
                id: 'kafe_gf_k3',
                name: 'K3',
                image: '../images/siege/kafe/kafe-groundfloor/k3.PNG'
            },
            {
                id: 'kafe_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/kafe/kafe-groundfloor/kitchen.PNG'
            },
            {
                id: 'kafe_gf_prep',
                name: 'Prep',
                image: '../images/siege/kafe/kafe-groundfloor/prep.PNG'
            },
            {
                id: 'kafe_gf_red-stairs',
                name: 'Red Stairs',
                image: '../images/siege/kafe/kafe-groundfloor/red-stairs.PNG'
            },
            {
                id: 'kafe_gf_service',
                name: 'Service',
                image: '../images/siege/kafe/kafe-groundfloor/service.PNG'
            },
            {
                id: 'kafe_gf_service-entry',
                name: 'Service Entry',
                image: '../images/siege/kafe/kafe-groundfloor/service-entry.PNG'
            },
            {
                id: 'kafe_gf_sinks',
                name: 'Sinks',
                image: '../images/siege/kafe/kafe-groundfloor/sinks.PNG'
            },
            {
                id: 'kafe_gf_small-bakery',
                name: 'Small Bakery',
                image: '../images/siege/kafe/kafe-groundfloor/small-bakery.PNG'
            },
            {
                id: 'kafe_gf_vip',
                name: 'VIP',
                image: '../images/siege/kafe/kafe-groundfloor/vip.PNG'
            },
            {
                id: 'kafe_gf_vip-hall',
                name: 'VIP Hall',
                image: '../images/siege/kafe/kafe-groundfloor/vip-hall.PNG'
            },
            {
                id: 'kafe_gf_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/kafe/kafe-groundfloor/white-stairs.PNG'
            },

            //#endregion

            //#region Kafé Second floor

            {
                id: 'kafe_2f_90',
                name: '90',
                image: '../images/siege/kafe/kafe-secondfloor/90.PNG'
            },
            {
                id: 'kafe_2f_chandelier',
                name: 'Chandelier',
                image: '../images/siege/kafe/kafe-secondfloor/chandelier.PNG'
            },
            {
                id: 'kafe_2f_dining',
                name: 'Dining',
                image: '../images/siege/kafe/kafe-secondfloor/dining.PNG'
            },
            {
                id: 'kafe_2f_green-train',
                name: 'Green Train',
                image: '../images/siege/kafe/kafe-secondfloor/green-train.PNG'
            },
            {
                id: 'kafe_2f_hell',
                name: 'Hell',
                image: '../images/siege/kafe/kafe-secondfloor/hell.PNG'
            },
            {
                id: 'kafe_2f_laundry',
                name: 'Laundry',
                image: '../images/siege/kafe/kafe-secondfloor/laundry.PNG'
            },
            {
                id: 'kafe_2f_library',
                name: 'Library',
                image: '../images/siege/kafe/kafe-secondfloor/library.PNG'
            },
            {
                id: 'kafe_2f_long',
                name: 'Long',
                image: '../images/siege/kafe/kafe-secondfloor/long.PNG'
            },
            {
                id: 'kafe_2f_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/kafe/kafe-secondfloor/main-stairs.PNG'
            },
            {
                id: 'kafe_2f_mining',
                name: 'Mining',
                image: '../images/siege/kafe/kafe-secondfloor/mining.PNG'
            },
            {
                id: 'kafe_2f_pillars',
                name: 'Pillars',
                image: '../images/siege/kafe/kafe-secondfloor/pillars.PNG'
            },
            {
                id: 'kafe_2f_reading',
                name: 'Reading',
                image: '../images/siege/kafe/kafe-secondfloor/reading.PNG'
            },
            {
                id: 'kafe_2f_red-hall',
                name: 'Red Hall',
                image: '../images/siege/kafe/kafe-secondfloor/red-hall.PNG'
            },
            {
                id: 'kafe_2f_red-stairs',
                name: 'Red Stairs',
                image: '../images/siege/kafe/kafe-secondfloor/red-stairs.PNG'
            },
            {
                id: 'kafe_2f_red-train',
                name: 'Red Train',
                image: '../images/siege/kafe/kafe-secondfloor/red-train.PNG'
            },
            {
                id: 'kafe_2f_short',
                name: 'Short',
                image: '../images/siege/kafe/kafe-secondfloor/short.PNG'
            },
            {
                id: 'kafe_2f_trains',
                name: 'Trains',
                image: '../images/siege/kafe/kafe-secondfloor/trains.PNG'
            },
            {
                id: 'kafe_2f_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/kafe/kafe-secondfloor/white-stairs.PNG'
            },

            //#endregion

            //#region Kafé Topfloor

            {
                id: 'kafe_tf_bar',
                name: 'Bar',
                image: '../images/siege/kafe/kafe-topfloor/bar.PNG'
            },
            {
                id: 'kafe_tf_bathroom',
                name: 'Bathroom',
                image: '../images/siege/kafe/kafe-topfloor/bathroom.PNG'
            },
            {
                id: 'kafe_tf_bottom-brown',
                name: 'Bottom Brown',
                image: '../images/siege/kafe/kafe-topfloor/bottom-brown.PNG'
            },
            {
                id: 'kafe_tf_box',
                name: 'Box',
                image: '../images/siege/kafe/kafe-topfloor/box.PNG'
            },
            {
                id: 'kafe_tf_brown-stairs',
                name: 'Brown Stairs',
                image: '../images/siege/kafe/kafe-topfloor/brown-stairs.PNG'
            },
            {
                id: 'kafe_tf_c1',
                name: 'C1',
                image: '../images/siege/kafe/kafe-topfloor/c1.PNG'
            },
            {
                id: 'kafe_tf_c2',
                name: 'C2',
                image: '../images/siege/kafe/kafe-topfloor/c2.PNG'
            },
            {
                id: 'kafe_tf_c3',
                name: 'C3',
                image: '../images/siege/kafe/kafe-topfloor/c3.PNG'
            },
            {
                id: 'kafe_tf_cigar',
                name: 'Cigar',
                image: '../images/siege/kafe/kafe-topfloor/cigar.PNG'
            },
            {
                id: 'kafe_tf_cocktail',
                name: 'Cocktail',
                image: '../images/siege/kafe/kafe-topfloor/cocktail.PNG'
            },
            {
                id: 'kafe_tf_freezer',
                name: 'Freezer',
                image: '../images/siege/kafe/kafe-topfloor/freezer.PNG'
            },
            {
                id: 'kafe_tf_heaven',
                name: 'Heaven',
                image: '../images/siege/kafe/kafe-topfloor/heaven.PNG'
            },
            {
                id: 'kafe_tf_main-entrance',
                name: 'Main Entrance',
                image: '../images/siege/kafe/kafe-topfloor/main-entrance.PNG'
            },
            {
                id: 'kafe_tf_new-hatch',
                name: 'New Hatch',
                image: '../images/siege/kafe/kafe-topfloor/new-hatch.PNG'
            },
            {
                id: 'kafe_tf_piano',
                name: 'Piano',
                image: '../images/siege/kafe/kafe-topfloor/piano.PNG'
            },
            {
                id: 'kafe_tf_storage',
                name: 'Storage',
                image: '../images/siege/kafe/kafe-topfloor/storage.PNG'
            },
            {
                id: 'kafe_tf_top-red',
                name: 'Top Red',
                image: '../images/siege/kafe/kafe-topfloor/top-red.PNG'
            },
            {
                id: 'kafe_tf_top-white-tarp',
                name: 'Top White Tarp',
                image: '../images/siege/kafe/kafe-topfloor/top-white-tarp.PNG'
            },
            {
                id: 'kafe_tf_whiskey',
                name: 'Whiskey',
                image: '../images/siege/kafe/kafe-topfloor/whiskey.PNG'
            },
            {
                id: 'kafe_tf_white-hall',
                name: 'White Hall',
                image: '../images/siege/kafe/kafe-topfloor/white-hall.PNG'
            },
            {
                id: 'kafe_tf_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/kafe/kafe-topfloor/white-stairs.PNG'
            }

            //#endregion
        ]
    },
    kanal: {
        name: 'Kanal',
        callouts: [
            //#region Kanal Basement

            {
                id: 'kan_bm_basement-hall',
                name: 'Basement Hall',
                image: '../images/siege/kanal/kanal-basement/basement-hall.PNG'
            },
            {
                id: 'kan_bm_diving',
                name: 'Diving',
                image: '../images/siege/kanal/kanal-basement/diving.PNG'
            },
            {
                id: 'kan_bm_hp',
                name: 'HP',
                image: '../images/siege/kanal/kanal-basement/hp.PNG'
            },
            {
                id: 'kan_bm_kayaks',
                name: 'Kayaks',
                image: '../images/siege/kanal/kanal-basement/kayaks.PNG'
            },
            {
                id: 'kan_bm_lockers',
                name: 'Lockers',
                image: '../images/siege/kanal/kanal-basement/lockers.PNG'
            },
            {
                id: 'kan_bm_pipes',
                name: 'Pipes',
                image: '../images/siege/kanal/kanal-basement/pipes.PNG'
            },
            {
                id: 'kan_bm_showers',
                name: 'Showers',
                image: '../images/siege/kanal/kanal-basement/showers.PNG'
            },
            {
                id: 'kan_bm_supplies',
                name: 'Supplies',
                image: '../images/siege/kanal/kanal-basement/supplies.PNG'
            },
            {
                id: 'kan_bm_toilet',
                name: 'Toilet',
                image: '../images/siege/kanal/kanal-basement/toilet.PNG'
            },
            {
                id: 'kan_bm_tunnel',
                name: 'Tunnel',
                image: '../images/siege/kanal/kanal-basement/tunnel.PNG'
            },
            {
                id: 'kan_bm_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/kanal/kanal-basement/white-stairs.PNG'
            },
            {
                id: 'kan_bm_yellow-stairs',
                name: 'Yellow Stairs',
                image: '../images/siege/kanal/kanal-basement/yellow-stairs.PNG'
            },

            //#endregion

            //#region Kanal Groundfloor

            {
                id: 'kan_gf_90',
                name: '90',
                image: '../images/siege/kanal/kanal-groundfloor/90.PNG'
            },
            {
                id: 'kan_gf_archives',
                name: 'Archives',
                image: '../images/siege/kanal/kanal-groundfloor/archives.PNG'
            },
            {
                id: 'kan_gf_blue-stairs',
                name: 'Blue Stairs',
                image: '../images/siege/kanal/kanal-groundfloor/blue-stairs.PNG'
            },
            {
                id: 'kan_gf_bottom-blue',
                name: 'Bottom Blue',
                image: '../images/siege/kanal/kanal-groundfloor/bottom-blue.PNG'
            },
            {
                id: 'kan_gf_bottom-green',
                name: 'Bottom Green',
                image: '../images/siege/kanal/kanal-groundfloor/bottom-green.PNG'
            },
            {
                id: 'kan_gf_coastguard',
                name: 'Coastguard',
                image: '../images/siege/kanal/kanal-groundfloor/coastguard.PNG'
            },
            {
                id: 'kan_gf_cubby',
                name: 'Cubby',
                image: '../images/siege/kanal/kanal-groundfloor/cubby.PNG'
            },
            {
                id: 'kan_gf_games',
                name: 'Games',
                image: '../images/siege/kanal/kanal-groundfloor/games.PNG'
            },
            {
                id: 'kan_gf_green-stairs',
                name: 'Green Stairs',
                image: '../images/siege/kanal/kanal-groundfloor/green-stairs.PNG'
            },
            {
                id: 'kan_gf_gym',
                name: 'Gym',
                image: '../images/siege/kanal/kanal-groundfloor/gym.PNG'
            },
            {
                id: 'kan_gf_hallway',
                name: 'Hallway',
                image: '../images/siege/kanal/kanal-groundfloor/hallway.PNG'
            },
            {
                id: 'kan_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/kanal/kanal-groundfloor/kitchen.PNG'
            },
            {
                id: 'kan_gf_lockers',
                name: 'Lockers',
                image: '../images/siege/kanal/kanal-groundfloor/lockers.PNG'
            },
            {
                id: 'kan_gf_lower-bridge',
                name: 'Lower Bridge',
                image: '../images/siege/kanal/kanal-groundfloor/lower-bridge.PNG'
            },
            {
                id: 'kan_gf_maps',
                name: 'Maps',
                image: '../images/siege/kanal/kanal-groundfloor/maps.PNG'
            },
            {
                id: 'kan_gf_model',
                name: 'Model',
                image: '../images/siege/kanal/kanal-groundfloor/model.PNG'
            },
            {
                id: 'kan_gf_museum',
                name: 'Museum',
                image: '../images/siege/kanal/kanal-groundfloor/museum.PNG'
            },
            {
                id: 'kan_gf_museum-door',
                name: 'Museum Door',
                image: '../images/siege/kanal/kanal-groundfloor/museum-door.PNG'
            },
            {
                id: 'kan_gf_projector',
                name: 'Projector',
                image: '../images/siege/kanal/kanal-groundfloor/projector.PNG'
            },
            {
                id: 'kan_gf_radio',
                name: 'Radio',
                image: '../images/siege/kanal/kanal-groundfloor/radio.PNG'
            },
            {
                id: 'kan_gf_radio-hall',
                name: 'Radio Hall',
                image: '../images/siege/kanal/kanal-groundfloor/radio-hall.PNG'
            },
            {
                id: 'kan_gf_reception',
                name: 'Reception',
                image: '../images/siege/kanal/kanal-groundfloor/reception.PNG'
            },
            {
                id: 'kan_gf_red-stairs',
                name: 'Red Stairs',
                image: '../images/siege/kanal/kanal-groundfloor/red-stairs.PNG'
            },
            {
                id: 'kan_gf_security',
                name: 'Security',
                image: '../images/siege/kanal/kanal-groundfloor/security.PNG'
            },
            {
                id: 'kan_gf_white-hall',
                name: 'White Hall',
                image: '../images/siege/kanal/kanal-groundfloor/white-hall.PNG'
            },

            //#endregion

            //#region Kanal Topfloor

            {
                id: 'kan_2f_90',
                name: '90',
                image: '../images/siege/kanal/kanal-topfloor/90.PNG'
            },
            {
                id: 'kan_2f_blue-stairs',
                name: 'Blue Stairs',
                image: '../images/siege/kanal/kanal-topfloor/blue-stairs.PNG'
            },
            {
                id: 'kan_2f_breach',
                name: 'Breach',
                image: '../images/siege/kanal/kanal-topfloor/breach.PNG'
            },
            {
                id: 'kan_2f_bridge',
                name: 'Bridge',
                image: '../images/siege/kanal/kanal-topfloor/bridge.PNG'
            },
            {
                id: 'kan_2f_control',
                name: 'Control',
                image: '../images/siege/kanal/kanal-topfloor/control.PNG'
            },
            {
                id: 'kan_2f_dashboard',
                name: 'Dashboard',
                image: '../images/siege/kanal/kanal-topfloor/dashboard.PNG'
            },
            {
                id: 'kan_2f_green-balc',
                name: 'Green Balc',
                image: '../images/siege/kanal/kanal-topfloor/green-balc.PNG'
            },
            {
                id: 'kan_2f_green-hall',
                name: 'Green Hall',
                image: '../images/siege/kanal/kanal-topfloor/green-hall.PNG'
            },
            {
                id: 'kan_2f_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/kanal/kanal-topfloor/main-stairs.PNG'
            },
            {
                id: 'kan_2f_printer',
                name: 'Printer',
                image: '../images/siege/kanal/kanal-topfloor/printer.PNG'
            },
            {
                id: 'kan_2f_radar',
                name: 'Radar',
                image: '../images/siege/kanal/kanal-topfloor/radar.PNG'
            },
            {
                id: 'kan_2f_red-balc',
                name: 'Red Balc',
                image: '../images/siege/kanal/kanal-topfloor/red-balc.PNG'
            },
            {
                id: 'kan_2f_red-hall',
                name: 'Red Hall',
                image: '../images/siege/kanal/kanal-topfloor/red-hall.PNG'
            },
            {
                id: 'kan_2f_roof-entrance',
                name: 'Roof Entrance',
                image: '../images/siege/kanal/kanal-topfloor/roof-entrance.PNG'
            },
            {
                id: 'kan_2f_server',
                name: 'Server',
                image: '../images/siege/kanal/kanal-topfloor/server.PNG'
            },
            {
                id: 'kan_2f_top-green',
                name: 'Top Green',
                image: '../images/siege/kanal/kanal-topfloor/top-green.PNG'
            }

            //#endregion
        ]
    },
    nighthaven_labs: {
        name: 'Nighthaven Labs',
        callouts: [
            //#region Nighthaven Basement

            {
                id: 'labs_bm_animus',
                name: 'Animus',
                image: '../images/siege/labs/labs-basement/animus.PNG'
            },
            {
                id: 'labs_bm_assembly',
                name: 'Assembly',
                image: '../images/siege/labs/labs-basement/assembly.PNG'
            },
            {
                id: 'labs_bm_bottom-cargo',
                name: 'Bottom Cargo',
                image: '../images/siege/labs/labs-basement/bottom-cargo.PNG'
            },
            {
                id: 'labs_bm_cargo-stairs',
                name: 'Cargo Stairs',
                image: '../images/siege/labs/labs-basement/cargo-stairs.PNG'
            },
            {
                id: 'labs_bm_double-breach',
                name: 'Double Breach',
                image: '../images/siege/labs/labs-basement/double-breach.PNG'
            },
            {
                id: 'labs_bm_exosuit',
                name: 'Exosuit',
                image: '../images/siege/labs/labs-basement/exosuit.PNG'
            },
            {
                id: 'labs_bm_nanotech-hallway',
                name: 'Nanotech Hallway',
                image: '../images/siege/labs/labs-basement/nanotech-hallway.PNG'
            },
            {
                id: 'labs_bm_nanotech',
                name: 'Nanotech',
                image: '../images/siege/labs/labs-basement/nanotech.PNG'
            },
            {
                id: 'labs_bm_single-breach',
                name: 'Single Breach',
                image: '../images/siege/labs/labs-basement/single-breach.PNG'
            },
            {
                id: 'labs_bm_tank',
                name: 'Tank',
                image: '../images/siege/labs/labs-basement/tank.PNG'
            },
            {
                id: 'labs_bm_vending-stairs',
                name: 'Vending Stairs',
                image: '../images/siege/labs/labs-basement/vending-stairs.PNG'
            },

            //#endregion

            //#region Nighthaven Groundfloor

            {
                id: 'labs_gf_cafeteria-hallway',
                name: 'Cafeteria Hallway',
                image: '../images/siege/labs/labs-groundfloor/cafetaria-hallway.PNG'
            },
            {
                id: 'labs_gf_cafeteria',
                name: 'Cafeteria',
                image: '../images/siege/labs/labs-groundfloor/cafetaria.PNG'
            },
            {
                id: 'labs_gf_control-room',
                name: 'Control Room',
                image: '../images/siege/labs/labs-groundfloor/control-room.PNG'
            },
            {
                id: 'labs_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/labs/labs-groundfloor/kitchen.PNG'
            },
            {
                id: 'labs_gf_lobby',
                name: 'Lobby',
                image: '../images/siege/labs/labs-groundfloor/lobby.PNG'
            },
            {
                id: 'labs_gf_lounge',
                name: 'Lounge',
                image: '../images/siege/labs/labs-groundfloor/lounge.PNG'
            },
            {
                id: 'labs_gf_pantry',
                name: 'Pantry',
                image: '../images/siege/labs/labs-groundfloor/pantry.PNG'
            },
            {
                id: 'labs_gf_storage',
                name: 'Storage',
                image: '../images/siege/labs/labs-groundfloor/storage.PNG'
            },
            {
                id: 'labs_gf_top-cargo',
                name: 'Top Cargo',
                image: '../images/siege/labs/labs-groundfloor/top-cargo.PNG'
            },
            {
                id: 'labs_gf_vending',
                name: 'Vending',
                image: '../images/siege/labs/labs-groundfloor/vending.PNG'
            },
            {
                id: 'labs_gf_warehouse-entrance',
                name: 'Warehouse Entrance',
                image: '../images/siege/labs/labs-groundfloor/warehouse-entrance.PNG'
            },
            {
                id: 'labs_gf_warehouse-stairs',
                name: 'Warehouse Stairs',
                image: '../images/siege/labs/labs-groundfloor/warehouse-stairs.PNG'
            },
            {
                id: 'labs_gf_warehouse',
                name: 'Warehouse',
                image: '../images/siege/labs/labs-groundfloor/warehouse.PNG'
            },

            //#endregion

            //#region Nighthaven Topfloor

            {
                id: 'labs_2f_back-servers',
                name: 'Back Servers',
                image: '../images/siege/labs/labs-topfloor/back-servers.PNG'
            },
            {
                id: 'labs_2f_bottom-warehouse',
                name: 'Bottom Warehouse',
                image: '../images/siege/labs/labs-topfloor/bottom-warehouse.PNG'
            },
            {
                id: 'labs_2f_cc',
                name: 'CC',
                image: '../images/siege/labs/labs-topfloor/cc.PNG'
            },
            {
                id: 'labs_2f_cc-desk',
                name: 'CC Desk',
                image: '../images/siege/labs/labs-topfloor/cc-desk.PNG'
            },
            {
                id: 'labs_2f_cc-hallway',
                name: 'CC Hallway',
                image: '../images/siege/labs/labs-topfloor/cc-hallway.PNG'
            },
            {
                id: 'labs_2f_cc-stairs',
                name: 'CC Stairs',
                image: '../images/siege/labs/labs-topfloor/cc-stairs.PNG'
            },
            {
                id: 'labs_2f_connector',
                name: 'Connector',
                image: '../images/siege/labs/labs-topfloor/connector.PNG'
            },
            {
                id: 'labs_2f_electrical',
                name: 'Electrical',
                image: '../images/siege/labs/labs-topfloor/electrical.PNG'
            },
            {
                id: 'labs_2f_it',
                name: 'IT',
                image: '../images/siege/labs/labs-topfloor/it.PNG'
            },
            {
                id: 'labs_2f_lobby-hallway',
                name: 'Lobby Hallway',
                image: '../images/siege/labs/labs-topfloor/lobby-hallway.PNG'
            },
            {
                id: 'labs_2f_lobby-stairs',
                name: 'Lobby Stairs',
                image: '../images/siege/labs/labs-topfloor/lobby-stairs.PNG'
            },
            {
                id: 'labs_2f_meeting',
                name: 'Meeting',
                image: '../images/siege/labs/labs-topfloor/meeting.PNG'
            },
            {
                id: 'labs_2f_meeting-hallway',
                name: 'Meeting Hallway',
                image: '../images/siege/labs/labs-topfloor/meeting-hallway.PNG'
            },
            {
                id: 'labs_2f_servers',
                name: 'Servers',
                image: '../images/siege/labs/labs-topfloor/servers.PNG'
            },
            {
                id: 'labs_2f_top-warehouse',
                name: 'Top Warehouse',
                image: '../images/siege/labs/labs-topfloor/top-warehouse.PNG'
            },
            {
                id: 'labs_2f_warehouse-stairs',
                name: 'Warehouse Stairs',
                image: '../images/siege/labs/labs-topfloor/warehouse-stairs.PNG'
            }

            //#endregion
        ]
    },
    oregon: {
        name: 'Oregon',
        callouts: [
            //#region Oregon Basement

            {
                id: 'or_bm_back-laundry',
                name: 'Back Laundry',
                image: '../images/siege/oregon/oregon-basement/back-laundry.PNG'
            },
            {
                id: 'or_bm_back-stairs',
                name: 'Back Stairs',
                image: '../images/siege/oregon/oregon-basement/back-stairs.PNG'
            },
            {
                id: 'or_bm_basement-hall',
                name: 'Basement Hall',
                image: '../images/siege/oregon/oregon-basement/basement-hall.PNG'
            },
            {
                id: 'or_bm_blue',
                name: 'Blue',
                image: '../images/siege/oregon/oregon-basement/blue.PNG'
            },
            {
                id: 'or_bm_boiler',
                name: 'Boiler',
                image: '../images/siege/oregon/oregon-basement/boiler.PNG'
            },
            {
                id: 'or_bm_bottom-freezer',
                name: 'Bottom Freezer',
                image: '../images/siege/oregon/oregon-basement/bottom-freezer.PNG'
            },
            {
                id: 'or_bm_closet',
                name: 'Closet',
                image: '../images/siege/oregon/oregon-basement/closet.PNG'
            },
            {
                id: 'or_bm_elbow',
                name: 'Elbow',
                image: '../images/siege/oregon/oregon-basement/elbow.PNG'
            },
            {
                id: 'or_bm_electric',
                name: 'Electric',
                image: '../images/siege/oregon/oregon-basement/electric.PNG'
            },
            {
                id: 'or_bm_fan',
                name: 'Fan',
                image: '../images/siege/oregon/oregon-basement/fan.PNG'
            },
            {
                id: 'or_bm_freezer-door',
                name: 'Freezer Door',
                image: '../images/siege/oregon/oregon-basement/freezer-door.PNG'
            },
            {
                id: 'or_bm_freezer-stairs',
                name: 'Freezer Stairs',
                image: '../images/siege/oregon/oregon-basement/freezer-stairs.PNG'
            },
            {
                id: 'or_bm_freezer',
                name: 'Freezer',
                image: '../images/siege/oregon/oregon-basement/freezer.PNG'
            },
            {
                id: 'or_bm_laundry-stairs',
                name: 'Laundry Stairs',
                image: '../images/siege/oregon/oregon-basement/laundry-stairs.PNG'
            },
            {
                id: 'or_bm_laundry',
                name: 'Laundry',
                image: '../images/siege/oregon/oregon-basement/laundry.PNG'
            },
            {
                id: 'or_bm_lockers',
                name: 'Lockers',
                image: '../images/siege/oregon/oregon-basement/lockers.PNG'
            },
            {
                id: 'or_bm_pillar',
                name: 'Pillar',
                image: '../images/siege/oregon/oregon-basement/pillar.PNG'
            },
            {
                id: 'or_bm_storage',
                name: 'Storage',
                image: '../images/siege/oregon/oregon-basement/storage.PNG'
            },
            {
                id: 'or_bm_supply',
                name: 'Supply',
                image: '../images/siege/oregon/oregon-basement/supply.PNG'
            },
            
            //#endregion

            //#region Oregon Groundfloor

            {
                id: 'or_gf_90',
                name: '90',
                image: '../images/siege/oregon/oregon-groundfloor/90.PNG'
            },
            {
                id: 'or_gf_boxes',
                name: 'Boxes',
                image: '../images/siege/oregon/oregon-groundfloor/boxes.PNG'
            },
            {
                id: 'or_gf_classroom',
                name: 'Classroom',
                image: '../images/siege/oregon/oregon-groundfloor/classroom.PNG'
            },
            {
                id: 'or_gf_dining',
                name: 'Dining',
                image: '../images/siege/oregon/oregon-groundfloor/dining.PNG'
            },
            {
                id: 'or_gf_dining-hall',
                name: 'Dining Hall',
                image: '../images/siege/oregon/oregon-groundfloor/dining-hall.PNG'
            },
            {
                id: 'or_gf_fallen',
                name: 'Fallen',
                image: '../images/siege/oregon/oregon-groundfloor/fallen.PNG'
            },
            {
                id: 'or_gf_garage',
                name: 'Garage',
                image: '../images/siege/oregon/oregon-groundfloor/garage.PNG'
            },
            {
                id: 'or_gf_generator',
                name: 'Generator',
                image: '../images/siege/oregon/oregon-groundfloor/generator.PNG'
            },
            {
                id: 'or_gf_halfwall',
                name: 'Halfwall',
                image: '../images/siege/oregon/oregon-groundfloor/halfwall.PNG'
            },
            {
                id: 'or_gf_kitchen',
                name: 'Kitchen',
                image: '../images/siege/oregon/oregon-groundfloor/kitchen.PNG'
            },
            {
                id: 'or_gf_kitchen-hall',
                name: 'Kitchen Hall',
                image: '../images/siege/oregon/oregon-groundfloor/kitchen-hall.PNG'
            },
            {
                id: 'or_gf_lobby',
                name: 'Lobby',
                image: '../images/siege/oregon/oregon-groundfloor/lobby.PNG'
            },
            {
                id: 'or_gf_main-stairs',
                name: 'Main Stairs',
                image: '../images/siege/oregon/oregon-groundfloor/main-stairs.PNG'
            },
            {
                id: 'or_gf_meeting',
                name: 'Meeting',
                image: '../images/siege/oregon/oregon-groundfloor/meeting.PNG'
            },
            {
                id: 'or_gf_pictures',
                name: 'Pictures',
                image: '../images/siege/oregon/oregon-groundfloor/pictures.PNG'
            },
            {
                id: 'or_gf_rear-stage',
                name: 'Rear Stage',
                image: '../images/siege/oregon/oregon-groundfloor/rear-stage.PNG'
            },
            {
                id: 'or_gf_security-hall',
                name: 'Security Hall',
                image: '../images/siege/oregon/oregon-groundfloor/security-hall.PNG'
            },
            {
                id: 'or_gf_servers',
                name: 'Servers',
                image: '../images/siege/oregon/oregon-groundfloor/servers.PNG'
            },
            {
                id: 'or_gf_showers',
                name: 'Showers',
                image: '../images/siege/oregon/oregon-groundfloor/showers.PNG'
            },
            {
                id: 'or_gf_small-tower',
                name: 'Small Tower',
                image: '../images/siege/oregon/oregon-groundfloor/small-tower.PNG'
            },
            {
                id: 'or_gf_split',
                name: 'Split',
                image: '../images/siege/oregon/oregon-groundfloor/split.PNG'
            },
            {
                id: 'or_gf_stage',
                name: 'Stage',
                image: '../images/siege/oregon/oregon-groundfloor/stage.PNG'
            },
            {
                id: 'or_gf_tower-stairs',
                name: 'Tower Stairs',
                image: '../images/siege/oregon/oregon-groundfloor/tower-stairs.PNG'
            },
            {
                id: 'or_gf_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/oregon/oregon-groundfloor/white-stairs.PNG'
            },
            {
                id: 'or_gf_yellow-hall',
                name: 'Yellow Hall',
                image: '../images/siege/oregon/oregon-groundfloor/yellow-hall.PNG'
            },
            {
                id: 'or_gf_z',
                name: 'Z',
                image: '../images/siege/oregon/oregon-groundfloor/z.PNG'
            },

            //#endregion

            //#region Oregon Topfloor

            {
                id: 'or_2f_armory',
                name: 'Armory',
                image: '../images/siege/oregon/oregon-topfloor/armory.PNG'
            },
            {
                id: 'or_2f_attic',
                name: 'Attic',
                image: '../images/siege/oregon/oregon-topfloor/attic.PNG'
            },
            {
                id: 'or_2f_big-tower',
                name: 'Big Tower',
                image: '../images/siege/oregon/oregon-topfloor/big-tower.PNG'
            },
            {
                id: 'or_2f_big-window',
                name: 'Big Window',
                image: '../images/siege/oregon/oregon-topfloor/big-window.PNG'
            },
            {
                id: 'or_2f_bridge',
                name: 'Bridge',
                image: '../images/siege/oregon/oregon-topfloor/bridge.PNG'
            },
            {
                id: 'or_2f_bunks',
                name: 'Bunks',
                image: '../images/siege/oregon/oregon-topfloor/bunks.PNG'
            },
            {
                id: 'or_2f_cement',
                name: 'Cement',
                image: '../images/siege/oregon/oregon-topfloor/cement.PNG'
            },
            {
                id: 'or_2f_dorm-hall',
                name: 'Dorm Hall',
                image: '../images/siege/oregon/oregon-topfloor/dorm-hall.PNG'
            },
            {
                id: 'or_2f_games',
                name: 'Games',
                image: '../images/siege/oregon/oregon-topfloor/games.PNG'
            },
            {
                id: 'or_2f_hard',
                name: 'Hard',
                image: '../images/siege/oregon/oregon-topfloor/hard.PNG'
            },
            {
                id: 'or_2f_k1',
                name: 'K1',
                image: '../images/siege/oregon/oregon-topfloor/k1.PNG'
            },
            {
                id: 'or_2f_k2',
                name: 'K2',
                image: '../images/siege/oregon/oregon-topfloor/k2.PNG'
            },
            {
                id: 'or_2f_kids',
                name: 'Kids',
                image: '../images/siege/oregon/oregon-topfloor/kids.PNG'
            },
            {
                id: 'or_2f_main-hall',
                name: 'Main Hall',
                image: '../images/siege/oregon/oregon-topfloor/main-hall.PNG'
            },
            {
                id: 'or_2f_master',
                name: 'Master',
                image: '../images/siege/oregon/oregon-topfloor/master.PNG'
            },
            {
                id: 'or_2f_small-office',
                name: 'Small Office',
                image: '../images/siege/oregon/oregon-topfloor/small-office.PNG'
            },
            {
                id: 'or_2f_top-small-tower',
                name: 'Top Small Tower',
                image: '../images/siege/oregon/oregon-topfloor/top-small-tower.PNG'
            },
            {
                id: 'or_2f_trophy',
                name: 'Trophy',
                image: '../images/siege/oregon/oregon-topfloor/trophy.PNG'
            },
            {
                id: 'or_2f_walk-in',
                name: 'Walk In',
                image: '../images/siege/oregon/oregon-topfloor/walk-in.PNG'
            },
            {
                id: 'or_2f_white-stairs',
                name: 'White Stairs',
                image: '../images/siege/oregon/oregon-topfloor/white-stairs.PNG'
            }

            //#endregion
        ]
    },
    outback: {
        name: 'Outback',
        callouts: [
            //#region Outback Groundfloor
            //#endregion

            //#region Outback Topfloor

            {
                id: 'out_2f_bbq',
                name: 'BBQ',
                image: '../images/siege/outback/outback-topfloor/bbq.PNG'
            },
            {
                id: 'out_2f_bull',
                name: 'Bull',
                image: '../images/siege/outback/outback-topfloor/bull.PNG'
            },
            {
                id: 'out_2f_bunks',
                name: 'Bunks',
                image: '../images/siege/outback/outback-topfloor/bunks.PNG'
            },
            {
                id: 'out_2f_connector',
                name: 'Connector',
                image: '../images/siege/outback/outback-topfloor/connector.PNG'
            },
            {
                id: 'out_2f_games',
                name: 'Games',
                image: '../images/siege/outback/outback-topfloor/games.PNG'
            },
            {
                id: 'out_2f_garage',
                name: 'Garage',
                image: '../images/siege/outback/outback-topfloor/garage.PNG'
            },
            {
                id: 'out_2f_garage-stairs',
                name: 'Garage Stairs',
                image: '../images/siege/outback/outback-topfloor/garage-stairs.PNG'
            },
            {
                id: 'out_2f_hallway',
                name: 'Hallway',
                image: '../images/siege/outback/outback-topfloor/hallway.PNG'
            },
            {
                id: 'out_2f_laundry',
                name: 'Laundry',
                image: '../images/siege/outback/outback-topfloor/laundry.PNG'
            },
            {
                id: 'out_2f_lockers',
                name: 'Lockers',
                image: '../images/siege/outback/outback-topfloor/lockers.PNG'
            },
            {
                id: 'out_2f_lockers-window',
                name: 'Lockers Window',
                image: '../images/siege/outback/outback-topfloor/lockers-window.PNG'
            },
            {
                id: 'out_2f_office',
                name: 'Office',
                image: '../images/siege/outback/outback-topfloor/office.PNG'
            },
            {
                id: 'out_2f_office-feethole',
                name: 'Office Feethole',
                image: '../images/siege/outback/outback-topfloor/office-feetholes.PNG'
            },
            {
                id: 'out_2f_party',
                name: 'Party',
                image: '../images/siege/outback/outback-topfloor/party.PNG'
            },
            {
                id: 'out_2f_party-hallway',
                name: 'Party Hallway',
                image: '../images/siege/outback/outback-topfloor/party-hallway.PNG'
            },
            {
                id: 'out_2f_piano',
                name: 'Piano',
                image: '../images/siege/outback/outback-topfloor/piano.PNG'
            },
            {
                id: 'out_2f_shark',
                name: 'Shark',
                image: '../images/siege/outback/outback-topfloor/shark.PNG'
            },
            {
                id: 'out_2f_shark-stairs',
                name: 'Shark Stairs',
                image: '../images/siege/outback/outback-topfloor/shark-stairs.PNG'
            },
            {
                id: 'out_2f_showers',
                name: 'Showers',
                image: '../images/siege/outback/outback-topfloor/showers.PNG'
            },
            {
                id: 'out_2f_soda-window',
                name: 'Soda Window',
                image: '../images/siege/outback/outback-topfloor/soda-window.PNG'
            },
            {
                id: 'out_2f_supplies',
                name: 'Supplies',
                image: '../images/siege/outback/outback-topfloor/supplies.PNG'
            },
            {
                id: 'out_2f_yellow-stairs',
                name: 'Yellow Stairs',
                image: '../images/siege/outback/outback-topfloor/yellow-stairs.PNG'
            }

            //#endregion
        ]
    },
};


export default mapData;