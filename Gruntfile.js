module.exports = function(grunt){
	"use strict"

	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 9000,
					keepalive:true,
					debug:true,
					base: ".",
					hostname: "localhost",
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask("default", ["connect"]);
};
