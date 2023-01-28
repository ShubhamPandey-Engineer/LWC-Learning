Webruntime.define('lwc/conditionalStatement', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       t: api_text,
       h: api_element,
       b: api_bind
     } = $api;
     const {
       _m0
     } = $ctx;
     return [api_element("h4", {
       key: 0
     }, [api_text("If else rendering")]), $cmp.isTrue ? api_element("div", {
       classMap: {},
       key: 2
     }, [api_element("h4", {
       classMap: {},
       key: 1
     }, [api_text("Your sync data")])]) : null, !$cmp.isTrue ? api_element("div", {
       classMap: {},
       key: 4
     }, [api_element("h4", {
       classMap: {},
       key: 3
     }, [api_text("sync not enabled")])]) : null, api_element("input", {
       attrs: {
         "type": "checkbox"
       },
       key: 5,
       on: {
         "change": _m0 || ($ctx._m0 = api_bind($cmp.onChange))
       }
     }, [])];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-conditionalStatement_conditionalStatement-host",
     shadowAttribute: "lwc-conditionalStatement_conditionalStatement"
   };

   class ConditionalStatement extends lwc.LightningElement {
     constructor(...args) {
       super(...args);
       this.isTrue = true;
       this.data = "sync not enable";
     }

     //for checkbox
     onChange(event) {
       //on tick
       this.isTrue = event.target.checked;
     }

   }

   lwc.registerDecorators(ConditionalStatement, {
     fields: ["isTrue", "data"]
   });

   var conditionalStatement = lwc.registerComponent(ConditionalStatement, {
     tmpl: _tmpl
   });

   return conditionalStatement;

});
