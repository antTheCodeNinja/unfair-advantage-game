controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerSoFar.isHittingTile(CollisionDirection.Bottom)) {
        playerFall = 5
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (playerSoFar.isHittingTile(CollisionDirection.Bottom)) {
        if (playerSpeed < 0) {
            playerSpeed += 1
            pause(200)
        }
        if (playerSpeed > 2) {
            playerSpeed += 1
            pause(400)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerSpeed > 0) {
        playerSpeed = 1
        if (playerSpeed == 0) {
            playerSpeed += -1
        }
    }
    if (playerSpeed == 0) {
        playerSpeed += -2
    }
    if (playerSoFar.isHittingTile(CollisionDirection.Right)) {
        playerSpeed = -2
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.right.isPressed())) {
        if (!(controller.left.isPressed())) {
            if (playerSpeed > 0) {
                playerSpeed += 0.5
                pause(100)
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.left.isPressed())) {
        if (!(controller.right.isPressed())) {
            if (playerSpeed < 0) {
                playerSpeed += -0.5
                pause(100)
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerSpeed < 0) {
        playerSpeed = -1
        if (playerSpeed == 0) {
            playerSpeed += 1
        }
    }
    if (playerSpeed == 0) {
        playerSpeed += 2
    }
    if (playerSoFar.isHittingTile(CollisionDirection.Left)) {
        playerSpeed = 2
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (playerSoFar.isHittingTile(CollisionDirection.Bottom)) {
        if (playerSpeed > 0) {
            playerSpeed += -1
            pause(200)
        }
        if (playerSpeed < -2) {
            playerSpeed += -1
            pause(400)
        }
    }
})
let playerSpeed = 0
let playerSoFar: Sprite = null
let playerFall = 0
playerFall = 1
tiles.setCurrentTilemap(tilemap`level1`)
playerSoFar = sprites.create(img`
    ................................
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ...........dddddddddd...........
    ................................
    `, SpriteKind.Player)
playerSoFar.setStayInScreen(true)
scene.cameraFollowSprite(playerSoFar)
forever(function () {
    if (playerSoFar.isHittingTile(CollisionDirection.Bottom)) {
        playerFall = 0
    }
    if (!(playerSoFar.isHittingTile(CollisionDirection.Bottom))) {
        playerFall += 0.2
        playerFall += playerFall * 1.1
        if (playerFall > 10) {
            playerFall = 10
        }
        pause(200)
    }
})
forever(function () {
    playerSoFar.vx = playerSpeed * 35
    playerSoFar.vy = playerFall * 35
})
