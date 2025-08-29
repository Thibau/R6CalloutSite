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
    }
};


export default mapData;