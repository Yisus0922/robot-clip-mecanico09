music.play(music.stringPlayable("E B C5 A B G A F ", 65), music.PlaybackMode.InBackground)
basic.showString("Holaaa")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . #
    # . . . #
    # # # # #
    `)
let azul = 255
let rojo = 0
let verde = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
for (let index = 0; index < 255; index++) {
    rojo += 1
    azul += -1
    strip.showColor(neopixel.rgb(rojo, verde, azul))
    basic.pause(1)
}
maqueen.servoRun(maqueen.Servos.S1, 0)
basic.pause(1000)
