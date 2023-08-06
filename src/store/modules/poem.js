import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const poem = ({
    namespaced: true,
    state: {
        poems: [],
        poem: null
    },
    getters: {
    },
    mutations: {
        SET_POEMS: (state, payload) => state.poems = payload,
        SET_POEM: (state, payload) => state.poem = payload,
    },
    actions: {
        async getPoems({ commit }, author) {
            fetch(`https://poetrydb.org/author/${author}`)
            .then(res => res.json())
            .then(poems => {
                commit('SET_POEMS', poems)
                console.log(poems);
            })
            .catch(error => {
                console.log(error)
            })
        },

        async getPoem({ commit }, title) {
            console.log(title);
            fetch(`https://poetrydb.org/title/${title}`)
            .then(res => res.json())
            .then(poem => {
                commit('SET_POEM', poem)
                console.log(poem);
            })
            .catch(error => {
                console.log(error)
            })
        },
        async getSearchedPoems({ commit }, title) {
            fetch(`https://poetrydb.org/title/${title}`)
            .then(res => res.json())
            .then(poems => {
                commit('SET_POEMS', poems)
                console.log(poems);
            })
            .catch(error => {
                console.log(error)
            })
        },

        emptyPoems({ commit }, title) {
            commit('SET_POEMS', [])
            commit('SET_POEM', null)
        },
    },
    modules: {
    }
})