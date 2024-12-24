sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("employeerecords.controller.employeeDetails", {
        onInit: function () {

        },

        onView1: function () {
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("Routeemployee");

        }
    });
});
