input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E F G A B C5 ", 285)
    music.playMelody("C D E F G A B C5 ", 285)
    music.playMelody("C5 B A G F E D C ", 285)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showString("Hello!")
    basic.showString("ik ben")
    basic.showString("daan")
    music.playMelody("C E - D G - A D ", 285)
    basic.showString("ik ga jullie")
    music.playMelody("E C B G F A C5 D ", 285)
    basic.showString("iets vertellen")
    music.playMelody("C E - D G - A D ", 285)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        led.plot(1, 2)
    }
})
music.playMelody("- C5 - - - - - - ", 120)
