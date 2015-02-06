const fs = require('fs');
const path = require('path');

const exec = require('child_process').exec;
// this is from the env of npm, not node
const nodePath = process.env.NODE;
const version = process.versions.v8;
const tmpfile = path.join(__dirname, version+'.flags.json');

if (!fs.existsSync(tmpfile)) {
  exec('"'+nodePath+'" --v8-options', function (execErr, result) {
    var flags;
    if (execErr) {
      throw new Error(execErr);
    } else {
      flags = result.match(/\s\s--(\w+)/gm).map(function (match) {
        return match.substring(2);
      });
      fs.writeFile(tmpfile, JSON.stringify(flags), { encoding:'utf8' },
        function (writeErr) {
          if (writeErr) {
            throw new Error(writeErr);
          } else {
            console.log('flags for v8 '+version+' cached.');
          }
        }
      );
    }
  });
}

module.exports = require.bind(null, tmpfile);
