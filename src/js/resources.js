import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    Bubble: new ImageSource('images/bubble.png'),
    Background: new ImageSource('images/background.png'),
    Mine: new ImageSource('images/mine.png')
    // NomNom: New Sound('sounds/hungry.wav'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }