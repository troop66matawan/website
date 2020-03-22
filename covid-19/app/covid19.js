app.component('covid19', {
    controller: Covid19Controller,
    templateUrl: 'app/covid19.html'
});

function Covid19Controller(loader) {
    const _this = this;

    _this.$onInit = function() {
        _this.meritBadges = loader.getMeritBadges();
    };
}