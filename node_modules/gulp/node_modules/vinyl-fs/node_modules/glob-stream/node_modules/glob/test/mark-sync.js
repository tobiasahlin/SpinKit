var test = require("tap").test
var glob = require('../')
process.chdir(__dirname)

test("mark, with **", function (t) {
  var results = glob.sync("a/*b*/**", {mark: true})
  var expect =
    [ 'a/abcdef/',
      'a/abcdef/g/',
      'a/abcdef/g/h',
      'a/abcfed/',
      'a/abcfed/g/',
      'a/abcfed/g/h',
      'a/b/',
      'a/b/c/',
      'a/b/c/d',
      'a/bc/',
      'a/bc/e/',
      'a/bc/e/f',
      'a/cb/',
      'a/cb/e/',
      'a/cb/e/f' ]

  t.same(results, expect)
  t.end()
})

test("mark, no / on pattern", function (t) {
  var results = glob.sync("a/*", {mark: true})
  var expect = [ 'a/abcdef/',
                 'a/abcfed/',
                 'a/b/',
                 'a/bc/',
                 'a/c/',
                 'a/cb/' ]

  if (process.platform !== "win32")
    expect.push('a/symlink/')

  t.same(results, expect)
  t.end()
})

test("mark=false, no / on pattern", function (t) {
  var results = glob.sync("a/*")
  var expect = [ 'a/abcdef',
                 'a/abcfed',
                 'a/b',
                 'a/bc',
                 'a/c',
                 'a/cb' ]

  if (process.platform !== "win32")
    expect.push('a/symlink')
  t.same(results, expect)
  t.end()
})

test("mark=true, / on pattern", function (t) {
  var results = glob.sync("a/*/", {mark: true})
  var expect = [ 'a/abcdef/',
                  'a/abcfed/',
                  'a/b/',
                  'a/bc/',
                  'a/c/',
                  'a/cb/' ]
  if (process.platform !== "win32")
    expect.push('a/symlink/')
  t.same(results, expect)
  t.end()
})

test("mark=false, / on pattern", function (t) {
  var results = glob.sync("a/*/")
  var expect = [ 'a/abcdef/',
                 'a/abcfed/',
                 'a/b/',
                 'a/bc/',
                 'a/c/',
                 'a/cb/' ]
  if (process.platform !== "win32")
    expect.push('a/symlink/')
  t.same(results, expect)
  t.end()
})
