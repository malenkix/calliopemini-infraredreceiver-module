/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace InfraredReceiver  {
    let infraredLastSeenAt = 0
    /**
     * Sets a Pin to be the digital input for an IR device.
     * @param pin the Pin to be used as an input for an IR device
     */
    //% block
    export function setInfraredReceiverPin(pin: DigitalPin): void {
        pins.setEvents(pin, PinEventType.Pulse)
        pins.setPull(pin, PinPullMode.PullUp)
        pins.onPulsed(pin, PulseValue.Low, function () {
        })
        pins.onPulsed(pin, PulseValue.High, function () {
        })
        control.onEvent(pin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, function () {
            infraredLastSeenAt = control.millis()
        })
    }

    /**
     * Checks whether an infrared signal has just been detected recently.
     */
    //% block
    export function isInfraredSignalDetected(): boolean {
        return control.millis() - infraredLastSeenAt <= 100
    }

}
