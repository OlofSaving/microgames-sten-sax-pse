input.onButtonPressed(Button.A, function () {
    Knapp_A()
    bläddra()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Player1 game1", vapen)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "SSP") {
        game.startCountdown(3000)
        vapen = 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (receivedString == "tärning") {
        while (false) {
            if (input.buttonIsPressed(Button.A)) {
            	
            } else if (input.buttonIsPressed(Button.B)) {
            	
            } else if (input.buttonIsPressed(Button.AB)) {
            	
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Knapp_B()
    bläddra()
})
function bläddra () {
    if (vapen == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        if (vapen == 2) {
            basic.showIcon(IconNames.Scissors)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
}
function Knapp_B () {
    if (vapen < 3) {
        vapen += 1
    } else {
        vapen = 1
    }
    return 0
}
function Knapp_A () {
    if (vapen > 1) {
        vapen += -1
    } else {
        vapen = 3
    }
    return 0
}
let vapen = 0
radio.setGroup(1)
basic.forever(function () {
	
})
