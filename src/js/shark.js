import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Fish } from './fish.js'



export class Shark extends Actor {
    constructor() {
        super({width: Resources.Shark.width, height: Resources.Shark.height, collisionType:CollisionType.Active })


        let x = Math.random() * -500
        let y = Math.random() * 450

        console.log("I am a shark")
        this.graphics.use(Resources.Shark.toSprite())

        // let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(0.2, 0.2)

        this.pos = new Vector(x, y)
        this.baseSpeed = 10
        // this.vel = new Vector(200, 0)

        // this.events.on("exitviewport", (e) => this.sharkLeft(e))
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event){
        if (event.other.owner instanceof Fish) {
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            // console.log('hit Fish')
            event.other.owner.kill()
            // Resources.NomNom.play()

            //game aanroepen
            this.scene.engine.addScore()

            // event.other.owner.wasEatenByShark()
        }
    }


    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = true       // flip de sprite
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = false      // flip de sprite
        }
        this.vel = new Vector(xspeed, yspeed)
    }

    // sharkLeft(e) {
    //     let x = Math.random() * -1200
    //     let y = Math.random() * 450
    //     e.target.pos = new Vector(x, y)

    // }
}