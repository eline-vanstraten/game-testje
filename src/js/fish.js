import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'


export class Fish extends Actor{
    constructor(){
        super({width: Resources.Fish.width, height: Resources.Fish.height})

        let x = Math.random() * 1200
        let y = Math.random() * 450

        this.graphics.use(Resources.Fish.toSprite())

        let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(sc, sc)

        this.pos = new Vector(800 + x, y)
        this.vel = new Vector(-100, 0)

        this.events.on("exitviewport", (e) => this.fishLeft(e))
    }

    fishLeft(e) {
        let x = Math.random() * 1200
        let y = Math.random() * 450
        e.target.pos = new Vector(800 + x, y)

    }

    wasEatenByShark(){
        console.log("I was eaten by shark")
        let x = Math.random() * 1200
        let y = Math.random() * 450
        this.pos = new Vector(800 + x, y)
    }

    // onPostKill(){
    //     // console.log("I was eaten by shark")
    //     this.unkill()
    //     let x = Math.random() * 1200
    //     let y = Math.random() * 450
    //     this.pos = new Vector(800 + x, y)
    // }
}

