import express, { response } from "express";
import axios  from "axios";
const app=express();
const port=5000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let APIURL='http://localhost:5001';
app.get('/',async (req,res)=>{
    let response =await axios.get(`${APIURL}/api/all`);
    let re=response.data;
    console.log("sended");
    res.render('index.ejs',{result:re});
})
app.get('/new',(req,res)=>{
    let data={
        method:1,
        
      }
    res.render('modify.ejs',{result:data});

})

app.post('/post',async (req,res)=>{
    let a= await axios.post(`${APIURL}/api/post`,req.body)
    res.redirect('/');
})

app.get('/delete/:id',async (req,res)=>{
    let ide=req.params.id;
    let response= await axios.delete(`${APIURL}/delete/${ide}`);
    res.redirect('/');
})
app.get('/edit/:id',(req,res)=>{
    let ide=parseInt(req.params.id);
    let data={
      method:2,
      id:ide
    }
    res.render('modify.ejs',{result:data});
})
app.post('/modify/:id',async (req,res)=>{
    let ide=req.params.id;
    
    let response=await axios.put(`${APIURL}/edit/${ide}`,req.body);
    res.redirect('/');
})


app.listen(port,()=>{
    console.log(`Your server is running on the ${port}`);
})