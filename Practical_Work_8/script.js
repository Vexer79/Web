(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let name of names) {
        if (name.charAt(0).toLowerCase() == "j") {
            speakHello.speak(name);
        } else {
            speakGoodBye.speak(name);
        }
    }
})();