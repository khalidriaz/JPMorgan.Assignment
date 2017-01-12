module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['modules/*.js', 'test/*.js' ]
        },
        watch: {
            files: ['modules/*.js', 'test/*.js'],
            tasks: ['jshint']
        }
    });

    
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};