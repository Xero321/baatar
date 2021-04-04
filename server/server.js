const express = require('express');
const app = express();
const mongoose = require('mongoose');

const AnketModel = require('./model/anket')
const cors = require('cors');
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://baatar:baatar123@cluster0.msitc.mongodb.net/anket?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.post('/insert',  (req, res) => {

    const fullName = req.body.fullName;
    const job = req.body.job;
    const age = req.body.age;
    const sex = req.body.sex;
    
    const anket= new AnketModel({ fullName: fullName, job: job, age:age, sex:sex});

    try{
        anket.save();
        res.send("inserted data");
    } catch(err){
        console.log(err)
    }

});

app.get("/read", (req, res) => {
    AnketModel.find({}, (err, result) => {
        if(err){
            res.send(err);
        } 
        res.send(result)
    })
})

app.put('/update',  (req, res) => {

    const id = req.body.id;
    const NewFullName = req.body.newFullName;
    const NewJob = req.body.newJob;
    const NewAge = req.body.newAge;
    const NewSex = req.body.newSex;
   
    
    try{
        AnketModel.findById(id, (err, updatedAnket)  => {
        updatedAnket.fullName = NewFullName;
        updatedAnket.job = NewJob;
        updatedAnket.age = NewAge;
        updatedAnket.sex = NewSex;
        updatedAnket.save();
        res.send('updated')
        })
    } catch(err){
        console.log(err)
    }

});

app.delete('/delete/:id',  (req, res) => {

   
    const id = req.params.id;
    
  
        AnketModel.findByIdAndRemove(id).exec();
        
        res.send('deleted')
        
    

});

app.listen(3001, ()=> {
    console.log('Server is running');
})