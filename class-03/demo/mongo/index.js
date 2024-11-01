'use strict';

const mongoose = require('mongoose')
const Food = require('./models/food-schema');

const MONGODB_URI = 'mongodb://localhost:27017/401d6-food';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const DoMongoStuff = async() => {
    console.log("inside my DoMongoStuff ")
    let carrot = {
        name: 'Carrot',
        calories: 20,
        type: 'VEG'
    }

    try {
        let foodItem = new Food(carrot);
        let result = await foodItem.save();
        console.log("after save!! ")
        console.log("result : ", result)

        let allFood = await Food.find(); // select * from tablename
        console.log("allFood ::: ",allFood);

        let savedFoodItem = await Food.find(foodItem._id); // select * from tablename where id = 1
        console.log(" savedFoodItem : ", savedFoodItem);


    } catch(err) {
        console.log("this is my error");
        // report error
    }
    
    console.log("****************************")

    /// other code that needs the carrot food to be saved first
    mongoose.disconnect()
}

DoMongoStuff();