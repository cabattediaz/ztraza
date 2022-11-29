sap.ui.define(["sap/ui/core/mvc/Controller", 
				"sap/ui/model/json/JSONModel",
				"com/aquachile/mm/traza/view/formatter",
				'sap/m/MessageBox',
				"sap/m/PDFViewer"],
  function (Controller, JSONModel,formatter,MessageBox, PDFViewer) {
  "use strict";

  return Controller.extend("com.aquachile.mm.traza.view.Detail", {

		formatter: formatter,
	    onInit : function()
	    {
			// sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			this._pdfurl = true;

            // keeps the search state
            this._aTableSearchState = [];

            this._pdfViewer = new PDFViewer();
            this.getView().addDependent(this._pdfViewer);	

			// Model used to manipulate control states. The chosen values make sure,
			// detail page is busy indication immediately so there is no break in
			// between the busy indication for loading the view's meta data
			var oViewModel = new sap.ui.model.json.JSONModel({
				busy: false,
				delay: 0,
				bake: false,
				lineItemListTitle: "Muestras"
			});
			
			var oBarModel = new sap.ui.model.json.JSONModel({
				number: ""
			});
			
			this.getView().setModel(oBarModel, "barView");

			
			this.setearModelos();

			var oStopModel = new sap.ui.model.json.JSONModel({
				detentions: [{ key:1, text: "Fallas Electricas"},
				{ key:2, text: "Fallas Mecanicas"},
				{ key:3, text: "Termino de Programa"},
				{ key:4, text: "Cambio de Horno"},
				{ key:5, text: "Otros"}],
				comment: ""
			});
			
			this.getView().setModel(oStopModel, "stopView");

			//this._oResourceBundle = this.getResourceBundle();
			//this._oData = this.getOwnerComponent().getModel();
			this.getView().setModel(oViewModel, "detailView");

		},
		
		setearModelos: function(){
			

			this.getView().byId("inNroGuia").setValue();
			this.getView().byId("idFormaEmbalaje").setValue();
			this.getView().byId("dpFVencimiento").setValue();
			this.getView().byId("dpFRecepInsumo").setValue();
			this.getView().byId("inInsumo").setValue();
			this.getView().byId("idInProveedor").setValue();
			this.getView().byId("dpFInspeccion").setValue();
			this.getView().byId("inLoteProveedor").setValue();
			this.getView().byId("dpFElaboracion").setValue();
			this.getView().byId("inObservaciones").setValue();
			this.getView().byId("inAccionesCorrectivas").setValue();
			this.getView().byId("inObservacionesModifica").setValue();
			this.getView().byId("idInAprobador").setValue();
			
			var oTableModel = new sap.ui.model.json.JSONModel([{
																NroMue:"1",
																ValorMue:""
															},{
																NroMue:"2",
																ValorMue:""
															},{
																NroMue:"3",
																ValorMue:""
															},{
																NroMue:"4",
																ValorMue:""
															},{
																NroMue:"5",
																ValorMue:""
															},{
																NroMue:"6",
																ValorMue:""
															},{
																NroMue:"7",
																ValorMue:""
															},{
																NroMue:"8",
																ValorMue:""
															},{
																NroMue:"9",
																ValorMue:""
															},{
																NroMue:"10",
																ValorMue:""
															},{
																NroMue:"11",
																ValorMue:""
															},{
																NroMue:"12",
																ValorMue:""
															},{
																NroMue:"13",
																ValorMue:""
															}]);
			this.getView().setModel(oTableModel, "modeloTablaLargo");
			
			var oTableModelAncho = new sap.ui.model.json.JSONModel([{
				NroMue:"1",
				ValorMue:""
			},{
				NroMue:"2",
				ValorMue:""
			},{
				NroMue:"3",
				ValorMue:""
			},{
				NroMue:"4",
				ValorMue:""
			},{
				NroMue:"5",
				ValorMue:""
			},{
				NroMue:"6",
				ValorMue:""
			},{
				NroMue:"7",
				ValorMue:""
			},{
				NroMue:"8",
				ValorMue:""
			},{
				NroMue:"9",
				ValorMue:""
			},{
				NroMue:"10",
				ValorMue:""
			},{
				NroMue:"11",
				ValorMue:""
			},{
				NroMue:"12",
				ValorMue:""
			},{
				NroMue:"13",
				ValorMue:""
			}]);
			this.getView().setModel(oTableModelAncho, "modeloTablaAncho");
			var oTableModelAlto = new sap.ui.model.json.JSONModel([{
				NroMue:"1",
				ValorMue:""
			},{
				NroMue:"2",
				ValorMue:""
			},{
				NroMue:"3",
				ValorMue:""
			},{
				NroMue:"4",
				ValorMue:""
			},{
				NroMue:"5",
				ValorMue:""
			},{
				NroMue:"6",
				ValorMue:""
			},{
				NroMue:"7",
				ValorMue:""
			},{
				NroMue:"8",
				ValorMue:""
			},{
				NroMue:"9",
				ValorMue:""
			},{
				NroMue:"10",
				ValorMue:""
			},{
				NroMue:"11",
				ValorMue:""
			},{
				NroMue:"12",
				ValorMue:""
			},{
				NroMue:"13",
				ValorMue:""
			}]);
			this.getView().setModel(oTableModelAlto, "modeloTablaAlto");
			var oTableModelEspesor = new sap.ui.model.json.JSONModel([{
				NroMue:"1",
				ValorMue:""
			},{
				NroMue:"2",
				ValorMue:""
			},{
				NroMue:"3",
				ValorMue:""
			},{
				NroMue:"4",
				ValorMue:""
			},{
				NroMue:"5",
				ValorMue:""
			},{
				NroMue:"6",
				ValorMue:""
			},{
				NroMue:"7",
				ValorMue:""
			},{
				NroMue:"8",
				ValorMue:""
			},{
				NroMue:"9",
				ValorMue:""
			},{
				NroMue:"10",
				ValorMue:""
			},{
				NroMue:"11",
				ValorMue:""
			},{
				NroMue:"12",
				ValorMue:""
			},{
				NroMue:"13",
				ValorMue:""
			}]);
			this.getView().setModel(oTableModelEspesor, "modeloTablaEspesor");
			var oTableModelPeso = new sap.ui.model.json.JSONModel([{
				NroMue:"1",
				ValorMue:""
			},{
				NroMue:"2",
				ValorMue:""
			},{
				NroMue:"3",
				ValorMue:""
			},{
				NroMue:"4",
				ValorMue:""
			},{
				NroMue:"5",
				ValorMue:""
			},{
				NroMue:"6",
				ValorMue:""
			},{
				NroMue:"7",
				ValorMue:""
			},{
				NroMue:"8",
				ValorMue:""
			},{
				NroMue:"9",
				ValorMue:""
			},{
				NroMue:"10",
				ValorMue:""
			},{
				NroMue:"11",
				ValorMue:""
			},{
				NroMue:"12",
				ValorMue:""
			},{
				NroMue:"13",
				ValorMue:""
			}]);
			this.getView().setModel(oTableModelPeso, "modeloTablaPeso");

			var oTableModelTemperatura = new sap.ui.model.json.JSONModel([{
				NroMue:"1",
				ValorMue:""
			},{
				NroMue:"2",
				ValorMue:""
			},{
				NroMue:"3",
				ValorMue:""
			},{
				NroMue:"4",
				ValorMue:""
			},{
				NroMue:"5",
				ValorMue:""
			},{
				NroMue:"6",
				ValorMue:""
			},{
				NroMue:"7",
				ValorMue:""
			},{
				NroMue:"8",
				ValorMue:""
			},{
				NroMue:"9",
				ValorMue:""
			},{
				NroMue:"10",
				ValorMue:""
			},{
				NroMue:"11",
				ValorMue:""
			},{
				NroMue:"12",
				ValorMue:""
			},{
				NroMue:"13",
				ValorMue:""
			}]);
			this.getView().setModel(oTableModelTemperatura, "modeloTablaTemperatura");
		},
		onNavBack: function () {
			// var oHistory = sap.ui.core.routing.History.getInstance();
			// var sPreviousHash = oHistory.getPreviousHash();

			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
			// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// 	oRouter.navTo("overview", true);
			// }
			this.getView().oParent.showMaster(); 
		},
	    goToEmptyView : function(oEvent)
	    {
			this.getView().oParent.to("idViewRoot--idViewEmpty");
	    },
	    onChangeSelect : function(oEvent)
	    {
			var arr = oEvent.mParameters.id.toString().split("--");
			arr = arr[2].split('.');
			this.getView().getBindingContext().getObject()[arr[0]][arr[1]] = oEvent.oSource.getSelectedKey();
		},

		
		/*
		* **********************************************************************
		* Funcion para Cargar datos cuando se cambio de pernr desde la lista
		* **********************************************************************
		*/	    
	    on_load_personal : function()
	    {
			var lvProveedor = this.getView().getBindingContext().getObject().Lifnr;

			this.getView().byId("idInProveedor").setValue(lvProveedor);

			var lvXblnr = this.getView().getBindingContext().getObject().Xblnr;
			this.getView().byId("inNroGuia").setValue(lvXblnr);

			var lvCharg = this.getView().getBindingContext().getObject().Charg;
			this.getView().byId("inLoteProveedor").setValue(lvCharg);

			var lvHsdat = this.getView().getBindingContext().getObject().Hsdat;
			if(lvVfdat)
			{
				var fechaFormato = new Date(lvHsdat).toLocaleDateString();
				this.getView().byId("dpFElaboracion").setValue(fechaFormato);
			}
			var lvVfdat = this.getView().getBindingContext().getObject().Vfdat;
			if(lvVfdat)
			{
				var fechaFormato2 = new Date(lvVfdat).toLocaleDateString();
				this.getView().byId("dpFVencimiento").setValue(fechaFormato2);
			}
			var lvCpudt = this.getView().getBindingContext().getObject().Cpudt;
			if(lvCpudt)
			{
				var fechaFormato3 = new Date(lvCpudt).toLocaleDateString();
				this.getView().byId("dpFRecepInsumo").setValue(fechaFormato3);
			}
			

			var that = this;
			var oModel = this.getView().getBindingContext().oModel;
			var entity = this.getView().getBindingContext().getObject();

			//var oModel = this.getView().getModel();
			var Entidad = "/MuestreoCabSet";
			var filterAyuda = [];
			filterAyuda.push(new sap.ui.model.Filter("Mblnr", sap.ui.model.FilterOperator.EQ, entity.Mblnr));
			filterAyuda.push(new sap.ui.model.Filter("Mjahr", sap.ui.model.FilterOperator.EQ, entity.Mjahr));
			filterAyuda.push(new sap.ui.model.Filter("Zeile", sap.ui.model.FilterOperator.EQ, entity.Zeile));
			filterAyuda.push(new sap.ui.model.Filter("IdMuestreo", sap.ui.model.FilterOperator.EQ, entity.Mblnr + entity.Mjahr + entity.Zeile));

			oModel.read(Entidad, {
				async: false,
				filters: filterAyuda,
				success: function (oData, oResponse) {
					//var base64EncodedPDF = oData.results[0].Documento; // the encoded string
					
					that.getView().byId("inObservacionesModifica").setProperty("visible", true);
					/*
					MessageBox.alert(
						"test",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
					*/
				}
			});

			var Entidad = "/MuestreoDetSet";
			var filterAyuda = [];
			filterAyuda.push(new sap.ui.model.Filter("IdMuestreo", sap.ui.model.FilterOperator.EQ, entity.Mblnr + entity.Mjahr + entity.Zeile));

			oModel.read(Entidad, {
				async: false,
				filters: filterAyuda,
				success: function (oData, oResponse) {
					//var base64EncodedPDF = oData.results[0].Documento; // the encoded string
					
					that.getView().byId("inObservacionesModifica").setProperty("visible", true);
					/*
					MessageBox.alert(
						"test",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
					*/
				}
			});
			

			

	    },

	    handleNavButtonPress : function(oEvent)
	    {
			this.navigation.navBack();
	    },

		
		_msgBox: function (sMensaje, oModel, sIcon, bCrea, oViewContext) {
			MessageBox.show(sMensaje, {
				icon: sIcon,
				onClose: function () {
					if (bCrea) {
						this.onCancelar();
						var oData = {
							Eqktx: "",
							Pltxt: "",
							Qmartx: "",
							Plangroup: "",
							Planplant: "",
							Priokx: "",
							ShortText: "",
							ImText: ""
						};
						oViewContext.getModel("oOrderDataTxt").setData(oData);
						var oDataOrd = {
							Equipment: "",
							FunctLoc: "",
							ImQmart: "",
							ImText: "",
							Plangroup: "",
							Planplant: "",
							Priority: "",
							ShortText: ""
						};
						oViewContext.getModel("oOrderData").setData(oDataOrd);
					}
				}.bind(this)
			});
		},
		_setInterval: function() {
		      var self = this;
		      this.intervalHandle = setInterval(function() { 
		          self._oData.refresh();
		       },  3000);
		},
		
		_onPressIngresar: function(){
			var that = this;
			var contFueraRango = 0;
			var contFueraRangoLargo = 0;
			var contFueraRangoAncho = 0;
			var contFueraRangoAlto = 0;
			var contFueraRangoEspesor = 0;
			var contFueraRangoPeso = 0;
			var contFueraRangoTemperatura = 0;
			var contOk = 0;
			var contOkLargo = 0;
			var contOkAncho = 0;
			var contOkAlto = 0;
			var contOkEspesor = 0;
			var contOkPeso = 0;
			var contOkTemperatura = 0;
			var oInfo = {};

			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

			// get the view's binding context
			var oBindingContext = this.getView().getBindingContext();
			// get the bound object
			var oObject = oBindingContext.getObject();

			var oplanMuestreo = this.getView().byId("lineItemsPlanMuestreo").getItems();
			if(oplanMuestreo.length === 0)
			{
				MessageBox.error(
					"Registro sin Plan de muestreo.",
					{
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					});
				return false;
			}

			var vIdPlan = oplanMuestreo[0].getCells()[0].getTitle();
			var vUsuario = oplanMuestreo[0].getCells()[5].getTitle();
			var vMuestrasErrorMax = oplanMuestreo[0].getCells()[9].getNumber();
			var vMuestrasOkMin = oplanMuestreo[0].getCells()[10].getNumber();
			

			var oRangoTol = this.getView().byId("lineItemsListRangoTol").getItems();
			if(oRangoTol.length === 0)
			{
				MessageBox.error(
					"Registro sin Rangos de tolerancia.",
					{
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					});
				return false;
			}


			
			var vLargoMax = oRangoTol[0].getCells()[2].getNumber();
			var vLargoMin = oRangoTol[0].getCells()[3].getNumber();

			var dataLargo = this.getView().getModel("modeloTablaLargo").getData();

			var vAnchoMax = oRangoTol[1].getCells()[2].getNumber();
			var vAnchoMin = oRangoTol[1].getCells()[3].getNumber();

			var dataAncho = this.getView().getModel("modeloTablaAncho").getData();

			var vAltoMax = oRangoTol[2].getCells()[2].getNumber();
			var vAltoMin = oRangoTol[2].getCells()[3].getNumber();

			var dataAlto = this.getView().getModel("modeloTablaAlto").getData();

			var vEspesorMax = oRangoTol[3].getCells()[2].getNumber();
			var vEspesorMin = oRangoTol[3].getCells()[3].getNumber();

			var dataEspesor = this.getView().getModel("modeloTablaEspesor").getData();

			var vPesoMax = oRangoTol[4].getCells()[2].getNumber();
			var vPesoMin = oRangoTol[4].getCells()[3].getNumber();

			var dataPeso = this.getView().getModel("modeloTablaPeso").getData();

			var vTemperaturaMax = oRangoTol[5].getCells()[2].getNumber();
			var vTemperaturaMin = oRangoTol[5].getCells()[3].getNumber();

			var dataTemperatura = this.getView().getModel("modeloTablaTemperatura").getData();

			oInfo.nvMuestreoDetSet = [];

			var vMuestrasOkMin = oplanMuestreo[0].getCells()[8].getNumber();
			for (var i = 0; i < vMuestrasOkMin; i++) 
			{
				
				var oItem = {};

				oItem.IdMuestreo 	= vIdPlan;
				oItem.Matnr 		= oObject.Matnr;
				oItem.LineaMuestreo	= dataLargo[i].NroMue;
				/*LARGO*/
				try 
				{
					if(dataLargo[i].ValorMue !== "")
					{
						if(vLargoMin > 0 && vLargoMax > 0)
						{
							if(parseFloat(dataLargo[i].ValorMue) < parseFloat(vLargoMin) || 
								parseFloat(dataLargo[i].ValorMue) > parseFloat(vLargoMax))
							{
								contFueraRango++;		
								contFueraRangoLargo = 0;

								oItem.LargoM 		= dataLargo[i].ValorMue;
								oItem.LargoRes 		= '';										
							}
							else
							{
								contOk++;
								contOkLargo++;

								oItem.LargoM 		= dataLargo[i].ValorMue;
								oItem.LargoRes 		= 'X';

							}
						}
					}
					else
					{
						oItem.LargoM 		= '';
						oItem.LargoRes 		= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Largo.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}
				/*ANCHO*/
				try
				{


					if(dataAncho[i].ValorMue !== "")
					{
						if(vAnchoMin > 0 && vAnchoMax > 0)
						{
							if(parseFloat(dataAncho[i].ValorMue) < parseFloat(vAnchoMin) || 
								parseFloat(dataAncho[i].ValorMue) > parseFloat(vAnchoMax))
							{
								contFueraRango++;		
								contFueraRangoAncho++;
								
								oItem.AnchoM 		= dataAncho[i].ValorMue;
								oItem.AnchoRes 		= '';										
							}
							else
							{
								contOk++;
								contOkAncho++;

								oItem.AnchoM 		= dataAncho[i].ValorMue;
								oItem.AnchoRes 		= 'X';

							}
						}
					}
					else
					{
						oItem.AnchoM 		= '';
						oItem.AnchoRes 		= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Ancho.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}
				/*ALTO*/
				try
				{


					if(dataAlto[i].ValorMue !== "")
					{
						if(vAltoMin > 0 && vAltoMax > 0)
						{
							if(parseFloat(dataAlto[i].ValorMue) < parseFloat(vAltoMin) || 
								parseFloat(dataAlto[i].ValorMue) > parseFloat(vAltoMax))
							{
								contFueraRango++;		
								contFueraRangoAlto++;
								
								oItem.AltoM 		= dataAlto[i].ValorMue;
								oItem.AltoRes 		= '';										
							}
							else
							{
								contOk++;
								contOkAlto++;
								oItem.AltoM 		= dataAlto[i].ValorMue;
								oItem.AltoRes 		= 'X';

							}
						}
					}
					else
					{
						oItem.AltoM 		= '';
						oItem.AltoRes 		= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Alto.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}
				/*ESPESOR*/
				try
				{


					if(dataEspesor[i].ValorMue !== "")
					{
						if(vEspesorMin > 0 && vEspesorMax > 0)
						{
							if(parseFloat(dataEspesor[i].ValorMue) < parseFloat(vEspesorMin) || 
								parseFloat(dataEspesor[i].ValorMue) > parseFloat(vEspesorMax))
							{
								contFueraRango++;		
								contFueraRangoEspesor++;
								
								oItem.EspesorM 		= dataEspesor[i].ValorMue;
								oItem.EspesorRes 		= '';										
							}
							else
							{
								contOk++;
								contOkEspesor++;

								oItem.EspesorM 		= dataEspesor[i].ValorMue;
								oItem.EspesorRes 		= 'X';

							}
						}
					}
					else
					{
						oItem.EspesorM 		= '';
						oItem.EspesorRes 		= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Espesor.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}
				/*PESO*/
				try
				{


					if(dataPeso[i].ValorMue !== "")
					{
						if(vPesoMin > 0 && vPesoMax > 0)
						{
							if(parseFloat(dataPeso[i].ValorMue) < parseFloat(vPesoMin) || 
								parseFloat(dataPeso[i].ValorMue) > parseFloat(vPesoMax))
							{
								contFueraRango++;		
								contFueraRangoPeso++;

								oItem.PesoM 		= dataPeso[i].ValorMue;
								oItem.PesoRes 		= '';		
																
							}
							else
							{
								contOk++;
								contOkPeso++;

								oItem.PesoM 		= dataPeso[i].ValorMue;
								oItem.PesoRes 		= 'X';

							}
						}
					}
					else
					{
						oItem.PesoM 		= '';
						oItem.PesoRes 		= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Peso.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}
				/*TEMPERATURA*/
				try
				{


					if(dataTemperatura[i].ValorMue !== "")
					{
						if(vTemperaturaMin > 0 && vTemperaturaMax > 0)
						{
							if(parseFloat(dataTemperatura[i].ValorMue) < parseFloat(vTemperaturaMin) || 
								parseFloat(dataTemperatura[i].ValorMue) > parseFloat(vTemperaturaMax))
							{
								contFueraRango++;
								contFueraRangoTemperatura++;
								
								oItem.TemperM 	= dataTemperatura[i].ValorMue;
								oItem.TemperRes = '';										
							}
							else
							{
								contOk++;
								contOkTemperatura++;

								oItem.TemperM 	= dataTemperatura[i].ValorMue;
								oItem.TemperRes = 'X';

							}
						}
					}
					else
					{
						oItem.TemperM 		= '';
						oItem.TemperRes 	= '';

					}

				} catch (error) {
					MessageBox.alert(
						"Error en carga muestra Temperatura.",
						{
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						});
						return false;
				}


				oInfo.nvMuestreoDetSet.push(oItem);

			}

			//Muestra valida Largo
			var vMuestraLargo = '';
			if(parseFloat(contFueraRangoLargo) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkLargo) > parseFloat(vMuestrasOkMin))
			{
				vMuestraLargo = 'X';
			}
			else
			{
				vMuestraLargo = '';
			}

			//Muestra valida Ancho
			var vMuestraAncho = '';
			if(parseFloat(contFueraRangoAncho) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkAncho) > parseFloat(vMuestrasOkMin))
			{
				vMuestraAncho = 'X';
			}
			else
			{
				vMuestraAncho = '';
			}

			//Muestra valida Alto
			var vMuestraAlto = '';
			if(parseFloat(contFueraRangoAlto) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkAlto) > parseFloat(vMuestrasOkMin))
			{
				vMuestraAlto = 'X';
			}
			else
			{
				vMuestraAlto = '';
			}

			//Muestra valida Espesor
			var vMuestraEspesor = '';
			if(parseFloat(contFueraRangoEspesor) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkEspesor) > parseFloat(vMuestrasOkMin))
			{
				vMuestraEspesor = 'X';
			}
			else
			{
				vMuestraEspesor = '';
			}

			//Muestra valida Peso
			var vMuestraPeso = '';
			if(parseFloat(contFueraRangoPeso) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkPeso) > parseFloat(vMuestrasOkMin))
			{
				vMuestraPeso = 'X';
			}
			else
			{
				vMuestraPeso = '';
			}

			//Muestra valida Temperatura
			var vMuestraTemperatura = '';
			if(parseFloat(contFueraRangoTemperatura) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOkTemperatura) > parseFloat(vMuestrasOkMin))
			{
				vMuestraTemperatura = 'X';
			}
			else
			{
				vMuestraTemperatura = '';
			}


			//Muestra valida?
			var vMuestra = '';
			if(parseFloat(contFueraRango) < parseFloat(vMuestrasErrorMax) 
				&& parseFloat(contOk) > parseFloat(vMuestrasOkMin))
			{
				vMuestra = 'X';
			}
			else
			{
				vMuestra = '';
			}

			var vFechaRecep = this.getView().byId("dpFRecepInsumo").getDateValue();
			if(vFechaRecep === null)
			{
				vFechaRecep = "";

			}else{
				var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyyMMdd" }); 
				var date = new Date(vFechaRecep);
				var vFechaRecep = dateFormat.format(date);
				console.log(vFechaRecep);
			}
			
			var vNroGuia = this.getView().byId("inNroGuia").getValue();
			var vdpFInspeccion = this.getView().byId("dpFInspeccion").getDateValue();
			if(vdpFInspeccion === null)
			{
				vdpFInspeccion = "";

			}else{
				var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyyMMdd" }); 
				var date = new Date(vdpFInspeccion);
				var vdpFInspeccion = dateFormat.format(date);
				console.log(vdpFInspeccion);
			}

			var vFElaboracion = this.getView().byId("dpFElaboracion").getDateValue();
			if(vFElaboracion === null)
			{
				vFElaboracion = "";

			}else{
				var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyyMMdd" }); 
				var date = new Date(vFElaboracion);
				var vFElaboracion = dateFormat.format(date);
				console.log(vFElaboracion);
			}


			var FVencimiento = this.getView().byId("dpFVencimiento").getDateValue();
			if(FVencimiento === null)
			{
				FVencimiento = "";

			}else{
				var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyyMMdd" }); 
				var date = new Date(FVencimiento);
				var FVencimiento = dateFormat.format(date);
				console.log(FVencimiento);
			}

			oInfo.Mblnr = oObject.Mblnr;
			oInfo.Mjahr = oObject.Mjahr;
			oInfo.Zeile = oObject.Zeile;

			var lvRbArtes = "";
			if(this.getView().byId("RB2-1").getSelected() === true)
			{
				lvRbArtes = "1";
			}
			else if(this.getView().byId("RB2-2").getSelected() === true)
			{
				lvRbArtes = "2";
			}else if(this.getView().byId("RB2-3").getSelected() === true)
			{
				lvRbArtes = "3";
			}

			var lvRbPresentacion = "";
			if(this.getView().byId("RB3-1").getSelected() === true)
			{
				lvRbPresentacion = "1";
			}
			else if(this.getView().byId("RB3-2").getSelected() === true)
			{
				lvRbPresentacion = "2";
			}else if(this.getView().byId("RB3-3").getSelected() === true)
			{
				lvRbPresentacion = "3";
			}

			var lvRbBultos = '';
			if(this.getView().byId("RB4-1").getSelected() === true)
			{
				lvRbBultos = "1";
			}
			else if(this.getView().byId("RB4-2").getSelected() === true)
			{
				lvRbBultos = "2";
			}else if(this.getView().byId("RB4-3").getSelected() === true)
			{
				lvRbBultos = "3";
			}

			var lvRbAuse = '';
			if(this.getView().byId("RB5-1").getSelected() === true)
			{
				lvRbAuse = "1";
			}
			else if(this.getView().byId("RB5-2").getSelected() === true)
			{
				lvRbAuse = "2";
			}else if(this.getView().byId("RB5-3").getSelected() === true)
			{
				lvRbAuse = "3";
			}

			var lvRbIdent = '';
			if(this.getView().byId("RB6-1").getSelected() === true)
			{
				lvRbIdent = "1";
			}
			else if(this.getView().byId("RB6-2").getSelected() === true)
			{
				lvRbIdent = "2";
			}else if(this.getView().byId("RB6-3").getSelected() === true)
			{
				lvRbIdent = "3";
			}

			var lvRbDerrames = '';
			if(this.getView().byId("RB7-1").getSelected() === true)
			{
				lvRbDerrames = "1";
			}
			else if(this.getView().byId("RB7-2").getSelected() === true)
			{
				lvRbDerrames = "2";
			}else if(this.getView().byId("RB7-3").getSelected() === true)
			{
				lvRbDerrames = "3";
			}

			oInfo.nvMuestreoCabSet = [
										{
											IdMuestreo:vIdPlan,
											Mblnr: oObject.Mblnr,
											Mjahr: oObject.Mjahr,
											Zeile: oObject.Zeile,
											Lifnr: oObject.Lifnr,
											Matnr: oObject.Matnr,
											Guia: vNroGuia,
											Folio: '',
											Correlativo: '',
											Ubname: vUsuario,
											FechaMuestreo:vdpFInspeccion,
											FechaRecep:vFechaRecep,
											Resultado: vMuestra,
											RbArtes: lvRbArtes,
											RbPresentacion: lvRbPresentacion,
											RbBultos: lvRbBultos,
											RbAusencia: lvRbAuse,
											RbIdent: lvRbIdent,
											RbDerrames: lvRbDerrames,
											Observaciones: this.getView().byId("inObservaciones").getValue(),
											Correctivas: this.getView().byId("inAccionesCorrectivas").getValue(),
											FechaElab: vFElaboracion,
											FechaVenc: FVencimiento,
											Lote:this.getView().byId("inLoteProveedor").getValue(),
											Insumo:this.getView().byId("inInsumo").getValue(),
											FormaEmbalaje: this.getView().byId("idFormaEmbalaje").getValue(),
											Menge: oObject.Menge,
											Meins: oObject.Meins,
											NombreAprobador: this.getView().byId("idInAprobador").getValue(),
											ObservaModif: this.getView().byId("inObservacionesModifica").getValue()
										}
									];

			//var oModel = this.getView().getModel();
			var oBusy = new sap.m.BusyDialog();
			oBusy.open();

			
			var sServiceURL = "/sap/opu/odata/sap/ZMM_TRAZABILIDAD_SRV";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceURL, true);

			oModel.create('/OutPlanMuestreoSet', oInfo, null, function (oData, response) {

				oBusy.close();
				that.setearModelos();
				
				if(oData.Mensaje !== "")
				{
					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					sap.m.MessageBox.error(oData.Mensaje,
					{
						styleClass: bCompact ? "sapUiSizecompact" : ""
					});
					
				}else{

					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					sap.m.MessageBox.alert("Se han ingresado los datos correctamente",
					{
						styleClass: bCompact ? "sapUiSizecompact" : ""
					});
					
				}
				var oSplit = that.getView().getParent().getParent();
				oSplit.showMaster();
			}, function (oError) {
				oBusy.close();
				sap.m.MessageToast.show('Error al agregar registros');
				if (oError) {
					

					if (oError.response) {
						var oErrorMessage = JSON.parse(oError.response.body);

						var data = [];
						for (var j = 0; j < oErrorMessage.error.innererror.errordetails.length; j++) {
							var obj = oErrorMessage.error.innererror.errordetails[j].message;
							data[j] = obj;
						}
						if(data.length === 0){
							data[0] = oErrorMessage.error.message.value;
						}
						var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
						
						sap.m.MessageBox.show("Error al ingresa la muestra.", {
												icon : sap.m.MessageBox.Icon.ERROR,
												title : "Error",
												actions : [sap.m.MessageBox.Action.CLOSE],
												details: data,
												styleClass: bCompact? "sapUiSizeCompact" : "",
												dialogId : "messageBoxId"
											});

					}	
				}

			});
			/*
			oModel.create("/OutPlanMuestreoSet", oInfo, {
				method: "POST",
				success: function (oData, oResponse) {
					oBusy.close();
					if (oResponse.responseText) {
						
						//oBusy.setText("Creando registros en tabla de desclasificación");
						sap.m.MessageBox.information("Muestras guardada exitosamente", {
							title: "Información",
							onClose: function (oEvent) {
								that.onNavBack();
							}
						});
					} else {

							sap.m.MessageBox.information("Muestra guardada exitosamente", {
								title: "Información",
								onClose: function (oEvent) {
									that.onNavBack();
								}
							});
					
						//End of Insert RME200721
					}
				},
				error: function (oData, oResponse) {
					oBusy.close();
					
				}
			});
			*/

		},
		_onPressCancelar: function(){
			
			//this.getView().byId("formularioIngreso").setProperty("visible", false);

			//this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
			var that = this;
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.warning(
				//22.09 1030
				//"¿Desea cerrar tecnicamente la Orden Madre?", {
				"\u00BFEst\u00E1 seguro que desea cancelar ingreso?", {
					//22.09 1030
					actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onClose: function (sAction) {
						if (sAction === "OK") {
							var oSplit = that.getView().getParent().getParent();
							oSplit.showMaster();
							
							that.setearModelos();
						}
					}
				}
			);
			

			/*
			oSplit.setMode(sap.m.SplitAppMode.StretchCompressMode);
			if(oSplit.isMasterShown())
			{
				oSplit.setMode(sap.m.SplitAppMode.HideMode);
			}else{
				oSplit.setMode(sap.m.SplitAppMode.StretchCompressMode);
			}
			*/
			
		},

		handleValueHelpEmbalaje : function (oController) {
			this.inputId = oController.oSource.sId;
			// create value help dialog
			if (!this._valueHelpDialogEmbalaje) {
			  this._valueHelpDialogEmbalaje = sap.ui.xmlfragment("DialogEmbalaje","com.aquachile.mm.traza.view.fragments.DialogEmbalaje",this);
			  this.getView().addDependent(this._valueHelpDialogEmbalaje);
			}
	
			// open value help dialog
			this._valueHelpDialogEmbalaje.open();
		  },
		  
		  _handleValueHelpSearchEmbalaje : function (evt) {
				var sValue = evt.getParameter("value");
				var oFilter = new sap.ui.model.Filter(
				  "Plstx",
				  sap.ui.model.FilterOperator.Contains, sValue
				);
				evt.getSource().getBinding("items").filter([oFilter]);
			  },
	
			  _handleValueHelpCloseEmbalaje : function (evt) {
				var oSelectedItem = evt.getParameter("selectedItem");
				if (oSelectedItem) {
				  var productInput = this.getView().byId(this.inputId);
				  productInput.setValue(oSelectedItem.getTitle());
				}
				evt.getSource().getBinding("items").filter([]);
			  },
			  _onPressPrint: function(){
				var that = this;
				var oModel = this.getView().getBindingContext().oModel;
				var entity = this.getView().getBindingContext().getObject();

					//var oModel = this.getView().getModel();
					var Entidad = "/ImprimirFormularioSet";
					var filterAyuda = [];
					filterAyuda.push(new sap.ui.model.Filter("Mblnr", sap.ui.model.FilterOperator.EQ, entity.Mblnr));
					filterAyuda.push(new sap.ui.model.Filter("Mjahr", sap.ui.model.FilterOperator.EQ, entity.Mjahr));
					filterAyuda.push(new sap.ui.model.Filter("Zeile", sap.ui.model.FilterOperator.EQ, entity.Zeile));
					filterAyuda.push(new sap.ui.model.Filter("IdMuestreo", sap.ui.model.FilterOperator.EQ, entity.Mblnr + entity.Mjahr + entity.Zeile));

					oModel.read(Entidad, {
						async: false,
						filters: filterAyuda,
						success: function (oData, oResponse) {
							//sap.ui.getCore().byId("ordenUMId").setValue(oData.results[0].UMInterna);
							// save variable
							var base64EncodedPDF = oData.results[0].Documento; // the encoded string
							var decodedPdfContent = atob(base64EncodedPDF);
							var byteArray = new Uint8Array(decodedPdfContent.length)
							for (var i = 0; i < decodedPdfContent.length; i++) {
								byteArray[i] = decodedPdfContent.charCodeAt(i);
							}
							var _pdfurl;
							
		
							var blob = new Blob([byteArray.buffer], { type: 'application/pdf' });
							
							_pdfurl = URL.createObjectURL(blob);
							that._pdfurl = false;
							
		
							 
		
							if (!that._PDFViewer) {
								that._PDFViewer = new sap.m.PDFViewer({
									width: "auto",
									source: _pdfurl // my blob url
								});
								jQuery.sap.addUrlWhitelist("blob"); // register blob url as whitelist
							}else{
								that._PDFViewer.destroy();
								that._PDFViewer = new sap.m.PDFViewer({
									width: "auto",
									source: _pdfurl // my blob url
								});
								jQuery.sap.addUrlWhitelist("blob"); // register blob url as whitelist
							}
							that._PDFViewer.downloadPDF = function () {
		
								File.save(
									byteArray.buffer,
									"facturas",
									"pdf",
									"application/pdf"
								);
							};
							var deleteLink = document.querySelector('__pdfviewer1-popup-popupCloseButton');
							/* capturar eventyo onclick
							deleteLink.addDependent('click', function(event) {
								event.preventDefault();
							
								MessageBox.alert("sure u want to delete?");
								
							});*/
							/*
							that._PDFViewer.onload = function() {
								// Ya se cargó la página y se puede asignar el evento final
								that._PDFViewer.onunload = function() {
									console.log('Se cerró la ventana o el usuario cambió de página');
								}
							};*/
							/*
							that._PDFViewer.addDependent({
								attachBeforeClose: function(){
									MessageBox.alert("asdasd");
								}
								
							}, that);
							*/
		
							//that._PDFViewer.attachBeforeClose(that._limpiarPdf, that);
							
							that._PDFViewer.open();
							URL.revokeObjectURL();

							MessageBox.alert(
								"test",
								{
									styleClass: bCompact ? "sapUiSizeCompact" : ""
								});
								return false;
						}
					});
			},

			seleccionaCategoria: function(){
				if(this.getView().byId("RB1-1").getSelected() === true)
				{
					this.getView().byId("inInsumo").setProperty("enabled", false);
				}
				
				if(this.getView().byId("RB1-2").getSelected()  === true)
				{
					this.getView().byId("inInsumo").setProperty("enabled", true);
				}
			}
	});
});
