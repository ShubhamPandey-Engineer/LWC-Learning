Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       d: api_dynamic,
       h: api_element
     } = $api;
     return [api_element("h1", {
       key: 0
     }, [api_dynamic($cmp.fname)])];
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
       this.Obj = {
         fname: 'Sp'
       };
       this.fname = 'Sp';
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     fields: ["Obj"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
