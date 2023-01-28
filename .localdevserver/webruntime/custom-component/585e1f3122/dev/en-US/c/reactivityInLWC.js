Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       d: api_dynamic,
       h: api_element
     } = $api;
     return [api_element("h1", {
       key: 0
     }, [api_dynamic($cmp.obj.fname)])];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-reactivityInLWC_reactivityInLWC-host",
     shadowAttribute: "lwc-reactivityInLWC_reactivityInLWC"
   };

   class ReactivityInLWC extends lwc.LightningElement {
     constructor() {
       super();
       this.obj = {
         fname: 'Sp'
       };
       this.obj.fname = 's';
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     fields: ["obj"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
