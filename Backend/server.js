import app from "./app.js"

app.listen(process.env.PORT, ()=>{
    console.log(`port running in port ${process.env.PORT}`);
})