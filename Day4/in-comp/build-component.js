const fs = require("fs-extra");
const concat = require("concat");

build = async()=>{
    const files = [
        "./dist/in-comp/runtime.js",
        "./dist/in-comp/polyfills.js",
        "./dist/in-comp/main.js",
    ];
    await fs.ensureDir("news-widget-in");
    await concat(files,"news-widget-in/news-widget-in.js")
};
build();