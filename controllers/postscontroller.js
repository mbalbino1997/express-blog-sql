const posts = require("../data/posts.js")
let lastIndex = posts.at(-1).id;
function index(req, res) {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(
            post => post.tags.map((el) => el.toLowerCase()).includes(req.query.tag.toLowerCase())
        )
    }
    res.json(filteredPosts)
};

function show(req, res) {
    const id = parseInt(req.params.id);
    let post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        post = {
            error: "Not Found",
            message: "Pizza non trovata"
        }
    }
    res.json(post);
};

function store(req, res) {
    lastIndex++
    const { title, slug, content, image, tags } = req.body;
    const newPost = {
        id: lastIndex,
        title,
        slug,
        content,
        image,
        tags
    }
    posts.push(newPost);
    res.status(201);
    res.json(newPost);
};

function update(req, res) {
    res.send(`Modifica totale del post ${req.params.id}`)
};

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    let post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        });

    }
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy };