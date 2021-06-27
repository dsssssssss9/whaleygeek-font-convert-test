def on_button_pressed_a():
    proportionalFont.show_string("Space The Final Frontier!", 150)
    proportionalFont.show_space(3, 150)
    colorbit_51bit.clear()
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global LedsOff
    LedsOff = not (LedsOff)
    led.enable(LedsOff)
input.on_button_pressed(Button.B, on_button_pressed_b)

LedsOff = False
colorbit_51bit: colorbit.Strip = None
colorbit_51bit = colorbit.init_color_bit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.set_brightness(8)
colorbit_51bit.clear()
colorbit_51bit.show()

def on_forever():
    for loop1 in range(5):
        for loop2 in range(5):
            if led.point(loop1, loop2):
                colorbit_51bit.draw_color_bit(loop1, loop2, colorbit.colors(BitColors.WHITE))
            else:
                colorbit_51bit.draw_color_bit(loop1, loop2, colorbit.colors(BitColors.BLACK))
basic.forever(on_forever)
