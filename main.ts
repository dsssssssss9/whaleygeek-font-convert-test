input.onButtonPressed(Button.A, function () {
    proportionalFont.showString("To Be Or Not To Be", 150)
    proportionalFont.showSpace(3, 150)
    colorbit_51bit.clear()
    basic.clearScreen()
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(16)
colorbit_51bit.clear()
led.enable(false)
colorbit_51bit.show()
basic.forever(function () {
    for (let loop1 = 0; loop1 <= 4; loop1++) {
        for (let loop2 = 0; loop2 <= 4; loop2++) {
            if (led.pointBrightness(loop1, loop2) > 0) {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Red))
            } else {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
})
