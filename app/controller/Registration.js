Ext.define('SuperMe.controller.Registration', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'registration button[name=choosePersona]': {
                tap: 'onTapPersonaBtn'
            },
            'personas': {
                select: 'onChoosePersona'
            }
        },
        refs: {
            personaList: 'personas',
            personaField: 'registration textfield[name="persona"]'
        }
    },

    onTapPersonaBtn: function() {
        this.getPersonaList().show();
    },
    onChoosePersona: function(list, record) {
        console.log('args', record);
        this.getPersonaList().hide();
        var persona = record.get('persona');
        this.getPersonaField().setValue(persona);
        this.getPersonaField().show();
    }
});