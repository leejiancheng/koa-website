const router = require("koa-router")();

router.get("/", async(ctx, next) => {
	await ctx.render("index", {
		title: "Kareeb Coming Soon HTML Template | #"
	});
});

module.exports = router;