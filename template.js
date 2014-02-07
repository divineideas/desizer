
(function(window, doc){
	Template = function(temp_type, temp, context){
		this.temp_type = temp_type,
		this.temp = temp,
		this.context = context,
		this.html = null,
		that = this
	},
	Template.prototype = {
		getHtml: function(){
			if(this.temp_type=='html'){	
				this.html = $('script#' + this.temp).html();
			}else if(temp_type=='script'){
				this.html = template.temps[this.temp]();
			}
			if(this.context!=null){
				$.each(this.context, function(i, val){
					if(val=='null' || val==null || val=="null" || typeof val =='null'){
						val = '';
					}
					var re = new RegExp("{{{" + i + "}}}","gi");
					that.html = that.html.replace (re, val);
					var rehtml = new RegExp("{{" + i + "}}","gi");
					htmlval = this.htmlEntities(val);
					that.html = that.html.replace (rehtml, htmlval);
				});
			}
			return this.html;
		},
		htmlEntities: function(str){
	   		return String(str).replace(/<\/?[^>]+(>|$)/g, "");
		}
	}
})(window, document);