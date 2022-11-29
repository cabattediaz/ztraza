jQuery.sap.declare("com.aquachile.mm.traza.Component");

sap.ui.core.UIComponent.extend("com.aquachile.mm.traza.Component", {

    createContent : function()
    {

	// create root view
	var oView = sap.ui.view({
	    id : "idViewRoot",
	    viewName : "com.aquachile.mm.traza.view.Root",
	    type : "XML",
	    viewData : {
		component : this
	    }
	});

	// set data model on root view
	// oView.setModel(new sap.ui.model.json.JSONModel("model/mock.json"));
	// usar cuando ejecute la aplicacion en el Servidor
	//oView.setModel(new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPP_HORNOS_SRV"));
	var pathSrv = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMM_TRAZABILIDAD_SRV");
	
	// usar cuando la aplicacion es local
	//var pathSrv = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/sap/ZPP_HORNOS_SRV");
	// Modo de Transporte de la Informacion entre la vista y el modelo
	// twoWay permite pasar los datos en ambos sentidos entre la vista y el modelo
	pathSrv.setDefaultBindingMode("TwoWay");
	pathSrv.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
	pathSrv.attachRequestFailed(function(oResponse)
	{
	    var dialog = new sap.m.Dialog({
		title : 'Log de Mensajes',
		type : 'Message',
		state : 'Warning',
		content : [new sap.m.Text({
		    text : 'Ocurrio un Error: '
		}), new sap.m.Text({
		    text : oResponse.mParameters['message']
		}), new sap.m.Text({
		    text : oResponse.mParameters['statusText']
		})],
		beginButton : new sap.m.Button({
		    text : 'Close',
		    press : function()
		    {
			dialog.close();
		    }
		}),
		afterClose : function()
		{
		    dialog.destroy();
		}
	    });

	    dialog.open();
	});
	/*pathSrv.attachRequestCompleted(function(oResponse)
	{
	    var dialog = new sap.m.Dialog({
		title : 'Log de Mensajes Exitos',
		type : 'Message',
		state : 'Warning',
		content : new sap.m.Text({
		    text : 'Ocurrio un Exito'
		}),
		beginButton : new sap.m.Button({
		    text : 'Close',
		    press : function()
		    {
			dialog.close();
		    }
		}),
		afterClose : function()
		{
		    dialog.destroy();
		}
	    });

	    dialog.open();
	});*/

	oView.setModel(pathSrv);

	var oRootPath = jQuery.sap.getModulePath("com.aquachile.mm.traza");

	// set i18n model
	var i18nModel = new sap.ui.model.resource.ResourceModel({
	    bundleUrl : [
		    oRootPath, "i18n/messageBundle.properties"
	    ].join("/")
	});
	oView.setModel(i18nModel, "i18n");	
	
	//sap.ui.getCore().getMessageManager().registerObject(oView, true);

	var sel_model = new sap.ui.model.json.JSONModel();
	sel_model.loadData([
		oRootPath, "model/select_status_gestion_tiempos.json"
	].join("/"));
	oView.setModel(sel_model, "Sel_model");

	// set device model
	var deviceModel = new sap.ui.model.json.JSONModel({
	    isTouch : sap.ui.Device.support.touch,
	    isNoTouch : !sap.ui.Device.support.touch,
	    isPhone : jQuery.device.is.phone,
	    isNoPhone : !jQuery.device.is.phone,
	    listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
	    listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
	});
	deviceModel.setDefaultBindingMode("TwoWay");
	// sap.ui.getCore().setModel(deviceModel, "device");
	oView.setModel(deviceModel, "device");

	// done
	return oView;
    }

});
