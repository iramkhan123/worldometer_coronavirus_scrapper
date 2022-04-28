const request=require("request");
const cheerio=require("cheerio");
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body){
     if(err){
         console.error("error",err);
     }
     else{
         
         handlehtml(body);
     }

}
function handlehtml(body){
    let selecttool=cheerio.load(body);
    let coronastat=selecttool(".maincounter-number");
    //console.log(coronastat.text());
    //if we acces it in array form then wrap it
    let totalcases=selecttool(coronastat[0]).text();
    console.log("Total cases ->",totalcases);
    let totaldeaths=selecttool(coronastat[1]).text();
    console.log("Total death ->",totaldeaths);
    let totalrecoveries=selecttool(coronastat[2]).text();
    console.log("Recoveries -> ",totalrecoveries);
}