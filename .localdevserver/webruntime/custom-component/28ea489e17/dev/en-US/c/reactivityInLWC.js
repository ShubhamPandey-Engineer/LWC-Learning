Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       b: api_bind,
       h: api_element,
       t: api_text,
       d: api_dynamic
     } = $api;
     const {
       _m0
     } = $ctx;
     return [api_element("button", {
       attrs: {
         "title": "Change Property",
         "label": "'Change Prop"
       },
       key: 0,
       on: {
         "click": _m0 || ($ctx._m0 = api_bind($cmp.clickHandler))
       }
     }, []), api_element("h5", {
       key: 1
     }, [api_text("Object Not tracked : "), api_dynamic($cmp.noTrackObj)]), api_element("h5", {
       key: 2
     }, [api_text("Object  tracked : "), api_dynamic($cmp.trackObj)])];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-reactivityInLWC_reactivityInLWC-host",
     shadowAttribute: "lwc-reactivityInLWC_reactivityInLWC"
   };

   class ReactivityInLWC extends lwc.LightningElement {
     // track decorator not used
     // track decorator is used
     //When manipulating complex types like objects and arrays, 
     //you must create a new object and assign it to the field for the change to be detected.
     constructor() {
       super();
       this.noTrackObj = {
         fname: 'Shubham',
         id: 'AAA'
       };
       this.trackObj = {
         fname: 'Shubham',
         id: 'BBB'
       };
     }

     clickHandler() {
       this.noTrackObj.fname = 'name Changed';
       this.trackObj.fname = 'name Changed in track prop';
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     fields: ["noTrackObj", "trackObj"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
