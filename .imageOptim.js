var find = require('find');
var sharp = require('sharp');
var fs = require('fs');
var _path = require('path');

find.file(/\.png$/,'./.dist/', function(list) {
	list.map(item => {
		var _file = _path.parse(item);
		var path= _file.dir + '/';
		var file = _file.name + _file.ext;

		sharp(path + file)
			.png({
				progressive: true,
				compressionLevel: 6
			})
			.toFile(path + '_' + file).then(res => {
				fs.unlinkSync(path + file);
				fs.renameSync(path + '_' + file, path + file);
			}).catch(console.log);
	});
})


