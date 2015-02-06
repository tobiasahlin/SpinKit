var extensions = {
  '.co': 'coco',
  '.coffee': 'coffee-script/register',
  '.coffee.md': 'coffee-script/register',
  '.csv': 'require-csv',
  '.iced': 'iced-coffee-script/register',
  '.ini': 'require-ini',
  '.js': null,
  '.json': null,
  '.jsx': 'node-jsx',
  '.litcoffee': 'coffee-script/register',
  '.ls': 'LiveScript',
  '.toml': 'toml-require',
  '.ts': 'typescript-require',
  '.xml': 'require-xml',
  '.yaml': 'require-yaml',
  '.yml': 'require-yaml'
};

var register = {
  'node-jsx': function (module) {
    module.install({ extension: '.jsx', harmony: true });
  },
  'toml-require': function (module) {
    module.install();
  }
};

var jsVariantExtensions = [
  '.js',
  '.co',
  '.coffee',
  '.coffee.md',
  '.iced',
  '.jsx',
  '.litcoffee',
  '.ls',
  '.ts'
];

module.exports = {
  extensions: extensions,
  register: register,
  jsVariants: jsVariantExtensions.reduce(function (result, ext) {
    result[ext] = extensions[ext];
    return result;
  }, {})
};
