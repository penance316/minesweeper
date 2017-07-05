var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,

    tileWidth: 32,
    tileHeight: 32,

    boardWidth: 9,
    boardHeight: 9,

    totalMines: 10,
};

var states = {
    game: "game",
};

var graphicAssets = {
    tiles: { URL: 'assets/tiles.png', name: 'tiles', frames: 14 },
};

var gameState = function(game) {
    this.boardTop;
    this.boardLeft;
    this.board;
};

gameState.prototype = {

    init: function() {
        this.boardTop = (gameProperties.screenHeight - (gameProperties.tileHeight * gameProperties.boardHeight)) * 0.5;
        this.boardLeft = (gameProperties.screenWidth - (gameProperties.tileWidth * gameProperties.boardWidth)) * 0.5;
    },

    preload: function() {
        game.load.spritesheet(graphicAssets.tiles.name, graphicAssets.tiles.URL, gameProperties.tileWidth, gameProperties.tileHeight, graphicAssets.tiles.frames);
    },

    create: function() {

    },

    update: function() {

    },
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
