console.log("Console Connected!")

window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        console.log("Jquery loaded!");
    } else {
        // jQuery is not loaded
        console.log("Error while loading jquery. The Web Application will not be able to: 1. Start, Stop, Restart servers, 2. Change config files");
        console.log("If you see this Error, contact me on Discord and report the issue.")
    }
}