const path = require('path');
const fs = require('fs');

const expect = require('chai').expect;

const v8flags = require('./');

const tmpfile = path.resolve(process.versions.v8+'.flags.json');

describe('v8flags', function () {

  it('should have created a temp file during installation', function() {
    expect(fs.existsSync(tmpfile)).to.be.true;
  });

  describe('::fetch', function () {
    it('should require v8 flags temp file', function () {
      expect(require(tmpfile)).to.deep.equal(v8flags.fetch());
    })
  });

});
