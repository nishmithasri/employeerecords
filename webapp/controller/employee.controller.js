sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
function (Controller,JSONModel,MessageBOX) {
    "use strict";

    return Controller.extend("employeerecords.controller.employee", {
        onInit: function () {

        },
        onView2: function () {
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteemployeeDetails");

        },

        onClick: function(){
            var idValue= this.getView().byId("idUsername").getValue();

            sap.m.MessageBox.alert("The entered input value is " +idValue, {
                title: "alert",                                    
            });
            

        },

        onClicked: function(){
            var idValue= this.getView().byId("idUsername").getValue();
            alert("The entered input value is " +idValue);

        },
    


        
    });
});
