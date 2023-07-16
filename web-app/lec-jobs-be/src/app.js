const express = require("express");
const app = express();
const PORT = 5000;

// http://loacal host:500/ or  https://loacal host:500/ 

app.get("/", 
(req, res) => 
{ res.status(200).send("This is response from BE"); }
)
app.listen(PORT, () => {
    console.log("App is running on port" + PORT);

});