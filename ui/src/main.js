import App from './App.svelte';

const app = new App({
	target: document.getElementById("woo-variations-table-component"),
	props: {
		variations: wooVariationsTableData.variations,
		attributes: wooVariationsTableData.attributes,
		showAttributes: wooVariationsTableData.showAttributes,
		activeColumns: wooVariationsTableData.activeColumns,
		imageURL: wooVariationsTableData.imageURL,
		ajaxURL: '/?wc-ajax=add_to_cart',
		textVars: wooVariationsTableData.textVars
	}
});

export default app;