import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Mine extends Actor {
    constructor(){
        super()

        this.graphics.use(Resources.Mine.toSprite())
        this.pos = new Vector(400, 450/2)

         this.vel = new Vector(-50, 0)
        // this.scale = new Vector(1.3, 1.3)

        this.events.on("exitviewport", (e) => this.MineLeft(e))
    }

    MineLeft(e) {
        let x = 400
        let y = 450/2
        e.target.pos = new Vector(800 + x, y)
        // this.vel = new Vector(-100, 0)

    }
}