Ext.define('SuperMe.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Login',
            items: [{
                xtype: 'textfield',
                name: 'email',
                label: 'Email Address:'
            }, {
                xtype: 'textfield',
                name: 'password',
                label: 'Password:'
            }, {
                xtype: 'button',
                text: 'Login'
            }]
        }]
    }
});