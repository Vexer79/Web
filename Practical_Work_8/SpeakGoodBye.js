(function (window) {
    let speakGoodBye = {};
    var speakWord = "Good Bye";

    speakGoodBye.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.speakGoodBye = speakGoodBye;
})(window);