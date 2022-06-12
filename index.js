var lineReader = require('line-reader');
const fs = require("fs")
function loadJSON(filename = '') {
    		return JSON.parse(
        		fs.existsSync(filename)
        		? fs.readFileSync(filename).toString()
        		: 'null'
    		)
		}
function saveJSON(filename = '', json = '') {
    		return fs.writeFileSync(filename, JSON.stringify(json, null, 2))
		}
lineReader.eachLine('file.txt', function(line, last) {
	var accs = loadJSON("/home/runner/AuthenticMaroonProfile/accs.json")
	var thing = line.split(":")
	accs.push(
		{
			"user": thing[0],
			"pass": thing[1]
		}
	)
	saveJSON("/home/runner/AuthenticMaroonProfile/accs.json", accs)
});