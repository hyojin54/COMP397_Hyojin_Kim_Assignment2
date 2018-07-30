module scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _background: objects.Background;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        // public methods
        public Start():void {
            this._background = new objects.Background();

            this._gameOverLabel = new objects.Label("Game Over!", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this._restartButton = new objects.Button("btnStart", 320, 360, true);

            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting End Scene`);

            this.addChild(this._background);

            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);

            this._restartButton.on("click", function(){
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}