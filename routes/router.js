const express=require('express');
const router=express.Router();
router.use(express.static('public'));

const jobsRoute=require('./api/jobsRoute');
const singleJobRoute=require('./api/singleJobRoute');

router.get('/jobs',jobsRoute);
router.get('/jobs/:id',singleJobRoute);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Home',
        name:'Medical Jobs Home Page'
    })
});

module.exports=router;