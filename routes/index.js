const productRouter = require("./products.router");
//const usersRouter = require("./users.router");

function routerApi(app) {
  app.use("/products", productRouter);
}

module.exports = routerApi;
