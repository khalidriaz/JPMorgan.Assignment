module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['test/*.js', 'modules/*.js']
        },
        watch: {
            files: ['test/*.js', 'modules/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};