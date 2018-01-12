const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task("message", function(){
	return console.log("Gulp is running...!")
}) 

// Copy html files to destination directory
gulp.task("copyHtml", function() {
	gulp.src('public/html/*.html')
		.pipe(gulp.dest('dist/html'));
})

// Uglify and Concat All JS Files
gulp.task('concat', function() {
	gulp.src(['public/js/css-objects/*.js', 'public/js/front-end/*.js','public/js/controllers/apps/*.js', 'public/js/controllers/*.js', ])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
})

gulp.task('default', ['message', 'copyHtml', 'concat'])

// Watchers
gulp.task('watch', function() {
	gulp.watch('public/js/controllers/*.js', ['concat']);
	gulp.watch('public/js/front-end/*.js', ['concat']);
	gulp.watch('public/js/css-objects/*.js', ['concat']);
	gulp.watch('public/js/controllers/apps/*.js', ['concat']);
	gulp.watch('public/html/*.html', ['copyHtml']);
})