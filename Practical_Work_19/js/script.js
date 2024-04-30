import "./burger.js";
import "./ajax-utils.js";
import carousel from "./carousel.js";

(function (global) {
    let Content = {};
    const homeHTML = "./snippets/home-snippet.html";
    const contentContainerSelector = ".content__container";

    const insertHTML = (selector, html) => {
        document.querySelector(selector).innerHTML = html;
    };

    const showLoading = (selector) => {
        document.querySelector(selector).innerHTML = `
                <div class="loader__container">
                    <div class="loader"></div>
                </div>`;
    };

    document.addEventListener("DOMContentLoaded", (event) => {
        showLoading(contentContainerSelector);
        setTimeout(() => {
            ajaxUtils.sendGetRequest(
                homeHTML,
                (response) => {
                    insertHTML(contentContainerSelector, response);
                    carousel();
                },
                false
            );
        }, 3000);
    });
    global.Content = Content;
})(window);
