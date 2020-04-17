app.component('c19VirtualMb', {
    bindings: {
        name: '<',
        mbpath: '<',
        link: '<',
        meetings: '<',
    },
    controller: C19VirtualMBController,
    templateUrl: 'app/c19VMB.html'
});

function C19VirtualMBController() {
    const _this = this;

}