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
                label: 'First name:',
                value: 'Nina'
            }, {
                xtype: 'textfield',
                name: 'last_name',
                label: 'Last name:',
                value: 'Furukawa'
            }, {
                xtype: 'textfield',
                name: 'email',
                label: 'Email Address:',
                value: 'mfurukawa@gmail.com'
            }, {
                xtype: 'textfield',
                name: 'zip',
                label: 'Zip Code:',
                value: '90405'
            }, {
                xtype: 'textfield',
                name: 'birthdate',
                label: 'Child Due/Birth Date:',
                value: '10/19/2013'
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



