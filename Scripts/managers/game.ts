/**
 * game.ts
 * This is game manager class
 * 
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
namespace managers {
    export class Game {
        public static AssetManager: createjs.LoadQueue;
        public static CurrentScene: objects.Scene;
        public static CurrentState: config.Scene;
        public static Stage: createjs.Stage;
        public static ScoreBoardManager: managers.ScoreBoard;
    }
}
