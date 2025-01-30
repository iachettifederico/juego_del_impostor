import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import GameController from "./controllers/game_controller.js"

const application = Application.start()
application.register("game", GameController)
