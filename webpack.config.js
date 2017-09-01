const path = require("path");

//不做babel转换的文件列表
const noBabel = [
	"bootstrap.min.js",
	"jquery.countdown.min.js",
	"jquery.nicescroll.js",
	"jquery.popupoverlay.js",
	"modernizr-2.8.3.min.js",
	"jquery.min.js"
];

const inNoBabelList = (absPath) => {
	return noBabel.some(i => {
		return absPath.includes('\\'+i) || absPath.includes('/'+i);
	});
};

module.exports = {
	entry: __dirname + "/source/javascripts/main.js",
	output: {
		path: __dirname + "/public/javascripts",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: (absPath) => {
					//检查此文件是否在忽略列表中
					if (inNoBabelList(absPath)) {
						return false;
					}
					//检查扩展名
					return absPath.toLowerCase().slice(-3).includes('.js');
				},
				exclude: /(node_modules|bower_components|source\/javascripts\/3rd)/,
				loader: ["babel-loader?presets=es2015", "eslint-loader"]
			}
		]
	},
	resolve: {
		extensions: [".js"]
	}
}