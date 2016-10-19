var gulp = require('gulp');


gulp.task('watch', function() {
	gulp.watch(['src/sass/**/*.scss'], ['sass']),
	gulp.watch(['src/jade/**/*.jade'], ['jade']);
});

gulp.task('default', ['watch']);