(function (global) {
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function (event) {
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const mealTime = document.querySelector('input[name="meal-time"]:checked');
        const meal = document.querySelectorAll('input[name="meal"]:checked');
        const comment = document.getElementById("comment");
        const form = document.querySelector("form");
        if (meal.length > 0 && username.value && email.value && mealTime && form.checkValidity()) {
            let allFood = "";
            meal.forEach((food, index) => {
                allFood += `${food.value}${meal.length - 1 === index ? "" : ", "}`;
            });
            document.getElementById(
                "output"
            ).textContent = `${username.value} (${email.value}) з'їв на ${mealTime.value} ${allFood} та залишив такий коментар "${comment.value}"`;
        } else {
            alert("Заповніть коректно усі поля!");
        }
    });
})(window);
