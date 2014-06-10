module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {

      options: {
        beautify : false
      },

      build: {
        src: ['js/vendor/jquery-1.11.0.js', 'js/plugin.js', 'js/action.js'],
        dest: 'js/build/javascript.min.js'
      }

    },

    sass: {

      options: {
        style: 'compact'
      },

      build: {
        src: 'scss/style.scss',
        dest: 'css/style.css'
      }
    }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify'], ['sass']);

};