var	gulp 	= require('gulp'),
	imageMin= require('gulp-imagemin'),
	del 	= require('del'),
	useMin 	= require('gulp-usemin'),
	rev 	= require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify 	= require('gulp-uglify'),
	browserSync     = require("browser-sync").create();

gulp.task('previewDist', function(){
	browserSync.init({
      server: {
        baseDir: "views"
      }
   });
});

gulp.task('deleteDistFolder', ['icons'], function(){
	return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
	var pathsToCopy = [
		'./app/**/*',
		'./app/index.ejs',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	];

	return gulp.src(pathsToCopy)
	.pipe(gulp.dest('./docs'));
});

gulp.task('copyToExpressViews', ['copyGeneralFiles'], function() {
    var pathsToCopy = [
		'./app/index.ejs',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
    	];
    	
    return gulp.src(pathsToCopy)
	.pipe(gulp.dest('./views'));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imageMin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){

	gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src('./app/index.ejs')
	.pipe(useMin({
		css: [function() {return rev()}, function(){return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest('./docs'));
});


gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'copyToExpressViews', 'optimizeImages', 'useminTrigger']);