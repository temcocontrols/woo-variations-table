=== Woo Variations Table ===
Contributors: alaa-rihan
Tags: woocommerce, variations, table, variations table, woocommerce variable, variable product, AJAX, AJAX add to cart, variations list
Requires at least: 4.0.0
Tested up to: 5.3.2
Requires PHP: 5.6.20
Stable tag: 2.1.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Show WooCommerce variable products variations as table with search filter by attributes and sorting instead of normal select options dropdowns.

== Description ==

Woo Variations Table replace the default WooCommerce variations dropdowns by a table with search by keywords and filters by attributes with AJAX add to cart button.

= Features =

* Show a table of variable product variations instead of forcing the customer to select options before he see the product add to cart button.
* You can control what columns to show/hide in the variations table from settings page WooCommerce -> Woo Variations Table
* You can show variation attributes values as columns in the table.
* You can filter the variations using the attributes values as select boxes.
* You can search variations by typing your search keywords.
* Each variation will have its own "add to cart" button and this button use AJAX so ne reload needed to add it to cart.
* You can select where you want the variations table to show up in the product page.

= Demo =
You can see live demo from here:
[https://woo-variations-table-demo.cloudaccess.host/shop/hoodie/](https://woo-variations-table-demo.cloudaccess.host/shop/hoodie/#variations-table)

= Upgrading from 1.x =
It's completely safe to upgrade from 1.x released to 2.x release , there is no breaking changes.

== Installation ==

After downloading the ZIP file,

1. Log in to the administrator panel.
2. Go to Plugins Add > New > Upload.
3. Click "Choose file" ("Browse") and select the downloaded zip file.
4. You can control what columns you would show in variation table from WooCommerce -> Woo Variations Table.

== Frequently Asked Questions ==

= What is this plugin for? =
 
This plugin replace the default WooCommerce variations dropdowns by professional table with filters by attributes and search by keywords and it also do AJAX add to cart ( no reload when click add to cart button ).
 
= Can this plugin show the shop/category products as a table? =
 
No, this plugin designed to show the variable products varations in a table.

= How to Show/Hide an attribute in the variations table? =
 
To show an attibute in the variations table go to plugin settings and enable "Show Attributes" option then go to the product edit page and enable "Visible on the product page" option for the attribute that you want to show.


== Changelog ==

= 2.1.3 =
* Add an option to show/hide filters.

= 2.1.2 =
* Fix add to cart doesn't work on sub-drectory sites.
* Other small fixes and improvements.

= 2.1.1 =
* Disable "Add to cart" button if the variation was out of stock

= 2.1.0 =
* Add new option to control where to place the variations table
* Add new option to show/hide "Available Options" button
* Other small fixes and improvements

= 2.0.7 =
* Enable quantity column by default
* Some code improvements

= 2.0.6 =
* Fix js error showing up in console when the product is not variable

= 2.0.5 =
* Fix Add to cart loader icon option can not be unchecked

= 2.0.4 =
* Fix add to cart event triggers to work with jQuery

= 2.0.3 =
* Add option to enable/disable add to cart loader and tick icon
* Some clean up

= 2.0.2 =
* Make Stock header translatable
* Small bug fix

= 2.0.0 =
* Refactor the code and use SvelteJS for the UI instead of VueJS
* Use the built-in WooCommerce ajax add to cart function to add to cart instead of the custom function that used before.
* Sort by attributes values is possible now.
* Add spinner icon to show up when click add to cart button.
* Add tick icon to show up in add to cart button when the item added to cart.
* Make all texts translatable and update pot file.
* It's much faster and stable now.

= 1.3.10 =
* Fix PHP error happened in old PHP versions

= 1.3.9 =
* Make 'Any' translatable.
* Fix PHP error happened in old PHP versions
* Small css fix.

= 1.3.8 =
* CSS improvments to compatible with more themes like Storefront and other WooCommerce themes.
* Fix a PHP bug to compatible with older PHP versions.
* Add new filter to filter variation thumb name.

= 1.3.5 =
* Show Attribute name instead of slug in the table.
* Add some actions and filters hooks to let others extend this plugin.

= 1.3.3 =
* Fix variations price doesn't show up if all variations have the same price issue.
* Fix filters don't work when the attribute label has spesial characters.
* Fix translation issue were contain wrong text domain and Add to cart was not translatable.

= 1.3 =
* Add an option to show stock column.
* Show only attributes with "Visible on the product page" enabled option when enable "Show Attributes" option.
* Show variation image as thumbnail when available (bug fix for WooCommerce 3.x).
* Other bug fixes & improvments.

= 1.2 =
* Add new option to show attributes values as columns in the table.
* Fix Table wasn't working in Internet Explorer.
* Show weight unit in the variations table.

= 1.1 =
* Support multilangual and include PO file.

= 1.0 =
* Make the variation table responsive.
* WooCommerce 3.x compatible.

= 0.9.0 =
* Add settings to control what columns to show in the table.
* Add "Available options" button under product price to scroll down to the variations table.

= 0.8.2 =
* Fix add to cart ajax functionallity (wasn't working).
* Fix some css issues.
* Update VueJS to latest version.

= 0.8.1 =
* Fix a CSS issue.

= 1.3.10 =
* Fix PHP error happened in old PHP versions

= 1.3.9 =
* Make 'Any' translatable.
* Fix PHP error happened in old PHP versions
* Small css fix.

= 1.3.8 =
* CSS improvments to compatible with more themes like Storefront and other WooCommerce themes.
* Fix a PHP bug to compatible with older PHP versions.
* Add new filter to filter variation thumb name.

= 1.3.5 =
* Show Attribute name instead of slug in the table.
* Add some actions and filters hooks to let others extend this plugin.

= 1.3.3 =
* Fix variations price doesn't show up if all variations have the same price issue.
* Fix filters don't work when the attribute label has spesial characters.
* Fix translation issue were contain wrong text domain and Add to cart was not translatable.

= 1.3 =
* Add an option to show stock column.
* Show only attributes with "Visible on the product page" enabled option when enable "Show Attributes" option.
* Show variation image as thumbnail when available (bug fix for WooCommerce 3.x).
* Other bug fixes & improvments.

= 1.2 =
* Add new option to show attributes values as columns in the table.
* Fix Table wasn't working in Internet Explorer.
* Show weight unit in the variations table.

= 1.1 =
* Support multilangual and include PO file.

= 1.0 =
* Make the variation table responsive.
* WooCommerce 3.x compatible.

= 0.9.0 =
* Add settings to control what columns to show in the table.
* Add "Available options" button under product price to scroll down to the variations table.

= 0.8.2 =
* Fix add to cart ajax functionallity (wasn't working).
* Fix some css issues.
* Update VueJS to latest version.

= 0.8.1 =
* Fix a CSS issue.

= 0.8 =
* Initial release.

== Feedback ==

I'm developing this plugin for you. 
If you discover a bug, you need a feature or have any idea to, let me know by posting your suggestion on the plugin github page..
https://github.com/alaarihan/woo-variations-table
