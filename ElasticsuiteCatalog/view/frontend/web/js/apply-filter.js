
define([
    'jquery',
    'uiComponent',
    'underscore',
    'mage/translate',
    'Smile_ElasticsuiteCatalog/js/attribute-filter'
], function ($, Component, _, attributeFilter) {
    "use strict";

    return Component.extend({
        defaults: {
            template: "Vendic_ElasticsuiteCatalog/apply-filter",
        },

        /**
         * Component initialization
         */
        initialize: function () {
            this._super();
            this.items = attributeFilter.items;
            console.log('work!')

            this.applyFilter();
        },

        applyFilter: function () {
            console.log(this.items);

            const selectFilterArray = this.items.filter(item => item.is_selected === true);
            console.log(selectFilterArray);

            const selectFilterParams = selectFilterArray.forEach(item => console.log('test', item))

            console.log(selectFilterParams);

            const applyFilterButtonUrl = window.location.pathname+'?';
            console.log(applyFilterButtonUrl);
        }
    });
});
