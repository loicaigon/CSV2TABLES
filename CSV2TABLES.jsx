
/*

	CSV2TABLES is an Adobe InDesign script initially created in 2010 by Loïc Aigon.
	The idea is to create true tables based on the native Datamerge feature. 
	That way users can get true tables while using a feature they know.

	Once that said, it's an old script, code is subject to many improvements. 
	I chose to share it on Github so brilliant minds can propose edits and new feature.

	At some point in time, the script was envisioned to allow generating horizontal tabls (adding columns instead of rows)
	And some UI would have allowed to pick the records to be merged.

	Have fun and if you make good use of this script or transform it into something that rocks. Feel free to let me know:
	loic.aigon@gmail.com

*/
#include 'CSV2TABLESCore.jsinc'

var CSV2TABLES = (function()
{
	var api = 
	{
		run:function()
		{
			var core = CVS2TABLESCore.getInstance(), result;
			
			try{
				result = core.mergeTable();
			}
			catch(e)
			{
				alert(e+" "+e.line);
			}
			
			if ( result == false )
			{
				//alert("An error occured. Please feedback us : loic.aigon@gmail.com" );
				return;
			}
		
			core = null;
			alert("done");
		}
	};

	return api;
})();

app.doScript ( "CSV2TABLES.run()", undefined,undefined, UndoModes.ENTIRE_SCRIPT );
