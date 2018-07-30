// IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let welcomeLabel: objects.Label;
    let btnStart: objects.Button;
    let btnExit: objects.Button;
    let btnInstructions: objects.Button;

    let assetManager: createjs.LoadQueue;
    let currentScene: objects.Scene;
    let currentState: config.Scene;

    let Manifest = [
        { id: "btnStart", src: "/Assets/images/button_start.jpg" },
        { id: "btnExit", src: "/Assets/images/button_exit.jpg" },
        { id: "btnInstructions", src: "/Assets/images/button_instructions.jpg" },
        { id: "background", src: "/Assets/images/bg4.png" },
        { id: "runner", src: "/Assets/images/runner.png" },
        { id: "fruit", src: "/Assets/images/item1.png" }
    ];

    function Init(): void {
        console.log(
            `%c Assets Loading...`,
            "font-weight:bold; font-size:20px; color:green;"
        );
        assetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = assetManager;
        assetManager.installPlugin(createjs.Sound); // enables preloading of sound assets
        assetManager.on("complete", Start);
        assetManager.loadManifest(Manifest);
    }

    function Start(): void {
        console.log(
            `%c App Starting...`,
            "font-weight:bold; font-size:20px; color:red;"
        );
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage; // create a reference to the stage class

        stage.enableMouseOver(20); // enables mouseover events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        currentState = config.Scene.START;
        managers.Game.CurrentState = currentState;

        // This is where all the magic happens
        Main();
    }

    function Update(): void {
        if (managers.Game.CurrentState != currentState) {
            currentState = managers.Game.CurrentState;
            Main();
        }
        currentScene.Update();

        stage.update();
    }

    function Main(): void {
        console.log(
            `%c Switching Scenes...`,
            "font-style:italic; font-size:16px; color:black;"
        );

        if(currentScene) {
            currentScene.Destroy();
            stage.removeChild(currentScene);
         }

        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;

            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;

            case config.Scene.INSTRUCTIONS:
                //
                break;

            case config.Scene.EXIT:
                currentScene = new scenes.End();
                break;
        }

        managers.Game.CurrentScene = currentScene;
        stage.addChild(currentScene);
    }

    window.addEventListener("load", Init);
})();
