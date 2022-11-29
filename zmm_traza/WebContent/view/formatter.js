sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},

		/**
		 * Rounds the unit value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		unitValue : function (sValue) {
			if (!sValue) {
				return "";
			}
			var oFloatNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				minFractionDigits : 2,
				groupingEnabled: true
			} , sap.ui.getCore().getConfiguration().getLocale());

			return oFloatNumberFormat.format(sValue);
		},
		/**
		 * On or Off
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted Status Type
		 */
		statusValue : function (sStatus) {
			switch (sStatus) {
			case "X":
				return "Success";
			default:
				return "Error";
				
			}
		},
		/**
		 * Returns text
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted Status Type
		 */
		statusTextValue : function (sStatus) {
			switch (sStatus) {
			case "X":
				return "Ocupado";
			default:
				return "Libre";
			}
		},

		toDate: function (sValue) {
			if (!sValue) {
				return "";
			}
			var anio = sValue.substring(0, 4);
			var mes = sValue.substring(5, 7);
			var dia = sValue.substring(8, 10);
			sValue = dia + "." + mes + "." + anio;
			return sValue;
		},
	};
});