import express from 'express';
let blogdata=[
{
    id:1,
    title:"The Rise of Decentralized Finance",
    time:"2023-08-01T10:00:00Z",
    content:"Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author:"Alex Thompson"

}
,
{
    id:2,
    title:"The Impact of Artificial Intelligence on Modern Businesses",
    time:"2023-08-01T10:00:00Z",
    content:"Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author:"Mia Williams"
}
,
{
    id:3,
    title:"The Rise of Decentralized Finance",
    time:"2023-08-01T10:00:00Z",
    content:"Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author:"Alex Thompson"
}
];
let preid=3;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("Hello i am a api");
})
app.get('/api/all',(req,res)=>{
    
    res.json(blogdata);
    console.log(blogdata);
})
app.delete('/delete/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    let a=blogdata.findIndex((e)=>e.id===id);
   let b= blogdata.splice(a,1);
    res.status(200).json(b);

})
app.post('/api/post',(req,res)=>{

    preid=preid+1;
    let a={
        id:preid,
        title:req.body.title,
        time:new Date(),
        content:req.body.content,
        author:req.body.author
    }
    blogdata.push(a);
    res.send(a);

})
app.put('/edit/:id',(req,res)=>{
   let id=req.params.id;
   let b=blogdata.findIndex((ele)=>ele.id==id);
   if(b)
   {
     blogdata[b].title=req.body.title||blogdata[b].title;
     blogdata[b].content=req.body.content||blogdata[b].content;
     blogdata[b].author=req.body.author||blogdata[b].author;
     res.status(200).json(blogdata[b]);
   }
   else{
       res.status(404);
   }

})
app.listen(5001,(req,res)=>{
    console.log("Your api is running on port 5001");
})
