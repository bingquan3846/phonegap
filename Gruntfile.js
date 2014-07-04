// Gruntfile for local dev - Holger Volk - wk - stilbezirk
// grunt dev --gruntfile Gruntfile_wk.js

module.exports = function(grunt) {

    grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'web'
                }
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'template/js/*.js'
                ],
                dest: 'template/build/main.js'
            },
        },
        uglify: {
            options: {
                //mangle: false,
                //report: 'gzip',
                preserveComments: 'some',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            js: {
                files: {
                    'template/js/build/main.min.js': ['<%= concat.js.dest %>']
                }
            }
        },
        // Build html files using grunt-includes
        includes: {
            build: {
                cwd: 'template/html',
                src: [ '*.html' ],
                dest: 'template/html',
                options: {
                    flatten: true
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                    //watch: true
                }
            }
        },
        copy: {
            css: {
               //src: 'template/css/*',
               //dest: 'template/build/'
                //dest: '/Volumes/webdev01-www/uvexsportscom.webkomplize.dev'
            },
            js: {
                //src: 'template/build/*',
                //dest: 'phonegap-example/www/js'
                //dest: '/Volumes/webdev01-www/uvexsportscom.webkomplize.dev/',
            },
            html: {
                src: 'template/html/*',
                dest: 'template/build/'
                //dest: '/Volumes/webdev01-www/uvexsportscom.webkomplize.dev/',
            }
        },
        watch: {

            js: {
                files: ['template/js/*.js'],
                tasks: ['concat:js', 'uglify:js', 'copy:js'],
                options: {
                    livereload: true,
                }
            },
            includes: {
                files: ['template/html/**/*.html'],
                tasks: ['includes','copy:html'],
                options: {
                    livereload: true,
                }
            },
            sass: {
                files: ['template/css/sass/**/*.scss'],
                tasks: ['compass','copy:css'],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ['template/html/*.html'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'includes']);
    //grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('dev', ['watch']);

};