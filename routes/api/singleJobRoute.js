const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/jobs/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/health/professions/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/single-job',{
            title:`${data.long_name}`,
            name:`${data.short_name}`,
            data
        })
    })
});


module.exports=router;