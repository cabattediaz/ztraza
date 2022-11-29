sap.ui.controller("com.aquachile.mm.traza.view.Root", {
    onInit : function(oEvent)
    {
		this.oRoot = this.getView().byId("idRoot");
		// Have child views use this controller for navigation
		var that = this;
		this.oRoot.getMasterPages().forEach(function(oPage)
		{
			oPage.getController().navigation = that;
		});
    },

    navTo : function(sPageId, oContext)
    {
		var rPage = this.oRoot;
		if (oContext) 
		{
			oContext.oModel.read(oContext.sPath, 
								null, 
								{
									"$expand" : "navDetalleSet" 
								}, 
								true, 
								function(oData, response)
								{
									//oContext.getObject() = oData;		
									oContext.getObject().navDetalleSet = oData.navDetalleSet;
									
									rPage.getPage(sPageId).setBindingContext(oContext);
									rPage.getPage(sPageId).getController().on_load_personal();

									rPage.to(sPageId);
								});
		}else{
			
			rPage.to(sPageId);
		}
    },

    navBack : function()
    {
		this.oRoot.back();
    }

});