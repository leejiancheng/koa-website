const gulp = require("gulp")
const sass = require("gulp-sass")								// 编译scss样式文件
const autoprefixer = require("gulp-autoprefixer")				// 样式自动添加前缀
const mincss = require("gulp-clean-css")						// 压缩css文件
const changed = require("gulp-changed")							// 只编译或打包改变过文件
const plumber = require("gulp-plumber")							// 用于保证steam流继续执行
const gutil = require("gulp-util")								// 主要使用日志打印功能
const rename = require("gulp-rename")							// 文件重命名
const imagemin = require("gulp-imagemin")						// img图片压缩
const del = require("del")										// 删除文件
// const notify = require('gulp-notify')							// 用于任务提醒
// const browserSync = require("browser-sync")						// 让浏览器自动刷新页面
// const jade = require("gulp-jade")								// 编译jade模板文件
// const uglify = require("gulp-uglify")							// 压缩js文件
// const jshint = require("gulp-jshint")							// js文件语法检查
// const htmlBeautify = require("gulp-html-beautify")				// html文件格式化

var path = {
	// jade: "source/templates/views/",						// jade模板路径
	// js: "source/assets/js/",								// js文件路径
	css: "source/stylesheets/",										// css文件路径
	scss: "source/sass/",									// scss文件路径
	img: "source/images/",									// 图片文件路径
	font: "source/fonts/",									// 字体文件路径
	dist: "public/"											// 输出路径
}

// 编译jade模板文件任务
// gulp.task("jade", function(){
// 	gulp.src(path.jade + "**/*.jade")
// 		.pipe(plumber())
// 		.pipe(changed(path.dist, {
// 			extension: ".html"
// 		}))
// 		.pipe(jade({
// 			pretty: true
// 		}).on("error", gutil.log).on("error", gutil.beep))
// 		.pipe(htmlBeautify({
// 			indent_size: 4,
// 			indent_char: " ",
// 			unformatted: true,
// 			extra_liners: []
// 		}))
// 		.pipe(gulp.dest(path.dist))
// 		.pipe(browserSync.stream())
// })


// js文件语法检查
// gulp.task("jshint", function(){
// 	gulp.src([path.js + "**/*.js", "!" + path.js + "plugins/**"])
// 		.pipe(jshint())
// 		.pipe(jshint.reporter("default"))
// })

// js文件压缩
// gulp.task("js", ["jshint"], function(){
// 	gulp.src(path.js + "**/*.js")
// 		.pipe(changed(path.dist + "assets/js/"))
// 		.pipe(uglify())
// 		.pipe(rename({
// 			suffix: ".min"
// 		}))
// 		.pipe(gulp.dest(path.dist + "assets/js/"))
// })



// 构建服务任务
// gulp.task("serve", function(){
// 	console.log("==========================================================")
// 	console.log("Server running at http://localhost:3000")
// 	console.log("==========================================================")
// 	browserSync({
// 		server: {
// 			baseDir: path.dist
// 		},
// 		startPath: "manage/login.html"
// 	})
// 	gulp.watch(path.css + "**/*.css", ["css"])
// 	gulp.watch(path.img + "**/*.+(png|gif|jpg|ico)", ["image"])
// 	gulp.watch(path.scss + "**/*.scss", ["scss"])
// 	gulp.watch(path.jade + "**/*.jade", ["jade"])
// 	gulp.watch(path.js + "**/*.js", ["js"])
// 	gulp.watch(path.font + "**", ["copyFonts"])
// 	gulp.watch(path.dist + "**").on("change", browserSync.reload)
// })

// 压缩css文件任务
gulp.task("css", ["scss"], function(){
	gulp.src(path.css + "**/*.css")
		.pipe(mincss())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest(path.dist + "stylesheets/"))
		// .pipe(browserSync.stream())
})

// 编译scss样式文件任务
gulp.task("scss", function(){
	gulp.src(path.scss + "**/*.scss")
		.pipe(changed(path.css, {
			extension: ".css"
		}))
		.pipe(plumber())
		.pipe(sass({
			outputStyle: "expanded"
		}).on("error", gutil.log).on("error", gutil.beep))
		.pipe(autoprefixer({
			browsers: ["last 4 versions"],
			cascade: true
		}))
		.pipe(gulp.dest(path.css))
		// .pipe(browserSync.stream())
})

// 压缩图片文件任务
gulp.task("image", function(){
	gulp.src(path.img + "**/*.+(png|gif|jpg|ico)")
		.pipe(changed(path.dist + "images/"))
		.pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
		.pipe(gulp.dest(path.dist + "images/"))
		// .pipe(browserSync.stream())
})

// 复制字体文件任务
gulp.task("copyFonts", function(){
	gulp.src(path.font + "**")
		.pipe(gulp.dest(path.dist + "fonts/"))
})

// 删除文件任务
gulp.task("clean", function(cb){
	return del([path.css + "**"], {
		force: true
	}, cb)
})

// 监控文件任务
gulp.task("watch", function() {
	gulp.watch(path.css + "**/*.css", ["css"])
	gulp.watch(path.img + "**/*.+(png|gif|jpg|ico)", ["image"])
	gulp.watch(path.scss + "**/*.scss", ["scss"])
	gulp.watch(path.font + "**", ["copyFonts"])
})

// 初始化任务
gulp.task("build", function(){
	gulp.start("scss", "css", "image", "copyFonts", "watch")
	// gulp.start("scss", "watch")
})