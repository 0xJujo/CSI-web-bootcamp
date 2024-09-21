//Make sure you have installed all the dependencies with "npm i".
//The password is ILAUGHLIKETHIS
import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

const __dirname=dirname(fileURLToPath(import.meta.url));
const app= express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{

});

app.post("/check",(req, res)=>{
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  