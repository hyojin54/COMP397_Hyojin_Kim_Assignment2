/**
 * scene.ts
 * This is scene object class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace objects {
    export abstract class Scene extends createjs.Container {
        // member variables

        // constructors
        constructor() {
            super();
        }

        // private methods

        // public methods
        public Start(): void { }

        public Update(): void { }

        public Reset(): void { }

        public Destroy(): void { }

        public Main(): void { }
    }
}
