<script>
  import Spinner from './Spinner.svelte';
  import TickIcon from './TickIcon.svelte';
  export let columns;
  export let activeColumns;
  export let item;
  export let showAttributes;
  export let attributes;
  export let productImageURL;
  export let ajaxURL;
  export let textVars;
  export let showSpinner;
  let addToCartBtn;
  let quantity = 1;
  let added = false;
  let loading = false;
	function imageURL(image){
    var imageURL = '';
    if(image){
      imageURL = image;
    }else{
      imageURL = productImageURL;
    }
    return imageURL;
  }
  function imageClass(image){
    var imageURL = '';
    if(image){
      imageURL = image
    }else{
      imageURL = productImageURL;
    }
    let imageClass = imageURL.split('/')
    imageClass = imageClass[imageClass.length-1].split('.')[0].replace(/\s+/g, '');
    return imageClass;
  }
  function getAttributeNameFromSlug(attr, options){
    var AttrName = options.filter(function(option){
      return option.slug === attr;
    });
  if(!AttrName[0] || !AttrName[0].name) return '';
    return AttrName[0].name;
  }
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: data // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }  
function findAttributeByKey(key){
    let attr = attributes.find(item => item.key === key)
    if(attr === undefined){
      return false
    }
    return attr
  }
  function addToCart(){
    added = false
    loading = true
    const formData = new FormData();
    formData.append('product_id', item.variation_id);
    formData.append('variation_id', item.variation_id);
    formData.append('quantity', quantity);
    for( let key in item.attributes ) {
      formData.append(key, item.attributes[key]);
    }
   jQuery(document.body).trigger('adding_to_cart', [jQuery(addToCartBtn), formData]);

    postData(ajaxURL, formData).then((response) => {
      added = true
      loading = false
      if (response.error & response.product_url) {
      window.location = response.product_url;
        return;
      }
      jQuery(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, undefined]);
    }).catch(error => {
      console.log(error)
    })
  }
</script>

<tr class="variation-{item.variation_id} image-{imageClass(item['image_link'])}">
{#each columns as column, i}
{#if activeColumns[column.key] === 'on'}
<td data-title={column.title}>
    {#if column.type === 'image'}
    <span class="item">
        {#if imageURL(item[column.key]) != ''}
        <img src={imageURL(item[column.key])} alt="{item.sku}">
        {/if}
    </span>
    {/if}
    {#if column.type === 'text'}
    <span class="item">{item[column.key]}</span>
    {/if}
    {#if column.type === 'html'}
    <span class="item">{ @html item[column.key] }</span>
    {/if}
</td>
{/if}
{/each}
{#if showAttributes}
{#each Object.entries(item.attributes) as attr, i}
    {#if findAttributeByKey(attr[0].substr(10)) && findAttributeByKey(attr[0].substr(10)).visible}
    <td data-title="{findAttributeByKey(attr[0].substr(10)).name}">
        { getAttributeNameFromSlug(attr[1], findAttributeByKey(attr[0].substr(10)).options) }
    </td>
    {/if}
{/each}
{/if}

{#if activeColumns['stock'] === 'on'}
<td class="stock" data-title="Stock">
    <span class="item">
    {#if item['availability_html']}
        <span 
          class:in-stock="{item['is_in_stock']}" 
          class:out-of-stock="{!item['is_in_stock']}" > 
            { @html item['availability_html'] }
        </span>
    {/if}
    </span>
</td>
{/if}
{#if activeColumns['quantity'] === 'on'}
<td class="quantity">
  {#if item['is_in_stock']}
    <input 
      bind:value={quantity} 
      type="number" 
      step="1" 
      min="1" 
      name="quantity" 
      data-title="Qty" 
      title="Qty" 
      class="input-text qty text" 
      size="4" 
      pattern="[0-9]*" 
      inputmode="numeric"
    >
  {/if}
</td>
{/if}
<td class="add-to-cart">
    <button 
      bind:this={addToCartBtn} 
      on:click|preventDefault={addToCart} 
      type="submit"
      disabled="{!item['is_in_stock']}"
      class="single_add_to_cart_button button alt"
      class:added class:loading
    >
    {textVars.addToCartText}
    {#if loading && showSpinner === "on"}
        <Spinner />
    {/if}
    {#if !loading && added && showSpinner === "on"}
        <TickIcon />
    {/if}
    </button>
</td>
</tr>