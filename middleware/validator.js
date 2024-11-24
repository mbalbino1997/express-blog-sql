function validator(req, res, next) {
    const { title, content } = req.body;

    if (!title || !content || !isNaN(title) || !isNaN(content)) {
        return res.status(400).json({
            error: "invalid or missing data",
            message: "Dati incompleti"
        });
    }

    next();
}

module.exports = validator;
