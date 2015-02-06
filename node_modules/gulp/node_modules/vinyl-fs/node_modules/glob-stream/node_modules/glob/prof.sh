#!/bin/bash
export CDPATH=
set -e

tmp=${TMPDIR:-/tmp}
bash make-benchmark-fixture.sh
wd=$PWD
cd $tmp/benchmark-fixture

node --prof -e '
  var glob=require(process.argv[1]);
  glob("**/*.txt", function (er, files) {
    console.log(files.length)
  })
  //console.log(glob.sync("**/*.txt").length);
  ' "$wd"
mv v8.log "$wd"
cd "$wd"
node-tick-processor > profile.txt
