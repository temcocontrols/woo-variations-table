<script>
  import { onMount } from "svelte";
  import Filters from "./Filters.svelte";
  import Variation from "./Variation.svelte";
  export let variations;
  export let textVars;
  export let activeColumns;
  export let columnsOrder;
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

  if(!columnsOrder){
    columnsOrder = {}
  }

  let columnsTypes = {
    image_link: 'image',
    sku: 'text',
    variation_description: 'html',
    weight_html: 'html',
    dimensions_html: 'html',
    attributes: 'array',
    availability_html: 'stock',
    price_html: 'html',
    quantity: 'text'
  }

  let sortOrders = {};
  let columns = [];
  for (const key in columnsOrder) {
    if (columnsOrder.hasOwnProperty(key)) {
      columns.push({
        key: columnsOrder[key],
        title: textVars.columnsText[columnsOrder[key]] || '',
        type: columnsTypes[columnsOrder[key]],
        active: activeColumns[columnsOrder[key]]
      })
    }
  }

  let columnsOrderValues = Object.values(columnsOrder)

  for (const key in activeColumns) {
    if (activeColumns.hasOwnProperty(key)) {
      if(columnsOrderValues.includes(key))
        continue;
      columns.push({
        key,
        title: textVars.columnsText[key] || '',
        type: columnsTypes[key],
        active: activeColumns[key]
      })
    }
  }

  function calcColumns() {
    let columnsNum = 1;
    columns.forEach(col => {
      if (activeColumns[col.key]) {
        columnsNum++;
      }
    });
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
          {#if column.active === 'on'}
            {#if column.key !== 'attributes' && column.key !== 'quantity'}
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
            {:else if column.key === 'quantity'}
              <th class={column.key}>{column.title}</th>
            {:else}
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
          {/if}
        {/each}
        <th class="add-to-cart" />
      </tr>
    </thead>
    <tbody>
      {#each filteredData as entry (entry.variation_id)}
        <Variation
          item={entry}
          {columns}
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
