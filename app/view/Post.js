Ext.define('SuperMe.view.Post', {
    extend: 'Ext.form.Panel',
    xtype: 'post',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Submit A Post',
            items: [{
                xtype: 'textareafield',
                name: 'message',
                label: 'Message:'
            }, {
                xtype: 'button',
                name: 'postBtn',
                text: 'Post'
            }]
        }]
    }
});