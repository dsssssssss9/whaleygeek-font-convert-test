input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 99; index++) {
        whaleysans.showNumber(index)
        for (let loop1 = 0; loop1 <= 4; loop1++) {
            for (let loop2 = 0; loop2 <= 4; loop2++) {
                if (led.pointBrightness(loop1, loop2) > 0) {
                    colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Red))
                } else {
                    colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
                }
            }
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    colorbit_51bit.clear()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(16)
colorbit_51bit.clear()
led.enable(true)
colorbit_51bit.show()
