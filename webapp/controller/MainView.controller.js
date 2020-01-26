sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.myorg.myUi5App1.controller.MainView", {
    onInit: function() {
      var oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
        address: {
          street: "Dietmar-Hopp-Allee 16",
          city: "Walldorf",
          zip: "69190",
          country: "Germany"
        },
        "salesToDate" : 12345.6789,
        "currencyCode" : "EUR"
  
      });

      this.getView().setModel(oModel);

      var oView = this.getView();
      // Register the view with the message manager
		  sap.ui.getCore().getMessageManager().registerObject(oView, true);
    },
    onCreate: function() {
      var oModel = this.getView().getModel();

      alert(JSON.stringify(oModel));

      //jquery
      
    }
  });
});
