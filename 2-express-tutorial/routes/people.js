const express = require('express');
const router = express.Router();
const data = require('../final/data')

const {getPeople, addPeople} = require('../controllers/people')


router.get('/',getPeople)

router.route('/').post(addPeople)


router.put('/:id',(req,res)=>{   
   let datafound = data.find((e)=>{   
    if(e.id == req.params.id){
    return e
    }
})
 if(datafound){
        const {name} = req.body
        console.log(name);
        datafound.name = name
        res.status(200).json([...data])
    }
    else
        res.send(`Invalid data`)  
})


router.delete('/:id',(req,res)=>{ 
const index = data.findIndex(f=>f.id === +(req.params.id))
data.splice(index,1)
res.json([...data])
})


module.exports = router