const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173",
};
const posts = require("./data/posts.js");
const postsRouter = require("./routers/posts.js");
const errorsHandler = require("./middleware/errorsHandler.js");
const notFound = require("./middleware/notFound.js");

app.use(cors({ origin: "*" }));
app.use(express.static("public/imgs"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Richiesta ${req.method} per ${req.url}`);
    next();  // Passa al prossimo middleware o alla rotta
});
app.use("/posts", postsRouter);
app.use(errorsHandler);
app.use(notFound);





const server = app.listen(port, () => {
    console.log(`server in ascolto sula porta ${port}`)
})
process.on('SIGINT', () => {
    server.close();
    console.log('Exit Server');
    process.exit(0);
});