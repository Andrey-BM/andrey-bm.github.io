var gulp = require('gulp'),
	jade = require('gulp-jade'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('src/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('./www/css'));
});

gulp.task('jade', function() {
	return gulp.src('src/jade/*.jade')
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest('./www'));
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('www/img'))
});

gulp.task('watch', function() {
	gulp.watch(['src/sass/**/*.scss'], ['sass']),
	gulp.watch(['src/jade/**/*.jade'], ['jade']);
});

gulp.task('default', ['watch']);