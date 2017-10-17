function c(value, label, inDisplay) {
	var display = inDisplay;
	var passedDisplay = display;
	switch (Object.prototype.toString.call(value)) {
		case '[object Object]' :
			if (value == null) {
				try {
					console.log('null');
				} catch(err) {}
			} else {
				switch (display) {
					case 'topexpanded' :
						try {
							console.group(label);
						} catch(err) {}
						passedDisplay = 'collapsed';
						break;
					case 'topcollapsed' :
						try {
							console.groupCollapsed(label);
						} catch(err) {}
						passedDisplay = 'expanded';
						break;
					case 'allcollapsed' :
					case 'collapsed' :
						try {
							console.groupCollapsed(label);
						} catch(err) {}
						passedDisplay = 'collapsed';
						break;
					case 'allexpanded' :
					case 'expanded' :
					default :
						try {
							console.group(label);
						} catch(err) {}
						passedDisplay = 'expanded';
						break;
				}
				$.each(value, function(index, val) {
					c(val, index, passedDisplay);
				});
				try {
					console.groupEnd();
				} catch(err) {}
			}
			break;
		default :
			if (label == null) {
				try {
					console.log(value);
				} catch(err) {}
			} else {
				try {
					console.log(label + ' : ' + value);
				} catch(err) {}
			}
			break;
	}
}