Webruntime.define('lwc/lwcModal', ['lwc', 'lightning/modal'], function (lwc, LightningModal) { 'use strict';

  LightningModal = LightningModal && Object.prototype.hasOwnProperty.call(LightningModal, 'default') ? LightningModal['default'] : LightningModal;

  function tmpl($api, $cmp, $slotset, $ctx) {
    return [];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.stylesheets = [];
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-lwcModal_lwcModal-host",
    shadowAttribute: "lwc-lwcModal_lwcModal"
  };

  class LwcModal extends LightningModal[lwc.LightningElement] {}

  var lwcModal = lwc.registerComponent(LwcModal, {
    tmpl: _tmpl
  });

  return lwcModal;

});
