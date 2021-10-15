import "isomorphic-fetch";
import { from, switchMap } from "rxjs";
import { Api } from "./api.js";

const client = new Api();

// test it..
client.coins
  .categoriesList()
  .then((res) => res.json())
  .then((categories) => console.log(categories));

// rxjs way
from(client.coins.categoriesList())
  .pipe(switchMap((res) => res.json()))
  .subscribe(console.log);
