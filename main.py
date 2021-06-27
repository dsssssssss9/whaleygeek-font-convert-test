def on_button_pressed_a():
    whaleysans.show_number(90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    colorbit_51bit.clear()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for loop1 in range(5):
        for loop2 in range(5):
            if led.point_brightness(loop1, loop2) > 0:
                colorbit_51bit.draw_color_bit(loop1, loop2, colorbit.colors(BitColors.WHITE))
            else:
                colorbit_51bit.draw_color_bit(loop1, loop2, colorbit.colors(BitColors.BLACK))
input.on_button_pressed(Button.B, on_button_pressed_b)

colorbit_51bit: colorbit.Strip = None
colorbit_51bit = colorbit.init_color_bit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.clear()