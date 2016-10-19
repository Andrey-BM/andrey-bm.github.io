var gulp = require('gulp'),
	jade = require('gulp-jade');


gulp.task('jade', function() {
	return gulp.src('src/jade/*.jade')
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest('./www'));
});
