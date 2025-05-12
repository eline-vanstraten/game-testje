import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bubble extends Actor {
    constructor() {
        super()

        let x = Math.random() * 1200
        let y = 600 + Math.random() * 100

        this.graphics.use(Resources.Bubble.toSprite())

        // let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(0.2, 0.2)

        this.pos = new Vector(x, y)
        this.vel = new Vector(0,-100)

        this.events.on("exitviewport", (e) => this.bubbleLeft(e))
    }

    bubbleLeft(e) {
        let x = Math.random() * 1200
        let y = 600 + Math.random() * 100
        e.target.pos = new Vector(x, y)

    }
}