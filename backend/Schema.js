const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        actualBlog: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        
        genre: {
            type: String,
            required: true
        },
    }
)

const loginSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },
    }
)


const Blog = mongoose.model('Blog' , blogSchema);
module.exports = Blog;