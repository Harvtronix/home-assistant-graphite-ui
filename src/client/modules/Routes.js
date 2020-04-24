const Routes = {
    _default_: '/devices/all',
    devices_room: '/devices/:room',
    devices_room_dimmer_entityId: '/devices/:room/dimmer/:entityId'
}

function mklink (routeString, ...args) {
    const parts = routeString.split(/:[^:/]+/)
    let link = ''

    // Remove any blank trailing element
    if (parts[parts.length - 1] == '') {
        parts.pop()
    }

    console.log(parts)

    if (parts.length !== args.length) {
        throw new Error(
            `invalid number of replacements specified. Expected ${parts.length}. Got ${args.length}`
        )
    }

    for (const i in parts) {
        link += parts[i] + args[i]
    }

    return link
}

export default Routes
export { mklink }
