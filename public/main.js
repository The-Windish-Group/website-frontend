import "./lib/jquery.js";
import * as windish from "./lib/windish_general.js";

var urlParams = new URLSearchParams(window.location.search);
const response = await fetch("./result.json");

if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}

const data = await response.json();

$("#main-display").text(urlParams.get("word"));
$("#sound").text(windish.wordToSound(urlParams.get("word")));
$("#def").text(wordToEnglish(urlParams.get("word")).en);

function wordToEnglish(word) {
    return data.find((e) => e.wn == word);
}
