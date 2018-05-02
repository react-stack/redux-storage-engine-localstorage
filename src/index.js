import idbKeyVal from 'idb-keyval';

const idb = function (store) {
  return {
    load: function () {
      return idbKeyVal.get(store);
    },

    save: function (state) {
      return idbKeyVal.set(store, state);
    }
  };
};

export default idb;
