import gulp from 'gulp'
import pump from 'pump'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import { deleteAsync } from 'del'
import zip from 'gulp-zip'
import minimist from 'minimist'

const {
  _: [, , task],
  theme,
  dest,
  version,
} = minimist(process.argv)

if (!theme) {
  throw new Error(`'theme' parameter is required`)
}

if (task === 'build' && !version) {
  throw new Error(`'version' parameter is required`)
}

const sass = gulpSass(dartSass);

const sassGlob = `themes/${theme}/sass/**/*.scss`
const imagesGlob = `themes/${theme}/images/*.png`
const destPath = dest || `./dist/`
const imagesDest = `${destPath}/${theme}/`
const destGlobs = [`${destPath}/${theme}*`, `${imagesDest}**`]

function clean() {
  return deleteAsync(destGlobs, {
    force: true,
  })
}

function copyImages(done) {
  pump([gulp.src(imagesGlob), gulp.dest(imagesDest)], done)
}

function buildCss(done) {
  pump(
    [
      gulp.src(sassGlob),
      sass.sync().on('error', sass.logError),
      replace('/*POSTSASS ', ''),
      replace(' POSTSASS*/', ''),
      replace('VERSION', version),
      rename({ extname: '.qss' }),
      gulp.dest(destPath),
    ],
    done
  )
}

function zipTheme(done) {
  pump(
    [
      gulp.src(destGlobs, { base: destPath }),
      zip(`${theme}-${version}.zip`),
      gulp.dest(destPath),
    ],
    done
  )
}

function watchSass() {
  return gulp.watch(sassGlob, { ignoreInitial: false }, buildCss)
}

function watchImages() {
  return gulp.watch(imagesGlob, { ignoreInitial: false }, copyImages)
}

export const build = gulp.series(
  clean,
  gulp.parallel(buildCss, copyImages),
  zipTheme
)

export const watch = gulp.parallel(watchSass, watchImages)
