Ext.data.JsonP.Spread_grid_plugin_Copyable({"extends":"Ext.AbstractComponent","enum":null,"html_meta":{},"meta":{},"linenr":1,"inheritable":null,"aliases":{},"singleton":false,"subclasses":[],"component":false,"mixins":["Spread.util.Clipping"],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"Copyable.html#Spread-grid-plugin-Copyable","filename":"Copyable.js"}],"mixedInto":[],"superclasses":["Ext.AbstractComponent"],"members":{"cfg":[],"property":[{"meta":{},"owner":"Spread.util.Clipping","name":"el","id":"property-el","tagname":"property"},{"meta":{},"owner":"Spread.util.Clipping","name":"refocusDelay","id":"property-refocusDelay","tagname":"property"},{"meta":{},"owner":"Spread.grid.plugin.Copyable","name":"view","id":"property-view","tagname":"property"}],"css_var":[],"method":[{"meta":{"protected":true},"owner":"Spread.grid.plugin.Copyable","name":"copyToClipboard","id":"method-copyToClipboard","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"createClipboard","id":"method-createClipboard","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.grid.plugin.Copyable","name":"detectCopyKeyStroke","id":"method-detectCopyKeyStroke","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"hasClipboard","id":"method-hasClipboard","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.grid.plugin.Copyable","name":"init","id":"method-init","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"initClipping","id":"method-initClipping","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.grid.plugin.Copyable","name":"initKeyNav","id":"method-initKeyNav","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"prepareForClipboardCopy","id":"method-prepareForClipboardCopy","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"prepareForClipboardPaste","id":"method-prepareForClipboardPaste","tagname":"method"},{"meta":{"protected":true},"owner":"Spread.util.Clipping","name":"refocusView","id":"method-refocusView","tagname":"method"}],"event":[{"meta":{},"owner":"Spread.grid.plugin.Copyable","name":"beforecopy","id":"event-beforecopy","tagname":"event"},{"meta":{},"owner":"Spread.grid.plugin.Copyable","name":"copy","id":"event-copy","tagname":"event"}],"css_mixin":[]},"alternateClassNames":[],"override":null,"code_type":"ext_define","private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractComponent<div class='subclass '><strong>Spread.grid.plugin.Copyable</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='docClass'>Spread.util.Clipping</a></div><h4>Files</h4><div class='dependency'><a href='source/Copyable.html#Spread-grid-plugin-Copyable' target='_blank'>Copyable.js</a></div></pre><div class='doc-contents'><p>Allows copying data from a focused cell or a selected cell range by Ctrl/Cmd + C keystroke and\nto be pasted in a native spreadsheet application like e.g. OpenOffice.org Calc.</p>\n\n<p>TODO: Context menu copy</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-el' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-property-el' class='name not-expandable'>el</a><span> : Ext.dom.Element</span></div><div class='description'><div class='short'><p>Internal clipboard textarea instance/reference</p>\n</div><div class='long'><p>Internal clipboard textarea instance/reference</p>\n</div></div></div><div id='property-refocusDelay' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-property-refocusDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-property-refocusDelay' class='name expandable'>refocusDelay</a><span> : Number</span></div><div class='description'><div class='short'>Re-focus delay in milliseconds from textarea of clipboard back to grid's view ...</div><div class='long'><p>Re-focus delay in milliseconds from textarea of clipboard back to grid's view</p>\n<p>Defaults to: <code>150</code></p></div></div></div><div id='property-view' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-property-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-property-view' class='name not-expandable'>view</a><span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a></span></div><div class='description'><div class='short'><p>View instance reference</p>\n</div><div class='long'><p>View instance reference</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-copyToClipboard' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-method-copyToClipboard' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-method-copyToClipboard' class='name expandable'>copyToClipboard</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Copies selected range data to the native system clipboard ...</div><div class='long'><p>Copies selected range data to the native system clipboard</p>\n</div></div></div><div id='method-createClipboard' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-createClipboard' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-createClipboard' class='name expandable'>createClipboard</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Creates a shadow clipboard element ...</div><div class='long'><p>Creates a shadow clipboard element</p>\n</div></div></div><div id='method-detectCopyKeyStroke' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-method-detectCopyKeyStroke' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-method-detectCopyKeyStroke' class='name expandable'>detectCopyKeyStroke</a>( <span class='pre'>evt</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Detects copy key-strokes (ctrl+c, cmd+c) and calls the\nclipping mixin to hook the native event loop for clipboard\nint...</div><div class='long'><p>Detects copy key-strokes (ctrl+c, cmd+c) and calls the\nclipping mixin to hook the native event loop for clipboard\ninteraction. Also calls the TSVTransformer to transform\nthe data of an already selected range into TSV data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Ext.EventObject<div class='sub-desc'><p>Key event</p>\n</div></li></ul></div></div></div><div id='method-hasClipboard' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-hasClipboard' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-hasClipboard' class='name expandable'>hasClipboard</a>( <span class='pre'></span> ) : Boolean|Ext.dom.Element<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Checks if a clipboard element is available ...</div><div class='long'><p>Checks if a clipboard element is available</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean|Ext.dom.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-method-init' class='name expandable'>init</a>( <span class='pre'>view</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Registers the copy keystroke event handling mechanism. ...</div><div class='long'><p>Registers the copy keystroke event handling mechanism.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>View instance</p>\n</div></li></ul></div></div></div><div id='method-initClipping' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-initClipping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-initClipping' class='name expandable'>initClipping</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Initialize clipboard on instance create ...</div><div class='long'><p>Initialize clipboard on instance create</p>\n</div></div></div><div id='method-initKeyNav' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-method-initKeyNav' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-method-initKeyNav' class='name expandable'>initKeyNav</a>( <span class='pre'>view</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Initializes the key navigation ...</div><div class='long'><p>Initializes the key navigation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>View instance</p>\n</div></li></ul></div></div></div><div id='method-prepareForClipboardCopy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-prepareForClipboardCopy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-prepareForClipboardCopy' class='name expandable'>prepareForClipboardCopy</a>( <span class='pre'>tsvData, view</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Needs to be called from an key event handler! (Timing matters)\n\nMethod for preparing clipboard copying by focussing\nt...</div><div class='long'><p>Needs to be called from an key event handler! (Timing matters)</p>\n\n<p>Method for preparing clipboard copying by focussing\nthe textarea element and inserting the tsv content.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tsvData</span> : String<div class='sub-desc'><p>TSV content</p>\n</div></li><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>Spread view reference</p>\n</div></li></ul></div></div></div><div id='method-prepareForClipboardPaste' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-prepareForClipboardPaste' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-prepareForClipboardPaste' class='name expandable'>prepareForClipboardPaste</a>( <span class='pre'>pasteDataCallback, view</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Needs to be called from an key event handler! (Timing matters)\n\nMethod for preparing clipboard pasting by focussing\nt...</div><div class='long'><p>Needs to be called from an key event handler! (Timing matters)</p>\n\n<p>Method for preparing clipboard pasting by focussing\nthe textarea element. Calls the pasteDataCallback\nfunction after native paste event has been processed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pasteDataCallback</span> : Function<div class='sub-desc'><p>Paste function (first argument is clipboard data)</p>\n</div></li><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>Spread view reference</p>\n</div></li></ul></div></div></div><div id='method-refocusView' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Spread.util.Clipping' rel='Spread.util.Clipping' class='defined-in docClass'>Spread.util.Clipping</a><br/><a href='source/Clipping.html#Spread-util-Clipping-method-refocusView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.util.Clipping-method-refocusView' class='name expandable'>refocusView</a>( <span class='pre'>view</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Re-focusses the view after a small time delay ...</div><div class='long'><p>Re-focusses the view after a small time delay</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Spread.grid.View\" rel=\"Spread.grid.View\" class=\"docClass\">Spread.grid.View</a><div class='sub-desc'><p>Spread view reference</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforecopy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-event-beforecopy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-event-beforecopy' class='name expandable'>beforecopy</a>( <span class='pre'>copyable, selModel, selections, eOpts</span> )</div><div class='description'><div class='short'>Fires before a copy action happens. ...</div><div class='long'><p>Fires before a copy action happens. Return false in listener to stop the event processing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>copyable</span> : <a href=\"#!/api/Spread.grid.plugin.Copyable\" rel=\"Spread.grid.plugin.Copyable\" class=\"docClass\">Spread.grid.plugin.Copyable</a><div class='sub-desc'><p>Copyable plugin instance</p>\n</div></li><li><span class='pre'>selModel</span> : <a href=\"#!/api/Spread.selection.RangeModel\" rel=\"Spread.selection.RangeModel\" class=\"docClass\">Spread.selection.RangeModel</a><div class='sub-desc'><p>Selection model instance</p>\n</div></li><li><span class='pre'>selections</span> : Array<div class='sub-desc'><p>Array of selected positions</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n</div></li></ul></div></div></div><div id='event-copy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Spread.grid.plugin.Copyable'>Spread.grid.plugin.Copyable</span><br/><a href='source/Copyable.html#Spread-grid-plugin-Copyable-event-copy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Spread.grid.plugin.Copyable-event-copy' class='name expandable'>copy</a>( <span class='pre'>copyable, selModel, selections, eOpts</span> )</div><div class='description'><div class='short'>Fires when a copy action happened. ...</div><div class='long'><p>Fires when a copy action happened.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>copyable</span> : <a href=\"#!/api/Spread.grid.plugin.Copyable\" rel=\"Spread.grid.plugin.Copyable\" class=\"docClass\">Spread.grid.plugin.Copyable</a><div class='sub-desc'><p>Copyable plugin instance</p>\n</div></li><li><span class='pre'>selModel</span> : <a href=\"#!/api/Spread.selection.RangeModel\" rel=\"Spread.selection.RangeModel\" class=\"docClass\">Spread.selection.RangeModel</a><div class='sub-desc'><p>Selection model instance</p>\n</div></li><li><span class='pre'>selections</span> : Array<div class='sub-desc'><p>Array of selected positions</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Spread.grid.plugin.Copyable","uses":[],"id":"class-Spread.grid.plugin.Copyable","tagname":"class","requires":[]});