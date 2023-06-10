/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comrizingui5sr01/ui02_odata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
