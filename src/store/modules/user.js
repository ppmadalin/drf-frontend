export const state = {
    user: {
        username: "",
        token: "",
        isAuthenticated: false
    }
}

export const mutations = {
    IS_AUTHENTICATED(state){
        state.isAuthenticated = true
    }
}

export const actions = {
    authenticate({commit}){
        commit('IS_AUTHENTICATED')
    }
}