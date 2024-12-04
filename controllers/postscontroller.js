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
    res.json(req.post);
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
    const { title, slug, content, image, tags } = req.body;
    req.post.title = title;
    req.post.content = content;
    req.post.slug = slug ?? req.post.slug;
    req.post.image = image ?? req.post.image;
    req.post.tags = tags ?? req.post.tags;

    res.json(req.post);
};

function modify(req, res) {
    const { title, slug, content, image, tags } = req.body;
    req.post.title = title ?? post.title;
    req.post.slug = slug ?? post.slug;
    req.post.content = content ?? post.content;
    req.post.image = image ?? post.image;
    req.post.tags = tags ?? post.tags;

    res.json(req.post);
}

function destroy(req, res) {
    const index = posts.indexOf(req.post);
    posts.splice(index, 1);
    console.log(`Post ${req.post.id} eliminato`)
    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy };

