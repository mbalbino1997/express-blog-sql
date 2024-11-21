const express = require("express");
const app = express();
const port = 3000;
const posts = require("./data/posts.js");
const postsRouter = require("./routers/posts.js");

app.use(express.static("public/imgs"));
app.use(express.json());
app.use("/posts", postsRouter);






const server = app.listen(port, () => {
    console.log(`server in ascolto sula porta ${port}`)
})
process.on('SIGINT', () => {
    server.close();
    console.log('Exit Server');
    process.exit(0);
});