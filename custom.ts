/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace InfraredReceiver  {
    export function setInfraredReceiverPin(pin: DigitalPin): void {
        pins.setEvents(pin, PinEventType.Pulse)
        pins.setPull(pin, PinPullMode.PullUp)
        pins.onPulsed(pin, PulseValue.Low, function () {
        })
        pins.onPulsed(pin, PulseValue.High, function () {
        })
        control.onEvent(pin, DAL.MICROBIT_PIN_EVENT_ON_TOUCH, function () {

        })
    }
    /**
     * TODO: Beschreibe deine Funktion hier
     * @param n Beschreibe die Parameter hier, eg: 5
     * @param s Beschreibe die Parameter hier, eg: "Hello"
     * @param e Beschreibe die Parameter hier
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: Beschreibe deine Funktion hier
     * @param value Beschreibe den Wert hier, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
