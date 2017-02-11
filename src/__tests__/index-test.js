import idbKeyVal from 'idb-keyval';

describe('engine', () => {
    describe('load', () => {
        it('should reject if json cannot be loaded', async () => {
            await idbKeyVal.set('key', 'val');
            await idbKeyVal.set('key1');
        });

        it('should resolve with data', async () => {
            await idbKeyVal.set('key', 'val');
            const result = await idbKeyVal.set('key');
            result.should.equal('val');
        });
    });

    describe('save', () => {
        it('should asve via setItem', async () => {

        });

        it('should load with the given key', async () => {

        });
    });
});
