const createStateChangedMessage = (oldState, newState) => ({
    'id':123,
    'type':'event',
    'event':{
        'event_type':'state_changed',
        'data':{
            'entity_id':newState.entity_id,
            'old_state':{
                ...oldState
            },
            'new_state':{
                ...newState
            }
        },
        'origin':'LOCAL',
        'time_fired':'2019-06-14T05:02:28.702236+00:00',
        'context':{
            'id':'476bf3d96bae49adb9d6f27653a5584c',
            'user_id':'fe5ed5f9ee7d43ed8a714e5495ae7dd3'
        }
    }
})

module.exports = {
    createStateChangedMessage
}
