const koa = require("koa");
const koaLogger = require("koa-logger");
const bodyParser = require("koa-body");
const router = require("../webapidemo/middleware/router");
const cors = require("koa-cors");

//create the koa application container
const app = new koa();

const mongoose = require("mongoose");

// connection string
mongoose.connect("mongodb://localhost:27017/customersDb", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  throw new Error("Error while connecting to db");
});
db.once("open", () => console.log("Connected to database"));

//inject the services
app.use(koaLogger());
app.use(bodyParser());
app.use(cors({
  origin:"http://localhost:4200",
  allowedMethods:["GET", "POST", "PUT"]
}
));
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
//launch the app
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});