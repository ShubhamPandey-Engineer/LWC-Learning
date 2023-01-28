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
     }, [api_text("Object Not tracked : "), api_dynamic($cmp.noTrackObj.fname)]), api_element("h5", {
       key: 2
     }, [api_text("Object  tracked : "), api_dynamic($cmp.trackObj.fname)]), api_dynamic($cmp.trackObj.newprop)];
   }

   var _tmpl = lwc.registerTemplate(tmpl);
   tmpl.stylesheets = [];
   tmpl.stylesheetTokens = {
     hostAttribute: "lwc-reactivityInLWC_reactivityInLWC-host",
     shadowAttribute: "lwc-reactivityInLWC_reactivityInLWC"
   };

   class ReactivityInLWC extends lwc.LightningElement {
     constructor(...args) {
       super(...args);
       this.noTrackObj = {
         fname: 'Shubham'
       };
       this.trackObj = {
         fname: 'Shubham'
       };
     }

     // track decorator is used . Object properties are also tracked. 
     //When manipulating complex types like objects and arrays we must create a new object and assign it to the field for the change to be detected.
     // called upon clicking a button
     clickHandler() {
       this.noTrackObj.fname = 'name Changed'; // does not re-render the component. Since the object properties are not tracked.

       this.trackObj.fname = 'name Changed in track property'; // re-render the component

       this.trackObj.newprop = 'new property added'; // does not re-render the component since the existing object is not modified.
       //To rerender your component when adding a new property, assign the object to a new object with both values(new & old).

       this.trackObj = {
         newprop: 'new prop added along with existing properties'
       }; // re-render the component
     }

   }

   lwc.registerDecorators(ReactivityInLWC, {
     track: {
       trackObj: 1
     },
     fields: ["noTrackObj"]
   });

   var reactivityInLWC = lwc.registerComponent(ReactivityInLWC, {
     tmpl: _tmpl
   });

   return reactivityInLWC;

});
