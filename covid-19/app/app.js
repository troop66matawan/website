var app=angular.module('covid19', []);

app.service('loader', function() {
    var _this = this;

    _this.getMeritBadges = function() {
        return window.coronamb;
    };

    _this.getVirtualClasses = function() {
        return window.virtualmb;
    };
});