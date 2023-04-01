import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore({  
    id: 'favorite',
    state: () => ({
        favorites: [],
    }),
    actions: {
        addFavorite(cloth) {
            this.favorites.push(cloth);
        },
    },
    getters: {
        getFavorites() {
            return this.favorites;
        },
    },
});
