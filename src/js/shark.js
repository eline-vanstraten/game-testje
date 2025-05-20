import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Fish } from './fish.js'
import { Mine } from './mine.js'



export class Shark extends Actor {

    //als je het op meer plekken wil gebruiken. dan gebruik je ook de this elke keer ervoor
    name
    score
    player

    constructor(name, x, y, player) {
        super({ width: Resources.Shark.width, height: Resources.Shark.height, collisionType: CollisionType.Active })

        console.log(`My name is ${name}`)
        // console.log(`My age is ${age}`)

        console.log(`${player}`)
        // let x = Math.random() * -500
        // let y = Math.random() * 450

        console.log("I am a shark")
        this.graphics.use(Resources.Shark.toSprite())

        // let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(0.2, 0.2)

        this.pos = new Vector(x, y)
        this.baseSpeed = 10
        // this.vel = new Vector(200, 0)

        this.score = 0
        this.name = name
        this.player = player

        // this.events.on("exitviewport", (e) => this.sharkLeft(e))
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on('collisionstart', (event) => this.hitMine(event))
    }

    hitSomething(event) {
        if (event.other.owner instanceof Fish) {
            // console.log(`${this.name} hits a fish`)
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            // console.log('hit Fish')
            event.other.owner.kill()
            // Resources.NomNom.play()

            this.score++

            //game aanroepen
            this.scene.engine.ui.showScore(this.player, this.score)

            // event.other.owner.wasEatenByShark()
        }
    }


    onPreUpdate(engine) {
        if (this.player === "player-one") {

            let xspeed = 0
            let yspeed = 0
            let kb = engine.input.keyboard

            if (kb.isHeld(Keys.Up)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.Down)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.Left)) {
                xspeed = -300
                this.graphics.flipHorizontal = false      // flip de sprite
            }
            if (kb.isHeld(Keys.Right)) {
                xspeed = 300
                this.graphics.flipHorizontal = true     // flip de sprite
            }
            this.vel = new Vector(xspeed, yspeed)
            // console.log(this.score)

        }

        if (this.player === "player-two") {

            let xspeed = 0
            let yspeed = 0
            let kb = engine.input.keyboard

            if (kb.isHeld(Keys.W)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.S)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.A)) {
                xspeed = -300
                this.graphics.flipHorizontal = false       // flip de sprite
            }
            if (kb.isHeld(Keys.D)) {
                xspeed = 300
                this.graphics.flipHorizontal = true      // flip de sprite
            }
            this.vel = new Vector(xspeed, yspeed)
            //  console.log(this.score)
        }

    }

    hitMine(event) {
        if (event.other.owner instanceof Mine) {

            let fishes = this.scene.actors.filter(actor => actor instanceof Fish)
            
            for(fishes of this.currentScene.actors){
                 event.other.owner.kill()
            }
        }
    }

    // sharkLeft(e) {
    //     let x = Math.random() * -1200
    //     let y = Math.random() * 450
    //     e.target.pos = new Vector(x, y)

    // }
}