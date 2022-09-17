const express = require("express");
const routerApi = require("./routes");
const app = express();
const cors = require("cors");
const port = 3000;
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require("./middlewares/errors.handler");

const whiteList = ["http://localhost:8080", "https://myapp.com"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true``);
    } else {
      callback(new Error("No access"));
    }
  },
};

app.use(express.json());
app.use(cors(options));

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
