sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            /*
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n")
            */
            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },
        exit: function() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog: function() {
            this._helloDialog.open();
        }
    });
});