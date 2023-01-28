Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-reactivityInLWC_reactivityInLWC-host",
      shadowAttribute: "lwc-reactivityInLWC_reactivityInLWC"
    };

    class ReactivityInLWC extends lwc.LightningElement {}

    var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
      tmpl: _tmpl
    });

    return reactivityInLWC;

});
