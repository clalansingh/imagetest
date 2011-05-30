// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

jQuery(function() {
    jQuery('#entry_content').wymeditor({

	        html: '<p>Hello, World!<\/p>',
	        stylesheet: 'styles.css',

	        postInit: function(wym) {

	            //construct the button's html
	            var html = "<li class='wym_tools_newbutton'>"
	                     + "<a name='NewButton' href='#'"
	                     + " style='background-image:"
	                     + " url(javascripts/wymeditor/skins/default/icons.png)'>"
	                     + "Do something"
	                     + "</a></li>";

	            //add the button to the tools box
	            jQuery(wym._box)
	            .find(wym._options.toolsSelector + wym._options.toolsListSelector)
	            .append(html);

	            //handle click event
	            jQuery(wym._box)
	            .find('li.wym_tools_newbutton a').click(function() {
					$("#dialog-form").html('<iframe src="/uploads" style="height:95%; width:100%"/>');
	                $("#dialog-form").dialog({width:480, height:300});
					return false;
	            });
	
				jQuery(wym._box)
				.find('a.wym_insert').click(function() {
					wym.paste("test.");
					alert("oh shit");
					return false;
				});
	        }    
	    });
	
});

function pushImage(url) {
	$("#dialog-form").dialog("close");
	alert(currentURI.spec);
	
}
