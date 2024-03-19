basic.forever(function () {
    if (input.lightLevel() >= 70) {
        music.play(music.stringPlayable("- - - - - - - - ", 220), music.PlaybackMode.UntilDone)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(500)
    }
    pins.servoWritePin(AnalogPin.P0, 90)
    music.stopMelody(MelodyStopOptions.All)
})
