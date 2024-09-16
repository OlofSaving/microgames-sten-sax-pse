def on_button_pressed_a():
    Knapp_A()
    bläddra()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_value("Player1 game1", Player1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Knapp_B()
    bläddra()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global Player1
    resultat1 = 0
    Player1 = resultat1
radio.on_received_value(on_received_value)

def bläddra():
    if Player1 == 1:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    else:
        if Player1 == 2:
            basic.show_icon(IconNames.SCISSORS)
        else:
            basic.show_icon(IconNames.SQUARE)
def Knapp_B():
    global Player1
    if Player1 < 3:
        Player1 += 1
    else:
        Player1 = 1
def Knapp_A():
    global Player1
    if Player1 > 1:
        Player1 += -1
    else:
        Player1 = 3
Player1 = 0
Player1 = 1
radio.set_group(1)
basic.show_leds("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    """)

def on_forever():
    pass
basic.forever(on_forever)
