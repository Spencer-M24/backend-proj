const Peoples = require("./user-model");
const router = require("express").Router();

router.get("/", async (req, res) => {
    
    try {
    
        peoples = await Peoples.find();
    
        res.status(200).json(peoples);
    
    } catch (error) {
    
        res.status(500).json(error);
    
    }
});




router.get("/:people_id/training/", 

async (req, res) => {

    try {

        let people = await Peoples.getPeopletraining(req.params.people_id);

        if (people) {

            res.status(200).json(people);

        } else {

            res.status(404).send("error cannot find info on people training");

        }

    } catch (error) {

        res.status(500).json(error);


    }

});



module.exports = router;



