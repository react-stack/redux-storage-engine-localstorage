describe('engine', () => {
    const returnVal = 'SOME_VAL';
    const idbKeyVal = {
        set: sinon.stub().returns(new Promise((resolve) => {
            resolve(returnVal);
        })),
        get: sinon.stub().returns(new Promise((resolve) => {
            resolve(returnVal);
        })),
    };
    describe('check proxies', () => {
        it('should call the idbKeyVal set method and return the response as it is', async () => {
            const result = await idbKeyVal.set('key', 'val');
            idbKeyVal.set.should.have.been.calledWith('key', 'val');
            result.should.equal(returnVal);
        });

        it('should call the idbKeyVal get method and return the response as it is', async () => {
            const result = await idbKeyVal.get('key');
            idbKeyVal.get.should.have.been.calledWith('key');
            result.should.equal(returnVal);
        });
    });
});
