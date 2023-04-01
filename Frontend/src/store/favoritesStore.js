import { createStore } from 'vuex';

 const favoritesStore = createStore({
    state: {
        favorites: []
    },
    mutations: {
        addFavorite(state, cloth) {
            state.favorites.push(cloth);
        }
    },
    getters: {
        getFavorites(state) {
            return state.favorites;
        }
    }
});

export function useFavoritesStore() {
    const favorites = computed(() => store.getters.getFavorites);
    const addFavorite = (cloth) => {
        store.commit('addFavorite', cloth);
    };
    return { favorites, addFavorite };
}
export { favoritesStore };