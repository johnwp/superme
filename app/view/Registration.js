Ext.define('SuperMe.view.Registration', {
    extend: 'Ext.form.Panel',
    xtype: 'registration',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Sign Up Now to Meet New Moms',
            items: [{
                xtype: 'textfield',
                name: 'first_name',
                label: 'First name:'
            }, {
                xtype: 'textfield',
                name: 'last_name',
                label: 'Last name:'
            }, {
                xtype: 'textfield',
                name: 'email',
                label: 'Email Address:'
            }, {
                xtype: 'textfield',
                name: 'zip',
                label: 'Zip Code:'
            }, {
                xtype: 'textfield',
                name: 'birthdate',
                label: 'Child Due/Birth Date:'
            }, {
                xtype: 'datepicker',
                name: 'birthdatePicker',
                hidden: true
            }, {
                xtype: 'textfield',
                name: 'persona',
                hidden: true,
                readOnly: true,
                label: 'Persona'
            }, {
                xtype: 'button',
                name: 'choosePersona',
                text: 'Choose your persona'
            }]
        }, {
            xtype: 'toolbar',
            layout: {
                pack: 'center'
            },
            ui: 'plain',
            items: [{
                xtype: 'button',
                text: 'Join',
                ui: 'confirm',
                handler: function (btn, evt) {
                    var values = contactForm.getValues();
                    Ext.Msg.alert('Welcome', Ext.String.format('{0} {1}', values.fname, values.lname));
                }
            }]
        }]
    }
});



