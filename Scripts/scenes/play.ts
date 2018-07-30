namespace scenes {
    export class Play extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _runner: objects.Runner;
        private _fruit: objects.Fruit;
        private _birds: objects.Bird[];
        private _birdsCount: number;

        public engineSound: createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildBirds():void {
            for (let count = 0; count < this._birdsCount; count++) {
                this._birds.push(new objects.Bird());
            }
        }

        // public methods
        public Start(): void {
            console.log(
                `%c Starting Play Scene`,
                "font-style:italic; font-size:20px;"
            );

            // sound
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;

            this._background = new objects.Background();
            this._runner = new objects.Runner();
            this._fruit = new objects.Fruit();

            // creates an empty array of type Bird
            this._birds = new Array<objects.Bird>();
            this._birdsCount = 2;
            this._buildBirds();

            this.Main();
        }

        public Update(): void {
            this._background.Update();
            this._runner.Update();
            this._fruit.Update();

            managers.Collision.check(this._runner, this._fruit);

            this._birds.forEach(bird => {
                bird.Update();
                managers.Collision.check(this._runner, bird);
            });
         }

        public Reset(): void { }

        public Destroy(): void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._runner);
            this.addChild(this._fruit);

            for (const bird of this._birds) {
                this.addChild(bird);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}
