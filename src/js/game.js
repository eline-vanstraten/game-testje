import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Shark } from './shark.js'
import { Fish } from './fish.js'
import { Bubble } from './bubble.js'
import { Background } from './background.js'

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
            let shark = new Shark()
           
            this.add(shark)
        // }

        for (let i = 0; i < 30; i++) {
    
            console.log("start de game!")
            // const bubble = new Actor()
            let bubble = new Bubble()
           
            this.add(bubble)
        }

        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(this.scoreLabel)
        // this.scoreLabel.text = `Score: 20`

    }

    addScore(){
        console.log("add a  point")
        this.scoreLabel +=1
        
        this.scoreLabel.text = `${scoreLabel}`    
}


}

new Game()
