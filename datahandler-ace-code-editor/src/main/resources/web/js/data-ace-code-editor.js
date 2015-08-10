function (wgt, dataValue) {
	var wgtDOM = wgt.$n(),
		editor_id = 'zk-ace-code-editor',
		div = document.createElement('div'),
		old = document.getElementById(editor_id);
	if (old) old.remove();
	jq(wgtDOM).hide();
	div.setAttribute('id', editor_id);
	div.setAttribute('class', 'data-ace');
	jq(div).insertAfter(wgtDOM);

	var editor = ace.edit(editor_id);

	//settings
	var settings = $.evalJSON(dataValue);
	if (settings.theme)
		editor.setTheme(settings.theme);
	if (settings.mode)
		editor.getSession().setMode(settings.mode);

	editor.getSession().setValue(wgt.getValue());
	editor.getSession().on('change', function(){
		wgt.setValue(editor.getSession().getValue());
		wgt.fireOnChange();
	});
}