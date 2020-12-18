const playerElement = document.getElementById('player'),
    leftController = document.getElementById('left'),
    rightController = document.getElementById('right'),
    jumpController = document.getElementById('jump')

let player = {
        jumping: false,
        status: "idle"
    },
    pressedKey = false


playerElement.style.left = "0px"
playerElement.style.top = "50px"


leftController.onclick = () => {
    left()
}
rightController.onclick = () => {
    right()
}
jumpController.onclick = () => {
    jump()
}

document.onkeydown = (e) => {
    if (e.key == "ArrowLeft") {
        left();
        pressedKey = 1
    }
    if (e.key == "ArrowRight") {
        right();
        pressedKey = 2
    }
    if (e.key == "ArrowUp") {
        jump()
    }
}

document.onkeyup = (e) => {
    clearInterval(player.interval)
    if (e.key == "ArrowLeft") {
        pressedKey = 1
    }
    if (e.key == "ArrowRight") {
        pressedKey = 2
    }
    if (e.key == "ArrowUp") {}
}

function left() {
    playerElement.style.left = parseInt(playerElement.style.left) - 20 + "px"
}

function right() {
    playerElement.style.left = parseInt(playerElement.style.left) + 20 + "px"
}

function jump() {
    // if (pressedKey == 1) {
    //     left()
    // } else if (pressedKey == 2) {
    //     right()
    // }
    if (player.jumping == false) {
        player.jumping = true

        playerElement.style.transitionDuration = "250ms"
        playerElement.style.top = parseInt(playerElement.style.top) - 50 + "px"

        setTimeout(() => {
            playerElement.style.transitionDuration = "300ms"
            playerElement.style.top = parseInt(playerElement.style.top) + 50 + "px"

            setTimeout(() => {
                player.jumping = false
            }, 300)
        }, 250)
    }
}