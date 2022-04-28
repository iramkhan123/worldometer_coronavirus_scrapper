// starting 6 line extract html data from the website requested
const request=require("request");
//const cheerio=require("cheerio");
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body){
    
        console.error("error",err);
    console.log(body);
}
