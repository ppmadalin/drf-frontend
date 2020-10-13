const state = {
    user: {
        username: "",
        token: "",
        isAuthenticated: false
    }
}

const mutations = {
    IS_AUTHENTICATED(state){
        state.user.isAuthenticated = !state.user.isAuthenticated
    },
    UPDATE_USER(state, payload){
        state.user.username = payload.username
    }
}

const actions = {
    authUser({commit}, payload){
        commit('IS_AUTHENTICATED')
        commit('UPDATE_USER', payload)
    }
}

export default {
    state, mutations, actions
}