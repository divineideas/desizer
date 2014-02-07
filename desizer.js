
(function(window, doc){
	Desizer = function(container, callback){
		var that = this,
			i;
		that.callback = callback;
		that.wrapper = typeof container == 'object' ? container : doc.getElementById(container);
		that.options = {
			colcount: 9999,
			currentClass: 'ocs',
			newClass: null,
			currentWidth: that.wrapper.clientWidth,
			classSizeArray: {
				fcl: 1900,
				fcs: 1430,
				tcl: 1140,
				tcs: 1030,
				wcl: 876,
				wcs: 768,
				ocl: 440,	
			}
		}
		for (var clName in that.options.classSizeArray) {
			size = parseInt(that.options.classSizeArray[clName]);
			if(parseInt(that.options.currentWidth)>size){
				that.options.newClass = clName;
				break;
			}
		}
		this.options.currentClass!=this.options.newClass
		this.sizeIt(that);
		window.addEventListener('resize', function() {
			that.checkResizeState();
		});
	},
	Desizer.prototype = {
		checkResizeState: function(){
			for (var clName in this.options.classSizeArray) {
				size = parseInt(this.options.classSizeArray[clName]);
				if(parseInt(this.wrapper.clientWidth)>size){
					this.options.newClass = clName;
					break;
				}
			}
			if(this.options.currentClass!=this.options.newClass){
				this.options.currentClass = this.options.newClass;
				this.sizeIt(that);
			}
		},
		sizeIt: function(){
			console.log(this);
			this.options.currentClass = this.options.newClass;
			this.wrapper.innerHTML = '';
			if(this.options.currentClass=='fcl' || this.options.currentClass=='fcs'){
				//adding for columns
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column1"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column2"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column3"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column4"></div>';
				this.options.colcount = 4;
			}else if(this.options.currentClass=='tcl' || this.options.currentClass=='tcs'){
				//adding for columns
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column1"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column2"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column3"></div>';
				this.options.colcount = 3;
			}else if(this.options.currentClass=='wcl' || this.options.currentClass=='wcs'){
				//adding for columns
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column1"></div>';
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column2"></div>';
				this.options.colcount = 2;
			}else if(this.options.currentClass=='ocl' || this.options.currentClass=='ocs'){
				//adding for columns
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column1"></div>';
				this.options.colcount = 1;
			}else{
				this.wrapper.innerHTML = this.wrapper.innerHTML + '<div class="ds-mod-colum ds-column1"></div>';
				this.options.colcount = 1;
			}
			this.wrapper.innerHTML = this.wrapper.innerHTML + '<div style="clear:both"></div>';
			var nodes = this.wrapper.getElementsByClassName("mod-colum");
			for(i=0; i<nodes.length; i++) {
			    nodes[i].className+= ' ds-' + this.options.newClass;
			}
			this.callback(true);
		}
	}

})(window, document);

