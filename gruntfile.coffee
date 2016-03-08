module.exports = (grunt)->
	# grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-autoprefixer'

	grunt.initConfig
		watch:
			# coffee:
			# 	files: 'default/coffee/*.coffee'
			# 	tasks: ['coffee:compile']
			js:
				files: 'default/js/*.js'
				tasks: [ 'uglify' ]

			sass:
				files:	'default/sass/**/*.sass'
				tasks: ['sass']

		autoprefixer:
			options:
				browsers: ['last 8 version', 'ie 8', 'ie 9']
			application:
				files: 'default/css/application.css' : ['default/css/application.css']

		# coffee:
		# 	compile:
		# 		flatten: true,
		# 		join: true,
		# 		files:
		# 			'default/js/app.js' : ['default/coffee/*.coffee']
		uglify:
			my_target:
				files:
					'default/js/app.min.js':['default/js/app.js']

		sass:
			dist:
				files:
					'default/css/application.css': 'default/sass/application.sass'


		cssmin:
			minify:
				src: 'default/css/application.css'
				dest: 'application.min.css'


	grunt.registerTask 'default', ['uglify','sass', 'autoprefixer', 'cssmin']