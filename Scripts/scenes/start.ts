namespace scenes  {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;

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
                200,
                true
            );
            this._startButton = new objects.Button("btnStart", 320, 300, true);

            this.Main();
        }

        public Update(): void { }

        public Reset(): void { }

        public Main(): void {
            this.addChild(this._startButton);
            this.addChild(this._welcomeLabel);

            this._startButton.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.PLAY;
                    this.removeAllChildren();
                },
                this
            );
        }
    }
}
