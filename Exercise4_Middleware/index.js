import express from "express";
import { dirname } from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    
})
  
app.post("/submit", (req, res)=>{
    //take the input from the form and create a band name;
    //send the band name as a response in an html code
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  