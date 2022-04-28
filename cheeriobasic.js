const request=require("request");
const cheerio=require("cheerio");
let html=`<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;
let selecttool=cheerio.load(html);
let fruitname=selecttool("#fruits");
console.log(fruitname.text());