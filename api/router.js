const router = require("express").Router();

const postRouter = require("../posts/postRouter.js");

router.get("/", (req, res) => {
    res.status(200).json({ router: "api" });
});

router.use("/posts", postRouter);

module.exports = router;
