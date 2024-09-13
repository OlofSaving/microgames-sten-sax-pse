input.onButtonPressed(Button.A, function () {
    Knapp_A()
    bläddra()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Player1 game1", Player1)
})
input.onButtonPressed(Button.B, function () {
    Knapp_B()
    bläddra()
})
radio.onReceivedValue(function (name, value) {
    let resultat1 = 0
    Player1 = resultat1
})
function bläddra () {
    if (Player1 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        if (Player1 == 2) {
            basic.showIcon(IconNames.Scissors)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
}
function Knapp_B () {
    if (Player1 < 3) {
        Player1 += 1
    } else {
        Player1 = 1
    }
}
function Knapp_A () {
    if (Player1 > 1) {
        Player1 += -1
    } else {
        Player1 = 3
    }
}
let Player1 = 0
Player1 = 1
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
