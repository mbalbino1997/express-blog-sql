const posts = require("../data/posts.js")
function postNotFound(req, res, next, id) {
    const postId = parseInt(id);
    const post = posts.find(post => post.id === postId);
    console.log(`Cercando il post con ID: ${postId}`);
    if (!post) {
        return res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }
    req.post = post;
    next();
}
module.exports = postNotFound;