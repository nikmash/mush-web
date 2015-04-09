var inherit = [
	"azimuth",
	"borderCollapse",
	"borderSpacing",
	"captionSide",
	"color",
	"cursor",
	"direction",
	"elevation",
	"emptyCells",
	"fontFamily",
	"fontSize",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"font",
	"letterSpacing",
	"lineHeight",
	"listStyleImage",
	"listStylePosition",
	"listStyleType",
	"listStyle",
	"orphans",
	"pitchRange",
	"pitch",
	"quotes",
	"richness",
	"speakHeader",
	"speakNumeral",
	"speakPunctuation",
	"speak",
	"speakRate",
	"stress",
	"textAlign",
	"textIndent",
	"textTransform",
	"visibility",
	"voiceFamily",
	"volume",
	"whiteSpace",
	"widows",
	"wordSpacing"
]

var fast = {};
inherit.forEach(function(v) {
	fast[v] = true;
})

function style(input) {
	var flat = {};
	function parse(styles, name, node) {
		var children = [];
		for(key in node) {
			value = node[key];
			if(typeof(value) === 'object') {
				children[key] = value;
				continue;
			}
			styles[key] = value;
		}
		if(name != "") {
			flat[name] = styles;
		}
		var inheritable = {};
		for(key in styles) {
			if(!fast[key]) continue;
			inheritable[key] = styles[key];
		}
		for(key in children) {
			parse(clone(inheritable), name + "." + key, children[key])
		}
	}

	function clone(obj) {
	    if (null == obj || "object" != typeof obj) return obj;
	    var copy = obj.constructor();
	    for (var attr in obj) {
	        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	    }
	    return copy;
	}

	parse({}, [] , input)
	return flat;
}

function render(element, styles) {

	function parse(parent, element) {
		if(!element.props)
			return;
		var name = element.props.className;
		if(name) {
			parent += "." + name
			element.props.style = styles[parent];
			element.props.test = parent;
			console.log(parent)
		}
		var children = element.props.children;
		if(!children)
			return;
		if(children.constructor !== Array)
			children = [children];
		children.forEach(function(child) {
			parse(parent, child)
		})
	}
	parse("", element)
	return element;

}

var testStyles = {
	h1 : {
		color: "black",
		marginLeft : 10,

		span : {
			marginRight: 20
		}
	}
}

module.exports.style =  style
module.exports.render =  render
