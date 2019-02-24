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

        str += "index: " + gamepad.index + "\n";
        str += "timestamp: " + gamepad.timestamp + "\n";
        str += "id: \"" + gamepad.id + "\"\n";
        str += "connected: " + gamepad.connected + "\n";
        str += "mapping: \"" + gamepad.mapping + "\"\n";

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
        var jj;

        str += "buttons: {\n";
        for (jj = 0; jj < buttonsLen; jj++) {
            var button = buttons[jj];
            if (jj < 10) {
                str += "  \"" + jj + "\": { ";
            } else {
                str += "  \"" + jj + "\": { ";
            }
            str += "pressed:" + (button.pressed ? "T" : "F") + " , ";
            str += "value:" + button.value + " }\n";
        }
        str += "}\n";

        var axes = gamepad.axes;
        var axesLen = axes.length;
        str += "axes: {\n";
        for (jj = 0; jj < axesLen; jj++) {
            str += "  \"" + jj + "\": ";
            str += axes[jj] + "\n";
        }
        str += "}\n";

        var pose = gamepad.pose;
        str += "pose: {\n";
        if (pose != null) {
            str += "\"hasOrientation \"" + pose.hasOrientation + "\n";
        } else {
            str += "null\n";
        }
        str += "}\n";

        str += "\n ----- \n\n";
    }
    Game.str = str;
};

// 描画
Game.draw = function () {
    document.getElementById("test").textContent = Game.str;
};

// 実行
Game.init();
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);
//        clearInterval(Game._intervalId);
