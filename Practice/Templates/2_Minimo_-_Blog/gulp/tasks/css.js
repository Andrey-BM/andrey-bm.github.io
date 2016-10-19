var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('src/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('./www/css'));
});
