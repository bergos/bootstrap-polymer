require('shelljs/global')

if (!test('-d', 'dist')) {
  mkdir('dist')
}

exec('vulcanize --inline-scripts --inline-css --strip-comments bootstrap-polymer-dist.html > dist/bootstrap-polymer-dist.html')
