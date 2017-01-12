module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['test/*.js']
        },
        watch: {
            files: ['test/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};