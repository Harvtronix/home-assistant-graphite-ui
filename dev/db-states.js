/* eslint-disable max-len */
const states = [
    {
        'attributes': {
            'azimuth': 328.06,
            'elevation': -22.84,
            'friendly_name': 'Sun',
            'next_dawn': '2019-05-14T09:10:38+00:00',
            'next_dusk': '2019-05-15T00:49:54+00:00',
            'next_midnight': '2019-05-14T05:00:16+00:00',
            'next_noon': '2019-05-14T17:00:16+00:00',
            'next_rising': '2019-05-14T09:42:38+00:00',
            'next_setting': '2019-05-15T00:17:54+00:00'
        },
        'context': {
            'id': '3e831b75f03e4affae4ceb58be70c0ca',
            'user_id': null
        },
        'entity_id': 'sun.sun',
        'last_changed': '2019-05-14T00:16:52.002937+00:00',
        'last_updated': '2019-05-14T02:56:30.002394+00:00',
        'state': 'below_horizon'
    },
    {
        'attributes': {
            'entity_id': [
                'light.office_lights',
                'switch.office_speakers'
            ],
            'friendly_name': 'Office',
            'hidden': true,
            'order': 0,
            'view': true
        },
        'context': {
            'id': '7a45b66d9259498c9f3c8ed29183c281',
            'user_id': null
        },
        'entity_id': 'group.office',
        'last_changed': '2019-05-14T01:34:46.335665+00:00',
        'last_updated': '2019-05-14T01:34:46.335665+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'attribution': 'Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.',
            'entity_picture': 'https://api.met.no/weatherapi/weathericon/1.1/?symbol=9;content_type=image/png',
            'friendly_name': 'Weather Symbol'
        },
        'context': {
            'id': 'eb291c71e9e14639963f5c0d9e7d1dac',
            'user_id': null
        },
        'entity_id': 'sensor.weather_symbol',
        'last_changed': '2019-05-13T23:29:56.909712+00:00',
        'last_updated': '2019-05-13T23:29:56.909712+00:00',
        'state': '9'
    },
    {
        'attributes': {
            'attribution': 'Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.',
            'friendly_name': 'Weather Temperature',
            'unit_of_measurement': '°F'
        },
        'context': {
            'id': 'f136a7a08a544612a5ca21f6f1e316cf',
            'user_id': null
        },
        'entity_id': 'sensor.weather_temperature',
        'last_changed': '2019-05-14T02:30:01.892098+00:00',
        'last_updated': '2019-05-14T02:30:01.892098+00:00',
        'state': '39.6'
    },
    {
        'attributes': {
            'attribution': 'Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.',
            'friendly_name': 'Weather Humidity',
            'unit_of_measurement': '%'
        },
        'context': {
            'id': '1053810663c04121b3a18cb2c6bb31c1',
            'user_id': null
        },
        'entity_id': 'sensor.weather_humidity',
        'last_changed': '2019-05-14T02:30:01.892297+00:00',
        'last_updated': '2019-05-14T02:30:01.892297+00:00',
        'state': '99.4'
    },
    {
        'attributes': {
            'days_offset': 0,
            'excludes': [
                'sat',
                'sun',
                'holiday'
            ],
            'friendly_name': 'Workday Sensor',
            'workdays': [
                'mon',
                'tue',
                'wed',
                'thu',
                'fri'
            ]
        },
        'context': {
            'id': '0de36f275048497db68ab0fcba51e8fb',
            'user_id': null
        },
        'entity_id': 'binary_sensor.workday_sensor',
        'last_changed': '2019-05-13T04:00:19.001480+00:00',
        'last_updated': '2019-05-13T04:00:19.001480+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'Lock Up',
            'last_triggered': '2019-05-14T00:00:34.573880+00:00'
        },
        'context': {
            'id': 'db2d119a8fb44dde816858ecacfd8b47',
            'user_id': null
        },
        'entity_id': 'script.1535769013275',
        'last_changed': '2019-05-13T01:29:30.787237+00:00',
        'last_updated': '2019-05-14T00:00:34.577078+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Bed Time',
            'last_triggered': null
        },
        'context': {
            'id': 'ba95b3e123454265925ef23fa9fc229d',
            'user_id': null
        },
        'entity_id': 'script.1535436271565',
        'last_changed': '2019-05-13T01:29:30.787404+00:00',
        'last_updated': '2019-05-13T01:29:30.787404+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'auto': true,
            'entity_id': [
                'script.1535436271565',
                'script.1535769013275'
            ],
            'friendly_name': 'all scripts',
            'hidden': true,
            'order': 1
        },
        'context': {
            'id': '1f8a47ea15ba4c118f643f15a6f83df6',
            'user_id': null
        },
        'entity_id': 'group.all_scripts',
        'last_changed': '2019-05-13T01:29:30.801116+00:00',
        'last_updated': '2019-05-13T01:29:30.801116+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'At 9:00 PM (sun-thurs)',
            'id': '1540832472225',
            'last_triggered': '2019-05-14T01:00:00.004833+00:00'
        },
        'context': {
            'id': '3db7d4d584324afe81e11ef985752fe6',
            'user_id': null
        },
        'entity_id': 'automation.at_9_00_pm_sun_thurs',
        'last_changed': '2019-05-13T01:29:31.337112+00:00',
        'last_updated': '2019-05-14T01:00:00.005135+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'Christmas Lights On',
            'id': '1543803375103',
            'last_triggered': null
        },
        'context': {
            'id': 'b4554cc3b93b4458b3e1e02c9ebb39ec',
            'user_id': null
        },
        'entity_id': 'automation.christmas_lights_on',
        'last_changed': '2019-05-13T01:29:30.803345+00:00',
        'last_updated': '2019-05-13T01:29:30.803345+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'At 7:00 AM (everyday)',
            'id': '1550540421438',
            'last_triggered': '2019-05-13T11:00:00.005225+00:00'
        },
        'context': {
            'id': '0892a2da21024a4cbfc9a19c0ea0caae',
            'user_id': null
        },
        'entity_id': 'automation.at_7_00_am_everyday',
        'last_changed': '2019-05-13T01:29:31.338841+00:00',
        'last_updated': '2019-05-13T11:00:00.005479+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'At 6:00 AM (on weekdays)',
            'id': '1540832600146',
            'last_triggered': '2019-05-13T10:00:00.007300+00:00'
        },
        'context': {
            'id': '7244644c752d4ffb9f90621fb1dfc6cd',
            'user_id': null
        },
        'entity_id': 'automation.at_6_00_am_on_weekdays',
        'last_changed': '2019-05-13T01:29:31.340187+00:00',
        'last_updated': '2019-05-13T10:00:00.007455+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'Christmas Lights Off',
            'id': '1543803456723',
            'last_triggered': null
        },
        'context': {
            'id': '6cf00f5ae6b64f55b0e88657606b87f7',
            'user_id': null
        },
        'entity_id': 'automation.christmas_lights_off',
        'last_changed': '2019-05-13T01:29:30.803755+00:00',
        'last_updated': '2019-05-13T01:29:30.803755+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'At 5:00 AM (everyday)',
            'id': '1550540166621',
            'last_triggered': '2019-05-13T09:00:00.004417+00:00'
        },
        'context': {
            'id': '238fd6559ff144b09248599807524e71',
            'user_id': null
        },
        'entity_id': 'automation.at_5_00_am_everyday',
        'last_changed': '2019-05-13T01:29:31.341677+00:00',
        'last_updated': '2019-05-13T09:00:00.004719+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'When temperature rises above freezing',
            'id': '1552321089486',
            'last_triggered': '2019-05-13T02:29:32.924820+00:00'
        },
        'context': {
            'id': '2c650b11db754d959afeed89e1c1021b',
            'user_id': null
        },
        'entity_id': 'automation.when_temperature_rises_above_freezing',
        'last_changed': '2019-05-13T01:29:31.343298+00:00',
        'last_updated': '2019-05-13T02:29:32.924997+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'When Front Door unlocked from outside',
            'id': '1535271110109',
            'last_triggered': '2019-05-13T21:23:24.721129+00:00'
        },
        'context': {
            'id': '8d88b084bcad457fabb7f2c9bce177d1',
            'user_id': null
        },
        'entity_id': 'automation.when_front_door_unlocked_from_outside',
        'last_changed': '2019-05-13T01:29:31.345428+00:00',
        'last_updated': '2019-05-13T21:23:24.721293+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'When sun sets (everyday)',
            'id': '1540831994808',
            'last_triggered': '2019-05-14T00:16:51.007426+00:00'
        },
        'context': {
            'id': 'e2416590b195460ca6137e67217d6012',
            'user_id': null
        },
        'entity_id': 'automation.when_sun_sets_everyday',
        'last_changed': '2019-05-13T01:29:31.346804+00:00',
        'last_updated': '2019-05-14T00:16:51.007655+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'When Tree on for 1 hour',
            'id': '1543807381750',
            'last_triggered': '2019-02-22T11:00:02.022121+00:00'
        },
        'context': {
            'id': '8dbda7287ebc4c159a7cceef113e9649',
            'user_id': null
        },
        'entity_id': 'automation.when_tree_on_for_1_hour',
        'last_changed': '2019-05-13T01:29:30.804424+00:00',
        'last_updated': '2019-05-13T01:29:30.804424+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'When temperature drops to freezing',
            'id': '1552320962814',
            'last_triggered': '2019-04-29T02:31:00.020004+00:00'
        },
        'context': {
            'id': '01c8d5ee0db74af9b27f029dab81fc0e',
            'user_id': null
        },
        'entity_id': 'automation.when_temperature_drops_to_freezing',
        'last_changed': '2019-05-13T01:29:31.347891+00:00',
        'last_updated': '2019-05-13T01:29:31.347891+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'When sun rises (on weekdays)',
            'id': '1540832770838',
            'last_triggered': '2019-05-13T10:13:42.004334+00:00'
        },
        'context': {
            'id': '451adc5089e94bb496301d530bd32147',
            'user_id': null
        },
        'entity_id': 'automation.when_sun_rises_on_weekdays',
        'last_changed': '2019-05-13T01:29:31.348571+00:00',
        'last_updated': '2019-05-13T10:13:42.004606+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'At 11:00 PM (everyday)',
            'id': '1543803190625',
            'last_triggered': '2019-05-13T03:00:00.006799+00:00'
        },
        'context': {
            'id': 'b987a01f56ec40af8571d74c06a9af1c',
            'user_id': null
        },
        'entity_id': 'automation.at_11_00_pm_everyday',
        'last_changed': '2019-05-13T01:29:31.349673+00:00',
        'last_updated': '2019-05-13T03:00:00.007020+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'auto': true,
            'entity_id': [
                'automation.at_11_00_pm_everyday',
                'automation.at_5_00_am_everyday',
                'automation.at_6_00_am_on_weekdays',
                'automation.at_7_00_am_everyday',
                'automation.at_9_00_pm_sun_thurs',
                'automation.christmas_lights_off',
                'automation.christmas_lights_on',
                'automation.when_front_door_unlocked_from_outside',
                'automation.when_tree_on_for_1_hour',
                'automation.when_sun_rises_on_weekdays',
                'automation.when_sun_sets_everyday',
                'automation.when_temperature_drops_to_freezing',
                'automation.when_temperature_rises_above_freezing'
            ],
            'friendly_name': 'all automations',
            'hidden': true,
            'order': 2
        },
        'context': {
            'id': 'a0fe45abd0c6470ea5d3caf5c600611d',
            'user_id': null
        },
        'entity_id': 'group.all_automations',
        'last_changed': '2019-05-13T01:29:31.352733+00:00',
        'last_updated': '2019-05-13T01:29:31.352733+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'friendly_name': 'Office TV',
            'supported_features': 21437
        },
        'context': {
            'id': 'f61e682020184cf081ae4d13dd2ad419',
            'user_id': null
        },
        'entity_id': 'media_player.office_tv',
        'last_changed': '2019-05-13T01:29:30.899545+00:00',
        'last_updated': '2019-05-13T01:29:30.899545+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Dressing Room Speaker',
            'supported_features': 21437
        },
        'context': {
            'id': '84f7a607ade74126b4ffaf8d8eb711cd',
            'user_id': null
        },
        'entity_id': 'media_player.googlehome1470',
        'last_changed': '2019-05-13T06:48:34.804168+00:00',
        'last_updated': '2019-05-13T06:48:34.804168+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Office Home',
            'supported_features': 21437
        },
        'context': {
            'id': '2c7ea3199884430bad581efbf9fabc07',
            'user_id': null
        },
        'entity_id': 'media_player.googlehome7689',
        'last_changed': '2019-05-13T08:26:57.955582+00:00',
        'last_updated': '2019-05-13T08:26:57.955582+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Bedroom Speaker',
            'supported_features': 21437
        },
        'context': {
            'id': '8631bed05a094ebb86b6b399ac341082',
            'user_id': null
        },
        'entity_id': 'media_player.bedroom_speaker',
        'last_changed': '2019-05-13T08:02:36.220329+00:00',
        'last_updated': '2019-05-13T08:02:36.220329+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Kitchen Speaker',
            'supported_features': 21437
        },
        'context': {
            'id': '2ae0bbb2accc44baa06ea75cd449917f',
            'user_id': null
        },
        'entity_id': 'media_player.kitchen_speaker',
        'last_changed': '2019-05-14T00:51:15.456355+00:00',
        'last_updated': '2019-05-14T00:51:15.456355+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Living Room Speaker',
            'supported_features': 21437
        },
        'context': {
            'id': '77e9e8f978bf466f814060db713c8c09',
            'user_id': null
        },
        'entity_id': 'media_player.living_room_speaker',
        'last_changed': '2019-05-13T06:51:49.772715+00:00',
        'last_updated': '2019-05-13T06:51:49.772715+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Everything',
            'supported_features': 21437
        },
        'context': {
            'id': 'c83a9756cc8d48cd886a2ed606daa208',
            'user_id': null
        },
        'entity_id': 'media_player.everything',
        'last_changed': '2019-05-13T06:24:36.616964+00:00',
        'last_updated': '2019-05-13T06:24:36.616964+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 0,
            'averageResponseRTT': 0,
            'capabilities': [
                'beaming',
                'listening',
                'primaryController'
            ],
            'friendly_name': 'Aeotec ZW090 Z-Stick Gen5 US',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': false,
            'lastRequestRTT': 0,
            'lastResponseRTT': 0,
            'manufacturer_name': 'Aeotec',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                11,
                4,
                14
            ],
            'node_id': 1,
            'node_name': 'Aeotec ZW090 Z-Stick Gen5 US',
            'product_name': 'ZW090 Z-Stick Gen5 US',
            'query_stage': 'Complete',
            'receivedCnt': 0,
            'receivedDups': 0,
            'receivedTS': '2019-05-12 21:29:31:502 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 1,
            'sentFailed': 0,
            'sentTS': '2019-05-12 21:29:31:707 '
        },
        'context': {
            'id': '0300b856c91449e49c2a50fbd85dc750',
            'user_id': null
        },
        'entity_id': 'zwave.aeotec_zw090_zstick_gen5_us',
        'last_changed': '2019-05-13T01:29:58.753339+00:00',
        'last_updated': '2019-05-13T01:29:58.753339+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'averageRequestRTT': 23,
            'averageResponseRTT': 34,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Office Lights',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 23,
            'lastResponseRTT': 34,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                1,
                3,
                4,
                7,
                10,
                11,
                13,
                14,
                15
            ],
            'node_id': 2,
            'node_name': 'GE 14294 In-Wall Smart Dimmer',
            'product_name': '14294 In-Wall Smart Dimmer',
            'query_stage': 'Complete',
            'receivedCnt': 34,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 22:37:52:074 ',
            'receivedUnsolicited': 15,
            'retries': 0,
            'sentCnt': 26,
            'sentFailed': 0,
            'sentTS': '2019-05-13 22:37:52:040 '
        },
        'context': {
            'id': '7a0f527d70234f1f818579f18b77ccf6',
            'user_id': null
        },
        'entity_id': 'zwave.office_lights',
        'last_changed': '2019-05-13T01:30:45.330275+00:00',
        'last_updated': '2019-05-14T02:37:52.117163+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'brightness': 36,
            'friendly_name': 'Office Lights',
            'node_id': 2,
            'supported_features': 33,
            'value_id': '72057594076299265',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': 'cc750698687442c59f67dd79d47d90c8',
            'user_id': 'fe5ed5f9ee7d43ed8a714e5495ae7dd3'
        },
        'entity_id': 'light.office_lights',
        'last_changed': '2019-05-14T01:34:46.335118+00:00',
        'last_updated': '2019-05-14T02:37:52.117536+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'auto': true,
            'entity_id': [
                'light.office_lights',
                'light.bedroom_lights'
            ],
            'friendly_name': 'all lights',
            'hidden': true,
            'order': 3,
            'view': true
        },
        'context': {
            'id': 'f6ad49975f4245e9aa1c1f823df0c32f',
            'user_id': null
        },
        'entity_id': 'group.all_lights',
        'last_changed': '2019-05-14T00:30:57.552791+00:00',
        'last_updated': '2019-05-14T00:30:57.552791+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'averageRequestRTT': 74,
            'averageResponseRTT': 160,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Living Room Lights',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 70,
            'lastResponseRTT': 143,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                4,
                9,
                10,
                11,
                13,
                14,
                15
            ],
            'node_id': 3,
            'node_name': 'GE 14291 In-Wall Smart Switch',
            'product_name': '14291 In-Wall Smart Switch',
            'query_stage': 'Complete',
            'receivedCnt': 11,
            'receivedDups': 1,
            'receivedTS': '2019-05-13 19:58:46:877 ',
            'receivedUnsolicited': 3,
            'retries': 0,
            'sentCnt': 16,
            'sentFailed': 0,
            'sentTS': '2019-05-13 17:23:26:220 '
        },
        'context': {
            'id': 'd0809fab2bee4d17902d391eae04fce9',
            'user_id': null
        },
        'entity_id': 'zwave.living_room_lights',
        'last_changed': '2019-05-13T01:30:45.333015+00:00',
        'last_updated': '2019-05-13T23:58:46.979957+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Living Room Lights',
            'node_id': 3,
            'value_id': '72057594093060096',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '876743f1de6e43c7b4745696caa51010',
            'user_id': null
        },
        'entity_id': 'switch.living_room_lights',
        'last_changed': '2019-05-13T23:58:46.980334+00:00',
        'last_updated': '2019-05-13T23:58:46.980334+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'auto': true,
            'entity_id': [
                'switch.outside_outlet1',
                'switch.outside_outlet2',
                'switch.office_speakers',
                'switch.living_room_lights',
                'switch.porch_light',
                'switch.workout_lights',
                'switch.island_light',
                'switch.outlet1'
            ],
            'friendly_name': 'all switches',
            'hidden': true,
            'order': 4
        },
        'context': {
            'id': '264c349ad41f40ea86a9a1268de34f67',
            'user_id': null
        },
        'entity_id': 'group.all_switches',
        'last_changed': '2019-05-13T01:29:31.537104+00:00',
        'last_updated': '2019-05-13T01:29:31.699510+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'averageRequestRTT': 1505,
            'averageResponseRTT': 1841,
            'battery_level': 100,
            'capabilities': [
                'frequent',
                'routing',
                'beaming'
            ],
            'friendly_name': 'Front Door',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': false,
            'lastRequestRTT': 1543,
            'lastResponseRTT': 1599,
            'manufacturer_name': 'Schlage',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                3,
                7,
                9,
                10,
                11,
                13,
                14,
                15
            ],
            'node_id': 4,
            'node_name': 'Schlage BE469 Touchscreen Deadbolt',
            'product_name': 'BE469 Touchscreen Deadbolt',
            'query_stage': 'Complete',
            'receivedCnt': 28,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 22:13:06:543 ',
            'receivedUnsolicited': 8,
            'retries': 0,
            'sentCnt': 26,
            'sentFailed': 0,
            'sentTS': '2019-05-13 20:00:36:932 '
        },
        'context': {
            'id': '4cb65c098ee141b58719fbf8017d7bbb',
            'user_id': null
        },
        'entity_id': 'zwave.front_door',
        'last_changed': '2019-05-13T01:30:45.333354+00:00',
        'last_updated': '2019-05-14T02:13:06.646144+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Front Door',
            'lock_status': 'Locked by RF',
            'node_id': 4,
            'notification': 'RF Lock',
            'value_id': '72057594110836736',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': 'db2d119a8fb44dde816858ecacfd8b47',
            'user_id': null
        },
        'entity_id': 'lock.front_door',
        'last_changed': '2019-05-14T00:00:37.032755+00:00',
        'last_updated': '2019-05-14T00:00:37.032755+00:00',
        'state': 'locked'
    },
    {
        'attributes': {
            'friendly_name': 'Back Door',
            'lock_status': 'Locked by RF',
            'node_id': 10004,
            'notification': 'RF Lock',
            'value_id': '72057594110836736',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': 'db2d119a8fb44dde816858ecacfd8b47',
            'user_id': null
        },
        'entity_id': 'lock.back_door',
        'last_changed': '2019-05-14T00:00:37.032755+00:00',
        'last_updated': '2019-05-14T00:00:37.032755+00:00',
        'state': 'unlocked'
    },
    {
        'attributes': {
            'auto': true,
            'entity_id': [
                'lock.front_door'
            ],
            'friendly_name': 'all locks',
            'hidden': true,
            'order': 5
        },
        'context': {
            'id': 'ae59d21d68c24d918340a5f89d5f2378',
            'user_id': null
        },
        'entity_id': 'group.all_locks',
        'last_changed': '2019-05-14T00:00:37.033256+00:00',
        'last_updated': '2019-05-14T00:00:37.033256+00:00',
        'state': 'locked'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt Alarm Type',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082497',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '8d88b084bcad457fabb7f2c9bce177d1',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_alarm_type',
        'last_changed': '2019-05-13T21:23:24.715155+00:00',
        'last_updated': '2019-05-13T21:23:24.715155+00:00',
        'state': '19'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt Alarm Level',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082513',
            'value_index': 1,
            'value_instance': 1
        },
        'context': {
            'id': '3e22ac7cf8d94e66849b51a44280032c',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_alarm_level',
        'last_changed': '2019-05-13T21:23:24.715715+00:00',
        'last_updated': '2019-05-13T21:23:24.715715+00:00',
        'state': '3'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt SourceNodeId',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082529',
            'value_index': 2,
            'value_instance': 1
        },
        'context': {
            'id': '81fd9649778541e98ab98985d91451f2',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_sourcenodeid',
        'last_changed': '2019-05-13T21:23:24.719072+00:00',
        'last_updated': '2019-05-13T21:23:24.719072+00:00',
        'state': '0'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt Access Control',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082641',
            'value_index': 9,
            'value_instance': 1
        },
        'context': {
            'id': '3a70594bdcdd4ac29140b9edbd174029',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_access_control',
        'last_changed': '2019-05-13T21:23:24.719393+00:00',
        'last_updated': '2019-05-13T21:23:24.719393+00:00',
        'state': '6'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt Burglar',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082657',
            'value_index': 10,
            'value_instance': 1
        },
        'context': {
            'id': 'b35fc0c3c1f04ac09d3ba94a204ce2a1',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_burglar',
        'last_changed': '2019-05-13T01:29:31.588977+00:00',
        'last_updated': '2019-05-13T01:29:31.588977+00:00',
        'state': '0'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt Power Management',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082673',
            'value_index': 11,
            'value_instance': 1
        },
        'context': {
            'id': '8a9d4a502c6a449b8899ed6c71ae567d',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_power_management',
        'last_changed': '2019-05-13T01:29:31.589664+00:00',
        'last_updated': '2019-05-13T01:29:31.589664+00:00',
        'state': '0'
    },
    {
        'attributes': {
            'friendly_name': 'Schlage BE469 Touchscreen Deadbolt System',
            'node_id': 4,
            'unit_of_measurement': '',
            'value_id': '72057594111082689',
            'value_index': 12,
            'value_instance': 1
        },
        'context': {
            'id': '8e53ee441c074878be53a07e5d0f0344',
            'user_id': null
        },
        'entity_id': 'sensor.schlage_be469_touchscreen_deadbolt_system',
        'last_changed': '2019-05-13T01:30:32.344029+00:00',
        'last_updated': '2019-05-13T01:30:32.344029+00:00',
        'state': '1'
    },
    {
        'attributes': {
            'averageRequestRTT': 770,
            'averageResponseRTT': 806,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Office Speakers',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 1339,
            'lastResponseRTT': 1417,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                4
            ],
            'node_id': 7,
            'node_name': 'GE 14288 Duplex Receptacle',
            'product_name': '14288 Duplex Receptacle',
            'query_stage': 'Complete',
            'receivedCnt': 8,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 12:25:38:924 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 16,
            'sentFailed': 0,
            'sentTS': '2019-05-13 12:25:37:507 '
        },
        'context': {
            'id': 'e010ad77cabb446791a6eaf314e45bc5',
            'user_id': null
        },
        'entity_id': 'zwave.office_speakers',
        'last_changed': '2019-05-13T01:30:45.334017+00:00',
        'last_updated': '2019-05-13T16:25:39.027983+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Office Speakers',
            'node_id': 7,
            'value_id': '72057594160168960',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '1743d47583e44a0197afee4b0eed02c2',
            'user_id': null
        },
        'entity_id': 'switch.office_speakers',
        'last_changed': '2019-05-13T16:25:39.028311+00:00',
        'last_updated': '2019-05-13T16:25:39.028311+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 29,
            'averageResponseRTT': 50,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Bedroom Lights',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 28,
            'lastResponseRTT': 43,
            'manufacturer_name': 'Leviton',
            'max_baud_rate': 40000,
            'neighbors': [
                3,
                4,
                10,
                11,
                13,
                14,
                15
            ],
            'node_id': 9,
            'node_name': 'Leviton DZ6HD-1BZ Decora 600W Smart Dimmer',
            'product_name': 'DZ6HD-1BZ Decora 600W Smart Dimmer',
            'query_stage': 'Complete',
            'receivedCnt': 18,
            'receivedDups': 1,
            'receivedTS': '2019-05-13 22:56:35:250 ',
            'receivedUnsolicited': 5,
            'retries': 0,
            'sentCnt': 19,
            'sentFailed': 0,
            'sentTS': '2019-05-13 22:56:35:207 '
        },
        'context': {
            'id': '2cfc1f8dcbcf4df99fadca196eebaa6f',
            'user_id': null
        },
        'entity_id': 'zwave.bedroom_lights',
        'last_changed': '2019-05-13T01:30:45.334326+00:00',
        'last_updated': '2019-05-14T02:56:35.352802+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            // 'brightness': 1,
            'friendly_name': 'Bedroom Lights',
            'node_id': 9,
            'supported_features': 1,
            'value_id': '72057594193739777',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': 'fabde26b9b8b48eba0bbe13840b045f6',
            'user_id': 'fe5ed5f9ee7d43ed8a714e5495ae7dd3'
        },
        'entity_id': 'light.bedroom_lights',
        'last_changed': '2019-05-14T02:56:35.353173+00:00',
        'last_updated': '2019-05-14T02:56:35.353173+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'averageRequestRTT': 63,
            'averageResponseRTT': 143,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Porch Light',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 74,
            'lastResponseRTT': 147,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                3,
                4,
                9,
                11,
                13,
                14,
                15
            ],
            'node_id': 10,
            'node_name': 'GE 14291 In-Wall Smart Switch',
            'product_name': '14291 In-Wall Smart Switch',
            'query_stage': 'Complete',
            'receivedCnt': 11,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 21:00:00:199 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 22,
            'sentFailed': 0,
            'sentTS': '2019-05-13 21:00:00:052 '
        },
        'context': {
            'id': '1ecbf24fcf8a44eaa51a09618f682368',
            'user_id': null
        },
        'entity_id': 'zwave.porch_light',
        'last_changed': '2019-05-13T01:30:45.337630+00:00',
        'last_updated': '2019-05-14T01:00:00.302321+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Porch Light',
            'node_id': 10,
            'value_id': '72057594210500608',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '220b9bc527e54757bdd35112bdd5621a',
            'user_id': null
        },
        'entity_id': 'switch.porch_light',
        'last_changed': '2019-05-14T01:00:00.302662+00:00',
        'last_updated': '2019-05-14T01:00:00.302662+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 23,
            'averageResponseRTT': 61,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Outlet 1',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 23,
            'lastResponseRTT': 71,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                1,
                2,
                3,
                4,
                9,
                10,
                13,
                14,
                15
            ],
            'node_id': 11,
            'node_name': 'GE Unknown: type=5052, id=3038',
            'product_name': 'Unknown: type=5052, id=3038',
            'query_stage': 'Complete',
            'receivedCnt': 8,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 07:00:00:100 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 16,
            'sentFailed': 0,
            'sentTS': '2019-05-13 07:00:00:029 '
        },
        'context': {
            'id': '4cc6db107ad84ba1896272b56dafce1d',
            'user_id': null
        },
        'entity_id': 'zwave.outlet1',
        'last_changed': '2019-05-13T01:30:45.339363+00:00',
        'last_updated': '2019-05-13T11:00:00.201886+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Salt Lamp',
            'node_id': 11,
            'value_id': '72057594227277824',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '82eb2430c93c445f81050306141214a9',
            'user_id': null
        },
        'entity_id': 'switch.outlet1',
        'last_changed': '2019-05-13T11:00:00.203442+00:00',
        'last_updated': '2019-05-13T11:00:00.203442+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 0,
            'averageResponseRTT': 0,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Outside Outlet 1',
            'is_awake': true,
            'is_failed': true,
            'is_info_received': true,
            'is_ready': false,
            'is_zwave_plus': true,
            'lastRequestRTT': 0,
            'lastResponseRTT': 0,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'node_id': 12,
            'node_name': 'GE 14284 Outdoor Smart Switch',
            'product_name': '14284 Outdoor Smart Switch',
            'query_stage': 'CacheLoad',
            'receivedCnt': 0,
            'receivedDups': 0,
            'receivedTS': '2019-05-12 21:29:31:504 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 3,
            'sentFailed': 1,
            'sentTS': '2019-05-12 21:29:50:775 '
        },
        'context': {
            'id': 'c0afaf3ee8dc4087a73d69fb0357b6c7',
            'user_id': null
        },
        'entity_id': 'zwave.outside_outlet1',
        'last_changed': '2019-05-13T01:29:51.051078+00:00',
        'last_updated': '2019-05-13T01:29:51.051078+00:00',
        'state': 'dead'
    },
    {
        'attributes': {
            'friendly_name': 'Christmas Lights',
            'node_id': 12,
            'value_id': '72057594244055040',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '1c49c02d08c94eb38521773b4eddf629',
            'user_id': null
        },
        'entity_id': 'switch.outside_outlet1',
        'last_changed': '2019-05-13T01:29:31.655911+00:00',
        'last_updated': '2019-05-13T01:29:31.655911+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 63,
            'averageResponseRTT': 146,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Outside Outlet 2',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 72,
            'lastResponseRTT': 145,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                3,
                4,
                9,
                10,
                11,
                14,
                15
            ],
            'node_id': 13,
            'node_name': 'GE 14284 Outdoor Smart Switch',
            'product_name': '14284 Outdoor Smart Switch',
            'query_stage': 'Complete',
            'receivedCnt': 9,
            'receivedDups': 0,
            'receivedTS': '2019-05-12 22:29:33:116 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 16,
            'sentFailed': 0,
            'sentTS': '2019-05-12 22:29:32:972 '
        },
        'context': {
            'id': 'c6f73944f9d84981af6a513d3ec4eab3',
            'user_id': null
        },
        'entity_id': 'zwave.outside_outlet2',
        'last_changed': '2019-05-13T01:30:45.339571+00:00',
        'last_updated': '2019-05-13T02:29:33.219438+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Dehumidifier',
            'node_id': 13,
            'value_id': '72057594260832256',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '20d05cb13fc5479ca1b0f43cfe7d89c8',
            'user_id': 'fe5ed5f9ee7d43ed8a714e5495ae7dd3'
        },
        'entity_id': 'switch.outside_outlet2',
        'last_changed': '2019-05-13T01:31:00.334391+00:00',
        'last_updated': '2019-05-13T01:31:00.334391+00:00',
        'state': 'on'
    },
    {
        'attributes': {
            'averageRequestRTT': 51,
            'averageResponseRTT': 43,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Workout Lights',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 33,
            'lastResponseRTT': 44,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                1,
                2,
                3,
                4,
                9,
                10,
                11,
                13,
                15
            ],
            'node_id': 14,
            'node_name': 'GE 14291 In-Wall Smart Switch',
            'product_name': '14291 In-Wall Smart Switch',
            'query_stage': 'Complete',
            'receivedCnt': 10,
            'receivedDups': 2,
            'receivedTS': '2019-05-13 18:47:01:965 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 14,
            'sentFailed': 0,
            'sentTS': '2019-05-13 18:47:01:920 '
        },
        'context': {
            'id': '67cbaffc32944d99a595e683bc305e34',
            'user_id': null
        },
        'entity_id': 'zwave.workout_lights',
        'last_changed': '2019-05-13T01:30:45.339765+00:00',
        'last_updated': '2019-05-13T22:47:02.038122+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Workout Lights',
            'node_id': 14,
            'value_id': '72057594277609472',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': 'e811f6db797b4387965dff883ae08b93',
            'user_id': null
        },
        'entity_id': 'switch.workout_lights',
        'last_changed': '2019-05-13T22:47:02.038438+00:00',
        'last_updated': '2019-05-13T22:47:02.038438+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'averageRequestRTT': 103,
            'averageResponseRTT': 232,
            'capabilities': [
                'beaming',
                'listening',
                'routing',
                'zwave_plus'
            ],
            'friendly_name': 'Island Light',
            'is_awake': true,
            'is_failed': false,
            'is_info_received': true,
            'is_ready': true,
            'is_zwave_plus': true,
            'lastRequestRTT': 112,
            'lastResponseRTT': 143,
            'manufacturer_name': 'GE',
            'max_baud_rate': 40000,
            'neighbors': [
                2,
                3,
                4,
                9,
                10,
                11,
                13,
                14
            ],
            'node_id': 15,
            'node_name': 'GE 14291 In-Wall Smart Switch',
            'product_name': '14291 In-Wall Smart Switch',
            'query_stage': 'Complete',
            'receivedCnt': 14,
            'receivedDups': 0,
            'receivedTS': '2019-05-13 20:31:27:889 ',
            'receivedUnsolicited': 0,
            'retries': 0,
            'sentCnt': 25,
            'sentFailed': 0,
            'sentTS': '2019-05-13 20:31:27:746 '
        },
        'context': {
            'id': '687b2c46b0914253878bf0d8ae019fa6',
            'user_id': null
        },
        'entity_id': 'zwave.island_light',
        'last_changed': '2019-05-13T01:31:56.859687+00:00',
        'last_updated': '2019-05-14T00:31:27.992107+00:00',
        'state': 'ready'
    },
    {
        'attributes': {
            'friendly_name': 'Island Light',
            'node_id': 15,
            'value_id': '72057594294386688',
            'value_index': 0,
            'value_instance': 1
        },
        'context': {
            'id': '237f294781fc40758d91b84fed9be343',
            'user_id': null
        },
        'entity_id': 'switch.island_light',
        'last_changed': '2019-05-14T00:31:27.992445+00:00',
        'last_updated': '2019-05-14T00:31:27.992445+00:00',
        'state': 'off'
    },
    {
        'attributes': {
            'friendly_name': 'Update Available',
            'release_notes': 'https://www.home-assistant.io/latest-release-notes/'
        },
        'context': {
            'id': 'd6aaaff3fbaa422bbddfbb8b6604718c',
            'user_id': null
        },
        'entity_id': 'updater.updater',
        'last_changed': '2019-05-13T02:29:30.493515+00:00',
        'last_updated': '2019-05-13T02:29:30.493515+00:00',
        'state': '0.92.2'
    },
    {
        'attributes': {
            'message': 'Login attempt or request with invalid authentication from 192.168.151.150',
            'title': 'Login attempt failed'
        },
        'context': {
            'id': 'bac46638c8494a3ebcc037d371030a52',
            'user_id': null
        },
        'entity_id': 'persistent_notification.http_login',
        'last_changed': '2019-05-14T02:51:38.783447+00:00',
        'last_updated': '2019-05-14T02:51:38.783447+00:00',
        'state': 'notifying'
    }
]

module.exports = states
