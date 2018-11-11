const gulp = require('gulp')
const pump = require('pump')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const del = require('del')
const zip = require('gulp-zip')

const {
  _: [, , task],
  theme,
  dest,
  version
} = require('minimist')(process.argv)

if (!theme) {
  throw new Error(`'theme' parameter is required`)
}

if (task === 'build' && !version) {
  throw new Error(`'version' parameter is required`)
}

const sassGlob = `themes/${theme}/sass/**/*.scss`
const imagesGlob = `themes/${theme}/images/*.png`
const destPath = dest || `./dist/`
const imagesDest = `${destPath}/${theme}/`
const destGlobs = [`${destPath}/${theme}*`, `${imagesDest}**`]

function clean() {
  return del(destGlobs, {
    force: true
  })
}

function copyImages(done) {
  pump([gulp.src(imagesGlob), gulp.dest(imagesDest)], done)
}

function buildCss(done) {
  pump(
    [
      gulp.src(sassGlob),
      sass().on('error', sass.logError),
      replace('/*POSTSASS ', ''),
      replace(' POSTSASS*/', ''),
      replace('VERSION', version),
      rename({ extname: '.qss' }),
      gulp.dest(destPath)
    ],
    done
  )
}

function zipTheme(done) {
  pump(
    [
      gulp.src(destGlobs, { base: destPath }),
      zip(`${theme}-${version}.zip`),
      gulp.dest(destPath)
    ],
    done
  )
}

function watchSass() {
  return gulp.watch(sassGlob, { ignoreInitial: false }, buildCss)
}

function watchImages() {
  return gulp.watch(imagesGlob, copyImages)
}

exports.build = gulp.series(
  clean,
  gulp.parallel(buildCss, copyImages),
  zipTheme
)

exports.watch = gulp.parallel(watchSass, watchImages)
