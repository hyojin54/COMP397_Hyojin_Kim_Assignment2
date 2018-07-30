namespace scenes {
    export class Play extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _runner: objects.Runner;
        private _fruit: objects.Fruit;
        private _fruit2: objects.Fruit2;
        private _birds: objects.Bird[];
        private _birdsCount: number;

        public backgroundSound: createjs.AbstractSoundInstance;
        public gameoverSound: createjs.AbstractSoundInstance;

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
            this.backgroundSound = createjs.Sound.play("backgroundSound");
            this.backgroundSound.loop = -1;
            this.backgroundSound.volume = 0.5;

            this._background = new objects.Background();
            this._runner = new objects.Runner();
            this._fruit = new objects.Fruit();
            this._fruit2 = new objects.Fruit2();

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
            this._fruit2.Update();

            managers.Collision.check(this._runner, this._fruit);
            managers.Collision.check(this._runner, this._fruit2);

            this._birds.forEach(bird => {
                bird.Update();
                managers.Collision.check(this._runner, bird);
            });
         }

        public Reset(): void { }

        public Destroy(): void {
            this.backgroundSound.stop();

            this.gameoverSound = createjs.Sound.play("gameoverSound");
            this.backgroundSound.loop = -1;
            this.backgroundSound.volume = 0.5;

            this.removeAllChildren();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._runner);
            this.addChild(this._fruit);
            this.addChild(this._fruit2);

            for (const bird of this._birds) {
                this.addChild(bird);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}
