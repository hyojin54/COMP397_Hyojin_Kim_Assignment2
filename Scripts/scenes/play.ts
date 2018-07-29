namespace Scenes {
    export class Play extends objects.Scene {
        // member variables
        private _background: objects.Background;

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

            this._background = new objects.Background();

            this.Main();
        }

        public Update(): void {
            this._background.Update();
         }

        public Reset(): void { }

        public Destroy(): void {
            this.removeAllChildren();
        }

        public Main(): void {
            this.addChild(this._background);
        }
    }
}
