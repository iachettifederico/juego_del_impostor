import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import GameController from "./controllers/game_controller.js"

window.Stimulus = Application.start()
window.Stimulus.register("game", GameController)
