import PostService from '@/services/PostService.js'


const state = {
    posts: []
}

const getters = {}

const actions = {
    getPosts( {commit} ){
        PostService.getPosts()
        .then(response => {
            commit('GET_POSTS', response.data.results)
        })
    }
}

const mutations = {
    GET_POSTS(state, payload){
        state.posts = payload
    }
}


export default {
    state, 
    getters,
    actions,
    mutations
}