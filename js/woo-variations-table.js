Vue.component('data-grid', {
  template: '#grid-template',
  replace: true,
  props: {
    data: Array,
    columns: Array,
    activeColumns: Object,
    filterKey: String,
    filters: Array,
    attributes: Object,
    showAttributes: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (column) {
      sortOrders[column.key] = 1
    })
    sortOrders['stock'] = 1
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      var filters = this.filters;
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      
    var filterFunction= function(item) {
      var ok = 0
      for (i = 0; i < filters.length; i++) {
          var filterKey = Object.keys(filters[i])[0];
          if(!item['attributes'][filterKey])
          return false;
          if( item['attributes'][filterKey] ===  filters[i][filterKey]){
             ok++
          }
      }
      if(ok == filters.length){
        return true;
      }
      return false;
    }
    
    if(filters.length){
          data = data.filter(filterFunction);
    }
    
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    imageURL: function(image){
      var imageURL = '';
      if(image){
        imageURL = image;
      }else{
        imageURL = this.$parent.imageURL;
      }
      return imageURL;
    },
    imageClass: function(image){
      var imageURL = '';
      if(image){
        imageURL = image
      }else{
        imageURL = this.$parent.imageURL;
      }
      var imageClass = imageURL.split('/')
      imageClass = imageClass[imageClass.length-1].split('.')[0].replace(/\s+/g, '');
      return imageClass;
    },
    showAttributeNameFromSlug: function(attr, options){
      var AttrName = options.filter(function(option){
        return option.slug == attr;
      });
      return AttrName[0].name;
    },
    addToCart: function(variation){
      var addToCartButton = this.$refs['variation-'+variation.variation_id];
      var quantity = this.$refs['quantity-'+variation.variation_id];
      jQuery(addToCartButton).addClass('loading');
      jQuery(addToCartButton).removeClass('added');
      $fragment_refresh = {
        url: localData.ajaxURL,
        // url: woocommerce_params.ajax_url,
        type: 'POST',
        data: { action: 'woocommerce_get_refreshed_fragments' },
        success: function( data ) {
            if ( data && data.fragments ) {
  
                jQuery.each( data.fragments, function( key, value ) {
                    jQuery(key).replaceWith(value);
                });
                    sessionStorage.setItem( "wc_fragments", JSON.stringify( data.fragments ) );
                    sessionStorage.setItem( "wc_cart_hash", data.cart_hash );
  
                jQuery('body').trigger( 'wc_fragments_refreshed' );
            }
        }
      };
      jQuery.ajax({
        method: "POST",
        url: localData.ajaxURL,
        data: {
            "action" : "variation_add_to_cart",
            "product_id" : this.$parent.productID,
            "variation_id" : variation.variation_id,
            "quantity" : jQuery(quantity).val(),
        }   
      })
        .done(function( msg ) {
         
          jQuery(addToCartButton).removeClass('loading');
          jQuery(addToCartButton).addClass('added');
          if(!variation.added){
            variation.added = true;
          }
          jQuery.ajax( $fragment_refresh );
        })
        .fail(function(error) {
          console.log( error );
        });
    }
  }
  
})