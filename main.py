def on_button_pressed_a():
    whaleysans.show_number(19)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index in range(5):
        for Index1 in range(5):
            colorbit_51bit.draw_color_bit(0, 0, colorbit.colors(BitColors.RED))
input.on_button_pressed(Button.B, on_button_pressed_b)

colorbit_51bit: colorbit.Strip = None
colorbit_51bit = colorbit.init_color_bit(DigitalPin.P2, BitColorMode.RGB)