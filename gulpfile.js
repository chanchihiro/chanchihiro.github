var gulp = require("gulp");
var babel = require("gulp-babel");
var autoprefixer = require("gulp-autoprefixer"); //弁ダープレフィックスつける
var frontnote = require("gulp-frontnote"); //スタイルガイドの作成
var uglify = require("gulp-uglify"); //jsの圧縮
var browser = require("browser-sync"); //ライブリロード
var plumber = require("gulp-plumber"); //途中で実行をやめてしまうのをやめる
var jade = require("gulp-jade"); //jadeのコンパイル
var frontNote = require('gulp-frontnote'); //スタイルガイドの作成
var babelify = require("babelify");  //babel
var browserify = require("browserify"); //babel
var buffer = require("vinyl-buffer"); //uglifyするためのもの //今は使わない
var node = require("node-dev");
var source = require("vinyl-source-stream"); //browserifyとgulpを使用する場合は、vinyl-source-streamで橋渡ししないといけない



function errorHandler(err){
	console.log('Error: ' + err.message);
}


gulp.task('babel', function() {
	gulp.src('./src/js/*.es6')
		.pipe(babel())
		.pipe(plumber())
		.pipe(gulp.dest('./js'));
	browser.reload();
});


gulp.task("build", function(){
	browserify({entries: ["index.js"]})
		.transform(babelify,{presets: ['es2015',"react"]})
		.bundle()
		.on("error",errorHandler)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./js'));
	browser.reload();
});


gulp.task("server",function(){
	browser({
		server:{
			baseDir:"./"
		}
	});
});



gulp.task("jade",function(){
	gulp.src("src/views/*.jade")
		.pipe(plumber())
		.pipe(jade({
			pretty:true
		}))
		.pipe(gulp.dest("./public"));
	browser.reload();
});


gulp.task("default",["server","babel"],function(){
	gulp.watch("src/js/*.es6",["babel"]);
	gulp.watch('index.js', ['build']);
	gulp.watch("public/**",function(){
	browser.reload();
	});
});