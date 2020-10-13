const state = {
    user: {
        username: "madalin",
        token: "",
        isAuthenticated: false
    }
}

const mutations = {
    IS_AUTHENTICATED(state){
        state.isAuthenticated = !state.isAuthenticated
    }
}

const actions = {
    authUser({commit}){
        commit('IS_AUTHENTICATED')
    }
}

export default {
    state, mutations, actions
}