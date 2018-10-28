const gulp = require('gulp')
const pump = require('pump')
const sass = require('gulp-sass')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const del = require('del')

const { theme, dest } = require('minimist')(process.argv.slice(3))

if (!theme) {
  throw new Error(`'theme' parameter is required`)
}

const sassGlob = `themes/${theme}/sass/**/*.scss`
const imagesGlob = `themes/${theme}/images/*.png`
const destPath = dest || `./dist/`
const imagesDest = `${destPath}/${theme}/`

function clean() {
  return del([`${imagesDest}/**`, `${destPath}/${theme}*.qss`], {
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
      replace(/\nSTUB/g, ''),
      rename({ extname: '.qss' }),
      gulp.dest(destPath)
    ],
    done
  )
}

exports.build = gulp.series(clean, gulp.parallel(buildCss, copyImages))

exports.watch = () =>
  gulp.watch(
    sassGlob,
    { ignoreInitial: false },
    gulp.parallel(buildCss, copyImages)
  )
