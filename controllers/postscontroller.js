// const posts = require("../data/posts.js")
// let lastIndex = posts.at(-1).id;
const connection = require('../data/db.js')
function index(req, res) {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    })
};

function show(req, res) {
    const id = req.params.id;

    const sql = 'SELECT * FROM posts WHERE id = ?'
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Pizza not found' });
        res.json(results[0]);
    })
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

