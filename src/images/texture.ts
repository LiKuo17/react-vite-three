import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import grassImage from "./grass.jpg";
import dirtImage from "./dirt.jpg";
import glassImage from "./glass.png";
import woodImage from "./wood.png";
import logImage from "./log.jpg";
const groundTexture = new TextureLoader().load(grassImage)
groundTexture.magFilter = NearestFilter
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(100,100)

const dirtTexture = new TextureLoader().load(dirtImage)
const grassTexture = new TextureLoader().load(grassImage)
const glassTexture = new TextureLoader().load(glassImage)
const logTexture = new TextureLoader().load(logImage)
const woodTexture = new TextureLoader().load(woodImage)

dirtTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export default  {
    groundTexture,
    dirtTexture,
    grassTexture,
    glassTexture,
    logTexture,
    woodTexture,
}