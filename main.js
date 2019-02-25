var Game = {};
Game.fps = 60;
Game.str = "";
Game.element;

// 初期化
Game.init = function () {
    Game.element = document.getElementById("test");
}

// メインループ
Game.run = function () {
    Game.ctrl();
    Game.draw();
};

// コントロール
Game.ctrl = function () {
    var gamepads = navigator.getGamepads();
    var gamepadsLen = gamepads.length;
    var str = "";
    var ii;
    for (ii = 0; ii < gamepadsLen; ii++) {
        var gamepad = gamepads[ii];
        if (!gamepad) continue;

        str += "<h3>info</h3>";
        str += "<pre>";
        str += "index: " + gamepad.index + "\n";
        str += "timestamp: " + gamepad.timestamp + "\n";
        str += "id: \"" + gamepad.id + "\"\n";
        str += "connected: " + gamepad.connected + "\n";
        str += "mapping: \"" + gamepad.mapping + "\"\n";
        str += "</pre>";

        var buttons = gamepad.buttons;
        var buttonsLen = buttons.length;
        var strIdx = "<th>idx</th>";
        var strpressed = "<th>pressed</th>";
        var strValue = "<th>value</th>";
        var jj;
        for (jj = 0; jj < buttonsLen; jj++) {
            var button = buttons[jj];
            strIdx += "<th>" + jj + "</th>";
            strpressed += "<td>" + button.pressed + "</td>";
            strValue += "<td>" + button.value + "</td>";
        }
        str += "<h3>buttons</h3>";
        str += "<table border=1>";
        str += "<tr>";
        str += strIdx;
        str += "</tr>";
        str += "<tr>";
        str += strpressed;
        str += "</tr>";
        str += "<tr>";
        str += strValue;
        str += "</tr>";
        str += "</table>";
        str += "<br>";

        var axes = gamepad.axes;
        var axesLen = axes.length;
        str += "<h3>axes</h3>";
        str += "<table border=1>";
        str += "<tr>";
        str += "<th>idx</th>";
        str += "<td>value</td>";
        str += "</tr>";
        for (jj = 0; jj < axesLen; jj++) {
            str += "<tr>";
            str += "<th>" + jj + "</th>";
            str += "<td>" + axes[jj] + "</td>";
            str += "</tr>";
        }
        str += "</table>";
    }
    Game.str = str;
};

// 描画
Game.draw = function () {
    //    document.getElementById("test").textContent = Game.str;
    document.getElementById("test").innerHTML = Game.str;
};

// 実行
Game.init();
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);
//        clearInterval(Game._intervalId);
