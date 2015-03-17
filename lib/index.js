var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initDojo = function(files, dojo) {
  var loader = dojo && dojo.loader ? dojo.loader : __dirname + '/dojo.js';
  files.unshift(createPattern(__dirname + '/inhibit.js'));
  files.push(createPattern(loader));//dojo loader must be inserted at the end for custom dojoConfig to be considered
  files.push(createPattern(__dirname + '/adapter.js'));//karma heavy caching mechanism
};

initDojo.$inject = ['config.files', 'config.dojo'];

module.exports = {
  'framework:dojo': ['factory', initDojo]
};
