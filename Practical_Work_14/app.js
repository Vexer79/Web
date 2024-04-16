const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    res.type(".html").sendFile(path.join(__dirname, "public", "index.html"));
});

const arrayOfJsonStathams = [
    {
        target: 7,
        fieldPattern: [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1],
            [0, 1, 0, 0, 1],
        ],
    },
    {
        target: 8,
        fieldPattern: [
            [1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
        ],
    },
    {
        target: 9,
        fieldPattern: [
            [1, 0, 0, 0, 0],
            [0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1],
            [1, 1, 0, 0, 0],
        ],
    },
];

let prevIndex;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const getRandomStathamFromArray = function () {
    let index = getRandomInt(arrayOfJsonStathams.length);
    while(index === prevIndex){
        index = getRandomInt(arrayOfJsonStathams.length);
    }
    prevIndex = index;
    return arrayOfJsonStathams[index];
};

app.get("/getTemplate", (req, res, next) => {
    res.type("application/json").send(JSON.stringify(getRandomStathamFromArray()));
});

app.listen(3000);
