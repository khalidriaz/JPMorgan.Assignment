module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['StockExchange/**/*.js' ]
        },
        watch: {
            files: ['StockExchange/**/*.js'],
            tasks: ['jshint']
        }
    });

    
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};