// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	console.log(typeof obj)
	var str = '';
	if(obj === undefined) {
		str += '';
	} else if(typeof obj === 'number' || typeof obj === 'boolean' || !obj) {
		str += "" + obj + "";	
	} else if (typeof obj === 'string') {
		str += "\"" + obj + "\"";
	} else if(Array.isArray(obj)) {
		str += '[';
		for(var i = 0; i < obj.length; i++) {
			str += stringifyJSON(obj[i]);
			if(i < obj.length - 1) {
				str += ',';
			}
		}
		str += ']';
	} else {
		str += obj;
	}
	return str;
};
