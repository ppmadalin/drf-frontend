import UserService from '@/services/UserService.js'


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

        UserService.login(payload)
        .then(response => {
            commit('IS_AUTHENTICATED')
            commit('UPDATE_USER', response)
        })
        .catch(error => {
            if (error.response){
                console.log(error.response.data)
            } else if (error.request){
                console.log(error.message)
            } else {
                console.log(error)
            }
        })

    }
}

export default {
    state, mutations, actions
}