namespace scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _btnStart: objects.Button;
        private _btnInstructions: objects.Button;
        private _btnExit: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            console.log(
                `%c Starting Start Scene`,
                "font-style:italic; font-size:20px;"
            );
            this._welcomeLabel = new objects.Label(
                "Welcome!",
                "60px",
                "Consolas",
                "#000000",
                320,
                50,
                true
            );
            this._btnStart = new objects.Button("btnStart", 320, 200, true);
            this._btnInstructions = new objects.Button(
                "btnInstructions",
                320,
                300,
                true
            );
            this._btnExit = new objects.Button("btnExit", 320, 400, true);

            this.Main();
        }

        public Update(): void { }

        public Reset(): void { }

        public Main(): void {
            this.addChild(this._welcomeLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnInstructions);
            this.addChild(this._btnExit);

            this._btnStart.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.PLAY;
                    this.removeAllChildren();
                },
                this
            );

            this._btnInstructions.on(
                "click",
                function () {
                    //managers.Game.CurrentState = config.Scene.PLAY;
                    //this.removeAllChildren();
                },
                this
            );

            this._btnExit.on(
                "click",
                function () {
                    var myWindow = window.open("", "_self");
                    myWindow.document.write("");
                    setTimeout(function () {
                        myWindow.close();
                    }, 1000);
                },
                this
            );
        }
    }
}
