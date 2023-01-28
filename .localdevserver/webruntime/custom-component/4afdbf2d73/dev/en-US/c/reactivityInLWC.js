Webruntime.define('lwc/reactivityInLWC', ['lwc'], function (lwc) { 'use strict';

   function tmpl($api, $cmp, $slotset, $ctx) {
     const {
       b: api_bind,
       h: api_element
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
       this.columns = [{
         label: 'Property Not tracked',
         fieldName: 'fname'
       }, {
         label: 'Property Tracked',
         fieldName: 'fname'
       }];
       this.noTrackObj = {
         fname: 'Shubham',
         id: 'AAA'
       };
       this.trackObj = {
         fname: 'Shubham',
         id: 'BBB'
       };
       this.data = [this.noTrackObj, this.trackObj];
     }

     clickHandler() {
       this.noTrackObj.fname = 'name Changed';
       this.trackObj.fname = 'name Changed in track prop';
       console.log(this.data);
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     track: {
       columns: 1,
       trackObj: 1
     },
     fields: ["noTrackObj", "data"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
