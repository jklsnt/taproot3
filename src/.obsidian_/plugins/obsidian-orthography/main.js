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
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

function getDefaultData() {
    return {
        displayRunner: true,
        language: 'en, ru, uk'
    };
}
var OrthographySettings = /** @class */ (function () {
    function OrthographySettings(plugin, emitter) {
        this.plugin = plugin;
        this.data = getDefaultData();
        this.emitter = emitter;
    }
    Object.defineProperty(OrthographySettings.prototype, "displayRunner", {
        get: function () {
            var data = this.data;
            return data.displayRunner;
        },
        set: function (value) {
            var data = this.data;
            data.displayRunner = value;
            this.emitter.trigger('onUpdateSettings', this.data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrthographySettings.prototype, "language", {
        get: function () {
            var data = this.data;
            return data.language;
        },
        set: function (value) {
            var data = this.data;
            data.language = value;
            this.emitter.trigger('onUpdateSettings', this.data);
        },
        enumerable: false,
        configurable: true
    });
    OrthographySettings.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var plugin, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        plugin = this.plugin;
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [getDefaultData()];
                        return [4 /*yield*/, plugin.loadData()];
                    case 1:
                        _a.data = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    OrthographySettings.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, plugin, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, plugin = _a.plugin, data = _a.data;
                        if (!(plugin && data)) return [3 /*break*/, 2];
                        return [4 /*yield*/, plugin.saveData(data)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return OrthographySettings;
}());

var OrthographySettingTab = /** @class */ (function (_super) {
    __extends(OrthographySettingTab, _super);
    function OrthographySettingTab(app, settings, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.settings = settings;
        return _this;
    }
    OrthographySettingTab.prototype.display = function () {
        var _a = this, containerEl = _a.containerEl, settings = _a.settings;
        containerEl.empty();
        OrthographySettingTab.setDisplayRunner(containerEl, settings);
        // OrthographySettingTab.setLanguage(containerEl, settings);
    };
    OrthographySettingTab.setDisplayRunner = function (containerEl, settings) {
        new obsidian.Setting(containerEl)
            .setName('Show button')
            .setDesc('Button for orthography checking')
            .addToggle(function (toggle) {
            return toggle.setValue(settings.displayRunner).onChange(function (value) {
                settings.displayRunner = value;
                settings.saveSettings();
            });
        });
    };
    OrthographySettingTab.setLanguage = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Language setting')
            .setDesc('Select language')
            .addDropdown(function (dropdown) {
            return dropdown
                .addOption('en', 'English')
                .addOption('ru', 'Russian')
                .addOption('uk', 'Ukraine')
                .addOption('en, ru, uk', 'All')
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            settings.language = value;
                            return [4 /*yield*/, settings.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return OrthographySettingTab;
}(obsidian.PluginSettingTab));

var API_URL = 'https://speller.yandex.net/services/spellservice.json/checkText';

var TOOLTIP_CSS_CLASS = 'obsidian-orthography-tooltip';
var TOOLTIP_VISIBLE_CSS_CLASS = 'obsidian-orthography-tooltip--visible';
var TOOLTIP_HINT_CSS_CLASS = 'obsidian-orthography-tooltip-hint';
var HIGHLIGHT_CSS_CLASS = 'obsidian-orthography-highlight';
var RUNNER_CSS_CLASS = 'obsidian-orthography-runner';
var RUNNER_ACTIVE_CSS_CLASS = 'obsidian-orthography-runner--active';
var RUNNER_CLEAR_CSS_CLASS = 'obsidian-orthography-runner--clear';
var RUNNER_HIDDEN_CSS_CLASS = 'obsidian-orthography-runner--hidden';

var OrthographyChecker = /** @class */ (function () {
    function OrthographyChecker(app, settings) {
        this.markers = [];
        this.app = app;
        this.settings = settings;
    }
    OrthographyChecker.prototype.check = function () {
        return this.validateText();
    };
    OrthographyChecker.prototype.clear = function () {
        this.clearHighlightWords();
    };
    OrthographyChecker.prototype.getHintsFromServer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var text = _this.getEditorText();
            var formData = new FormData();
            formData.append('text', text);
            _this.postData(API_URL, formData)
                .then(function (hintsData) {
                localStorage.setItem('obsidian-orthography', JSON.stringify(hintsData));
                resolve(hintsData);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    OrthographyChecker.prototype.validateText = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getHintsFromServer()
                .then(function (hints) {
                if (hints && hints.length) {
                    var regex = _this.createSearchQuery(hints);
                    _this.highlightWords(regex);
                }
                resolve(hints);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    OrthographyChecker.prototype.getEditorText = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        return editor.getValue();
    };
    OrthographyChecker.prototype.highlightWords = function (regex) {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        var searchQuery = new RegExp(regex);
        var cursor = editor.getSearchCursor(searchQuery);
        while (cursor.findNext()) {
            var from = cursor.from();
            var to = cursor.to();
            this.markers.push(editor.markText(from, to, {
                className: HIGHLIGHT_CSS_CLASS,
                attributes: {
                    'data-pos': from.line + '-' + from.ch
                }
            }));
        }
    };
    OrthographyChecker.prototype.updateDataPos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getHintsFromServer()
                .then(function (hints) {
                if (hints && hints.length) {
                    _this.markers.forEach(function (marker) { return marker.clear(); });
                    var regex = _this.createSearchQuery(hints);
                    var activeLeaf = _this.app.workspace.activeLeaf;
                    var editor = activeLeaf.view.sourceMode.cmEditor;
                    var searchQuery = new RegExp(regex);
                    var cursor = editor.getSearchCursor(searchQuery);
                    while (cursor.findNext()) {
                        var from = cursor.from();
                        var to = cursor.to();
                        _this.markers.push(editor.markText(from, to, {
                            attributes: {
                                'data-pos': from.line + '-' + from.ch
                            }
                        }));
                    }
                }
                resolve(hints);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    OrthographyChecker.prototype.clearHighlightWords = function () {
        var highlightWords = document.querySelectorAll('.' + HIGHLIGHT_CSS_CLASS);
        highlightWords.forEach(function (span) {
            span.removeAttribute('class');
        });
        this.markers.forEach(function (marker) { return marker.clear(); });
    };
    OrthographyChecker.prototype.createSearchQuery = function (list) {
        if (!list.length)
            return new RegExp(/^/gi);
        var words = list.map(function (item) {
            return item['word'];
        });
        var searchRequest = new RegExp(words.join('|'), 'gi');
        return searchRequest;
    };
    OrthographyChecker.prototype.postData = function (url, formData) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            body: formData
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OrthographyChecker;
}());

var self;
var OrthographyTooltip = /** @class */ (function () {
    function OrthographyTooltip(app, settings, emitter) {
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
    }
    OrthographyTooltip.prototype.init = function () {
        self = this;
        this.createTooltip();
        this.checker = new OrthographyChecker(this.app, this.settings);
        this.getEditor();
        this.app.workspace.on('active-leaf-change', self.activeLeafChange);
    };
    OrthographyTooltip.prototype.destroy = function () {
        document.removeEventListener('mouseover', self.toggleTooltip);
        this.app.workspace.off('active-leaf-change', self.activeLeafChange);
        this.tooltip.removeEventListener('click', self.replaceWord);
        var tooltips = document.querySelectorAll('.' + TOOLTIP_CSS_CLASS);
        if (tooltips)
            tooltips.forEach(function (tooltip) { return tooltip.remove(); });
    };
    OrthographyTooltip.prototype.createTooltip = function () {
        var tooltip = document.createElement('div');
        tooltip.classList.add(TOOLTIP_CSS_CLASS);
        document.body.appendChild(tooltip);
        document.addEventListener('mouseover', self.toggleTooltip);
        this.tooltip = document.querySelector('.' + TOOLTIP_CSS_CLASS);
        this.tooltip.addEventListener('click', self.replaceWord);
    };
    OrthographyTooltip.prototype.setDataToTooltip = function (element) {
        var data = JSON.parse(localStorage.getItem('obsidian-orthography'));
        var word = data.find(function (item) {
            return new RegExp('\\b' + (item.row + '-' + item.col) + '\\b').test(element.getAttribute('data-pos'))
                ? item
                : null;
        });
        if (word && Object.prototype.hasOwnProperty.call(word, 's')) {
            this.appendHintButton(word);
        }
    };
    OrthographyTooltip.prototype.toggleTooltip = function (event) {
        if (event.type === 'mouseover') {
            if (event.target &&
                event.target.className.includes(HIGHLIGHT_CSS_CLASS)) {
                self.setDataToTooltip(event.target);
                self.tooltip.classList.add(TOOLTIP_VISIBLE_CSS_CLASS);
                self.tooltip.style.left = self.getLeftPos(event);
                self.tooltip.style.top = self.getTopPos(event);
            }
        }
        if (!event.target.className.includes(TOOLTIP_CSS_CLASS) &&
            !event.target.className.includes(HIGHLIGHT_CSS_CLASS)) {
            self.tooltip.classList.remove(TOOLTIP_VISIBLE_CSS_CLASS);
            self.tooltip.innerHTML = '';
        }
    };
    OrthographyTooltip.prototype.getLeftPos = function (event) {
        var word = event.target.getBoundingClientRect();
        if (word.x + this.tooltip.clientWidth + 10 < document.body.clientWidth) {
            return word.x + 'px';
        }
        return document.body.clientWidth + 5 - this.tooltip.clientWidth + 'px';
    };
    OrthographyTooltip.prototype.getTopPos = function (event) {
        var word = event.target.getBoundingClientRect();
        if (word.y + this.tooltip.clientHeight + word.height <
            document.body.clientHeight) {
            return word.y + word.height + 'px';
        }
        return document.body.clientHeight + 10 - this.tooltip.clientHeight + 'px';
    };
    OrthographyTooltip.prototype.appendHintButton = function (hint) {
        var _this = this;
        if (hint && hint.s && hint.s.length) {
            this.tooltip.innerHTML = '';
            hint.s.forEach(function (h) {
                var button = document.createElement('button');
                button.classList.add(TOOLTIP_HINT_CSS_CLASS);
                button.setAttribute('data-pos', hint.row + '-' + hint.col);
                button.innerText = h;
                _this.tooltip.appendChild(button);
            });
        }
    };
    OrthographyTooltip.prototype.replaceWord = function (event) {
        if (event.target.className.includes(TOOLTIP_HINT_CSS_CLASS)) {
            var data = JSON.parse(localStorage.getItem('obsidian-orthography'));
            var word = data.find(function (pos) {
                return new RegExp('\\b' + (pos.row + '-' + pos.col) + '\\b').test(event.target.getAttribute('data-pos'))
                    ? pos
                    : null;
            });
            if (!word)
                return;
            self.editor.off('change', self.onUpdateWordPos);
            var activeLeaf = self.app.workspace.activeLeaf;
            var editor = activeLeaf.view.sourceMode.cmEditor;
            var doc = editor.getDoc();
            var from = {
                line: word.row,
                ch: word.col
            };
            var to = {
                line: word.row,
                ch: word.col + word.len
            };
            doc.replaceRange(event.target.innerText, from, to);
            // Updating data pos for highlight words
            self.checker.updateDataPos();
            self.editor.on('change', self.onUpdateWordPos);
        }
    };
    OrthographyTooltip.prototype.getEditor = function () {
        var _this = this;
        setTimeout(function () {
            var activeLeaf = _this.app.workspace.activeLeaf;
            _this.editor = activeLeaf.view.sourceMode.cmEditor;
            _this.editor.on('change', self.onUpdateWordPos);
        }, 1000);
    };
    OrthographyTooltip.prototype.activeLeafChange = function () {
        if (self.editor) {
            self.editor.off('change', self.onUpdateWordPos);
            self.onUpdateWordPos();
            self.getEditor();
        }
    };
    OrthographyTooltip.prototype.onUpdateWordPos = function () {
        self.emitter.trigger('onUpdateWordPos');
        self.checker.clear();
    };
    return OrthographyTooltip;
}());

var OrthographyRunner = /** @class */ (function () {
    function OrthographyRunner(app, settings, emitter) {
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
    }
    OrthographyRunner.prototype.init = function () {
        this.createRunner();
        this.orthography = new OrthographyChecker(this.app, this.settings);
        this.emitter.on('onUpdateWordPos', this.checkIfIsCompleted.bind(this));
    };
    OrthographyRunner.prototype.destroy = function () {
        this.emitter.off('onUpdateWordPos', this.checkIfIsCompleted.bind(this));
        this.runner.removeEventListener('click', this.onClickByBtn);
        this.orthography.clear();
        var runners = document.querySelectorAll('.' + RUNNER_CSS_CLASS);
        if (runners)
            runners.forEach(function (runner) { return runner.remove(); });
    };
    OrthographyRunner.prototype.run = function () {
        if (!this.isCompleted) {
            if (!this.isActive) {
                this.setButtonClear();
            }
        }
        else {
            if (!this.isActive) {
                this.returnButtonCheck();
            }
        }
    };
    OrthographyRunner.prototype.show = function () {
        var runner = document.querySelector('.' + RUNNER_CSS_CLASS);
        runner.classList.remove(RUNNER_HIDDEN_CSS_CLASS);
    };
    OrthographyRunner.prototype.hide = function () {
        var runner = document.querySelector('.' + RUNNER_CSS_CLASS);
        runner.classList.add(RUNNER_HIDDEN_CSS_CLASS);
    };
    OrthographyRunner.prototype.createRunner = function () {
        var runner = this.createButton('⌘');
        document.body.appendChild(runner);
    };
    OrthographyRunner.prototype.setButtonClear = function () {
        var _this = this;
        this.isActive = true;
        var runner = document.querySelector('.' + RUNNER_CSS_CLASS);
        if (!runner)
            return;
        var runnerIcon = document.querySelector('.' + RUNNER_CSS_CLASS + ' span');
        runner.classList.add(RUNNER_ACTIVE_CSS_CLASS);
        this.orthography.check().then(function (hints) {
            _this.isActive = false;
            runner.classList.remove(RUNNER_ACTIVE_CSS_CLASS);
            if (hints && hints.length) {
                _this.isCompleted = true;
                runnerIcon.textContent = '✕';
                runnerIcon.classList.add(RUNNER_CLEAR_CSS_CLASS);
            }
            else {
                new obsidian.Notice('Orthography errors not found!');
            }
        });
    };
    OrthographyRunner.prototype.returnButtonCheck = function () {
        var _this = this;
        this.isActive = true;
        this.isCompleted = false;
        var runner = document.querySelector('.' + RUNNER_CSS_CLASS);
        if (!runner)
            return;
        var runnerIcon = document.querySelector('.' + RUNNER_CSS_CLASS + ' span');
        runnerIcon.classList.remove(RUNNER_CLEAR_CSS_CLASS);
        runner.classList.add(RUNNER_ACTIVE_CSS_CLASS);
        // Delay for button animation
        setTimeout(function () {
            _this.isActive = false;
            runnerIcon.textContent = '⌘';
            runner.classList.remove(RUNNER_ACTIVE_CSS_CLASS);
            _this.orthography.clear();
        }, 250);
    };
    OrthographyRunner.prototype.createButton = function (text) {
        this.runner = document.createElement('button');
        var icon = document.createElement('span');
        icon.innerText = text;
        this.runner.classList.add(RUNNER_CSS_CLASS);
        this.runner.appendChild(icon);
        this.onClickByBtn = this.run.bind(this);
        this.runner.addEventListener('click', this.onClickByBtn);
        return this.runner;
    };
    OrthographyRunner.prototype.checkIfIsCompleted = function () {
        if (this.isCompleted) {
            this.returnButtonCheck();
        }
    };
    return OrthographyRunner;
}());

var OrthographyPlugin = /** @class */ (function (_super) {
    __extends(OrthographyPlugin, _super);
    function OrthographyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrthographyPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settings;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // ------ Init -------- //
                        this.emitter = new obsidian.Events();
                        settings = new OrthographySettings(this, this.emitter);
                        return [4 /*yield*/, settings.loadSettings()];
                    case 1:
                        _a.sent();
                        this.settings = settings;
                        this.addSettingTab(new OrthographySettingTab(this.app, settings, this));
                        this.initOrthographyTooltip();
                        if (settings.displayRunner)
                            this.initOrthographyRunner();
                        // ------- Events -------- //
                        this.emitter.on('onUpdateSettings', this.onUpdateSettings.bind(this));
                        this.addCommand({
                            id: 'check-orthography',
                            name: 'Check Orthography',
                            callback: function () { return _this.runner.run(); },
                            hotkeys: [
                                {
                                    modifiers: ['Mod', 'Shift'],
                                    key: 'l'
                                }
                            ]
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrthographyPlugin.prototype.onunload = function () {
        this.emitter.off('onUpdateSettings', this.onUpdateSettings.bind(this));
        this.runner.destroy();
        this.tooltip.destroy();
    };
    OrthographyPlugin.prototype.onUpdateSettings = function (data) {
        if (data.displayRunner) {
            if (!this.runner) {
                this.initOrthographyRunner();
            }
            else {
                this.runner.show();
            }
        }
        else {
            this.runner.hide();
        }
    };
    OrthographyPlugin.prototype.initOrthographyTooltip = function () {
        var _a = this, app = _a.app, settings = _a.settings, emitter = _a.emitter;
        this.tooltip = new OrthographyTooltip(app, settings, emitter);
        this.tooltip.init();
    };
    OrthographyPlugin.prototype.initOrthographyRunner = function () {
        var _a = this, app = _a.app, settings = _a.settings, emitter = _a.emitter;
        this.runner = new OrthographyRunner(app, settings, emitter);
        this.runner.init();
    };
    return OrthographyPlugin;
}(obsidian.Plugin));

module.exports = OrthographyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXR0aW5ncy9vcnRob2dyYXBoeVNldHRpbmdzLnRzIiwic3JjL3NldHRpbmdzL29ydGhvZ3JhcGh5U2V0dGluZ1RhYi50cyIsInNyYy9jb25maWcudHMiLCJzcmMvY29uc3RhbnRzLnRzIiwic3JjL29ydGhvZ3JhcGh5L29ydGhvZ3JhcGh5Q2hlY2tlci50cyIsInNyYy9vcnRob2dyYXBoeS9vcnRob2dyYXBoeVRvb2x0aXAudHMiLCJzcmMvb3J0aG9ncmFwaHkvb3J0aG9ncmFwaHlSdW5uZXIudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEV2ZW50cyB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB0eXBlIE9ydGhvZ3JhcGh5UGx1Z2luIGZyb20gJy4uL21haW4nO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3NEYXRhIHtcbiAgZGlzcGxheVJ1bm5lcjogYm9vbGVhbjtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdERhdGEoKTogU2V0dGluZ3NEYXRhIHtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5UnVubmVyOiB0cnVlLFxuICAgIGxhbmd1YWdlOiAnZW4sIHJ1LCB1aydcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5U2V0dGluZ3Mge1xuICBwcml2YXRlIGRhdGE6IFNldHRpbmdzRGF0YTtcbiAgcHJpdmF0ZSBlbWl0dGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IE9ydGhvZ3JhcGh5UGx1Z2luLCBlbWl0dGVyOiBFdmVudHMpIHtcbiAgICB0aGlzLmRhdGEgPSBnZXREZWZhdWx0RGF0YSgpO1xuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICBnZXQgZGlzcGxheVJ1bm5lcigpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGRhdGEuZGlzcGxheVJ1bm5lcjtcbiAgfVxuXG4gIHNldCBkaXNwbGF5UnVubmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgIGRhdGEuZGlzcGxheVJ1bm5lciA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdHRlci50cmlnZ2VyKCdvblVwZGF0ZVNldHRpbmdzJywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcztcbiAgICByZXR1cm4gZGF0YS5sYW5ndWFnZTtcbiAgfVxuXG4gIHNldCBsYW5ndWFnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xuICAgIGRhdGEubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXR0ZXIudHJpZ2dlcignb25VcGRhdGVTZXR0aW5ncycsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBwbHVnaW4gfSA9IHRoaXM7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbihnZXREZWZhdWx0RGF0YSgpLCBhd2FpdCBwbHVnaW4ubG9hZERhdGEoKSk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBwbHVnaW4sIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKHBsdWdpbiAmJiBkYXRhKSB7XG4gICAgICBhd2FpdCBwbHVnaW4uc2F2ZURhdGEoZGF0YSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBPcnRob2dyYXBoeVNldHRpbmdzIH0gZnJvbSAnc3JjL3NldHRpbmdzJztcbmltcG9ydCB0eXBlIE9ydGhvZ3JhcGh5UGx1Z2luIGZyb20gJy4uL21haW4nO1xuXG5leHBvcnQgY2xhc3MgT3J0aG9ncmFwaHlTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IE9ydGhvZ3JhcGh5U2V0dGluZ3MsXG4gICAgcGx1Z2luOiBPcnRob2dyYXBoeVBsdWdpblxuICApIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIHNldHRpbmdzIH0gPSB0aGlzO1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBPcnRob2dyYXBoeVNldHRpbmdUYWIuc2V0RGlzcGxheVJ1bm5lcihjb250YWluZXJFbCwgc2V0dGluZ3MpO1xuICAgIC8vIE9ydGhvZ3JhcGh5U2V0dGluZ1RhYi5zZXRMYW5ndWFnZShjb250YWluZXJFbCwgc2V0dGluZ3MpO1xuICB9XG5cbiAgc3RhdGljIHNldERpc3BsYXlSdW5uZXIoXG4gICAgY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LFxuICAgIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzXG4gICk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1Nob3cgYnV0dG9uJylcbiAgICAgIC5zZXREZXNjKCdCdXR0b24gZm9yIG9ydGhvZ3JhcGh5IGNoZWNraW5nJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLmRpc3BsYXlSdW5uZXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldHRpbmdzLmRpc3BsYXlSdW5uZXIgPSB2YWx1ZTtcbiAgICAgICAgICBzZXR0aW5ncy5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBzdGF0aWMgc2V0TGFuZ3VhZ2UoXG4gICAgY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LFxuICAgIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzXG4gICk6IHZvaWQge1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0xhbmd1YWdlIHNldHRpbmcnKVxuICAgICAgLnNldERlc2MoJ1NlbGVjdCBsYW5ndWFnZScpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PlxuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oJ2VuJywgJ0VuZ2xpc2gnKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ3J1JywgJ1J1c3NpYW4nKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ3VrJywgJ1VrcmFpbmUnKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ2VuLCBydSwgdWsnLCAnQWxsJylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzZXR0aW5ncy5sYW5ndWFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgc2V0dGluZ3Muc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID1cbiAgJ2h0dHBzOi8vc3BlbGxlci55YW5kZXgubmV0L3NlcnZpY2VzL3NwZWxsc2VydmljZS5qc29uL2NoZWNrVGV4dCc7XG4iLCJleHBvcnQgY29uc3QgVE9PTFRJUF9DU1NfQ0xBU1MgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktdG9vbHRpcCc7XG5leHBvcnQgY29uc3QgVE9PTFRJUF9WSVNJQkxFX0NTU19DTEFTUyA9XG4gICdvYnNpZGlhbi1vcnRob2dyYXBoeS10b29sdGlwLS12aXNpYmxlJztcbmV4cG9ydCBjb25zdCBUT09MVElQX0hJTlRfQ1NTX0NMQVNTID0gJ29ic2lkaWFuLW9ydGhvZ3JhcGh5LXRvb2x0aXAtaGludCc7XG5leHBvcnQgY29uc3QgSElHSExJR0hUX0NTU19DTEFTUyA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1oaWdobGlnaHQnO1xuZXhwb3J0IGNvbnN0IFJVTk5FUl9DU1NfQ0xBU1MgPSAnb2JzaWRpYW4tb3J0aG9ncmFwaHktcnVubmVyJztcbmV4cG9ydCBjb25zdCBSVU5ORVJfQUNUSVZFX0NTU19DTEFTUyA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1ydW5uZXItLWFjdGl2ZSc7XG5leHBvcnQgY29uc3QgUlVOTkVSX0NMRUFSX0NTU19DTEFTUyA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1ydW5uZXItLWNsZWFyJztcbmV4cG9ydCBjb25zdCBSVU5ORVJfSElEREVOX0NTU19DTEFTUyA9ICdvYnNpZGlhbi1vcnRob2dyYXBoeS1ydW5uZXItLWhpZGRlbic7XG4iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBPcnRob2dyYXBoeVNldHRpbmdzIH0gZnJvbSAnc3JjL3NldHRpbmdzJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgSElHSExJR0hUX0NTU19DTEFTUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBJT3J0aG9ncmFwaHlDaGVja2VyIHtcbiAgY2hlY2soKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5Q2hlY2tlciBpbXBsZW1lbnRzIElPcnRob2dyYXBoeUNoZWNrZXIge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzO1xuICBwcml2YXRlIG1hcmtlcnM6IGFueSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncykge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIHB1YmxpYyBjaGVjaygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlVGV4dCgpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJIaWdobGlnaHRXb3JkcygpO1xuICB9XG5cbiAgcHVibGljIGdldEhpbnRzRnJvbVNlcnZlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmdldEVkaXRvclRleHQoKTtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RleHQnLCB0ZXh0KTtcbiAgICAgIHRoaXMucG9zdERhdGEoQVBJX1VSTCwgZm9ybURhdGEpXG4gICAgICAgIC50aGVuKChoaW50c0RhdGEpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdvYnNpZGlhbi1vcnRob2dyYXBoeScsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShoaW50c0RhdGEpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXNvbHZlKGhpbnRzRGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVUZXh0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0SGludHNGcm9tU2VydmVyKClcbiAgICAgICAgLnRoZW4oKGhpbnRzKSA9PiB7XG4gICAgICAgICAgaWYgKGhpbnRzICYmIGhpbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcmVnZXggPSB0aGlzLmNyZWF0ZVNlYXJjaFF1ZXJ5KGhpbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0V29yZHMocmVnZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGhpbnRzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZGl0b3JUZXh0KCkge1xuICAgIGNvbnN0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgIGNvbnN0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuICAgIHJldHVybiBlZGl0b3IuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlnaGxpZ2h0V29yZHMocmVnZXg6IFJlZ0V4cCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUxlYWY6IGFueSA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgIGNvbnN0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gbmV3IFJlZ0V4cChyZWdleCk7XG4gICAgY29uc3QgY3Vyc29yID0gZWRpdG9yLmdldFNlYXJjaEN1cnNvcihzZWFyY2hRdWVyeSk7XG4gICAgd2hpbGUgKGN1cnNvci5maW5kTmV4dCgpKSB7XG4gICAgICBjb25zdCBmcm9tID0gY3Vyc29yLmZyb20oKTtcbiAgICAgIGNvbnN0IHRvID0gY3Vyc29yLnRvKCk7XG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChcbiAgICAgICAgZWRpdG9yLm1hcmtUZXh0KGZyb20sIHRvLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBISUdITElHSFRfQ1NTX0NMQVNTLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICdkYXRhLXBvcyc6IGZyb20ubGluZSArICctJyArIGZyb20uY2hcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVEYXRhUG9zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRIaW50c0Zyb21TZXJ2ZXIoKVxuICAgICAgICAudGhlbigoaGludHMpID0+IHtcbiAgICAgICAgICBpZiAoaGludHMgJiYgaGludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyOiBhbnkpID0+IG1hcmtlci5jbGVhcigpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdGhpcy5jcmVhdGVTZWFyY2hRdWVyeShoaW50cyk7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVMZWFmOiBhbnkgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBuZXcgUmVnRXhwKHJlZ2V4KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGVkaXRvci5nZXRTZWFyY2hDdXJzb3Ioc2VhcmNoUXVlcnkpO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnNvci5maW5kTmV4dCgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZyb20gPSBjdXJzb3IuZnJvbSgpO1xuICAgICAgICAgICAgICBjb25zdCB0byA9IGN1cnNvci50bygpO1xuICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChcbiAgICAgICAgICAgICAgICBlZGl0b3IubWFya1RleHQoZnJvbSwgdG8sIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcG9zJzogZnJvbS5saW5lICsgJy0nICsgZnJvbS5jaFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoaGludHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySGlnaGxpZ2h0V29yZHMoKSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0V29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIEhJR0hMSUdIVF9DU1NfQ0xBU1MpO1xuICAgIGhpZ2hsaWdodFdvcmRzLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgIHNwYW4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH0pO1xuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXI6IGFueSkgPT4gbWFya2VyLmNsZWFyKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTZWFyY2hRdWVyeShsaXN0OiBbXSkge1xuICAgIGlmICghbGlzdC5sZW5ndGgpIHJldHVybiBuZXcgUmVnRXhwKC9eL2dpKTtcblxuICAgIGNvbnN0IHdvcmRzID0gbGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW06IGFueSkge1xuICAgICAgcmV0dXJuIGl0ZW1bJ3dvcmQnXTtcbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2hSZXF1ZXN0ID0gbmV3IFJlZ0V4cCh3b3Jkcy5qb2luKCd8JyksICdnaScpO1xuICAgIHJldHVybiBzZWFyY2hSZXF1ZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZm9ybURhdGFcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IEFwcCwgRXZlbnRzIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlDaGVja2VyIH0gZnJvbSAnLi9vcnRob2dyYXBoeUNoZWNrZXInO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJ3NyYy9zZXR0aW5ncyc7XG5pbXBvcnQge1xuICBUT09MVElQX0NTU19DTEFTUyxcbiAgVE9PTFRJUF9WSVNJQkxFX0NTU19DTEFTUyxcbiAgVE9PTFRJUF9ISU5UX0NTU19DTEFTUyxcbiAgSElHSExJR0hUX0NTU19DTEFTU1xufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgSU9ydGhvZ3JhcGh5VG9vbHRpcCB7XG4gIGluaXQoKTogdm9pZDtcbn1cblxubGV0IHNlbGY6IGFueTtcblxuZXhwb3J0IGNsYXNzIE9ydGhvZ3JhcGh5VG9vbHRpcCBpbXBsZW1lbnRzIElPcnRob2dyYXBoeVRvb2x0aXAge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzO1xuICBwcml2YXRlIHRvb2x0aXA6IGFueTtcbiAgcHJpdmF0ZSBjaGVja2VyOiBPcnRob2dyYXBoeUNoZWNrZXI7XG4gIHByaXZhdGUgZW1pdHRlcjogYW55O1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncywgZW1pdHRlcjogRXZlbnRzKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICBzZWxmID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZVRvb2x0aXAoKTtcbiAgICB0aGlzLmNoZWNrZXIgPSBuZXcgT3J0aG9ncmFwaHlDaGVja2VyKHRoaXMuYXBwLCB0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLmdldEVkaXRvcigpO1xuICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbignYWN0aXZlLWxlYWYtY2hhbmdlJywgc2VsZi5hY3RpdmVMZWFmQ2hhbmdlKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNlbGYudG9nZ2xlVG9vbHRpcCk7XG4gICAgdGhpcy5hcHAud29ya3NwYWNlLm9mZignYWN0aXZlLWxlYWYtY2hhbmdlJywgc2VsZi5hY3RpdmVMZWFmQ2hhbmdlKTtcbiAgICB0aGlzLnRvb2x0aXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxmLnJlcGxhY2VXb3JkKTtcbiAgICBjb25zdCB0b29sdGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgVE9PTFRJUF9DU1NfQ0xBU1MpO1xuICAgIGlmICh0b29sdGlwcykgdG9vbHRpcHMuZm9yRWFjaCgodG9vbHRpcDogYW55KSA9PiB0b29sdGlwLnJlbW92ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVG9vbHRpcCgpOiB2b2lkIHtcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKFRPT0xUSVBfQ1NTX0NMQVNTKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNlbGYudG9nZ2xlVG9vbHRpcCk7XG4gICAgdGhpcy50b29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBUT09MVElQX0NTU19DTEFTUyk7XG4gICAgdGhpcy50b29sdGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZi5yZXBsYWNlV29yZCk7XG4gIH1cblxuICBwcml2YXRlIHNldERhdGFUb1Rvb2x0aXAoZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29ic2lkaWFuLW9ydGhvZ3JhcGh5JykpO1xuICAgIGNvbnN0IHdvcmQgPSBkYXRhLmZpbmQoKGl0ZW06IGFueSkgPT5cbiAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiJyArIChpdGVtLnJvdyArICctJyArIGl0ZW0uY29sKSArICdcXFxcYicpLnRlc3QoXG4gICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpXG4gICAgICApXG4gICAgICAgID8gaXRlbVxuICAgICAgICA6IG51bGxcbiAgICApO1xuICAgIGlmICh3b3JkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3b3JkLCAncycpKSB7XG4gICAgICB0aGlzLmFwcGVuZEhpbnRCdXR0b24od29yZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVUb29sdGlwKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoSElHSExJR0hUX0NTU19DTEFTUylcbiAgICAgICkge1xuICAgICAgICBzZWxmLnNldERhdGFUb1Rvb2x0aXAoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgc2VsZi50b29sdGlwLmNsYXNzTGlzdC5hZGQoVE9PTFRJUF9WSVNJQkxFX0NTU19DTEFTUyk7XG4gICAgICAgIHNlbGYudG9vbHRpcC5zdHlsZS5sZWZ0ID0gc2VsZi5nZXRMZWZ0UG9zKGV2ZW50KTtcbiAgICAgICAgc2VsZi50b29sdGlwLnN0eWxlLnRvcCA9IHNlbGYuZ2V0VG9wUG9zKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoVE9PTFRJUF9DU1NfQ0xBU1MpICYmXG4gICAgICAhZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhISUdITElHSFRfQ1NTX0NMQVNTKVxuICAgICkge1xuICAgICAgc2VsZi50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoVE9PTFRJUF9WSVNJQkxFX0NTU19DTEFTUyk7XG4gICAgICBzZWxmLnRvb2x0aXAuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMZWZ0UG9zKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB3b3JkID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh3b3JkLnggKyB0aGlzLnRvb2x0aXAuY2xpZW50V2lkdGggKyAxMCA8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcbiAgICAgIHJldHVybiB3b3JkLnggKyAncHgnO1xuICAgIH1cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCArIDUgLSB0aGlzLnRvb2x0aXAuY2xpZW50V2lkdGggKyAncHgnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUb3BQb3MoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHdvcmQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKFxuICAgICAgd29yZC55ICsgdGhpcy50b29sdGlwLmNsaWVudEhlaWdodCArIHdvcmQuaGVpZ2h0IDxcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgKSB7XG4gICAgICByZXR1cm4gd29yZC55ICsgd29yZC5oZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKyAxMCAtIHRoaXMudG9vbHRpcC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRIaW50QnV0dG9uKGhpbnQ6IGFueSkge1xuICAgIGlmIChoaW50ICYmIGhpbnQucyAmJiBoaW50LnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvb2x0aXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICBoaW50LnMuZm9yRWFjaCgoaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChUT09MVElQX0hJTlRfQ1NTX0NMQVNTKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3MnLCBoaW50LnJvdyArICctJyArIGhpbnQuY29sKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGg7XG4gICAgICAgIHRoaXMudG9vbHRpcC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlV29yZChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoVE9PTFRJUF9ISU5UX0NTU19DTEFTUykpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYnNpZGlhbi1vcnRob2dyYXBoeScpKTtcbiAgICAgIGNvbnN0IHdvcmQgPSBkYXRhLmZpbmQoKHBvczogYW55KSA9PlxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYicgKyAocG9zLnJvdyArICctJyArIHBvcy5jb2wpICsgJ1xcXFxiJykudGVzdChcbiAgICAgICAgICBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcycpXG4gICAgICAgIClcbiAgICAgICAgICA/IHBvc1xuICAgICAgICAgIDogbnVsbFxuICAgICAgKTtcblxuICAgICAgaWYgKCF3b3JkKSByZXR1cm47XG5cbiAgICAgIHNlbGYuZWRpdG9yLm9mZignY2hhbmdlJywgc2VsZi5vblVwZGF0ZVdvcmRQb3MpO1xuXG4gICAgICBjb25zdCBhY3RpdmVMZWFmOiBhbnkgPSBzZWxmLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICAgIGNvbnN0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuXG4gICAgICBjb25zdCBkb2MgPSBlZGl0b3IuZ2V0RG9jKCk7XG5cbiAgICAgIGNvbnN0IGZyb20gPSB7XG4gICAgICAgIGxpbmU6IHdvcmQucm93LFxuICAgICAgICBjaDogd29yZC5jb2xcbiAgICAgIH07XG4gICAgICBjb25zdCB0byA9IHtcbiAgICAgICAgbGluZTogd29yZC5yb3csXG4gICAgICAgIGNoOiB3b3JkLmNvbCArIHdvcmQubGVuXG4gICAgICB9O1xuXG4gICAgICBkb2MucmVwbGFjZVJhbmdlKGV2ZW50LnRhcmdldC5pbm5lclRleHQsIGZyb20sIHRvKTtcblxuICAgICAgLy8gVXBkYXRpbmcgZGF0YSBwb3MgZm9yIGhpZ2hsaWdodCB3b3Jkc1xuICAgICAgc2VsZi5jaGVja2VyLnVwZGF0ZURhdGFQb3MoKTtcbiAgICAgIHNlbGYuZWRpdG9yLm9uKCdjaGFuZ2UnLCBzZWxmLm9uVXBkYXRlV29yZFBvcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZGl0b3IoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVMZWFmOiBhbnkgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcbiAgICAgIHRoaXMuZWRpdG9yID0gYWN0aXZlTGVhZi52aWV3LnNvdXJjZU1vZGUuY21FZGl0b3I7XG4gICAgICB0aGlzLmVkaXRvci5vbignY2hhbmdlJywgc2VsZi5vblVwZGF0ZVdvcmRQb3MpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmVMZWFmQ2hhbmdlKCkge1xuICAgIGlmIChzZWxmLmVkaXRvcikge1xuICAgICAgc2VsZi5lZGl0b3Iub2ZmKCdjaGFuZ2UnLCBzZWxmLm9uVXBkYXRlV29yZFBvcyk7XG4gICAgICBzZWxmLm9uVXBkYXRlV29yZFBvcygpO1xuICAgICAgc2VsZi5nZXRFZGl0b3IoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uVXBkYXRlV29yZFBvcygpIHtcbiAgICBzZWxmLmVtaXR0ZXIudHJpZ2dlcignb25VcGRhdGVXb3JkUG9zJyk7XG4gICAgc2VsZi5jaGVja2VyLmNsZWFyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5vdGljZSwgRXZlbnRzIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncyB9IGZyb20gJ3NyYy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBPcnRob2dyYXBoeUNoZWNrZXIgfSBmcm9tICcuL29ydGhvZ3JhcGh5Q2hlY2tlcic7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7XG4gIFJVTk5FUl9DU1NfQ0xBU1MsXG4gIFJVTk5FUl9BQ1RJVkVfQ1NTX0NMQVNTLFxuICBSVU5ORVJfQ0xFQVJfQ1NTX0NMQVNTLFxuICBSVU5ORVJfSElEREVOX0NTU19DTEFTU1xufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgSU9ydGhvZ3JhcGh5UnVubmVyIHtcbiAgaW5pdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgT3J0aG9ncmFwaHlSdW5uZXIgaW1wbGVtZW50cyBJT3J0aG9ncmFwaHlSdW5uZXIge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHNldHRpbmdzOiBPcnRob2dyYXBoeVNldHRpbmdzO1xuICBwcml2YXRlIGlzQWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIGlzQ29tcGxldGVkOiBib29sZWFuO1xuICBwcml2YXRlIG9ydGhvZ3JhcGh5OiBPcnRob2dyYXBoeUNoZWNrZXI7XG4gIHByaXZhdGUgZW1pdHRlcjogYW55O1xuICBwcml2YXRlIG9uQ2xpY2tCeUJ0bjogYW55O1xuICBwcml2YXRlIHJ1bm5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncywgZW1pdHRlcjogRXZlbnRzKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVJ1bm5lcigpO1xuICAgIHRoaXMub3J0aG9ncmFwaHkgPSBuZXcgT3J0aG9ncmFwaHlDaGVja2VyKHRoaXMuYXBwLCB0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLmVtaXR0ZXIub24oJ29uVXBkYXRlV29yZFBvcycsIHRoaXMuY2hlY2tJZklzQ29tcGxldGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZignb25VcGRhdGVXb3JkUG9zJywgdGhpcy5jaGVja0lmSXNDb21wbGV0ZWQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ydW5uZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tCeUJ0bik7XG4gICAgdGhpcy5vcnRob2dyYXBoeS5jbGVhcigpO1xuICAgIGNvbnN0IHJ1bm5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIFJVTk5FUl9DU1NfQ0xBU1MpO1xuICAgIGlmIChydW5uZXJzKSBydW5uZXJzLmZvckVhY2goKHJ1bm5lcjogYW55KSA9PiBydW5uZXIucmVtb3ZlKCkpO1xuICB9XG5cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDb21wbGV0ZWQpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldEJ1dHRvbkNsZWFyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLnJldHVybkJ1dHRvbkNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgY29uc3QgcnVubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBSVU5ORVJfQ1NTX0NMQVNTKTtcbiAgICBydW5uZXIuY2xhc3NMaXN0LnJlbW92ZShSVU5ORVJfSElEREVOX0NTU19DTEFTUyk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICBjb25zdCBydW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIFJVTk5FUl9DU1NfQ0xBU1MpO1xuICAgIHJ1bm5lci5jbGFzc0xpc3QuYWRkKFJVTk5FUl9ISURERU5fQ1NTX0NMQVNTKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUnVubmVyKCkge1xuICAgIGNvbnN0IHJ1bm5lciA9IHRoaXMuY3JlYXRlQnV0dG9uKCfijJgnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJ1bm5lcik7XG4gIH1cblxuICBwcml2YXRlIHNldEJ1dHRvbkNsZWFyKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIGNvbnN0IHJ1bm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgUlVOTkVSX0NTU19DTEFTUyk7XG5cbiAgICBpZiAoIXJ1bm5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgcnVubmVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgUlVOTkVSX0NTU19DTEFTUyArICcgc3BhbicpO1xuICAgIHJ1bm5lci5jbGFzc0xpc3QuYWRkKFJVTk5FUl9BQ1RJVkVfQ1NTX0NMQVNTKTtcblxuICAgIHRoaXMub3J0aG9ncmFwaHkuY2hlY2soKS50aGVuKChoaW50czogW10pID0+IHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHJ1bm5lci5jbGFzc0xpc3QucmVtb3ZlKFJVTk5FUl9BQ1RJVkVfQ1NTX0NMQVNTKTtcbiAgICAgIGlmIChoaW50cyAmJiBoaW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHJ1bm5lckljb24udGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICAgICAgcnVubmVySWNvbi5jbGFzc0xpc3QuYWRkKFJVTk5FUl9DTEVBUl9DU1NfQ0xBU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3IE5vdGljZSgnT3J0aG9ncmFwaHkgZXJyb3JzIG5vdCBmb3VuZCEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0dXJuQnV0dG9uQ2hlY2soKSB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBSVU5ORVJfQ1NTX0NMQVNTKTtcblxuICAgIGlmICghcnVubmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBydW5uZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBSVU5ORVJfQ1NTX0NMQVNTICsgJyBzcGFuJyk7XG4gICAgcnVubmVySWNvbi5jbGFzc0xpc3QucmVtb3ZlKFJVTk5FUl9DTEVBUl9DU1NfQ0xBU1MpO1xuICAgIHJ1bm5lci5jbGFzc0xpc3QuYWRkKFJVTk5FUl9BQ1RJVkVfQ1NTX0NMQVNTKTtcblxuICAgIC8vIERlbGF5IGZvciBidXR0b24gYW5pbWF0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBydW5uZXJJY29uLnRleHRDb250ZW50ID0gJ+KMmCc7XG4gICAgICBydW5uZXIuY2xhc3NMaXN0LnJlbW92ZShSVU5ORVJfQUNUSVZFX0NTU19DTEFTUyk7XG4gICAgICB0aGlzLm9ydGhvZ3JhcGh5LmNsZWFyKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQnV0dG9uKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMucnVubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpY29uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgdGhpcy5ydW5uZXIuY2xhc3NMaXN0LmFkZChSVU5ORVJfQ1NTX0NMQVNTKTtcbiAgICB0aGlzLnJ1bm5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB0aGlzLm9uQ2xpY2tCeUJ0biA9IHRoaXMucnVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ydW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tCeUJ0bik7XG4gICAgcmV0dXJuIHRoaXMucnVubmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lmSXNDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMucmV0dXJuQnV0dG9uQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBsdWdpbiwgRXZlbnRzIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgT3J0aG9ncmFwaHlTZXR0aW5ncywgT3J0aG9ncmFwaHlTZXR0aW5nVGFiIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBPcnRob2dyYXBoeVJ1bm5lciwgT3J0aG9ncmFwaHlUb29sdGlwIH0gZnJvbSAnLi9vcnRob2dyYXBoeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ydGhvZ3JhcGh5UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT3J0aG9ncmFwaHlTZXR0aW5ncztcbiAgcHJpdmF0ZSBydW5uZXI6IGFueTtcbiAgcHJpdmF0ZSB0b29sdGlwOiBhbnk7XG4gIHByaXZhdGUgZW1pdHRlcjogYW55O1xuXG4gIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAtLS0tLS0gSW5pdCAtLS0tLS0tLSAvL1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudHMoKTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IE9ydGhvZ3JhcGh5U2V0dGluZ3ModGhpcywgdGhpcy5lbWl0dGVyKTtcbiAgICBhd2FpdCBzZXR0aW5ncy5sb2FkU2V0dGluZ3MoKTtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IE9ydGhvZ3JhcGh5U2V0dGluZ1RhYih0aGlzLmFwcCwgc2V0dGluZ3MsIHRoaXMpKTtcblxuICAgIHRoaXMuaW5pdE9ydGhvZ3JhcGh5VG9vbHRpcCgpO1xuXG4gICAgaWYgKHNldHRpbmdzLmRpc3BsYXlSdW5uZXIpIHRoaXMuaW5pdE9ydGhvZ3JhcGh5UnVubmVyKCk7XG5cbiAgICAvLyAtLS0tLS0tIEV2ZW50cyAtLS0tLS0tLSAvL1xuICAgIHRoaXMuZW1pdHRlci5vbignb25VcGRhdGVTZXR0aW5ncycsIHRoaXMub25VcGRhdGVTZXR0aW5ncy5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogJ2NoZWNrLW9ydGhvZ3JhcGh5JyxcbiAgICAgIG5hbWU6ICdDaGVjayBPcnRob2dyYXBoeScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5ydW5uZXIucnVuKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFsnTW9kJywgJ1NoaWZ0J10sXG4gICAgICAgICAga2V5OiAnbCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICB9XG5cbiAgb251bmxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZignb25VcGRhdGVTZXR0aW5ncycsIHRoaXMub25VcGRhdGVTZXR0aW5ncy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJ1bm5lci5kZXN0cm95KCk7XG4gICAgdGhpcy50b29sdGlwLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHByaXZhdGUgb25VcGRhdGVTZXR0aW5ncyhkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YS5kaXNwbGF5UnVubmVyKSB7XG4gICAgICBpZiAoIXRoaXMucnVubmVyKSB7XG4gICAgICAgIHRoaXMuaW5pdE9ydGhvZ3JhcGh5UnVubmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJ1bm5lci5zaG93KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVubmVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRPcnRob2dyYXBoeVRvb2x0aXAoKTogdm9pZCB7XG4gICAgY29uc3QgeyBhcHAsIHNldHRpbmdzLCBlbWl0dGVyIH0gPSB0aGlzO1xuICAgIHRoaXMudG9vbHRpcCA9IG5ldyBPcnRob2dyYXBoeVRvb2x0aXAoYXBwLCBzZXR0aW5ncywgZW1pdHRlcik7XG4gICAgdGhpcy50b29sdGlwLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9ydGhvZ3JhcGh5UnVubmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYXBwLCBzZXR0aW5ncywgZW1pdHRlciB9ID0gdGhpcztcbiAgICB0aGlzLnJ1bm5lciA9IG5ldyBPcnRob2dyYXBoeVJ1bm5lcihhcHAsIHNldHRpbmdzLCBlbWl0dGVyKTtcbiAgICB0aGlzLnJ1bm5lci5pbml0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIk5vdGljZSIsIkV2ZW50cyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxD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
