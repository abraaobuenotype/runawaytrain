import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: 'src/index.js'
    output: {
        name: 'runwaytrain',
        file: 'dist/runwaytrain.js',
        format: 'umd'
    },
    plugins: [
        rsolve(),
        commonjs(),
        babel({
            include: 'src',
            exclude: 'node_modules/**'
        })
    ]
}