(function (w) {
    'use strict';

    var timer_input = w.prompt('For how long?');
    var timer_split = timer_input.split(' ');

    var timer = parseInt(timer_split[0]);
    var units = 'minutes';

    if (timer_split.length > 1) {
        units = timer_split[1];
    }

    var tpl = function(string, data) {
        for (var token in data) {
            var value = data[token];
            string = string.replace(new RegExp('{' + token + '}', 'g'), value);
        }
        return string;
    };

    var url = tpl(
        'https://google.com/search?q=set+timer+for+{timer}+{units}',
        {
            timer: timer,
            units: units
        }
    );

    w.open(url, '_blank');
}(window));
