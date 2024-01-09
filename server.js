const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./app/routes/todo-router"));

app.listen(8000, () => {
  console.log("Server is listening on PORT 8000");
});
