'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var defaultHotkeys = [
    { key: 'h', meta: false, shift: false, commandID: 'editor:focus-left' },
    { key: 'j', meta: false, shift: false, commandID: 'editor:focus-bottom' },
    { key: 'k', meta: false, shift: false, commandID: 'editor:focus-top' },
    { key: 'l', meta: false, shift: false, commandID: 'editor:focus-right' },
];
var LeaderHotkeysPlugin = /** @class */ (function (_super) {
    __extends(LeaderHotkeysPlugin, _super);
    function LeaderHotkeysPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeyDown = function (cm, event) {
            if (!_this.leaderPending) {
                return;
            }
            if (event.key === 'Shift' || event.key === 'Meta') {
                // Don't clear leaderPending for a meta key
                console.debug('skipping a meta key');
                return;
            }
            var commandFound = false;
            for (var i = 0; i < _this.settings.hotkeys.length; i++) {
                var evaluatingHotkey = _this.settings.hotkeys[i];
                if (evaluatingHotkey.key === event.key) {
                    if (
                    // check true and false to catch commands with meta/shift undefined
                    ((event.metaKey && evaluatingHotkey.meta) ||
                        (!event.metaKey && !evaluatingHotkey.meta)) &&
                        ((event.shiftKey && evaluatingHotkey.shift) ||
                            (!event.shiftKey && !evaluatingHotkey.shift))) {
                        _this.app.commands.executeCommandById(_this.settings.hotkeys[i].commandID);
                        event.preventDefault();
                        commandFound = true;
                        break;
                    }
                }
            }
            if (!commandFound) {
                console.debug('cancelling leader');
            }
            _this.leaderPending = false;
        };
        return _this;
    }
    LeaderHotkeysPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = [{ hotkeys: defaultHotkeys }];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = __assign.apply(void 0, _b.concat([(_c.sent())]));
                        this.cmEditors = [];
                        this.registerEvent(this.app.workspace.on('codemirror', function (cm) {
                            _this.cmEditors.push(cm);
                            cm.on('keydown', _this.handleKeyDown);
                        }));
                        this.addCommand({
                            id: 'leader',
                            name: 'Leader key',
                            callback: function () {
                                console.debug('Leader pressed...');
                                _this.leaderPending = true;
                            },
                        });
                        this.addSettingTab(new LeaderPluginSettingsTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    LeaderHotkeysPlugin.prototype.onunload = function () {
        var _this = this;
        this.cmEditors.forEach(function (cm) {
            cm.off('keydown', _this.handleKeyDown);
        });
    };
    return LeaderHotkeysPlugin;
}(obsidian.Plugin));
var SetHotkeyModal = /** @class */ (function (_super) {
    __extends(SetHotkeyModal, _super);
    function SetHotkeyModal(app, currentLeader, redraw, setNewKey) {
        var _this = _super.call(this, app) || this;
        _this.onOpen = function () {
            var contentEl = _this.contentEl;
            var introText = document.createElement('p');
            introText.setText("Press a key to use as the hotkey after the leader (" + _this.currentLeader + ") is pressed...");
            contentEl.appendChild(introText);
            document.addEventListener('keydown', _this.handleKeyDown);
        };
        _this.onClose = function () {
            document.removeEventListener('keydown', _this.handleKeyDown);
            _this.redraw();
            var contentEl = _this.contentEl;
            contentEl.empty();
        };
        _this.handleKeyDown = function (event) {
            if (['Shift', 'Meta', 'Escape'].contains(event.key)) {
                return;
            }
            _this.setNewKey(event.key, event.metaKey, event.shiftKey);
            _this.close();
        };
        _this.currentLeader = currentLeader;
        _this.redraw = redraw;
        _this.setNewKey = setNewKey;
        return _this;
    }
    return SetHotkeyModal;
}(obsidian.Modal));
var LeaderPluginSettingsTab = /** @class */ (function (_super) {
    __extends(LeaderPluginSettingsTab, _super);
    function LeaderPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.lookupCurrentLeader = function (app) {
            var customKeys = app.hotkeyManager.customKeys;
            if ('leader-hotkeys-obsidian:leader' in customKeys) {
                return customKeys['leader-hotkeys-obsidian:leader']
                    .map(function (hotkey) {
                    return hotkey.modifiers.join('+') + '+' + hotkey.key;
                })
                    .join(' or ');
            }
            return 'Mod+b';
        };
        _this.generateCommandList = function (app) {
            var commands = [];
            for (var _i = 0, _a = Object.entries(app.commands.commands); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                commands.push({ name: value.name, id: value.id });
            }
            return commands;
        };
        _this.validateNewHotkey = function (key, meta, shift) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key === key &&
                    hotkey.meta === meta &&
                    hotkey.shift === shift) {
                    var hotkeyName = hotkeyToName(hotkey);
                    new obsidian.Notice("Leader hotkey '" + hotkeyName + "' is already in use");
                    return false;
                }
            }
            return true;
        };
        _this.deleteHotkeyFromSettings = function (existingHotkey) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Removing leader-hotkey " + hotkeyToName(existingHotkey) + " at index " + i);
                _this.plugin.settings.hotkeys.splice(i, 1);
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.updateHotkeyInSettings = function (existingHotkey, newKey, meta, shift) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Updating leader-hotkey " + hotkeyToName(existingHotkey) + " at index " + i + " to " + newKey);
                hotkey.key = newKey;
                hotkey.meta = meta;
                hotkey.shift = shift;
                break;
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.updateHotkeyCommandInSettings = function (existingHotkey, newCommand) {
            for (var i = 0; i < _this.plugin.settings.hotkeys.length; i++) {
                var hotkey = _this.plugin.settings.hotkeys[i];
                if (hotkey.key !== existingHotkey.key ||
                    hotkey.meta !== existingHotkey.meta ||
                    hotkey.shift !== existingHotkey.shift) {
                    continue;
                }
                console.debug("Updating leader-hotkey command " + hotkeyToName(existingHotkey) + " at index " + i + " to " + newCommand);
                hotkey.commandID = newCommand;
                break;
            }
            _this.plugin.saveData(_this.plugin.settings);
        };
        _this.storeNewHotkeyInSettings = function () {
            console.debug("Adding leader-hotkey command " + _this.tempNewHotkey + " to " + _this.tempNewHotkey.commandID);
            _this.plugin.settings.hotkeys.push(_this.tempNewHotkey);
            _this.plugin.saveData(_this.plugin.settings);
            _this.tempNewHotkey = newEmptyHotkey();
        };
        _this.plugin = plugin;
        return _this;
    }
    LeaderPluginSettingsTab.prototype.display = function () {
        var _this = this;
        this.commands = this.generateCommandList(this.app);
        var containerEl = this.containerEl;
        containerEl.empty();
        var currentLeader = this.lookupCurrentLeader(this.app);
        containerEl.createEl('h2', { text: 'Leader Hotkeys Plugin - Settings' });
        containerEl.createEl('p', {
            text: 'The leader-hotkeys listed below are used by pressing a custom ' +
                'hotkey (called the leader), then releasing and pressing the key ' +
                'defined for a particular command. The leader hotkey can be ' +
                'configured in the Hotkeys settings page, and is currently bound to ' +
                currentLeader +
                '.',
        });
        containerEl.createEl('h3', { text: 'Existing Hotkeys' });
        this.plugin.settings.hotkeys.forEach(function (configuredCommand) {
            var setting = new obsidian.Setting(containerEl)
                .addDropdown(function (dropdown) {
                _this.commands.forEach(function (command) {
                    dropdown.addOption(command.id, command.name);
                });
                dropdown
                    .setValue(configuredCommand.commandID)
                    .onChange(function (newCommand) {
                    _this.updateHotkeyCommandInSettings(configuredCommand, newCommand);
                });
                dropdown.selectEl.addClass('leader-hotkeys-command');
            })
                .addExtraButton(function (button) {
                button
                    .setIcon('cross')
                    .setTooltip('Delete shortcut')
                    .onClick(function () {
                    _this.deleteHotkeyFromSettings(configuredCommand);
                    _this.display();
                });
                button.extraSettingsEl.addClass('leader-hotkeys-delete');
            });
            setting.infoEl.remove();
            var settingControl = setting.settingEl.children[0];
            var prependText = document.createElement('span');
            prependText.addClass('leader-hotkeys-setting-prepend-text');
            prependText.setText("Use " + currentLeader + " followed by");
            settingControl.insertBefore(prependText, settingControl.children[0]);
            var keySetter = document.createElement('kbd');
            keySetter.addClass('setting-hotkey');
            keySetter.setText(hotkeyToName(configuredCommand));
            keySetter.addEventListener('click', function (e) {
                new SetHotkeyModal(_this.app, currentLeader, function () {
                    _this.display();
                }, function (newKey, meta, shift) {
                    var isValid = _this.validateNewHotkey(newKey, meta, shift);
                    if (isValid) {
                        _this.updateHotkeyInSettings(configuredCommand, newKey, meta, shift);
                    }
                }).open();
            });
            settingControl.insertBefore(keySetter, settingControl.children[1]);
            var appendText = document.createElement('span');
            appendText.addClass('leader-hotkeys-setting-append-text');
            appendText.setText('to');
            settingControl.insertBefore(appendText, settingControl.children[2]);
        });
        containerEl.createEl('h3', { text: 'Create New Hotkey' });
        var newHotkeySetting = new obsidian.Setting(containerEl).addDropdown(function (dropdown) {
            dropdown.addOption('invalid-placeholder', 'Select a Command');
            _this.commands.forEach(function (command) {
                dropdown.addOption(command.id, command.name);
            });
            dropdown.onChange(function (newCommand) {
                if (_this.tempNewHotkey === undefined) {
                    _this.tempNewHotkey = newEmptyHotkey();
                }
                _this.tempNewHotkey.commandID = newCommand;
            });
            dropdown.selectEl.addClass('leader-hotkeys-command');
        });
        newHotkeySetting.infoEl.remove();
        var settingControl = newHotkeySetting.settingEl.children[0];
        var prependText = document.createElement('span');
        prependText.addClass('leader-hotkeys-setting-prepend-text');
        prependText.setText("Use " + currentLeader + " followed by");
        settingControl.insertBefore(prependText, settingControl.children[0]);
        var keySetter = document.createElement('kbd');
        keySetter.addClass('setting-hotkey');
        keySetter.setText(hotkeyToName(this.tempNewHotkey));
        keySetter.addEventListener('click', function (e) {
            new SetHotkeyModal(_this.app, currentLeader, function () {
                _this.display();
            }, function (newKey, meta, shift) {
                if (_this.tempNewHotkey === undefined) {
                    _this.tempNewHotkey = newEmptyHotkey();
                }
                _this.tempNewHotkey.key = newKey;
                _this.tempNewHotkey.meta = meta;
                _this.tempNewHotkey.shift = shift;
            }).open();
        });
        settingControl.insertBefore(keySetter, settingControl.children[1]);
        var appendText = document.createElement('span');
        appendText.addClass('leader-hotkeys-setting-append-text');
        appendText.setText('to');
        settingControl.insertBefore(appendText, settingControl.children[2]);
        new obsidian.Setting(containerEl).addButton(function (button) {
            button.setButtonText('Save New Hotkey').onClick(function () {
                var isValid = _this.validateNewHotkey(_this.tempNewHotkey.key, _this.tempNewHotkey.meta, _this.tempNewHotkey.shift);
                if (isValid) {
                    _this.storeNewHotkeyInSettings();
                    _this.display();
                }
            });
        });
    };
    return LeaderPluginSettingsTab;
}(obsidian.PluginSettingTab));
var newEmptyHotkey = function () { return ({
    key: '',
    shift: false,
    meta: false,
    commandID: '',
}); };
var hotkeyToName = function (hotkey) {
    if (hotkey === undefined || hotkey.key === '') {
        return '?';
    }
    var keyToUse = (function () {
        switch (hotkey.key) {
            case 'ArrowRight':
                return '→';
            case 'ArrowLeft':
                return '←';
            case 'ArrowDown':
                return '↓';
            case 'ArrowUp':
                return '↑';
            default:
                return hotkey.key;
        }
    })();
    return ((hotkey.meta ? 'meta+' : '') + (hotkey.shift ? 'shift+' : '') + keyToUse);
};

