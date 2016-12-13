// jslint settings

// Module /spa/
// Provides char slider capability
var spa = (function () {
    var initModule = function($container) {
        spa.shell.initModule($container);
    };
    return { initModule: initModule };
}());
// // Start spa once DOM is ready

// $(document).ready(function() {
//     spa.initModule($('#spa'));
// });