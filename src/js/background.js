import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor(){
        super()

        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(400, 450/2)
        this.scale = new Vector(1.3, 1.3)
    }
}