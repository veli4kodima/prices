const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const iconfont    =   require( 'gulp-iconfont' );
const iconfontCss =   require( 'gulp-iconfont-css' );
const webp = require('gulp-webp');


// let webp = require('gulp-webp');
// let webpcss = require("gulp-webpcss");

// const CSS = 'css';
// const IMG = 'img';


// exports.default = () => (
// 	gulp.src('./img/src/*.jpg')
// 		.pipe(webp())
// 		.pipe(gulp.dest('./img'))
// );
//webp covert
gulp.task('webp', () => {
	gulp.src('./img/src/*.jpg')
		.pipe(webp({quality: 90}))
		.pipe(gulp.dest('./img'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src('sass/*.+(scss|sass)')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.+(scss|sass)', gulp.parallel('styles'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

//icon fonts
const fontName = 'icons';

//add svg icons to the folder "icons" and use 'iconfont' task for generating icon font
gulp.task( 'iconfont', async () => {
    gulp.src( './icons/*.svg' )
        .pipe( iconfontCss( {
            // где будет наш scss файл
            targetPath   : '../sass/fonts/_icons.scss',
            // пути подлючения шрифтов в _icons.scss
            fontPath     : '../fonts/',
            fontName    : fontName

        } ) )
        .pipe( iconfont( {
            fontName    : fontName,
            formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
            normalize   : true,
            fontHeight  : 1001
        } ) )
        .pipe( gulp.dest( './fonts' ) )
});



// gulp.task('webp', done => {
// 	gulp.src(IMG + '/src/*')
// 		.pipe(webp({quality: 90}))
// 		.pipe(gulp.dest(IMG));
// 	done();
// });

// gulp.task('sass', done => {
// 	gulp.src(SASS + '/**/*.scss')
// 	  .pipe(webpcss({ webpClass: '', noWebpClass: '.no-webp' })
// 	  .pipe(gulp.dest(CSS));
// 	done();
//   });

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'styles'));