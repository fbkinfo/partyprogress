module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'vendor/jquery/dist/jquery.js',
                    //'vendor/chosen/chosen.jquery.js',
                    'vendor/select2/select2.js',
                    'vendor/select2/select2_locale_ru.js',
                    'vendor/social-likes/src/social-likes.js',
                    'vendor/jquery-maskedinput/src/jquery.maskedinput.js',
                    'assets/js/src/main.js'
                ],
                dest: 'assets/js/script.js'
            }
        },
        less: {
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "assets/css/style.css": "assets/css/src/style.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            dist: {
                files: {
                    'assets/js/script.js': 'assets/js/script.js',
                }
            }
        },
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['assets/css/src/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: [
                    'vendor/jquery/dist/jquery.js',
                    //'vendor/chosen/chosen.jquery.js',
                    'vendor/select2/select2.js',
                    'vendor/select2/select2_locale_ru.js',
                    'vendor/social-likes/src/social-likes.js',
                    'vendor/jquery-maskedinput/src/jquery.maskedinput.js',
                    'assets/js/src/main.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    nospawn: true
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
};
