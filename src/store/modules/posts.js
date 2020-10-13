import PostService from '@/services/UserService.js'


const state = {
    posts: []
}

const getters = {}

const actions = {
    getPosts(){
        const data = PostService.getPostsService()
        // if (data){
        //     console.log(data)
        // }
        console.log(data)
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