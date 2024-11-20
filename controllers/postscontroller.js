const posts = require("../data/posts.js")

function index(req, res) {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tag)
        )
    }
    res.json(filteredPosts)
};

function show(req, res) {
    res.send(`Dettagli del post ${req.params.id}`)
};

function store(req, res) {
    res.send("Creazione nuovo post")
};

function update(req, res) {
    res.send(`Modifica totale del post ${req.params.id}`)
};

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`)
}

function destroy(req, res) {
    res.send(`Eliminazione della pizza ${req.params.id}`)
}

module.exports = { index, show, store, update, modify, destroy };