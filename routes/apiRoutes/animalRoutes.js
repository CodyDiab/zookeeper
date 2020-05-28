const { filterByQuery, findById, createNewAnimal, validateAnimal} = require('../../lib/animals')
const { animals } = require('../../data/animals.json')
const router = require('express').Router();


router.get('/animals', (req, res)=> {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query,results);
    }
    
    res.json(results);
});
router.get('/animals/:id', (req,res) => {
    const result = findById(req.params.id, animals);
    if (result){
    res.json(result);
    } else {
        res.send(404);
    }
})
router.post('/animals', (req,res) => {
    //req.body is where our incoming content will be
    //creats id /////////////////////////////////////////
   req.body.id = animals.length.toString();
   //add to json file
   if (!validateAnimal(req.body)){
       res.status(400).send('The animal is not formated properly')
   }else{
   const animal = createNewAnimal(req.body, animals);
    res.json(animal);
   }
});


module.exports = router;