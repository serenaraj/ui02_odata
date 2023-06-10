sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.rizing.ui5.sr01.ui02odata.controller.StartView", {
            onInit: function () {

            },
            onSeeResult: function(oEvent){
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteResultView",{},false);
            }
        });
    });
