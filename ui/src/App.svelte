<script>
  import { onMount } from "svelte";
  import Filters from "./Filters.svelte";
  import Variation from "./Variation.svelte";
  export let variations;
  export let textVars;
  export let activeColumns;
  export let showAttributes;
  export let showFilters;
  export let attributes;
  export let sortKey;
  export let imageURL;
  export let showSpinner;
  let filters = [];
  let activeFilters = [];
  let searchQuery = "";

  onMount(async () => {
    for (let i = 0; i < Object.keys(attributes).length; i++) {
      activeFilters.push("");
    }
  });

  let sortOrders = {};
  let columns = [
    { key: "image_link", title: "", type: "image" },
    { key: "sku", title: textVars.columnsText.sku, type: "text" },
    {
      key: "variation_description",
      title: textVars.columnsText.variation_description,
      type: "html"
    },
    {
      key: "weight_html",
      title: textVars.columnsText.weight_html,
      type: "text"
    },
    { key: "dimensions", title: textVars.columnsText.dimensions, type: "text" },
    { key: "price_html", title: textVars.columnsText.price_html, type: "html" }
  ];

  function calcColumns() {
    let columnsNum = 1;
    columns.forEach(col => {
      if (activeColumns[col.key]) {
        columnsNum++;
      }
    });
    if (activeColumns["stock"] === "on") {
      columnsNum++;
    }
    if (activeColumns["quantity"] === "on") {
      columnsNum++;
    }
    if (showAttributes) {
      columnsNum += attributes.length;
    }
    return columnsNum;
  }
  let activeColumnsNum = calcColumns();
  function sortBy(key) {
    if (key === "image_link") return;
    sortKey = key;
    if (sortOrders[key] === undefined) {
      sortOrders[key] = 1;
    } else {
      sortOrders[key] = sortOrders[key] * -1;
    }
    filteredData = filterData();
  }

  function filterFunction(item) {
    var ok = 0;
    for (let i = 0; i < filters.length; i++) {
      let filterKey = Object.keys(filters[i])[0];
      if (!item["attributes"][filterKey]) return false;
      if (item["attributes"][filterKey] === filters[i][filterKey]) {
        ok++;
      }
    }
    if (ok === filters.length) {
      return true;
    }
    return false;
  }

  function filterData() {
    let filterKey = searchQuery && searchQuery.toLowerCase();
    let order = sortOrders[sortKey] || 1;
    let data = variations;

    if (filterKey) {
      data = variations.filter(function(row) {
        return Object.keys(row).some(function(key) {
          return (
            String(row[key])
              .toLowerCase()
              .indexOf(filterKey) > -1
          );
        });
      });
    }
    if (filters && filters.length) {
      data = data.filter(filterFunction);
    }
    if (sortKey) {
      data = data.slice().sort(function(a, b) {
        if (sortKey.startsWith("attribute_")) {
          a = a.attributes[sortKey];
          b = b.attributes[sortKey];
        } else {
          a = a[sortKey];
          b = b[sortKey];
        }
        return (a === b ? 0 : a > b ? 1 : -1) * order;
      });
    }
    return data;
  }
  let filteredData = filterData();
  function setFilters(event) {
    filters = event.detail;
    filteredData = filterData();
  }
</script>

<style>

</style>

<div id="variations">
  {#if showFilters}
    <Filters
      bind:searchQuery
      {attributes}
      {activeFilters}
      {textVars}
      on:setFilters={setFilters} />
  {/if}
  <table class="variations">
    <thead>
      <tr>
        {#each columns as column, i}
          {#if activeColumns[column.key]}
            <th
              on:click={() => sortBy(column.key)}
              class:active={sortKey === column.key}
              class={column.key}>
              {column.title}
              <span
                class="arrow"
                class:asc={sortOrders[column.key] > 0 || sortKey !== column.key}
                class:dsc={sortOrders[column.key] < 0 && sortKey === column.key} />
            </th>
          {/if}
        {/each}

        {#if showAttributes}
          {#each attributes as attr, i}
            {#if attr.visible}
              <th
                class={attr.key}
                on:click={() => sortBy('attribute_' + attr.key)}
                class:active={sortKey === 'attribute_' + attr.key}>
                {attr.name}
                <span
                  class="arrow"
                  class:asc={sortOrders['attribute_' + attr.key] > 0 || sortKey !== 'attribute_' + attr.key}
                  class:dsc={sortOrders['attribute_' + attr.key] < 0 && sortKey === 'attribute_' + attr.key} />
              </th>
            {/if}
          {/each}
        {/if}
        {#if activeColumns['stock'] === 'on'}
          <th
            class="stock"
            on:click={() => sortBy('availability_html')}
            class:active={sortKey === 'availability_html'}>
            {textVars.columnsText.stock}
            <span
              class="arrow"
              class:asc={sortOrders['availability_html'] > 0 || sortKey !== 'availability_html'}
              class:dsc={sortOrders['availability_html'] < 0 && sortKey === 'availability_html'} />
          </th>
        {/if}
        {#if activeColumns['quantity'] === 'on'}
          <th class="quantity">{textVars.columnsText.quantity}</th>
        {/if}
        <th class="add-to-cart" />
      </tr>
    </thead>
    <tbody>
      {#each filteredData as entry (entry.variation_id)}
        <Variation
          item={entry}
          {columns}
          bind:activeColumns
          {showAttributes}
          {attributes}
          productImageURL={imageURL}
          {showSpinner}
          {textVars} />
      {/each}
      {#if !filteredData || !filteredData.length}
        <tr>
          <td colspan={activeColumnsNum} style="text-align: center;">
            {textVars.noResultsText}
          </td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>