module.exports = LeaderHotkeysPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7XG4gIEFwcCxcbiAgTW9kYWwsXG4gIE5vdGljZSxcbiAgUGx1Z2luLFxuICBQbHVnaW5TZXR0aW5nVGFiLFxuICBTZXR0aW5nLFxufSBmcm9tICdvYnNpZGlhbic7XG5cbmludGVyZmFjZSBDb21tYW5kIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jbGFzcyBIb3RrZXkge1xuICBwdWJsaWMga2V5OiBzdHJpbmc7XG4gIHB1YmxpYyBtZXRhOiBib29sZWFuO1xuICBwdWJsaWMgc2hpZnQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjb21tYW5kSUQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNldHRpbmdzIHtcbiAgaG90a2V5czogSG90a2V5W107XG59XG5cbmNvbnN0IGRlZmF1bHRIb3RrZXlzOiBIb3RrZXlbXSA9IFtcbiAgeyBrZXk6ICdoJywgbWV0YTogZmFsc2UsIHNoaWZ0OiBmYWxzZSwgY29tbWFuZElEOiAnZWRpdG9yOmZvY3VzLWxlZnQnIH0sXG4gIHsga2V5OiAnaicsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy1ib3R0b20nIH0sXG4gIHsga2V5OiAnaycsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy10b3AnIH0sXG4gIHsga2V5OiAnbCcsIG1ldGE6IGZhbHNlLCBzaGlmdDogZmFsc2UsIGNvbW1hbmRJRDogJ2VkaXRvcjpmb2N1cy1yaWdodCcgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlckhvdGtleXNQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzO1xuXG4gIHByaXZhdGUgbGVhZGVyUGVuZGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjbUVkaXRvcnM6IENvZGVNaXJyb3IuRWRpdG9yW107XG5cbiAgcHVibGljIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgaG90a2V5czogZGVmYXVsdEhvdGtleXMsXG4gICAgICAuLi4oYXdhaXQgdGhpcy5sb2FkRGF0YSgpKSxcbiAgICB9O1xuXG4gICAgdGhpcy5jbUVkaXRvcnMgPSBbXTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2NvZGVtaXJyb3InLCAoY206IENvZGVNaXJyb3IuRWRpdG9yKSA9PiB7XG4gICAgICAgIHRoaXMuY21FZGl0b3JzLnB1c2goY20pO1xuICAgICAgICBjbS5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbGVhZGVyJyxcbiAgICAgIG5hbWU6ICdMZWFkZXIga2V5JyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0xlYWRlciBwcmVzc2VkLi4uJyk7XG4gICAgICAgIHRoaXMubGVhZGVyUGVuZGluZyA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBMZWFkZXJQbHVnaW5TZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICB9XG5cbiAgcHVibGljIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuY21FZGl0b3JzLmZvckVhY2goKGNtKSA9PiB7XG4gICAgICBjbS5vZmYoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVLZXlEb3duID0gKFxuICAgIGNtOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBldmVudDogS2V5Ym9hcmRFdmVudCxcbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLmxlYWRlclBlbmRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnU2hpZnQnIHx8IGV2ZW50LmtleSA9PT0gJ01ldGEnKSB7XG4gICAgICAvLyBEb24ndCBjbGVhciBsZWFkZXJQZW5kaW5nIGZvciBhIG1ldGEga2V5XG4gICAgICBjb25zb2xlLmRlYnVnKCdza2lwcGluZyBhIG1ldGEga2V5Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbW1hbmRGb3VuZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXR0aW5ncy5ob3RrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBldmFsdWF0aW5nSG90a2V5ID0gdGhpcy5zZXR0aW5ncy5ob3RrZXlzW2ldO1xuICAgICAgaWYgKGV2YWx1YXRpbmdIb3RrZXkua2V5ID09PSBldmVudC5rZXkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8vIGNoZWNrIHRydWUgYW5kIGZhbHNlIHRvIGNhdGNoIGNvbW1hbmRzIHdpdGggbWV0YS9zaGlmdCB1bmRlZmluZWRcbiAgICAgICAgICAoKGV2ZW50Lm1ldGFLZXkgJiYgZXZhbHVhdGluZ0hvdGtleS5tZXRhKSB8fFxuICAgICAgICAgICAgKCFldmVudC5tZXRhS2V5ICYmICFldmFsdWF0aW5nSG90a2V5Lm1ldGEpKSAmJlxuICAgICAgICAgICgoZXZlbnQuc2hpZnRLZXkgJiYgZXZhbHVhdGluZ0hvdGtleS5zaGlmdCkgfHxcbiAgICAgICAgICAgICghZXZlbnQuc2hpZnRLZXkgJiYgIWV2YWx1YXRpbmdIb3RrZXkuc2hpZnQpKVxuICAgICAgICApIHtcbiAgICAgICAgICAodGhpcy5hcHAgYXMgYW55KS5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmhvdGtleXNbaV0uY29tbWFuZElELFxuICAgICAgICAgICk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb21tYW5kRm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjb21tYW5kRm91bmQpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbmNlbGxpbmcgbGVhZGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5sZWFkZXJQZW5kaW5nID0gZmFsc2U7XG4gIH07XG59XG5cbmNsYXNzIFNldEhvdGtleU1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRMZWFkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSByZWRyYXc6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2V0TmV3S2V5OiAoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgbWV0YTogYm9vbGVhbixcbiAgICBzaGlmdDogYm9vbGVhbixcbiAgKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIGN1cnJlbnRMZWFkZXI6IHN0cmluZyxcbiAgICByZWRyYXc6ICgpID0+IHZvaWQsXG4gICAgc2V0TmV3S2V5OiAobmV3S2V5OiBzdHJpbmcsIG1ldGE6IGJvb2xlYW4sIHNoaWZ0OiBib29sZWFuKSA9PiB2b2lkLFxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuY3VycmVudExlYWRlciA9IGN1cnJlbnRMZWFkZXI7XG4gICAgdGhpcy5yZWRyYXcgPSByZWRyYXc7XG4gICAgdGhpcy5zZXROZXdLZXkgPSBzZXROZXdLZXk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgaW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGludHJvVGV4dC5zZXRUZXh0KFxuICAgICAgYFByZXNzIGEga2V5IHRvIHVzZSBhcyB0aGUgaG90a2V5IGFmdGVyIHRoZSBsZWFkZXIgKCR7dGhpcy5jdXJyZW50TGVhZGVyfSkgaXMgcHJlc3NlZC4uLmAsXG4gICAgKTtcblxuICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChpbnRyb1RleHQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gIH07XG5cbiAgcHVibGljIG9uQ2xvc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgdGhpcy5yZWRyYXcoKTtcblxuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChbJ1NoaWZ0JywgJ01ldGEnLCAnRXNjYXBlJ10uY29udGFpbnMoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TmV3S2V5KGV2ZW50LmtleSwgZXZlbnQubWV0YUtleSwgZXZlbnQuc2hpZnRLZXkpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfTtcbn1cblxuY2xhc3MgTGVhZGVyUGx1Z2luU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwbHVnaW46IExlYWRlckhvdGtleXNQbHVnaW47XG4gIHByaXZhdGUgY29tbWFuZHM6IENvbW1hbmRbXTtcblxuICBwcml2YXRlIHRlbXBOZXdIb3RrZXk6IEhvdGtleTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBMZWFkZXJIb3RrZXlzUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgcHVibGljIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5jb21tYW5kcyA9IHRoaXMuZ2VuZXJhdGVDb21tYW5kTGlzdCh0aGlzLmFwcCk7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29uc3QgY3VycmVudExlYWRlciA9IHRoaXMubG9va3VwQ3VycmVudExlYWRlcih0aGlzLmFwcCk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdMZWFkZXIgSG90a2V5cyBQbHVnaW4gLSBTZXR0aW5ncycgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6XG4gICAgICAgICdUaGUgbGVhZGVyLWhvdGtleXMgbGlzdGVkIGJlbG93IGFyZSB1c2VkIGJ5IHByZXNzaW5nIGEgY3VzdG9tICcgK1xuICAgICAgICAnaG90a2V5IChjYWxsZWQgdGhlIGxlYWRlciksIHRoZW4gcmVsZWFzaW5nIGFuZCBwcmVzc2luZyB0aGUga2V5ICcgK1xuICAgICAgICAnZGVmaW5lZCBmb3IgYSBwYXJ0aWN1bGFyIGNvbW1hbmQuIFRoZSBsZWFkZXIgaG90a2V5IGNhbiBiZSAnICtcbiAgICAgICAgJ2NvbmZpZ3VyZWQgaW4gdGhlIEhvdGtleXMgc2V0dGluZ3MgcGFnZSwgYW5kIGlzIGN1cnJlbnRseSBib3VuZCB0byAnICtcbiAgICAgICAgY3VycmVudExlYWRlciArXG4gICAgICAgICcuJyxcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0V4aXN0aW5nIEhvdGtleXMnIH0pO1xuXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5mb3JFYWNoKChjb25maWd1cmVkQ29tbWFuZCkgPT4ge1xuICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oY29tbWFuZC5pZCwgY29tbWFuZC5uYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkcm9wZG93blxuICAgICAgICAgICAgLnNldFZhbHVlKGNvbmZpZ3VyZWRDb21tYW5kLmNvbW1hbmRJRClcbiAgICAgICAgICAgIC5vbkNoYW5nZSgobmV3Q29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhvdGtleUNvbW1hbmRJblNldHRpbmdzKGNvbmZpZ3VyZWRDb21tYW5kLCBuZXdDb21tYW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1jb21tYW5kJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRFeHRyYUJ1dHRvbigoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAuc2V0SWNvbignY3Jvc3MnKVxuICAgICAgICAgICAgLnNldFRvb2x0aXAoJ0RlbGV0ZSBzaG9ydGN1dCcpXG4gICAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGVsZXRlSG90a2V5RnJvbVNldHRpbmdzKGNvbmZpZ3VyZWRDb21tYW5kKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBidXR0b24uZXh0cmFTZXR0aW5nc0VsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1kZWxldGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNldHRpbmcuaW5mb0VsLnJlbW92ZSgpO1xuICAgICAgY29uc3Qgc2V0dGluZ0NvbnRyb2wgPSBzZXR0aW5nLnNldHRpbmdFbC5jaGlsZHJlblswXTtcblxuICAgICAgY29uc3QgcHJlcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBwcmVwZW5kVGV4dC5hZGRDbGFzcygnbGVhZGVyLWhvdGtleXMtc2V0dGluZy1wcmVwZW5kLXRleHQnKTtcbiAgICAgIHByZXBlbmRUZXh0LnNldFRleHQoYFVzZSAke2N1cnJlbnRMZWFkZXJ9IGZvbGxvd2VkIGJ5YCk7XG4gICAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUocHJlcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzBdKTtcblxuICAgICAgY29uc3Qga2V5U2V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgna2JkJyk7XG4gICAgICBrZXlTZXR0ZXIuYWRkQ2xhc3MoJ3NldHRpbmctaG90a2V5Jyk7XG4gICAgICBrZXlTZXR0ZXIuc2V0VGV4dChob3RrZXlUb05hbWUoY29uZmlndXJlZENvbW1hbmQpKTtcbiAgICAgIGtleVNldHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICBuZXcgU2V0SG90a2V5TW9kYWwoXG4gICAgICAgICAgdGhpcy5hcHAsXG4gICAgICAgICAgY3VycmVudExlYWRlcixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChuZXdLZXk6IHN0cmluZywgbWV0YTogYm9vbGVhbiwgc2hpZnQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlTmV3SG90a2V5KG5ld0tleSwgbWV0YSwgc2hpZnQpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVIb3RrZXlJblNldHRpbmdzKFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZWRDb21tYW5kLFxuICAgICAgICAgICAgICAgIG5ld0tleSxcbiAgICAgICAgICAgICAgICBtZXRhLFxuICAgICAgICAgICAgICAgIHNoaWZ0LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICkub3BlbigpO1xuICAgICAgfSk7XG4gICAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoa2V5U2V0dGVyLCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblsxXSk7XG5cbiAgICAgIGNvbnN0IGFwcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBhcHBlbmRUZXh0LmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1zZXR0aW5nLWFwcGVuZC10ZXh0Jyk7XG4gICAgICBhcHBlbmRUZXh0LnNldFRleHQoJ3RvJyk7XG4gICAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUoYXBwZW5kVGV4dCwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMl0pO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ3JlYXRlIE5ldyBIb3RrZXknIH0pO1xuXG4gICAgY29uc3QgbmV3SG90a2V5U2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKS5hZGREcm9wZG93bihcbiAgICAgIChkcm9wZG93bikgPT4ge1xuICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oJ2ludmFsaWQtcGxhY2Vob2xkZXInLCAnU2VsZWN0IGEgQ29tbWFuZCcpO1xuICAgICAgICB0aGlzLmNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICBkcm9wZG93bi5hZGRPcHRpb24oY29tbWFuZC5pZCwgY29tbWFuZC5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRyb3Bkb3duLm9uQ2hhbmdlKChuZXdDb21tYW5kKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudGVtcE5ld0hvdGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkgPSBuZXdFbXB0eUhvdGtleSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkuY29tbWFuZElEID0gbmV3Q29tbWFuZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGRyb3Bkb3duLnNlbGVjdEVsLmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1jb21tYW5kJyk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBuZXdIb3RrZXlTZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcbiAgICBjb25zdCBzZXR0aW5nQ29udHJvbCA9IG5ld0hvdGtleVNldHRpbmcuc2V0dGluZ0VsLmNoaWxkcmVuWzBdO1xuXG4gICAgY29uc3QgcHJlcGVuZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJlcGVuZFRleHQuYWRkQ2xhc3MoJ2xlYWRlci1ob3RrZXlzLXNldHRpbmctcHJlcGVuZC10ZXh0Jyk7XG4gICAgcHJlcGVuZFRleHQuc2V0VGV4dChgVXNlICR7Y3VycmVudExlYWRlcn0gZm9sbG93ZWQgYnlgKTtcbiAgICBzZXR0aW5nQ29udHJvbC5pbnNlcnRCZWZvcmUocHJlcGVuZFRleHQsIHNldHRpbmdDb250cm9sLmNoaWxkcmVuWzBdKTtcblxuICAgIGNvbnN0IGtleVNldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2tiZCcpO1xuICAgIGtleVNldHRlci5hZGRDbGFzcygnc2V0dGluZy1ob3RrZXknKTtcbiAgICBrZXlTZXR0ZXIuc2V0VGV4dChob3RrZXlUb05hbWUodGhpcy50ZW1wTmV3SG90a2V5KSk7XG4gICAga2V5U2V0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICBuZXcgU2V0SG90a2V5TW9kYWwoXG4gICAgICAgIHRoaXMuYXBwLFxuICAgICAgICBjdXJyZW50TGVhZGVyLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIChuZXdLZXk6IHN0cmluZywgbWV0YTogYm9vbGVhbiwgc2hpZnQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAodGhpcy50ZW1wTmV3SG90a2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcE5ld0hvdGtleSA9IG5ld0VtcHR5SG90a2V5KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudGVtcE5ld0hvdGtleS5rZXkgPSBuZXdLZXk7XG4gICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5Lm1ldGEgPSBtZXRhO1xuICAgICAgICAgIHRoaXMudGVtcE5ld0hvdGtleS5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB9LFxuICAgICAgKS5vcGVuKCk7XG4gICAgfSk7XG4gICAgc2V0dGluZ0NvbnRyb2wuaW5zZXJ0QmVmb3JlKGtleVNldHRlciwgc2V0dGluZ0NvbnRyb2wuY2hpbGRyZW5bMV0pO1xuXG4gICAgY29uc3QgYXBwZW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhcHBlbmRUZXh0LmFkZENsYXNzKCdsZWFkZXItaG90a2V5cy1zZXR0aW5nLWFwcGVuZC10ZXh0Jyk7XG4gICAgYXBwZW5kVGV4dC5zZXRUZXh0KCd0bycpO1xuICAgIHNldHRpbmdDb250cm9sLmluc2VydEJlZm9yZShhcHBlbmRUZXh0LCBzZXR0aW5nQ29udHJvbC5jaGlsZHJlblsyXSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbCkuYWRkQnV0dG9uKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5zZXRCdXR0b25UZXh0KCdTYXZlIE5ldyBIb3RrZXknKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGVOZXdIb3RrZXkoXG4gICAgICAgICAgdGhpcy50ZW1wTmV3SG90a2V5LmtleSxcbiAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkubWV0YSxcbiAgICAgICAgICB0aGlzLnRlbXBOZXdIb3RrZXkuc2hpZnQsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZU5ld0hvdGtleUluU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGxvb2t1cEN1cnJlbnRMZWFkZXIgPSAoYXBwOiBBcHApOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGN1c3RvbUtleXMgPSAoYXBwIGFzIGFueSkuaG90a2V5TWFuYWdlci5jdXN0b21LZXlzO1xuICAgIGlmICgnbGVhZGVyLWhvdGtleXMtb2JzaWRpYW46bGVhZGVyJyBpbiBjdXN0b21LZXlzKSB7XG4gICAgICByZXR1cm4gY3VzdG9tS2V5c1snbGVhZGVyLWhvdGtleXMtb2JzaWRpYW46bGVhZGVyJ11cbiAgICAgICAgLm1hcChcbiAgICAgICAgICAoaG90a2V5OiBhbnkpOiBzdHJpbmcgPT5cbiAgICAgICAgICAgIGhvdGtleS5tb2RpZmllcnMuam9pbignKycpICsgJysnICsgaG90a2V5LmtleSxcbiAgICAgICAgKVxuICAgICAgICAuam9pbignIG9yICcpO1xuICAgIH1cblxuICAgIHJldHVybiAnTW9kK2InO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2VuZXJhdGVDb21tYW5kTGlzdCA9IChhcHA6IEFwcCk6IENvbW1hbmRbXSA9PiB7XG4gICAgY29uc3QgY29tbWFuZHM6IENvbW1hbmRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKChhcHAgYXMgYW55KS5jb21tYW5kcy5jb21tYW5kcykpIHtcbiAgICAgIGNvbW1hbmRzLnB1c2goeyBuYW1lOiB2YWx1ZS5uYW1lLCBpZDogdmFsdWUuaWQgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kcztcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHZhbGlkYXRlTmV3SG90a2V5ID0gKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG1ldGE6IGJvb2xlYW4sXG4gICAgc2hpZnQ6IGJvb2xlYW4sXG4gICk6IGJvb2xlYW4gPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaG90a2V5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5c1tpXTtcbiAgICAgIGlmIChcbiAgICAgICAgaG90a2V5LmtleSA9PT0ga2V5ICYmXG4gICAgICAgIGhvdGtleS5tZXRhID09PSBtZXRhICYmXG4gICAgICAgIGhvdGtleS5zaGlmdCA9PT0gc2hpZnRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBob3RrZXlOYW1lID0gaG90a2V5VG9OYW1lKGhvdGtleSk7XG4gICAgICAgIG5ldyBOb3RpY2UoYExlYWRlciBob3RrZXkgJyR7aG90a2V5TmFtZX0nIGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlbGV0ZUhvdGtleUZyb21TZXR0aW5ncyA9IChcbiAgICBleGlzdGluZ0hvdGtleTogSG90a2V5LFxuICApOiB2b2lkID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGhvdGtleS5rZXkgIT09IGV4aXN0aW5nSG90a2V5LmtleSB8fFxuICAgICAgICBob3RrZXkubWV0YSAhPT0gZXhpc3RpbmdIb3RrZXkubWV0YSB8fFxuICAgICAgICBob3RrZXkuc2hpZnQgIT09IGV4aXN0aW5nSG90a2V5LnNoaWZ0XG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgIGBSZW1vdmluZyBsZWFkZXItaG90a2V5ICR7aG90a2V5VG9OYW1lKGV4aXN0aW5nSG90a2V5KX0gYXQgaW5kZXggJHtpfWAsXG4gICAgICApO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG90a2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHVwZGF0ZUhvdGtleUluU2V0dGluZ3MgPSAoXG4gICAgZXhpc3RpbmdIb3RrZXk6IEhvdGtleSxcbiAgICBuZXdLZXk6IHN0cmluZyxcbiAgICBtZXRhOiBib29sZWFuLFxuICAgIHNoaWZ0OiBib29sZWFuLFxuICApOiB2b2lkID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGhvdGtleS5rZXkgIT09IGV4aXN0aW5nSG90a2V5LmtleSB8fFxuICAgICAgICBob3RrZXkubWV0YSAhPT0gZXhpc3RpbmdIb3RrZXkubWV0YSB8fFxuICAgICAgICBob3RrZXkuc2hpZnQgIT09IGV4aXN0aW5nSG90a2V5LnNoaWZ0XG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgIGBVcGRhdGluZyBsZWFkZXItaG90a2V5ICR7aG90a2V5VG9OYW1lKFxuICAgICAgICAgIGV4aXN0aW5nSG90a2V5LFxuICAgICAgICApfSBhdCBpbmRleCAke2l9IHRvICR7bmV3S2V5fWAsXG4gICAgICApO1xuICAgICAgaG90a2V5LmtleSA9IG5ld0tleTtcbiAgICAgIGhvdGtleS5tZXRhID0gbWV0YTtcbiAgICAgIGhvdGtleS5zaGlmdCA9IHNoaWZ0O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKTtcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHVwZGF0ZUhvdGtleUNvbW1hbmRJblNldHRpbmdzID0gKFxuICAgIGV4aXN0aW5nSG90a2V5OiBIb3RrZXksXG4gICAgbmV3Q29tbWFuZDogc3RyaW5nLFxuICApOiB2b2lkID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGhvdGtleSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmhvdGtleXNbaV07XG4gICAgICBpZiAoXG4gICAgICAgIGhvdGtleS5rZXkgIT09IGV4aXN0aW5nSG90a2V5LmtleSB8fFxuICAgICAgICBob3RrZXkubWV0YSAhPT0gZXhpc3RpbmdIb3RrZXkubWV0YSB8fFxuICAgICAgICBob3RrZXkuc2hpZnQgIT09IGV4aXN0aW5nSG90a2V5LnNoaWZ0XG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgIGBVcGRhdGluZyBsZWFkZXItaG90a2V5IGNvbW1hbmQgJHtob3RrZXlUb05hbWUoXG4gICAgICAgICAgZXhpc3RpbmdIb3RrZXksXG4gICAgICAgICl9IGF0IGluZGV4ICR7aX0gdG8gJHtuZXdDb21tYW5kfWAsXG4gICAgICApO1xuICAgICAgaG90a2V5LmNvbW1hbmRJRCA9IG5ld0NvbW1hbmQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RvcmVOZXdIb3RrZXlJblNldHRpbmdzID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICBgQWRkaW5nIGxlYWRlci1ob3RrZXkgY29tbWFuZCAke3RoaXMudGVtcE5ld0hvdGtleX0gdG8gJHt0aGlzLnRlbXBOZXdIb3RrZXkuY29tbWFuZElEfWAsXG4gICAgKTtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob3RrZXlzLnB1c2godGhpcy50ZW1wTmV3SG90a2V5KTtcbiAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncyk7XG4gICAgdGhpcy50ZW1wTmV3SG90a2V5ID0gbmV3RW1wdHlIb3RrZXkoKTtcbiAgfTtcbn1cblxuY29uc3QgbmV3RW1wdHlIb3RrZXkgPSAoKTogSG90a2V5ID0+ICh7XG4gIGtleTogJycsXG4gIHNoaWZ0OiBmYWxzZSxcbiAgbWV0YTogZmFsc2UsXG4gIGNvbW1hbmRJRDogJycsXG59KTtcblxuY29uc3QgaG90a2V5VG9OYW1lID0gKGhvdGtleTogSG90a2V5KTogc3RyaW5nID0+IHtcbiAgaWYgKGhvdGtleSA9PT0gdW5kZWZpbmVkIHx8IGhvdGtleS5rZXkgPT09ICcnKSB7XG4gICAgcmV0dXJuICc/JztcbiAgfVxuICBjb25zdCBrZXlUb1VzZSA9ICgoKSA9PiB7XG4gICAgc3dpdGNoIChob3RrZXkua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgcmV0dXJuICfihpInO1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgcmV0dXJuICfihpAnO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgcmV0dXJuICfihpMnO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiAn4oaRJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBob3RrZXkua2V5O1xuICAgIH1cbiAgfSkoKTtcbiAgcmV0dXJuIChcbiAgICAoaG90a2V5Lm1ldGEgPyAnbWV0YSsnIDogJycpICsgKGhvdGtleS5zaGlmdCA/ICdzaGlmdCsnIDogJycpICsga2V5VG9Vc2VcbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUGx1Z2luIiwiTW9kYWwiLCJOb3RpY2UiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlB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QyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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
