const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require("./middlewares/errors.handler");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get("/categories/:categoryId/products/:productId", (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({ categoryId, productId });
// });

// app.get("/users", (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({ limit, offset });
//   } else {
//     res.send("Don't exist params");
//   }
// });

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
