require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
const app = express();
const PORT = 6010;
require("./db/conn");

app.use(cors());
app.use(express.json());
app.use("/files", express.static("./public/files"));
app.use("/uploads", express.static("./uploads"));


app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
