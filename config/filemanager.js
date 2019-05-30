
exports.onStart={
    delete: [
        'src/**/*.js',
        'src/**/*.js.map',
        'src/**/*.ngsummary.json',
        'src/**/*.metadata.json',
        'src/**/**/*.ngfactory.ts',
        'src/**/*.ngstyle.ts',
        'src/**/*.shim.ts'
    ]
}

exports.onEnd={
    delete: [
        'src/**/*.js',
        'src/**/*.js.map',
        'src/**/*.ngsummary.json',
        'src/**/*.metadata.json',
        'src/**/**/*.ngfactory.ts',
        'src/**/*.ngstyle.ts',
        'src/**/*.shim.ts'
    ]
}