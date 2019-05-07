const db = {
    'states': [
        {
            'attributes': {
                'brightness': 21,
                'friendly_name': 'Office Lights',
                'node_id': 2,
                'supported_features': 33,
                'value_id': '72057594076299265',
                'value_index': 0,
                'value_instance': 1
            },
            'context': {
                'id': 'a0a4762b49324b3f918df035bd21a2e5',
                'user_id': null
            },
            'entity_id': 'light.office_lights',
            'last_changed': '2019-05-07T02: 08: 45.116055+00: 00',
            'last_updated': '2019-05-07T02: 08: 53.840079+00: 00',
            'state': 'on'
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
                'id': 'a470a840c53b46cc9a4072fc77c6ec96',
                'user_id': null
            },
            'entity_id': 'switch.living_room_lights',
            'last_changed': '2019-05-07T00: 55: 25.797142+00: 00',
            'last_updated': '2019-05-07T00: 55: 25.797142+00: 00',
            'state': 'off'
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
                'id': '23ff2b3947bd484fbfbd3bff1bcf9231',
                'user_id': null
            },
            'entity_id': 'switch.office_speakers',
            'last_changed': '2019-05-06T00: 44: 32.498918+00: 00',
            'last_updated': '2019-05-06T00: 44: 32.498918+00: 00',
            'state': 'off'
        },
        {
            'attributes': {
                'friendly_name': 'Bedroom Lights',
                'node_id': 9,
                'supported_features': 1,
                'value_id': '72057594193739777',
                'value_index': 0,
                'value_instance': 1
            },
            'context': {
                'id': '80ef26deca824069a11e70a6673a7463',
                'user_id': 'fe5ed5f9ee7d43ed8a714e5495ae7dd3'
            },
            'entity_id': 'light.bedroom_lights',
            'last_changed': '2019-05-07T02: 04: 03.989510+00: 00',
            'last_updated': '2019-05-07T02: 04: 03.989510+00: 00',
            'state': 'off'
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
                'id': '97f7a717247946bf866f2a95e0d395aa',
                'user_id': null
            },
            'entity_id': 'switch.porch_light',
            'last_changed': '2019-05-07T01: 00: 00.297220+00: 00',
            'last_updated': '2019-05-07T01: 00: 00.297220+00: 00',
            'state': 'off'
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
                'id': '6c96b8628e1b440fb022bcbd33366fc6',
                'user_id': null
            },
            'entity_id': 'switch.outlet1',
            'last_changed': '2019-05-06T11: 00: 00.165124+00: 00',
            'last_updated': '2019-05-06T11: 00: 00.165124+00: 00',
            'state': 'off'
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
                'id': '4406f6259508423ca4fc0cbe66d700b4',
                'user_id': null
            },
            'entity_id': 'switch.outside_outlet1',
            'last_changed': '2019-04-29T01: 31: 15.211275+00: 00',
            'last_updated': '2019-04-29T01: 31: 15.211275+00: 00',
            'state': 'off'
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
                'id': '788f9460292d4a81b88100b03b190e15',
                'user_id': null
            },
            'entity_id': 'switch.outside_outlet2',
            'last_changed': '2019-04-29T12: 31: 00.740719+00: 00',
            'last_updated': '2019-04-29T12: 31: 00.740719+00: 00',
            'state': 'on'
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
                'id': '92d6b7e9a7284dac8845ea52c56c5c54',
                'user_id': null
            },
            'entity_id': 'switch.workout_lights',
            'last_changed': '2019-05-06T23: 12: 48.742779+00: 00',
            'last_updated': '2019-05-06T23: 12: 48.742779+00: 00',
            'state': 'off'
        }
    ]
}

module.exports = () => (db)
