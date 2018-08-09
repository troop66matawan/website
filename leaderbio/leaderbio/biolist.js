app.component('biolist', {
  bindings: {
  },
  controller: function ($scope, $window, loader) {
    var _this = this;
    _this.leaders = loader.getLeaderBios();
  },
  templateUrl: 'leaderbio/biolist.html',
});