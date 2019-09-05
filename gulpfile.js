const path = require("path");
const fs = require("fs");
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

function getBuildDirs(parentDir) {
  return fs.readdirSync(parentDir).map(dirname => parentDir + dirname);
}

function buildSass(dir) {
  return src(`${dir}/*.scss`)
    .pipe(sass().on("error", sass.logError))
    // .pipe(cleanCSS())
    .pipe(
      rename({
        extname: ".wxss"
      })
    )
    .pipe(dest(dir));
}

function watchSass() {
  watch(["pages/**/*.scss"]).on("change", function(changePath, stats) {
    const changeDirname = path.dirname(changePath);
    buildSass(changeDirname);
  });

  watch(["components/**/*.scss"]).on("change", function(changePath, stats) {
    const changeDirname = path.dirname(changePath);
    buildSass(changeDirname);
  });
}

function build(cb) {
  const parentDirnameMap = ["pages/", "components/"];
  const dirnameMap = parentDirnameMap.reduce((accumulator, parentDir) => {
    return [...accumulator, ...getBuildDirs(parentDir)];
  }, []);

  for (const dirname of dirnameMap) {
    buildSass(dirname);
  }
  cb();
}

exports.watch = watchSass;
exports.build = build;
exports.default = build;
