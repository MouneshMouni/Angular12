const fs = require("fs-extra");
const concat = require("concat");

build = async()=>{
    const files = [
        "./dist/us-comp/runtime.js",
        "./dist/us-comp/polyfills.js",
        "./dist/us-comp/main.js",
    ];
    await fs.ensureDir("news-widget-us");
    await concat(files,"news-widget-us/news-widget-us.js")
};
build();