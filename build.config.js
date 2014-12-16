module.exports.config = {

    src: [
        'src/**/*.js', '!src/**/*.spec.js'
    ],

    dest: 'dist/momentadapter.js',

    bower_components: [
        'bower_components/momentjs/min/moment.min.js',
        'bower_components/momentjs/lang/de.js',
        'bower_components/momentjs/lang/fr.js',
        'bower_components/momentjs/lang/it.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js'
    ]
}
;
