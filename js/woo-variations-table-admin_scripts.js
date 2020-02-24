(function($) {
    $(document).ready(function() {
        $("#woo-variations-table-columns.sortable").sortable({
            placeholder: "ui-state-highlight"
        });
        $("#woo-variations-table-columns.sortable").disableSelection();

    });

}(jQuery));