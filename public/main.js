import "./lib/jquery.js";
import * as windish from "./lib/windish_general.js";
import { api } from "./config/api.js"

var urlParams = new URLSearchParams(window.location.search);
const response = await $.ajax(api + "fromWindish?word=" + urlParams.get("word"))

console.log(response)

$("#main-display").text(urlParams.get("word"));
$("#ipa").text(windish.wordToSound(urlParams.get("word")));
$("#en").text(response.en);
$("#def").text(response.meaning)