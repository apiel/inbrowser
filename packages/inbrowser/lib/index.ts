// keyProperty: {
//     left:      browserUtils.isIE ? 'Left' : 'ArrowLeft',
//     down:      browserUtils.isIE ? 'Down' : 'ArrowDown',
//     right:     browserUtils.isIE ? 'Right' : 'ArrowRight',
//     up:        browserUtils.isIE ? 'Up' : 'ArrowUp',
//     backspace: 'Backspace',
//     capslock:  'CapsLock',
//     delete:    'Delete',
//     end:       'End',
//     enter:     'Enter',
//     esc:       'Escape',
//     home:      'Home',
//     ins:       'Insert',
//     pagedown:  'PageDown',
//     pageup:    'PageUp',
//     space:     ' ',
//     tab:       'Tab',
//     alt:       'Alt',
//     ctrl:      'Control',
//     meta:      'Meta',
//     shift:     'Shift'
// },
// src/client/automation/playback/press/shortcuts.js

const SPECIAL_KEYS = {
    backspace: 8,
    capslock:  20,
    delete:    46,
    down:      40,
    end:       35,
    enter:     13,
    esc:       27,
    home:      36,
    ins:       45,
    left:      37,
    pagedown:  34,
    pageup:    33,
    right:     39,
    space:     32,
    tab:       9,
    up:        38,
};

export function keypress(element: HTMLElement, key: string) {
    if (key.length > 1) {
        console.log('Need to handle Backspace | Enter | ArrowLeft...');
    }
    const cfg = {
        key,
        // code: 'KeyA',
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
    const ev = new KeyboardEvent('keypress', cfg);
    element.dispatchEvent(ev);
}
