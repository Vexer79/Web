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

    const catalogItemsUrl = "data/catalog/";
    const catalogItemsTitleHtml = "snippets/catalog-items-title.html";
    const catalogItemHtml = "snippets/catalog-item.html";

    Content.loadCatalogItems = function (categoryShort) {
        if (!isLoading) {
            isLoading = true;
            showLoading(contentContainerSelector);
            ajaxUtils.sendGetRequest(`${catalogItemsUrl}${categoryShort}.json`, (response) => {
                buildAndShowCatalogItemsHTML(response);
                isLoading = false;
            });
        }
    };

    function buildAndShowCatalogItemsHTML(categoryCatalogItems) {
        ajaxUtils.sendGetRequest(
            catalogItemsTitleHtml,
            (categoriesTitleHtml) => {
                ajaxUtils.sendGetRequest(
                    catalogItemHtml,
                    (categoryHtmlTemplate) => {
                        const { html, catalogItemsTitleHtml } = buildCatalogItemsViewHtml(
                            categoryCatalogItems,
                            categoriesTitleHtml,
                            categoryHtmlTemplate
                        );
                        insertHTML(catalogHeaderContainer, catalogItemsTitleHtml);
                        insertHTML(contentContainerSelector, html);
                    },
                    false
                );
            },
            false
        );
    }

    function buildCatalogItemsViewHtml(
        categoryCatalogItems,
        catalogItemsTitleHtml,
        catalogItemHtml
    ) {
        let html = "<div class='main-catalog__container'>";
        for (const categoryCatalogItem of categoryCatalogItems.content) {
            let itemHtml = catalogItemHtml;
            itemHtml = insertProperty(itemHtml, "id", categoryCatalogItem.id);
            itemHtml = insertProperty(itemHtml, "title", categoryCatalogItem.title);
            itemHtml = insertProperty(itemHtml, "description", categoryCatalogItem.description);
            itemHtml = insertProperty(itemHtml, "url", categoryCatalogItem["img-url"]);
            itemHtml = insertItemPrice(
                itemHtml,
                "max-price",
                categoryCatalogItem.price["max-price"]
            );
            itemHtml = insertItemPrice(
                itemHtml,
                "min-price",
                categoryCatalogItem.price["min-price"]
            );
            itemHtml = insertItemAmount(
                itemHtml,
                "max-amount",
                categoryCatalogItem.price["max-amount"]
            );
            html += itemHtml;
        }
        html += "</div>";
        catalogItemsTitleHtml = insertProperty(
            catalogItemsTitleHtml,
            "name",
            categoryCatalogItems.header.name
        );
        catalogItemsTitleHtml = insertProperty(
            catalogItemsTitleHtml,
            "description",
            categoryCatalogItems.header.description
        );
        return { html, catalogItemsTitleHtml };
    }

    function insertItemPrice(html, pricePropName, priceValue) {
        if (priceValue === undefined) {
            return insertProperty(html, pricePropName, ``);
        } else {
            return insertProperty(html, pricePropName, `$${priceValue.toFixed(2)}`);
        }
    }

    function insertItemAmount(html, amountPropName, amountPropValue) {
        if (amountPropValue === undefined) {
            return insertProperty(html, amountPropName, ``);
        } else {
            return insertProperty(html, amountPropName, `(${amountPropValue}+pos)`);
        }
    }

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
                        for (const category of document.querySelectorAll(
                            ".catalog-item__container"
                        )) {
                            category.addEventListener("click", (event) => {
                                Content.loadCatalogItems(
                                    category.children[category.children.length - 1].textContent
                                );
                            });
                        }
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
        }, 1);
    });
    global.Content = Content;
})(window);
