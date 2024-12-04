function postNotFound(req, res, next, id) {
    const postId = parseInt(id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    req.post = post;
    next();
}
module.exports = postNotFound;