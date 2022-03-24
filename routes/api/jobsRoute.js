const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));
router.get(express.static('public'));

router.get('/jobs',(req,res)=>{
    const url='https://api.sampleapis.com/health/professions';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/jobs',{
            title:'Medical Jobs',
            name:'List of medical Jobs',
            data
        })
    })
});

module.exports=router;