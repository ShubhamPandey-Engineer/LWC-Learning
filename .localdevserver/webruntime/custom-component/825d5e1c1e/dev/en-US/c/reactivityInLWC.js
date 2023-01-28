Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic
      } = $api;
      return [api_dynamic($cmp.fname)];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-reactivityInLWC_reactivityInLWC-host",
      shadowAttribute: "lwc-reactivityInLWC_reactivityInLWC"
    };

    class ReactivityInLWC extends lwc.LightningElement {
      constructor() {
        super(this);
        this.fname = 'Shubham';
      }

    }

    lwc.registerDecorators(ReactivityInLWC, {
      fields: ["fname"]
    });

    var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
      tmpl: _tmpl
    });

    return reactivityInLWC;

});
