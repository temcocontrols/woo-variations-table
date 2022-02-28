=== Woo Variations Table ===
Contributors: alaa-rihan
Tags: woocommerce, variations, table, variations table, woocommerce variable, variable product, AJAX, AJAX add to cart, variations list, table of variations
Requires at least: 4.7.0
Tested up to: 5.9.1
Requires PHP: 5.6.20
Stable tag: 2.2.14
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Show a table of all the available variations of a variable product to make it easier for users to find the variation they are searching for.

== Description ==

Woo Variations Table replace the default WooCommerce way to select a variation by showing a table of all the available varations with the abilty to search by a keyword, filter by attributes and an AJAX add to cart button for each variation.

= Features =

* Show a table of all the available variations of a variable product instead of forcing the customer to select the product attributes before even he can see the variation description that he want to add to cart.
* You can control what columns to show/hide in the variations table from settings page WooCommerce -> Woo Variations Table
* You can show variation attributes values as columns in the table.
* You can filter the variations using the attributes values as select boxes.
* You can search variations by typing your search keywords.
* Each variation will have its own "add to cart" button and this button uses AJAX so no reload needed to add it to cart.
* You can select where you want the variations table to show up in the product page.
* You can sort the table columns as you wish using easy drag'n drop table in settings

= Upgrading from 1.x =
It's completely safe to upgrade from 1.x to 2.x releases , there is no breaking changes, just cleaner code and new features.

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
 
To show an attibute in the variations table go to plugin settings and check "Attributes" checkbox then go to the product edit page and enable "Visible on the product page" option for the attribute that you want to show.


== Changelog ==


= 2.2.14 =
* Fix: Take external qty changes before adding to cart ( this will fix the qty issues for themes that use a custom buttons for increase/decrease qty like Avada theme).

= 2.2.13 =
* Update dependencies to fix vulnerabilities.

= 2.2.12 =
* Show native validation errors in case of qty min or max value is invalid.
* Small fix.

= 2.2.9 =
* Show attribute value name instead of slug.

= 2.2.8 =
* Fix attributes ordering sometimes show values in a different order than the headers.
* Add Czech translation, thanks to @dancernohorsky

= 2.2.7 =
* Add "add to cart" button element to "added_to_cart" trigger to let themes do what they need with it ( this would fix some problems in some themes ).
* Don't push ui build folder to git anymore.
* Small fix.

= 2.2.4 =
* Add min and max html attributes to the qty input from the variation data.
* Add actions before and after the variations table.

= 2.2.3 =
* Use the native WooCommerce error message in case of added quantity of an item exceeded the available stock qty.

= 2.2.2 =
* Show an error if the adding quantity of an item exceeded the available stock qty.
*  Other small improvements and fixes.

= 2.2.0 =
* It's possible now to sort columns by drag'n drop easily.
* Fix dimensions column value did not show up correctly.
* Other small improvements and fixes.

= 2.1.6 =
* Move price column to before quantity column.
* Add german (de_DE) translation .po file ( thanks to mario-haag ).

= 2.1.4 =
* Fix the table doesn't work on Microsoft Edge browser.
* Update POT file to include missing strings.

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

== Feedback ==

I'm developing this plugin for you. 
If you discover a bug, you need a feature or have any idea to, let me know by posting your suggestion on the plugin github page..
https://github.com/alaarihan/woo-variations-table
