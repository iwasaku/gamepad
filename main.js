function getProperties(obj) {
    var properties = '';
    for (var prop in obj) {
        properties += prop + ': ' + obj[prop] + '\n';
    }
    return properties;
}

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
    var str = "";
    var gamepadList = navigator.getGamepads();
    var gamepadNum = gamepadList.length;
    var ii;
    for (ii = 0; ii < gamepadNum; ii++) {
        var gamepad = gamepadList[ii];
        if (!gamepad) continue;

        str += "<pre>";
        str += "index: " + gamepad.index + "\n";
        str += "timestamp: " + gamepad.timestamp + "\n";
        str += "id: \"" + gamepad.id + "\"\n";
        str += "connected: " + gamepad.connected + "\n";
        str += "mapping: \"" + gamepad.mapping + "\"\n";
        str += "</pre>";

        //gamepad.buttons[0].pressed;    //NULL
        //gamepad.buttons[1].pressed;    //A
        //gamepad.buttons[2].pressed;    //Y
        //gamepad.buttons[3].pressed;    //????
        //gamepad.buttons[4].pressed;    //L
        //gamepad.buttons[5].pressed;    //R
        //gamepad.buttons[6].pressed;    //LZ
        //gamepad.buttons[7].pressed;    //RZ
        //gamepad.buttons[8].pressed;    //????
        //gamepad.buttons[9].pressed;    //????
        //gamepad.buttons[10].pressed;    //L HAT
        //gamepad.buttons[11].pressed;    //R HAT
        //gamepad.buttons[12].pressed;    //上
        //gamepad.buttons[13].pressed;    //下
        //gamepad.buttons[14].pressed;    //左
        //gamepad.buttons[15].pressed;    //右
        //axes[0];  // Lレバー左-1.0〜+1.0右
        //axes[1];  // Lレバー上-1.0〜+1.0下
        //axes[2];  // Rレバー左-1.0〜+1.0右
        //axes[3];  // Rレバー上-1.0〜+1.0下
        var buttons = gamepad.buttons;
        var buttonsLen = buttons.length;
        var strIdx = "<th></th>";
        var strpressed = "<th>pressed</th>";
        var strValue = "<th>value</th>";
        var jj;
        for (jj = 0; jj < buttonsLen; jj++) {
            var button = buttons[jj];
            strIdx += "<th>" + jj + "</th>";
            strpressed += "<td width=150>" + button.pressed + "</td>";
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
