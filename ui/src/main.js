import App from './App.svelte';

const app = new App({
    target: document.getElementById("woo-variations-table-component"),
    props: {
        variations: wooVariationsTableData.variations,
        attributes: wooVariationsTableData.attributes,
        showFilters: wooVariationsTableData.showFilters,
        activeColumns: wooVariationsTableData.activeColumns,
        columnsOrder: wooVariationsTableData.columnsOrder,
        imageURL: wooVariationsTableData.imageURL,
        showSpinner: wooVariationsTableData.showSpinner,
        textVars: wooVariationsTableData.textVars
    }
});

export default app;