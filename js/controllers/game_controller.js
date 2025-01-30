import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

const PALABRAS = [
  // Animales
  'gatito', 'perrito', 'unicornio', 'delfín', 'panda', 'koala', 'jirafa', 'elefante', 'pingüino', 'tigre',
  'león', 'mariposa', 'tortuga', 'conejo', 'hamster', 'loro', 'pollito', 'pez', 'oso', 'cebra',

  // Comidas
  'pizza', 'helado', 'hamburguesa', 'papas fritas', 'spaghetti', 'chocolate', 'galletas', 'torta', 'caramelos', 'pancakes',
  'waffles', 'sushi', 'tacos', 'ensalada', 'sandwich', 'empanada', 'alfajor', 'pochoclos', 'nachos', 'donas',

  // Objetos escolares
  'mochila', 'lápices', 'cuaderno', 'cartuchera', 'tijeras', 'goma', 'sacapuntas', 'regla', 'compás', 'libro',
  'carpeta', 'marcadores', 'crayones', 'pegamento', 'calculadora', 'diccionario', 'agenda', 'pizarra', 'borrador', 'hojas',

  // Tecnología
  'tablet', 'celular', 'computadora', 'auriculares', 'parlante', 'televisor', 'control remoto', 'cargador', 'mouse', 'teclado',
  'consola', 'joystick', 'router', 'selfie', 'emoji', 'bluetooth', 'wifi', 'netflix', 'youtube', 'spotify',

  // Juguetes
  'peluche', 'muñeca', 'rompecabezas', 'juego de mesa', 'bloques', 'plastilina', 'slime', 'pelota', 'cartas', 'dominó',
  'ajedrez', 'damas', 'monopoly', 'jenga', 'twister', 'uno', 'memoria', 'pictionary', 'tetris', 'dados'
];

export default class extends Controller {
  static targets = [
    "configScreen", "selectionScreen", "revelationScreen",
    "finalScreen", "impostorScreen", "playerCount",
    "startButton", "playerButtons", "playerTitle",
    "roleText", "impostorReveal", "secretWordReveal"
  ];

  connect() {
    this.resetGame();
  }

  resetGame() {
    this.gameState = {
      players: [],
      remainingPlayers: [],
      seenPlayers: [],
      secretWord: '',
      impostor: null,
      currentPlayer: null
    };

    this.showScreen('configScreen');
  }

  validatePlayerCount(event) {
    const count = parseInt(event.target.value);
    if (count < 3) {
      event.target.value = 3;
    } else if (count > 10) {
      event.target.value = 10;
    }
  }

  startGame() {
    const playerCount = parseInt(this.playerCountTarget.value);
    this.gameState.players = Array.from({length: playerCount}, (_, i) => i + 1);
    this.gameState.remainingPlayers = [...this.gameState.players];
    this.gameState.secretWord = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
    this.gameState.impostor = this.gameState.players[Math.floor(Math.random() * playerCount)];

    this.updatePlayerButtons();
    this.showScreen('selectionScreen');
  }

  updatePlayerButtons() {
    this.playerButtonsTarget.innerHTML = this.gameState.remainingPlayers
      .map(player => `
                <button
                    data-action="game#selectPlayer"
                    data-player="${player}"
                    class="w-full bg-blue-500 text-white text-2xl p-8 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                >
                    Jugador ${player}
                </button>
            `).join('');
  }

  selectPlayer(event) {
    const player = parseInt(event.currentTarget.dataset.player);
    this.gameState.currentPlayer = player;
    this.gameState.remainingPlayers = this.gameState.remainingPlayers.filter(p => p !== player);

    this.playerTitleTarget.textContent = `¡Hola Jugador ${player}!`;

    if (player === this.gameState.impostor) {
      this.roleTextTarget.textContent = "¡Sos el impostor! 🤫";
    } else {
      this.roleTextTarget.innerHTML = `La palabra secreta es: <span class="text-4xl font-bold text-green-600">${this.gameState.secretWord}</span>`;
    }

    this.showScreen('revelationScreen');
  }

  continueGame() {
    this.gameState.seenPlayers.push(this.gameState.currentPlayer);

    if (this.gameState.remainingPlayers.length > 0) {
      this.updatePlayerButtons();
      this.showScreen('selectionScreen');
    } else {
      this.showScreen('finalScreen');
    }
  }

  revealImpostor() {
    this.impostorRevealTarget.innerHTML = `El impostor era el <span class="text-4xl font-bold text-red-600">Jugador ${this.gameState.impostor}</span>`;
    this.secretWordRevealTarget.innerHTML = `La palabra secreta era: <span class="text-3xl font-bold text-green-600">${this.gameState.secretWord}</span>`;
    this.showScreen('impostorScreen');
  }

  showScreen(screenName) {
    const screens = [
      'configScreen', 'selectionScreen', 'revelationScreen',
      'finalScreen', 'impostorScreen'
    ];

    screens.forEach(screen => {
      this[`${screen}Target`].classList.toggle('hidden', screen !== screenName);
    });
  }
}
