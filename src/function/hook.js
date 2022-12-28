class Hook {

    saveLocal = (KEY, VALUE) => {
        typeof window !== 'undefined' && localStorage.setItem(KEY, JSON.stringify(VALUE) )
    }

    getLocal = (KEY) => {
        return typeof window !== 'undefined' && JSON.parse( localStorage.getItem(KEY) )
    }

    localStoreClear = () => {
        typeof window !== 'undefined' && localStorage.clear()
    }

};
export const localStoreService = new Hook();