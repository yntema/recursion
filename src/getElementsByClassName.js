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
			if(nodeArray[i].classList) {
				for(var j = 0; j < nodeArray[i].classList.length; j++) {
					console.log("this class is: ", nodeArray[i].classList[j])
					if(nodeArray[i].classList[j] === className) {
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
