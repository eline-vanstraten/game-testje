import { Actor, Label, Font, FontUnit, Color, Vector } from "excalibur"

export class UI extends Actor {

    scoreLabel
    score
    player

    constructor(player) {
        super()
        // console.log("Im ben een UI")

        // this.name = name
        // this.x = x
        // this.y = y

        console.log(`${player}`)

        this.score = {
            "player-one": 0,
            "player-two": 0
        }
    

        this.scoreLabelOne = new Label({
            text: 'Player one Score: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.scoreLabelOne)

        this.scoreLabelTwo = new Label({
            text: 'Player two Score: 0',
            pos: new Vector(100, 80),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.scoreLabelTwo)
    }

    showScore(player, score) {
        // console.log("add a  point")

        this.score[player] = score

        if (player === "player-one") {
            this.scoreLabelOne.text = `Player one Score: ${score}`
        }

        if (player === "player-two") {
            this.scoreLabelTwo.text = `Player two Score: ${score}`
            

        }
    }

}