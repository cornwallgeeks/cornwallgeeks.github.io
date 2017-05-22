var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sassGlob     = require('gulp-sass-glob');
var cp           = require('child_process');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('hello', function() {
  console.log('Hello Martin');
});

gulp.task('sass', function(){
	console.log('Sass compiling...');
	return gulp.src('assets/css/**/*.scss')
	    .pipe(sassGlob())
    	.pipe(sass()) // Converts Sass to CSS with gulp-sass
    	.pipe(autoprefixer({
    		browsers: ['last 2 versions'],
    		cascade: false
    	}))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
	    	stream: true
	    }))
});

gulp.task('browser-sync-styles', function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// Build the Jekyll Site
gulp.task('jekyll-build',['sass'], function (done) {
	browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync-styles', 'sass'], function (){
	gulp.watch('assets/css/**/*.scss', ['sass', 'jekyll-rebuild']);
	gulp.watch(
		[
		'**/*.html', 
		'**/*.md', 
		'_layouts/*.html', 
		'_includes/*.html', 
		'_config.yml',
		'assets/**/*',
		'!_site/**/*'

		], 
		['jekyll-rebuild']
	);
})