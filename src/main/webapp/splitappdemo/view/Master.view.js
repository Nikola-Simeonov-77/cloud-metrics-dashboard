sap.ui.jsview("splitappdemo.view.Master", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 *
	 * @memberOf splitappdemo.Master
	 */
	getControllerName : function() {
		return "splitappdemo.controller.Master";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 *
	 * @memberOf splitappdemo.Master
	 */
	createContent : function(oController) {

		var oList = new sap.m.List({
			id : "listId",
			mode : sap.m.ListMode.SingleSelect,
			select : function() {
				oController.onItemSelected();
			}
		});

		var oItemTemplate = new sap.m.StandardListItem({
			id : "sList",
			title : "{data>application}",
			description : "{data>state}"
		})

		oList.bindAggregation("items", "data>/", oItemTemplate);

		return new sap.m.Page({
			title : "Applications",
			content : [ oList ]
		});
	}

});