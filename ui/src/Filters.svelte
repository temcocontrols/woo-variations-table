<script>
  import { createEventDispatcher } from "svelte";
  export let attributes;
  export let activeFilters;
  export let filters = [];
  export let searchQuery = "";
  export let textVars;
  const dispatch = createEventDispatcher();
  function setFilters() {
    if (activeFilters.length) {
      var filterAny = 0;
      filters = [];
      for (let i = 0; i < activeFilters.length; i++) {
        if (activeFilters[i] != "") {
          var tup = activeFilters[i].split(":");
          filters[i - filterAny] = {};
          filters[i - filterAny][tup[0]] = tup[1];
        } else {
          filterAny++;
        }
      }
    }
    dispatch("setFilters", filters);
    return filters;
  }
</script>

<div class="variation-filters">
  <div class="filters form-inline">
    <div class="filter">
      <input
        placeholder={textVars.searchPlaceholderText}
        name="query"
        bind:value={searchQuery}
        on:input={setFilters}
        class="form-control" />
    </div>
    {#each attributes as attribute, index}
      {#if attribute.visible}
        <div class="filter">
          <label>{attribute.name}</label>
          <select
            bind:value={activeFilters[index]}
            on:change={setFilters}
            class="form-control">
            <option value="">{textVars.anyText}</option>
            {#each attribute.options as option, i}
              <option value="attribute_{attribute.key}:{option.slug}">
                {option.name}
              </option>
            {/each}
          </select>
        </div>
      {/if}
    {/each}
  </div>
</div>
