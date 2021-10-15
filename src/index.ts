import "isomorphic-fetch";
import { Api } from "./api.js";

const client = new Api();

// test it..
client.coins
  .categoriesList()
  .then((res) => res.json())
  .then((categories) => console.log(categories));
