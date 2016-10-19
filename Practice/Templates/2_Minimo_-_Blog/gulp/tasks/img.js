var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');


gulp.task('imagemin', function() {
	return gulp.src('src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('www/img'))
});
