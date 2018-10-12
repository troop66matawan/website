app.component('biolist', {
  bindings: {
  },
  controller: function ($scope, $window, loader, $timeout) {
    var _this = this;
    _this.leaders = loader.getLeaderBios();
    $timeout(function() {
      var query = window.location.search.substring(1);
      if (query.indexOf('printPage=true') !== -1) {
        window.print();
      }
    }, 500);
  },
  templateUrl: 'leaderbio/biolist.html',
});