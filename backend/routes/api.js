const { Console } = require('console');
const { Router } = require('express');
var express = require('express');
const { request } = require('http');
const { data, get } = require('jquery');
const { default: mongoose } = require('mongoose');
const { send } = require('process');
const { response } = require('../app');

var router=express.Router();

var User=mongoose.model('User');
var Pinfo=mongoose.model('Pinfo');

//api to post user info based on user schema

router.post('/postProductInfo',(req,res)=>{
    var body=req.body;
    console.log(body);
    var user=new Pinfo(body);
    console.log(user);
    user.save().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

)
router.post('/postInfo',(req,res)=>{
    var body=req.body;
    console.log(body);
    var user=new User(body);
    console.log(user);
    user.save().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
}

)
router.get('/getUserInfo',(req,res)=>{
User.find().then(data=>{
    console.log(data)
    res.status(200).send(data);

}).catch(err=>{
    console.log(err)
    res.status(500).send(err)
})
})
router.get('/getProductInfo',(req,res)=>{
    Pinfo.find().then(data=>{
        console.log(data)
        res.status(200).send(data);
    
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })
    })

router.get('/getById/:id',(req,res)=>{
    Pinfo.find({"_id":req.params.id}).then(data=>{
        console.log(data)
        res.status(200).send(data);
}).catch(err=>{
    console.log(err)
    res.status(500).send(err)
})
})

router.put('/updateDataById/:id',(req,res)=>{
    var body=req.body;
    Pinfo.updateOne({"_id":req.params.id},{$set:body}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
router.delete('/deleteDataById/:id',(req,res)=>{
    Pinfo.deleteOne({'_id':req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(200).send(err);
    })

})

router.get('/getDataByProduct/:name',(req,res)=>{
    Pinfo.find({"Product":req.params.name}).then(data=>{
        console.log(data)
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
router.put('/updateUserById/:id',(req,res)=>{
    var body=req.body;
    User.updateOne({"_id":req.params.id},{$set:body}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
router.delete('/deleteUserById/:id',(req,res)=>{
    User.deleteOne({'_id':req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(200).send(err);
    })

})

router.get('/getById/:id',(req,res)=>{
    User.find({"_id":req.params.id}).then(data=>{
        console.log(data)
        res.status(200).send(data);
}).catch(err=>{
    console.log(err)
    res.status(500).send(err)
})
})
router.get('/userData/:mail',(req,res)=>{
    User.find({"Email":req.params.mail}).then(data=>{
        console.log(data)
        res.status(200).send(data);

    }).catch(err=>{
        console.log(err)
        res.status(500).send(err)
    })
})


module.exports = router;