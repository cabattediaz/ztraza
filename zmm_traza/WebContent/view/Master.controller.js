sap.ui.define(["sap/ui/core/mvc/Controller", 
               "sap/ui/model/json/JSONModel",
               "com/aquachile/mm/traza/view/formatter"],
  function (Controller, JSONModel,formatter) {
  "use strict";

  return Controller.extend("com.aquachile.mm.traza.view.Master", {

	formatter: formatter,

    handleListSelect : function(oEvent)
    {

		this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
		var oSplit = this.getView().getParent().getParent();
		oSplit.hideMaster();
		// this.navigation.navTo("idViewRoot--idViewCreate", oEvent.getSource().getBindingContext());
	},

	handleSearch : function(evt)
	{
			this._updateList();
	},

	handleAdd : function(oEvent)
	{
		// navigate to create page
		this.navigation.navTo("idViewRoot--idViewCreate", oEvent.getSource().getBindingContext());

   	},

    _updateList : function()
    {

		var filters = [];

		// add filter for search
		var searchString = this.getView().byId("dpMaster").getDateValue();
		if (searchString ) 
		{
			var filter = new sap.ui.model.Filter("FechaDesde", sap.ui.model.FilterOperator.GT, searchString);
			filters.push(filter);

		}

		var searchString1 = this.getView().byId("selectMuestreos").getProperty("selectedKey");
		if (searchString1 ) 
		{
			var filter2 = new sap.ui.model.Filter("Parametro1", sap.ui.model.FilterOperator.GT, searchString1);
			filters.push(filter2);

		}

		// update list binding
		var list = this.getView().byId("idListEmployees");
		var binding = list.getBinding("items");
		binding.filter(filters);
    },
	handleSelectChange: function(){
		this._updateList();
	}

});

});