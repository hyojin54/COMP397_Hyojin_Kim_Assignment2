namespace scenes {
    export class Play extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _runner: objects.Runner;
        private _fruit: objects.Fruit;
        private _birds: objects.Bird[];
        private _birdsCount: number;

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

            this._birds.forEach(cloud => {
                cloud.Update();
            });
         }

        public Reset(): void { }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._runner);
            this.addChild(this._fruit);

            for (const bird of this._birds) {
                this.addChild(bird);
            }
        }
    }
}
