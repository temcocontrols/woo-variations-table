import App from './App.svelte';

const app = new App({
    target: document.getElementById("woo-variations-table-component"),
    props: {
        variations: wooVariationsTableData.variations,
        attributes: wooVariationsTableData.attributes,
        showAttributes: wooVariationsTableData.showAttributes,
        showFilters: wooVariationsTableData.showFilters,
        activeColumns: wooVariationsTableData.activeColumns,
        imageURL: wooVariationsTableData.imageURL,
        showSpinner: wooVariationsTableData.showSpinner,
        textVars: wooVariationsTableData.textVars
    }
});

export default app;