/**
 * screen.ts
 * This is Screen Enum class
 *
 * Author's name: Hyojin Kim
 * Student Number: 300950009
 * Last Modified by Hyojin Kim
 * Date last Modified: July 29, 2018
 * Revision: 1.0
 */
var config;
(function (config) {
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.HALF_WIDTH = 320;
        Screen.HALF_HEIGHT = 240;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map