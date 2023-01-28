Webruntime.define('lwc/modalComponent', ['lwc', 'lightning/modal'], function (lwc, modal) { 'use strict';

   modal = modal && Object.prototype.hasOwnProperty.call(modal, 'default') ? modal['default'] : modal;

   function tmpl($api, $cmp, $slotset, $ctx) {
     return [];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-modalComponent_modalComponent-host",
     shadowAttribute: "lwc-modalComponent_modalComponent"
   };

   class ModalComponent extends lwc.LightningElement {}

   var modalComponent = lwc.registerComponent(ModalComponent, {
     tmpl: _tmpl
   });

   return modalComponent;

});
