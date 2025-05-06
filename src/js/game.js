import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 1200
            let y = Math.random() * 450

            console.log("start de game!")
            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())

            let sc = Math.random() * 2 + 0.2
            fish.scale = new Vector(sc, sc)

            fish.pos = new Vector(x, y)
            fish.vel = new Vector(-100, 0)

            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
        }

        
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * -1200
            let y = Math.random() * 450

            console.log("start de game!")
            const shark = new Actor()
            shark.graphics.use(Resources.Shark.toSprite())

            // let sc = Math.random() * 2 + 0.2
            shark.scale = new Vector(0.2, 0.2)

            shark.pos = new Vector(x, y)
            shark.vel = new Vector(200, 0)

            shark.events.on("exitviewport", (e) => this.sharkLeft(e))
            this.add(shark)
        }

        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 1200
            let y = 600 + Math.random() * 100

            console.log("start de game!")
            const bubble = new Actor()
            bubble.graphics.use(Resources.Bubble.toSprite())

            let sc = Math.random() * 2 + 0.2
            bubble.scale = new Vector(sc, sc)

            bubble.pos = new Vector(x, y)
            bubble.vel = new Vector(0,-100)

            bubble.events.on("exitviewport", (e) => this.bubbleLeft(e))
            this.add(bubble)
        }

    }

    fishLeft(e) {
        let x = Math.random() * 1200
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }

    sharkLeft(e) {
        let x = Math.random() * -1200
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }

    bubbleLeft(e) {
        let x = Math.random() * 1200
        let y = 600 + Math.random() * 100
        e.target.pos = new Vector(x, y)

    }
}

new Game()
