sap.ui.controller("com.aquachile.mm.traza.view.Empty", {

    
    goToDetailView : function(oEvent)
    {
	this.getView().oParent.to("idViewRoot--idViewDetail");		
    },
});