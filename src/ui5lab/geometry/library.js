/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5lab.square.
 */
sap.ui.define(['jquery.sap.global', 'sap/ui/core/library'],
	function(jQuery, library1) {
	"use strict";


	/**
	 * An example library containing geometrical controls
	 *
	 * @namespace
	 * @name ui5lab.geometry
	 * @public
	 */

	// library dependencies

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "ui5lab.geometry",
		dependencies : ["sap.ui.core"],
		types: [
			
		],
		interfaces: [],
		controls: [
			
		],
		elements: [],
		noLibraryCSS: false,
		version: "${version}"
	});


	/**
	 * Example type.
	 *
	 * @enum {string}
	 * @public
	 */
	


	return ui5lab.geometry;

});
