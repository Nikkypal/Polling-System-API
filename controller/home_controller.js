const  mongoose = require('mongoose');
const Question = require('../models/question');

module.exports.home = async function(req, res){
    try {
        
         // find all questions and populate their options
         let questions = await Question.find({}).populate('options');

         //send the question back in the response
         return res.status(200).json(questions)


    } catch (err) {
        // Log any errors that occur and return an error response
        console.log(err)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}