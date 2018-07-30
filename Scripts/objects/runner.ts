namespace objects {
    export class Runner extends objects.GameObject {

        /**
         * Creates an instance of Runner.
         * @memberof Runner
         */
        constructor() {
            super("runner");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check top boundary
            if(this.y < this.halfHeight){
                this.y = this.halfHeight;
            }

            // check bottom boundary
            if(this.y > config.Screen.HEIGHT - this.halfHeight){
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 580;
        }

        public Update(): void {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
        }

        public Reset(): void { }
    }
}
