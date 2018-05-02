import idbKeyVal from 'idb-keyval';

export default (store) => ({
    load() {
        return idbKeyVal.get(store);
    },

    save(state) {
        return idbKeyVal.set(store, state);
    }
});
