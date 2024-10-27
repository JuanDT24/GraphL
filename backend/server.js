const express = require("express");
const path=require('path')
const app=express();

//Routers 
app.use("/map", require("../backend/graphRouter.js"));
app.use("/api", require("../backend/api.js"));
//Static files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../frontend/index.html'))
});
app.get('/meet-the-team',(req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/MeetTheTeam.html'))
})
    
app.use((req, res) => {
    res.send('<h1> Error 404: Resource not found </h1>')
});
app.listen(3000, ()=> {
    console.log("App listening on port 3000")
});

