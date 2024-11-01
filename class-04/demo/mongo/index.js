'use strict';

const mongoose = require('mongoose')
const food = require('./models/food-collection');

const MONGODB_URI = 'mongodb://localhost:27017/401d6-food';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const DoMongoStuff = async() => {
    console.log("inside my DoMongoStuff ")
    let apple = {
        name: 'Apple',
        calories: 20,
        type: 'VEG'
    }

    try {
      
        const id = "5fec48467921c498828208b7";
        const item = await food.get(id);
        console.log("item : ", item);



        // let foodItem = await food.create(apple);
        // console.log("foodItem: ", foodItem)
        
        // let allFood = await food.get(); // select * from tablename
        // console.log("allFood ::: ",allFood);

    } catch(err) {
        console.log("this is my error");
        // report error
    }
    
    console.log("****************************")

    /// other code that needs the carrot food to be saved first
    // mongoose.disconnect()
}

DoMongoStuff();