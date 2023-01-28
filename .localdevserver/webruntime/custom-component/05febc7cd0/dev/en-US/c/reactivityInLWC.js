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

   function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

   function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

     // track decorator is used  // obj properties are also tracked 
     //When manipulating complex types like objects and arrays, 
     //you must create a new object and assign it to the field for the change to be detected.
     clickHandler() {
       this.noTrackObj.fname = 'name Changed'; // does not re-render the cpm. here the obj prop. are not tracked
       //this.trackObj.fname = 'name Changed in track prop'

       this.trackObj.newprop = 'new prop added'; // does not re-render the cpm since the existing obj. is not modified
       //To rerender your component when adding a new property, assign the object to a new object with both values.

       this.trackObj = _objectSpread({}, this.trackObj, {
         newprop: 'new prop added with existing props'
       }); // 
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
