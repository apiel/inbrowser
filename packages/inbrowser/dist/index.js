"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keypress(element, key) {
    if (key.length > 1) {
        console.log('Need to handle Backspace | Enter | ArrowLeft...');
    }
    var cfg = {
        key: key,
        charCode: key.charCodeAt(0),
        keyCode: key.charCodeAt(0),
        which: key.charCodeAt(0),
        type: 'keypress',
        detail: 0,
        isTrusted: true,
        DOM_KEY_LOCATION_STANDARD: 0,
        DOM_KEY_LOCATION_LEFT: 1,
        DOM_KEY_LOCATION_RIGHT: 2,
        DOM_KEY_LOCATION_NUMPAD: 3,
        location: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        repeat: false,
        isComposing: false,
        NONE: 0,
        CAPTURING_PHASE: 1,
        AT_TARGET: 2,
        BUBBLING_PHASE: 3,
        eventPhase: 2,
        bubbles: true,
        cancelable: true,
        defaultPrevented: false,
        composed: true,
        returnValue: true,
        cancelBubble: false,
    };
    var ev = new KeyboardEvent('keypress', cfg);
    element.dispatchEvent(ev);
}
exports.keypress = keypress;
//# sourceMappingURL=index.js.map