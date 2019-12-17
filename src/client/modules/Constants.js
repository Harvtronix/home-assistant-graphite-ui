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

const PAGE_TITLE_SUFFIX = ' – Graphite UI'

/* Constants with dependencies on base constants */

const LockableEntities = [
    EntityTypes.LOCK
]

const ToggleableEntities = [
    EntityTypes.LIGHT,
    EntityTypes.SWITCH
]

export default {
    DeviceStates,
    EntityAttributes,
    EntityTypes,
    PAGE_TITLE_SUFFIX,
    LockableEntities,
    ToggleableEntities
}
