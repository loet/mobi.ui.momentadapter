describe('momentadapter', function () {

    beforeEach(module('mobi.ui.momentadapter'));

    it('should provide momentjs', inject(function (moment) {
        expect(moment()).toBeDefined();
    }));

})

;



