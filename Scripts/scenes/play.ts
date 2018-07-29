namespace Scenes {
    export class Play extends objects.Scene {
        // member variables
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        // public methods
        public Start(): void {
            console.log(
                `%c Starting Play Scene`,
                "font-style:italic; font-size:20px;"
            );
            this._playLabel = new objects.Label(
                "Welcome!",
                "60px",
                "Consolas",
                "#000000",
                320,
                200,
                true
            );
            this._nextButton = new objects.Button("btnExit", 320, 300, true);

            this.Main();
        }

        public Update(): void { }

        public Reset(): void { }

        public Main(): void {
            this.addChild(this._nextButton);
            this.addChild(this._playLabel);

            this._nextButton.on(
                "click",
                function () {
                    this._playLabel.text = "Clicked!";
                },
                this
            );
        }
    }
}
