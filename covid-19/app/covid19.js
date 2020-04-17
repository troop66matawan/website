app.component('covid19', {
    controller: Covid19Controller,
    templateUrl: 'app/covid19.html'
});

function Covid19Controller(loader) {
    const _this = this;

    _this.$onInit = function() {
        _this.meritBadges = loader.getMeritBadges();
        _this.virtualmb = loader.getVirtualClasses();
    };

    _this.isValidDate = function(validThru) {
        const date = new Date(validThru.year, validThru.month, validThru.date, validThru.hour);
        return (date > new Date());
    }
}