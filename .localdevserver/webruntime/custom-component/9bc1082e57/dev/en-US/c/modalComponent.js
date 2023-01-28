Webruntime.define('lwc/modalComponent', ['lwc'], function (lwc) { 'use strict';

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
