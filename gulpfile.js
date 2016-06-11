var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

gulp.task('server:ts', function () {
	var tsResult = gulp.src([
			'src/**/*.ts*'
		])
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['server:ts']);
