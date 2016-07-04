require('shelljs/global')

if (!test('-d', 'dist')) {
  mkdir('dist')
}

exec('vulcanize --inline-scripts --inline-css --strip-comments index.html > dist/index.html')
