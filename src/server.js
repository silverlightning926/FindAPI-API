import express from "express";
import data from "./data.json";
import { isEmpty } from "lodash";

const app = express();

app.get("/all", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(data);
});

app.get("/category/:categoryName", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  let result = data[req.params.categoryName];

  !isEmpty(result)
    ? res.status(200).json(result)
    : res.status(404).send("Data Was Not Found");
});

app.listen(8000, () => console.log("Listening on PORT 8000"));
