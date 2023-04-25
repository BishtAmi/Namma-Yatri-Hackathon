const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.get("/booking",(req,res)=>
{
  res.json({msg:" Hello welcome to ami Zone"});
}
);
app.listen(8000,()=>{
    console.log('server running at port 8000');
});
