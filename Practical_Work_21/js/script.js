import "./burger.js";
import "./ajax-utils.js";
import carousel from "./carousel.js";

(function (global) {
    let Content = {};
    let isLoading = true;
    const homeHTML = "./snippets/home-snippet.html";
    const contentContainerSelector = ".content__container";
    const catalogLink = document.querySelector(".catalog__link");
    const catalogHeaderContainer = "#content-header";

    const allCategoriesUrl = "data/categories.json";
    const categoriesTitleHtml = "snippets/categories-title-snippet.html";
    const categoryHtml = "snippets/category-snippet.html";
    
    
    //Previous practical work
    catalogLink.addEventListener("click", (event) => {
        Content.loadCatalogCategories();
    });

    const insertProperty = function (string, propName, propValue) {
        const propToReplace = `{{${propName}}}`;
        return string.replace(new RegExp(propToReplace, "g"), propValue);
    };

    Content.loadCatalogCategories = function () {
        if (!isLoading) {
            isLoading = true;
            showLoading(contentContainerSelector);
            ajaxUtils.sendGetRequest(allCategoriesUrl, (response) => {
                buildAndShowCategoriesHTML(response);
                isLoading = false;
            });
        }
    };

    function buildAndShowCategoriesHTML(categories) {
        ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            (categoriesTitleHtml) => {
                ajaxUtils.sendGetRequest(
                    categoryHtml,
                    (categoryHtmlTemplate) => {
                        const { html, categoriesTitle } = buildCategoriesViewHtml(
                            categories,
                            categoriesTitleHtml,
                            categoryHtmlTemplate
                        );
                        insertHTML(catalogHeaderContainer, categoriesTitle);
                        insertHTML(contentContainerSelector, html);
                    },
                    false
                );
            },
            false
        );
    }

    function buildCategoriesViewHtml(categories, categoriesTitle, categoryHtmlTemplate) {
        let html = "<div class='main-catalog__container'>";
        for (const category of categories) {
            console.log(category);
            let categoryHtml = categoryHtmlTemplate;
            categoryHtml = insertProperty(categoryHtml, "short_name", category["img-url"]);
            categoryHtml = insertProperty(categoryHtml, "name", category.title);
            html += categoryHtml;
        }
        html += "</div>";
        return { html, categoriesTitle };
    }

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
                    const catalogMain = document.querySelector(".catalog__container");
                    catalogMain.addEventListener("click", (event) => {
                        Content.loadCatalogCategories();
                    });
                },
                false
            );
            isLoading = false;
        }, 3750);
    });
    global.Content = Content;
})(window);
