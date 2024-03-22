const Author = require("../models/author.model");


async function createAuthor(req, res) {
    try {
        const _author = req.body
        const author = await Author.create(_author)
        res.status(201).json(author)
    } catch (error) {
        console.error("Error creating author: ", error.message)
        if (error.message.includes("validation failed")) {   
            return res.status(400).json({
                message: error.message
            })
        }
        res.status(500).json({
            message: "Error createing author: " + error.message
        })
    }
}

//TODO: READ all authors
//TODO: READ author on id

module.exports = {
    createAuthor
}