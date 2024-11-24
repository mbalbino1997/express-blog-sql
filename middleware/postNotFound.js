function postNotFound(req, res, next, id) {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.status(404);
        res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    req.post= post;
    next();
}
module.exports= postNotFound;