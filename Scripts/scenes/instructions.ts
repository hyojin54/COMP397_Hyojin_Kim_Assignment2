namespace scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _instructionLabel: objects.Label;
        private _btnStart: objects.Button;
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
            this._instructionLabel = new objects.Label(
                "This game is simple. \n\nYou should get fruits with 100 points, avoid birds. \n\nHave fun!! :)",
                "20px",
                "Consolas",
                "#000000",
                320,
                150,
                true
            );
            this._btnStart = new objects.Button("btnStart", 320, 300, true);
            this._btnExit = new objects.Button("btnExit", 320, 400, true);

            this.Main();
        }

        public Update(): void { }

        public Reset(): void { }

        public Main(): void {
            this.addChild(this._instructionLabel);
            this.addChild(this._btnStart);
            this.addChild(this._btnExit);

            this._btnStart.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.PLAY;
                    this.removeAllChildren();
                },
                this
            );

            this._btnExit.on(
                "click",
                function () {
                    managers.Game.CurrentState = config.Scene.START;
                    this.removeAllChildren();
                },
                this
            );
        }
    }
}
