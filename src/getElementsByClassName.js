// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elements = [];
	var nodes = document.childNodes;
	function searchNodes(nodeArray) {
		for(var i = 0; i < nodeArray.length; i++) {
			var parts = nodeArray[i].classList
			if(parts) {
				for(var j = 0; j < nodeArray[i].classList.length; j++) {
					if(parts.indexOf(className)) {
						elements.push(nodeArray[i])
					}
				}
			}
			if(nodeArray[i].childNodes[0]) {
				searchNodes(nodeArray[i].childNodes)
			}
		}
	}
	searchNodes(nodes);
	return elements;
};
