module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jade: {
            base_path: {
                files: {
                    'dest/path/': ['path/to/src/*.jade'],
                },
                options: {
                    basePath: 'path/to/'
                }
            }
        }
    });

    grunt.registerTask('release', 'sample release build', function(){


    });

    // Default task(s).
    grunt.registerTask('default', ['release']);

};
