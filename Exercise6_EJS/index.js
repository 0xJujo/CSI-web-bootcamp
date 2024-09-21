import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //write your code here
    //Test code
    // weekend:
    // new Date("June 24, 2023 11:13:00");
    // weekday:
    // new Date("June 20, 2023 11:13:00");



    res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
