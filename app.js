const Koa = require("koa");
const path = require("path");
const logger = require("koa-logger");
const bodyparser = require("koa-bodyparser");
const static = require("koa-static");
const views = require("koa-views");
const onerror = require("koa-onerror");
const json = require("koa-json");

const index = require("./routes/index");
const app = new Koa();

onerror(app);

app.use(logger());
app.use(json());
app.use(bodyparser({
	enableTypes: ["json", "form", "text"]
}));

app.use(static(
	path.join(__dirname, "./public")
));

app.use(views(
	path.join(__dirname, "./templates/views"), {
		extension: "pug"
	}
));

app.use(async(ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} - ${ctx.url} => ${ms}ms`);
})

app.use(index.routes(), index.allowedMethods());

app.listen(8080, () => {
	console.log("listening at port 8080...")
})

