const express=require("express");
const cors=require("cors");

const app=express();

app.use(
  cors({
    origin: [
      "https://brandspire-crm.vercel.app",
      "https://brandspire-portfolio.vercel.app",
      "https://brandspire.tech",
      "http://localhost:5173",
      "http://localhost",
      "https://localhost",
      "capacitor://localhost",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("CRM API Running");
});

module.exports=app;
