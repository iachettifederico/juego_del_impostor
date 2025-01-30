import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

const PALABRAS = [
  // Animales Mascotas
  'gatito', 'perrito', 'hamster', 'conejo', 'pez dorado', 'tortuga', 'canario', 'loro', 'cobayo', 'hurón',
  'gato persa', 'gato siamés', 'pastor alemán', 'labrador', 'chihuahua', 'pez beta', 'pececito', 'periquito', 'agapornis', 'ratón',

  // Animales Salvajes
  'león', 'tigre', 'elefante', 'jirafa', 'cebra', 'mono', 'gorila', 'panda', 'koala', 'canguro',
  'delfín', 'ballena', 'tiburón', 'pingüino', 'oso polar', 'lobo', 'zorro', 'mapache', 'ardilla', 'búho',
  'águila', 'serpiente', 'cocodrilo', 'hipopótamo', 'rinoceronte', 'camello', 'jaguar', 'leopardo', 'avestruz', 'flamenco',
  'puma', 'guepardo', 'castor', 'nutria', 'foca', 'morsa', 'orca', 'pulpo', 'medusa', 'tortuga marina',

  // Comidas y Bebidas
  'pizza', 'hamburguesa', 'hot dog', 'tacos', 'sushi', 'pasta', 'ensalada', 'sopa', 'sandwich', 'empanada',
  'helado', 'chocolate', 'galletas', 'torta', 'donas', 'muffins', 'waffles', 'pancakes', 'crepes', 'brownie',
  'jugo', 'gaseosa', 'limonada', 'batido', 'malteada', 'café', 'té', 'chocolate caliente', 'agua', 'leche',
  'nachos', 'papas fritas', 'pochoclos', 'caramelos', 'alfajor', 'chicle', 'palomitas', 'cereales', 'yogur', 'flan',

  // Frutas y Verduras
  'manzana', 'banana', 'naranja', 'pera', 'uva', 'frutilla', 'kiwi', 'sandía', 'melón', 'ananá',
  'durazno', 'ciruela', 'cereza', 'mandarina', 'limón', 'pomelo', 'mango', 'palta', 'coco', 'higo',
  'zanahoria', 'tomate', 'lechuga', 'papa', 'cebolla', 'zapallo', 'brócoli', 'espinaca', 'pepino', 'choclo',
  'arveja', 'zapallito', 'berenjena', 'remolacha', 'apio', 'repollo', 'coliflor', 'rabanito', 'pimiento', 'champiñón',

  // Objetos Escolares
  'mochila', 'cuaderno', 'libro', 'lápiz', 'lapicera', 'goma', 'regla', 'tijera', 'sacapuntas', 'cartuchera',
  'carpeta', 'pegamento', 'marcadores', 'crayones', 'calculadora', 'compás', 'escuadra', 'transportador', 'pincel', 'témperas',
  'plastilina', 'papel', 'cartulina', 'brillantina', 'cinta', 'abrochadora', 'clips', 'resaltador', 'tablero', 'pizarra',
  'borrador', 'tiza', 'diccionario', 'atlas', 'globo terráqueo', 'casillero', 'banco', 'silla', 'escritorio', 'estante',

  // Tecnología y Dispositivos
  'celular', 'tablet', 'computadora', 'televisor', 'consola', 'control remoto', 'mouse', 'teclado', 'monitor', 'parlante',
  'auriculares', 'cámara', 'reloj', 'smartwatch', 'drone', 'robot', 'impresora', 'escáner', 'proyector', 'micrófono',
  'cable', 'cargador', 'batería', 'pendrive', 'disco duro', 'router', 'modem', 'antena', 'satélite', 'bluetooth',
  'wifi', 'internet', 'aplicación', 'videojuego', 'joystick', 'pantalla', 'teclado virtual', 'webcam', 'selfie', 'emoji',

  // Juguetes y Juegos
  'pelota', 'muñeca', 'auto', 'tren', 'avión', 'barco', 'rompecabezas', 'dinosaurio', 'robot', 'peluche',
  'bloques', 'lego', 'plastilina', 'slime', 'cartas', 'dados', 'dominó', 'ajedrez', 'damas', 'monopoly',
  'jenga', 'twister', 'uno', 'pictionary', 'scrabble', 'memoria', 'tetris', 'playstation', 'xbox', 'nintendo',
  'patineta', 'patines', 'bicicleta', 'monopatín', 'pelota de fútbol', 'arco', 'red', 'aro de básquet', 'raqueta', 'soga',

  // Deportes y Actividades
  'fútbol', 'básquet', 'tenis', 'volleyball', 'natación', 'atletismo', 'gimnasia', 'patinaje', 'skateboard', 'surf',
  'hockey', 'rugby', 'baseball', 'golf', 'boxeo', 'karate', 'judo', 'taekwondo', 'yoga', 'pilates',
  'danza', 'ballet', 'hip hop', 'breakdance', 'acrobacia', 'malabarismo', 'circo', 'teatro', 'canto', 'música',
  'pintura', 'dibujo', 'escultura', 'fotografía', 'jardinería', 'cocina', 'lectura', 'escritura', 'ajedrez', 'videojuegos',

  // Lugares
  'casa', 'escuela', 'parque', 'plaza', 'biblioteca', 'museo', 'cine', 'teatro', 'shopping', 'supermercado',
  'hospital', 'farmacia', 'banco', 'restaurante', 'hotel', 'aeropuerto', 'estación', 'playa', 'montaña', 'bosque',
  'lago', 'río', 'cascada', 'desierto', 'selva', 'isla', 'volcán', 'glaciar', 'cueva', 'cañón',
  'ciudad', 'pueblo', 'barrio', 'calle', 'avenida', 'autopista', 'puente', 'túnel', 'puerto', 'faro',

  // Ropa y Accesorios
  'remera', 'pantalón', 'vestido', 'falda', 'campera', 'buzo', 'sweater', 'camisa', 'short', 'pollera',
  'medias', 'zapatillas', 'zapatos', 'botas', 'sandalias', 'ojotas', 'gorro', 'bufanda', 'guantes', 'gorra',
  'anteojos', 'reloj', 'collar', 'pulsera', 'anillo', 'aros', 'cartera', 'mochila', 'cinturón', 'corbata',
  'pijama', 'traje de baño', 'disfraz', 'delantal', 'uniforme', 'capa', 'corona', 'tiara', 'moño', 'vincha',

  // Naturaleza y Clima
  'sol', 'luna', 'estrella', 'planeta', 'cometa', 'nube', 'lluvia', 'nieve', 'granizo', 'viento',
  'tornado', 'huracán', 'relámpago', 'trueno', 'arcoiris', 'aurora', 'amanecer', 'atardecer', 'día', 'noche',
  'primavera', 'verano', 'otoño', 'invierno', 'calor', 'frío', 'templado', 'humedad', 'sequía', 'inundación',
  'árbol', 'flor', 'pasto', 'hoja', 'rama', 'tronco', 'raíz', 'semilla', 'fruto', 'bosque',

  // Profesiones y Oficios
  'doctor', 'enfermera', 'maestro', 'profesor', 'cocinero', 'policía', 'bombero', 'astronauta', 'piloto', 'artista',
  'músico', 'bailarín', 'actor', 'cantante', 'escritor', 'pintor', 'escultor', 'arquitecto', 'ingeniero', 'científico',
  'veterinario', 'dentista', 'abogado', 'juez', 'periodista', 'fotógrafo', 'diseñador', 'programador', 'electricista', 'plomero',
  'carpintero', 'jardinero', 'panadero', 'chef', 'mesero', 'vendedor', 'conductor', 'cartero', 'peluquero', 'granjero',

  // Personajes y Fantasía
  'superhéroe', 'princesa', 'príncipe', 'dragón', 'unicornio', 'hada', 'mago', 'bruja', 'pirata', 'ninja',
  'robot', 'alienígena', 'astronauta', 'vaquero', 'caballero', 'sirena', 'duende', 'gigante', 'monstruo', 'fantasma',
  'vampiro', 'hombre lobo', 'zombi', 'esqueleto', 'ángel', 'demonio', 'elfo', 'gnomo', 'trol', 'yeti',
  'centauro', 'pegaso', 'fénix', 'grifo', 'minotauro', 'cíclope', 'kraken', 'quimera', 'basilisco', 'esfinge',

  // Entretenimiento y Medios
  'película', 'serie', 'dibujos animados', 'videojuego', 'libro', 'cómic', 'revista', 'periódico', 'radio', 'televisión',
  'youtube', 'tiktok', 'instagram', 'facebook', 'twitter', 'snapchat', 'whatsapp', 'netflix', 'disney', 'spotify',
  'música', 'canción', 'concierto', 'festival', 'teatro', 'circo', 'parque de diversiones',
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
        }
    }

    startGame() {
        const playerCount = parseInt(this.playerCountTarget.value);

        if (playerCount < 3) {
            alert('Se necesitan al menos 3 jugadores para jugar');
            return;
        }
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
