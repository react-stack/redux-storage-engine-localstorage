function rejectWithMessage(error) {
    return Promise.reject(error.message);
}

const store = (() => {
    function isLocalStorageValid() {
        try {
            return typeof localStorage !== 'undefined' &&
                ('setItem' in localStorage) &&
                typeof localStorage.setItem === 'function';
        } catch (e) {
            return false;
        }
    }

    if (isLocalStorageValid()) {
        return localStorage;
    }

    return {
      db: {},
      setItem(key, value) {
          this.db[key] = value;
      },
      getItem(key, value) {
          const value = this.db[key];
          if (value === undefined) {
              // emulate localStorage
              return null;
          }
          return value
      }
    };
})();

export default (key, replacer, reviver) => ({
    load() {
        return new Promise((resolve) => {
            const jsonState = store.getItem(key);
            resolve(JSON.parse(jsonState, reviver) || {});
        }).catch(rejectWithMessage);
    },

    save(state) {
        return new Promise((resolve) => {
            const jsonState = JSON.stringify(state, replacer);
            store.setItem(key, jsonState);
            resolve();
        }).catch(rejectWithMessage);
    }
});
