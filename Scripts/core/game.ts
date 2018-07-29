// IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

    function Start(): void {
        console.log(`%c Start Function`, "font-weight:bold; font-size:20px; color:red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        // This is where all the magic happens
        Main();
    }

    function Update(): void {
        stage.update();
    }

    function Main(): void {
        console.log(`%c Main Function`, "font-style:italic; font-size:16px; color:black;");

        // this is the Label
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
    }

    window.addEventListener("load", Start);

})();