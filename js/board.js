var Board = function(columns, rows) {
    var board = [];
    var group = game.add.group();

    for (var y = 0; y < rows; y++) {
        var row = [];

        for (var x = 0; x < columns; x++) {
            var tile = new Tile(x, y, group);
            row.push(tile);
        }

        board.push(row);
    }
}
