const getBrightnessAsByte = (brightness = 0) => {
    if (brightness <= 0) {
        return 0
    }

    if (brightness > 100) {
        brightness = 100
    }

    return parseInt(
        Math.max(
            1,
            Math.round(brightness / 100 * 255)
        )
    )
}

const getBrightnessAsPercent = (brightness = 0) => {
    if (brightness <= 0) {
        return 0
    }

    if (brightness > 255) {
        brightness = 255
    }

    return parseInt(
        Math.max(
            1,
            Math.round(brightness / 255 * 100)
        )
    )
}

export default {
    getBrightnessAsByte,
    getBrightnessAsPercent
}
