new Vue({
    el: '#app',
    data() {
        return {
            see: false,
            search: '',
            editions: [{
                intellij: "Ctrl + Space",
                eclipse: "Ctrl + Space",
                description: "Basic code completion (the name of any class,method or variable)"
            }, {
                intellij: "Ctrl + Shift + Space",
                eclipse: "",
                description: "Smart code completion (filters the list of methods and variables)"
            }, {
                intellij: "Ctrl + Shift + Enter",
                eclipse: "",
                description: "Complete statement"
            }, {
                intellij: "Ctrl + Shift + Space",
                eclipse: "Ctrl + P",
                description: "Parameter info (within method call arguments)"
            }, {
                intellij: "Ctrl + Q",
                eclipse: "F2",
                description: "Quick documentation lookup"
            }, {
                intellij: "Shift + F1",
                eclipse: "",
                description: "External doc"
            }, {
                intellij: "Ctrl + 'hover' mouse",
                eclipse: "",
                description: "Brief info"
            }, {
                intellij: "Ctrl + F1",
                eclipse: "F2",
                description: "How descriptions of error or warning at caret"
            }, {
                intellij: "Alt + Insert",
                eclipse: "",
                description: "Generate code... (Getters, Setters, Constructors, hashCode/equals, toString)"
            }, {
                intellij: "Ctrl + O",
                eclipse: "",
                description: "Override methods"
            }, {
                intellij: "Ctrl + I",
                eclipse: "",
                description: "Implement methods"
            }, {
                intellij: "Ctrl + Alt + T",
                eclipse: "",
                description: "Surround with... (if..else, try..catch, for, synchronized, etc.)"
            }, {
                intellij: "Ctrl + NumPad /",
                eclipse: "Ctrl + Shift + C",
                description: "Comment/uncomment with line comment"
            }, {
                intellij: "Ctrl + Shift + NumPad /",
                eclipse: "Ctrl + Shift + /",
                description: "Comment/uncomment with block comment"
            }, {
                intellij: "Ctrl + Shift + W",
                eclipse: "Ctrl + Shift + Down",
                description: "Decrease current selection to previous state"
            },{
                intellij: "Alt + Q",
                eclipse: "",
                description: "Context info"
            }, {
                intellij: "Ctrl + Alt + L",
                eclipse: "Ctrl + Shift + F",
                description: "Reformat code"
            }, {
                intellij: "Ctrl + Alt + O",
                eclipse: "Ctrl + Shift + O",
                description: "	Optimize imports"
            }, {
                intellij: "Ctrl + Alt + I",
                eclipse: "",
                description: "Auto-indent line(s)"
            }, {
                intellij: "Tab / Shift + Tab",
                eclipse: "",
                description: "Indent/unindent selected lines"
            }, {
                intellij: "Ctrl + X / Shift + Delete",
                eclipse: "",
                description: "Cut current line or selected block to clipboard"
            }, {
                intellij: "Ctrl + C / Ctrl + Insert",
                eclipse: "",
                description: "Copy current line or selected block to clipboard"
            }, {
                intellij: "Ctrl + V / Shift + Insert",
                eclipse: "",
                description: "Paste from clipboard"
            }, {
                intellij: "Shift + Enter",
                eclipse: "Shift + Enter",
                description: "New líne"
            }, {
                intellij: "Ctrl + Delete",
                eclipse: "Ctrl + Delete",
                description: "Delete to word end"
            }, {
                intellij: "Ctrl + Backspace",
                eclipse: "",
                description: "Delete to word start"
            }, {
                intellij: "Ctrl + NumPad +/-",
                eclipse: "Ctrl + NumPad +/-",
                description: "Expand / collapse code block"
            }, {
                intellij: "Ctrl + Shift + NumPad +",
                eclipse: "Ctrl + NumPad *",
                description: "Expand all"
            }, {
                intellij: "Ctrl + Shift + NumPad -",
                eclipse: "Ctrl + Shift + NumPad /",
                description: "Collapse all"
            }, {
                intellij: "Ctrl + F4",
                eclipse: "Ctrl + W",
                description: "Select successively increasing code blocks"
            }],
            compilations: [{
                intellij: "Ctrl + F11",
                eclipse: "Shift + F10",
                description: "Run"
            }, {
                intellij: "Shift + F9",
                eclipse: "F11",
                description: "Debug"
            }],
            debugs: [{
                intellij: "F8",
                eclipse: "F6",
                description: "Move"
            }, {
                intellij: "F7",
                eclipse: "F5",
                description: "Step into"
            }, {
                intellij: "Shift + F7",
                eclipse: "",
                description: "Smart step into"
            }, {
                intellij: "Shift + F8",
                eclipse: "F7",
                description: "Step out"
            }, {
                intellij: "Ctrl + Shift + B",
                eclipse: "Ctrl + F8",
                description: "Toggle breakpoint"
            }, {
                intellij: "Alt + Shift + Q, B",
                eclipse: "Ctrl + Shift + F8",
                description: "View breakpoints"
            }],
            navigations: [{
                intellij: "Ctrl + N",
                eclipse: "Ctrl + Shift + T",
                description: "Go to class"
            }, {
                intellij: "Ctrl + Shift + N",
                eclipse: "Ctrl + Shift + R",
                description: "Go to file"
            }, {
                intellij: "Ctrl + Alt + Shift + N",
                eclipse: "",
                description: "Go to symbol"
            }, {
                intellij: "Ctrl + Shift + Tab",
                eclipse: "Alt + Right / Left",
                description: "Go to next / previous editor tab"
            }, {
                intellij: "Ctrl + G",
                eclipse: "Ctrl + L",
                description: "Go to line"
            }, {
                intellij: "Ctrl + Alt + Left / Right",
                eclipse: "Alt + Left / Right",
                description: "Navigate back / forward"
            }, {
                intellij: "Ctrl + Shift + Backspace",
                eclipse: "",
                description: "Navigate to last edit location"
            }, {
                intellij: "F3",
                eclipse: "Ctrl + B",
                description: "Make project (compile modifed and dependent)"
            }, {
                intellij: "Alt + Up / Down",
                eclipse: "Ctrl + Shift + Up / Down",
                description: "Move line up / down"
            }, {
                intellij: "Ctrl + F12",
                eclipse: "Ctrl + O",
                description: "File structure popup"
            }],
            refactorings: [{
                intellij: "Shift + F6",
                eclipse: "Alt + Shift + R",
                description: "Rename"
            }, {
                intellij: "Alt + Shift + M",
                eclipse: "Alt + Shift + M",
                description: "Extraer Method",
            }, {
                intellij: "Ctrl + Alt + V",
                eclipse: "Ctrl + 2, L",
                description: "Extract variable",
            }, {
                intellij: "Ctrl + Alt + F",
                eclipse: "Ctrl + 2, F",
                description: "Extract Field",
            }, {
                intellij: "Ctrl + Alt + C",
                eclipse: "",
                description: "Extract Constant"
            }, {
                intellij: "Ctrl + Alt + P",
                eclipse: "",
                description: "Extract Parameter "
            }],
        }
    },
    computed: {
        matchesEdition() {
            return this.search ?
                this.editions.filter(edition => {
                    for (let key in edition) {
                        if (edition[key].toLowerCase().includes(this.search.toLowerCase())) {
                            return true
                        }
                    }
                }) :
                this.editions

        },
        matchesCompilation() {
            return this.search ?
                this.compilations.filter(compilation => {
                    for (let key in compilation) {
                        if (compilation[key].toLowerCase().includes(this.search.toLowerCase())) {
                            return true
                        }
                    }
                }) :
                this.compilations

        },
        matchesDebug() {
            return this.search ?
                this.debugs.filter(debug => {
                    for (let key in debug) {
                        if (debug[key].toLowerCase().includes(this.search.toLowerCase())) {
                            return true
                        }
                    }
                }) :
                this.debugs

        },
        matchesNavigation() {
            return this.search ?
                this.navigations.filter(navigation => {
                    for (let key in navigation) {
                        if (navigation[key].toLowerCase().includes(this.search.toLowerCase())) {
                            return true
                        }
                    }
                }) :
                this.navigations

        },
        matchesRefactoring() {
            return this.search ?
                this.refactorings.filter(refactoring => {
                    for (let key in refactoring) {
                        if (refactoring[key].toLowerCase().includes(this.search.toLowerCase())) {
                            return true
                        }
                    }
                }) :
                this.refactorings

        },
    }

})