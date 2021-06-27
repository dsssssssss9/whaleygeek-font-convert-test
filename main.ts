input.onButtonPressed(Button.A, function () {
    whaleysans.showNumber(90)
})
input.onButtonPressed(Button.AB, function () {
    colorbit_51bit.clear()
})
input.onButtonPressed(Button.B, function () {
    for (let loop1 = 0; loop1 <= 4; loop1++) {
        for (let loop2 = 0; loop2 <= 4; loop2++) {
            if (led.pointBrightness(loop1, loop2) > 0) {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.White))
            } else {
                colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
            }
        }
    }
})
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.clear()
