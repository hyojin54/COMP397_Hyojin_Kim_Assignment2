// IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var welcomeLabel;
    var btnStart;
    var btnExit;
    var btnInstructions;
    var Manifest = [
        { id: "btnStart", src: "/Assets/images/button_start.jpg" },
        { id: "btnExit", src: "/Assets/images/button_exit.jpg" },
        { id: "btnInstructions", src: "/Assets/images/button_instructions.jpg" }
    ];
    function Init() {
    }
    function Start() {
        console.log("%c Start Function", "font-weight:bold; font-size:20px; color:red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        // This is where all the magic happens
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("%c Main Function", "font-style:italic; font-size:16px; color:black;");
        // label
        welcomeLabel = new objects.Label("Welcome", "60px", "Consolas", "#000000", 320, 200, true);
        stage.addChild(welcomeLabel);
        // buttons
        btnStart = new objects.Button("btnStart", 320, 300, true);
        stage.addChild(btnStart);
        btnExit = new objects.Button("btnExit", 320, 300, true);
        stage.addChild(btnExit);
        //btnInstructions = new objects.Button("btnInstructions", 320, 300, true);
        //stage.addChild(btnInstructions);
        /**
        helloLabel = new createjs.Text("Hello, World!", "60px Consolas", "#000000")
        helloLabel.regX = helloLabel.getBounds().width * 0.5;
        helloLabel.regY = helloLabel.getBounds().height * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

        helloLabel.addEventListener("click", function () {
            console.log(`clicked`);
            helloLabel.text = "Clicked!";
        });
         */
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map