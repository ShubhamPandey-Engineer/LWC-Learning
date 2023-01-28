Webruntime.define('lwc/lwcModal', ['lwc', 'lightning/modalHeader', 'lightning/modalBody', 'lightning/modalFooter', 'lightning/modal'], function (lwc, _lightningModalHeader, _lightningModalBody, _lightningModalFooter, LightningModal) { 'use strict';

    _lightningModalHeader = _lightningModalHeader && Object.prototype.hasOwnProperty.call(_lightningModalHeader, 'default') ? _lightningModalHeader['default'] : _lightningModalHeader;
    _lightningModalBody = _lightningModalBody && Object.prototype.hasOwnProperty.call(_lightningModalBody, 'default') ? _lightningModalBody['default'] : _lightningModalBody;
    _lightningModalFooter = _lightningModalFooter && Object.prototype.hasOwnProperty.call(_lightningModalFooter, 'default') ? _lightningModalFooter['default'] : _lightningModalFooter;
    LightningModal = LightningModal && Object.prototype.hasOwnProperty.call(LightningModal, 'default') ? LightningModal['default'] : LightningModal;

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        t: api_text,
        d: api_dynamic
      } = $api;
      return [api_custom_element("lightning-modal-header", _lightningModalHeader, {
        props: {
          "label": "My Modal Heading"
        },
        key: 0
      }, []), api_custom_element("lightning-modal-body", _lightningModalBody, {
        key: 1
      }, [api_text(" Content: "), api_dynamic($cmp.content), api_text(" ")]), api_custom_element("lightning-modal-footer", _lightningModalFooter, {
        key: 2
      }, [])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-lwcModal_lwcModal-host",
      shadowAttribute: "lwc-lwcModal_lwcModal"
    };

    class LwcModal extends LightningModal {
      constructor(...args) {
        super(...args);
        this.content = 'f';
      }

    }

    lwc.registerDecorators(LwcModal, {
      fields: ["content"]
    });

    var lwcModal = lwc.registerComponent(LwcModal, {
      tmpl: _tmpl
    });

    return lwcModal;

});
