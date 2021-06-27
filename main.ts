input.onButtonPressed(Button.A, function () {
    proportionalFont.showString("Space The Final Frontier!", 150)
    proportionalFont.showSpace(3, 150)
    colorbit_51bit.clear()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    LedsOff = !(LedsOff)
    led.enable(LedsOff)
})
let LedsOff = false
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(8)
colorbit_51bit.clear()
colorbit_51bit.show()
basic.forever(function () {
    for (let loop1 = 0; loop1 <= 4; loop1++) {
        for (let loop2 = 0; loop2 <= 4; loop2++) {
            if (led.point(loop1, loop2)) {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.White))
            } else {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
})
