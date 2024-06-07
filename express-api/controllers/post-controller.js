const {prisma} = require('../prisma/prisma-client')

const PostController = {
    createPost: async (req, res) => {
        res.send('createPost')
    },
    getAllPosts: async (req, res) => {
        res.send('getAllPosts')
    },
    getPostById: async (req, res) => {
        res.send('getPostById')
    },
    deletPost: async (req, res) => {
        res.send('deletPost')
    }
}

module.exports = PostController