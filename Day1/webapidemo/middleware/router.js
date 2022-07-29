const KoaRouter = require("koa-router");
const router = new KoaRouter();
const CustomersController = require("../controllers/customerController");
const usersAndRolesControllers = require("../controllers/usersAndRolesControllers");
const ordersController = require("../controllers/ordersController");
//Routing dictionary
router
.get("/",(ctx) => (ctx.body="Welcome to Customers and Orders API!"))
.get("/customers",CustomersController.getAllCustomers)
.get("/customers/:searchText", CustomersController.searchCustomers )
.get("/users", usersAndRolesControllers.getAllUsers)
.post("/auth", usersAndRolesControllers.authenticate)
.get("/orders", ordersController.getAllOrders)
.post("/authorize", usersAndRolesControllers.authorize)

module.exports = router