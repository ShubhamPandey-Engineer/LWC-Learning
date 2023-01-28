Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       d: api_dynamic,
       h: api_element,
       b: api_bind
     } = $api;
     const {
       _m0
     } = $ctx;
     return [api_element("h1", {
       key: 0
     }, [api_dynamic($cmp.obj.fname)]), api_element("button", {
       attrs: {
         "title": "Change Property",
         "label": "'Change Prop"
       },
       key: 1,
       on: {
         "click": _m0 || ($ctx._m0 = api_bind($cmp.clickHandler))
       }
     }, [])];
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
     constructor() {
       super();
       this.noTrackObj = {
         fname: 'Shubham'
       };
       this.TrackObj = {
         fname: 'Shubham'
       };
     }

     clickHandler() {
       this.noTrackObj.fname = 'name Changed';
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     fields: ["noTrackObj", "TrackObj"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
