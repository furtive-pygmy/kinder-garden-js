leadApp.event = {
    subscribe: function() {
        $(document).on.apply($(document), arguments);
        return ['qsdf'];
    },
    unsubscribe: function() {
        $(document).off.apply($(document), arguments);
    },
    publish: function() {
        if (js_debug) {
            console.log('DEBUG');
            console.log({
                action: 'publish',
                event: arguments[0],
                params: arguments[1]
            });
        }
        $(document).trigger.apply($(document), arguments);
    }
};