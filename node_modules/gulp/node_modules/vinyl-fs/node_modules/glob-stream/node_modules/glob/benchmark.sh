#!/bin/bash
export CDPATH=

tmp=${TMPDIR:-/tmp}
bash make-benchmark-fixture.sh
wd=$PWD
cd $tmp/benchmark-fixture

set -e

if [[ "`bash --version`" =~ version\ 4 ]]; then
  echo Bash timing:
  time bash -c 'shopt -s globstar; echo **/*.txt | wc -w'
fi

echo
if type zsh; then
  echo Zsh timing:
  time zsh -c 'echo **/*.txt | wc -w'
fi

echo

echo Node statSync and readdirSync timing:
time node -e '
  var fs=require("fs");
  var count = 0;
  function walk (path) {
    if (path.slice(-4) === ".txt") count++;
    var stat = fs.statSync(path);
    if (stat.isDirectory()) {
      fs.readdirSync(path).forEach(function(entry) {
        walk(path + "/" + entry);
      })
    }
  }
  walk(".");
  console.log(count)'
echo

echo Node glob.sync timing:
time node -e '
  var glob=require(process.argv[1]);
  console.log(glob.sync("**/*.txt").length);' "$wd"
echo

echo Node glob async timing:
time node -e '
  var glob=require(process.argv[1]);
  glob("**/*.txt", function (er, files) {
    console.log(files.length)
  })' "$wd"
echo

echo Node glob with --prof
cd $wd
bash prof.sh
