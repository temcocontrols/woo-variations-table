( function( $, wp ) {
	$( function() {
    $( '.vt-item-reorder-nav').find( '.vt-move-up, .vt-move-down' ).on( 'click', function() {
      var moveBtn = $( this ),
        $row    = moveBtn.closest( 'li' );

      moveBtn.focus();

      var isMoveUp = moveBtn.is( '.vt-move-up' ),
        isMoveDown = moveBtn.is( '.vt-move-down' );

      if ( isMoveUp ) {
        var $previewRow = $row.prev( 'li' );

        if ( $previewRow && $previewRow.length ) {
          $previewRow.before( $row );
          wp.a11y.speak( 'Moved up' );
        }
      } else if ( isMoveDown ) {
        var $nextRow = $row.next( 'li' );

        if ( $nextRow && $nextRow.length ) {
          $nextRow.after( $row );
          wp.a11y.speak( 'Moved down' );
        }
      }

      moveBtn.focus(); // Re-focus after the container was moved.
      moveBtn.closest( 'table' ).trigger( 'updateMoveButtons' );
    } );

    $( '.vt-item-reorder-nav').closest( 'table' ).on( 'updateMoveButtons', function() {
      var table    = $( this ),
        lastRow  = $( this ).find( 'tbody li:last' ),
        firstRow = $( this ).find( 'tbody li:first' );

      table.find( '.vt-item-reorder-nav .vt-move-disabled' ).removeClass( 'vt-move-disabled' )
        .attr( { 'tabindex': '0', 'aria-hidden': 'false' } );
      firstRow.find( '.vt-item-reorder-nav .vt-move-up' ).addClass( 'vt-move-disabled' )
        .attr( { 'tabindex': '-1', 'aria-hidden': 'true' } );
      lastRow.find( '.vt-item-reorder-nav .vt-move-down' ).addClass( 'vt-move-disabled' )
        .attr( { 'tabindex': '-1', 'aria-hidden': 'true' } );
    } );

    $( '.vt-item-reorder-nav').closest( 'table' ).trigger( 'updateMoveButtons' );

    $( '#woo-variations-table-columns' ).sortable({
			items: 'li',
			cursor: 'move',
			axis: 'y',
			handle: '.vt-item-reorder-nav',
			scrollSensitivity: 40,
			helper: function( event, ui ) {
				ui.children().each( function() {
					$( this ).width( $( this ).width() );
				});
				ui.css( 'left', '0' );
				return ui;
			},
			start: function( event, ui ) {
				ui.item.css( 'background-color', '#f6f6f6' );
			},
			stop: function( event, ui ) {
				ui.item.removeAttr( 'style' );
				ui.item.trigger( 'updateMoveButtons' );
			}
    });
  });
  })( jQuery, wp );