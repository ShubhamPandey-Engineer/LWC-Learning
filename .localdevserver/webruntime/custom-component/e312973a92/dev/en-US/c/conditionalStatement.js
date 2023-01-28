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
      }, [api_text("Yes , the variable hold's true value")])]) : null, api_element("input", {
        attrs: {
          "type": "checkbox"
        },
        props: {
          "value": "sync"
        },
        key: 3,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.onChange))
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
      }

      //for checkbox
      onChange(event) {
        console.log(event.target.value);
      }

    }

    lwc.registerDecorators(ConditionalStatement, {
      fields: ["isTrue"]
    });

    var conditionalStatement = lwc.registerComponent(ConditionalStatement, {
      tmpl: _tmpl
    });

    return conditionalStatement;

});
