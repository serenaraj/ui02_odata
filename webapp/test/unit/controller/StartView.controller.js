/*global QUnit*/

sap.ui.define([
	"comrizingui5sr01/ui02_odata/controller/StartView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("StartView Controller");

	QUnit.test("I should test the StartView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
