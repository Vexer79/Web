import "./burger.js";
import "./ajax-utils.js";
import carousel from "./carousel.js";

(function (global) {
    let Content = {};
    let isLoading = true;
    const homeHTML = "./snippets/home-snippet.html";
    const contentContainerSelector = ".content__container";
    const catalogLink = document.querySelector(".catalog__link");
    const catalogHeaderContainerHTML = "./snippets/catalog-header-snippet.html";
    const catalogContainerHTML = "./snippets/catalog-snippet.html";
    const catalogContainer = "#content-header";

    catalogLink.addEventListener("click", (event) => {
        if (!isLoading) {
            ajaxUtils.sendGetRequest(
                catalogHeaderContainerHTML,
                (response) => {
                    insertHTML(catalogContainer, response);
                    isLoading = false;
                },
                false
            );
            ajaxUtils.sendGetRequest(
                homeHTML,
                (response) => {
                    insertHTML(contentContainerSelector, response);
                },
                false
            );
        }
    });

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
        isLoading = true;
        setTimeout(() => {
            ajaxUtils.sendGetRequest(
                homeHTML,
                (response) => {
                    insertHTML(contentContainerSelector, response);
                    carousel();
                },
                false
            );
            isLoading = false;
        }, 3750);
    });
    global.Content = Content;
})(window);
