const DeviceStates = {
    LOCKED: 'locked',
    OFF: 'off',
    ON: 'on',
    UNKNOWN: 'unknown',
    UNLOCKED: 'unlocked'
}

const EntityAttributes = {
    BATTERY_LEVEL: 'battery_level',
    BRIGHTNESS: 'brightness',
    SUPPORTED_FEATURES: 'supported_features'
}

const EntityTypes = {
    AUTOMATION: 'automation.graphite',
    LIGHT: 'light',
    LOCK: 'lock',
    ROUTINE: 'script.graphite',
    SWITCH: 'switch',
    ZWAVE: 'zwave'
}

/* Constants with dependencies on base constants */

const ToggleableEntities = [
    EntityTypes.LIGHT,
    EntityTypes.SWITCH
]

const LockableEntities = [
    EntityTypes.LOCK
]

export default {
    DeviceStates,
    EntityAttributes,
    EntityTypes,
    ToggleableEntities,
    LockableEntities
}
