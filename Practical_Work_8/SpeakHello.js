(function (window) {
    let speakHello = {};
    var speakWord = "Hello";

    speakHello.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    
    window.speakHello = speakHello;
})(window);