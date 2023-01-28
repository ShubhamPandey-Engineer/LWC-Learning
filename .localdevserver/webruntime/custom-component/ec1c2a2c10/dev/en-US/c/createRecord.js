Webruntime.define('lwc/createRecord', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-createRecord_createRecord-host",
      shadowAttribute: "lwc-createRecord_createRecord"
    };

    class CreateRecord extends lwc.LightningElement {}

    var createRecord = lwc.registerComponent(CreateRecord, {
      tmpl: _tmpl
    });

    return createRecord;

});
