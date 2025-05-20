import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Shark } from './shark.js'
import { Fish } from './fish.js'
import { Bubble } from './bubble.js'
import { Background } from './background.js'
import { UI } from './ui.js'
import { Mine } from './mine.js'


export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        let background = new Background()
        this.add(background)


        for (let i = 0; i < 50; i++) {
            console.log("start de game!")
            let fish = new Fish()
            // const fish = new Actor()
            this.add(fish)
        }


        // for (let i = 0; i < 10; i++) {
        console.log("start de game!")
        //gedrag in eigen bestand zetten
        let sharkOne = new Shark("Gerald", 250, 225, "player-one")
        // let sharkOne = new Shark("Gerald", 250, 225, "player-one")



        this.add(sharkOne)

        let sharkTwo = new Shark("Harry", 400, 300, "player-two")

        this.add(sharkTwo)
        // }

        this.ui = new UI()
        this.add(this.ui)

        this.mine = new Mine()
        this.add(this.mine)

       

        for (let i = 0; i < 30; i++) {

            console.log("start de game!")
            // const bubble = new Actor()
            let bubble = new Bubble()

            this.add(bubble)
        }


    }



}

new Game()
