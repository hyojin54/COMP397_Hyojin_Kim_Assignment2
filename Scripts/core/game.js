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
    var assetManager;
    var Manifest = [
        { id: "btnStart", src: "/Assets/images/button_start.jpg" },
        { id: "btnExit", src: "/Assets/images/button_exit.jpg" },
        { id: "btnInstructions", src: "/Assets/images/button_instructions.jpg" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color:green;");
        assetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = assetManager;
        assetManager.installPlugin(createjs.Sound); // enables preloading of sound assets
        assetManager.on("complete", Start);
        assetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c App Starting...", "font-weight:bold; font-size:20px; color:red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enables mouseover events
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
        welcomeLabel = new objects.Label("Welcome", "60px", "Consolas", "#000000", 320, 50, true);
        stage.addChild(welcomeLabel);
        // buttons
        btnStart = new objects.Button("btnStart", 320, 200, true);
        btnInstructions = new objects.Button("btnInstructions", 320, 300, true);
        btnExit = new objects.Button("btnExit", 320, 400, true);
        stage.addChild(btnStart);
        stage.addChild(btnInstructions);
        stage.addChild(btnExit);
        // TODO
        btnStart.on("click", function () {
            console.log("clicked");
            //welcomeLabel.text = "Clicked!";
        });
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map