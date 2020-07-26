import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user:{
            loggedIn: false,
            data:null
        },
        blog:{
            id:null
        }
    },

    getters:{
        user(state){
            return state.user
        },
        getEventById: state => id => {
            return state.blog.find(blog => blog.id === id)
          }
    },

    mutations:{
        SET_LOGGED_IN(state,value){
            state.user.loggedIn = value;
        },
        SET_USER(state, data){
            state.user.data = data
        }
    },

    actions:{
        fetchUser({commit}, user){
            commit("SET_LOGGED_IN", user !== null);
            if(user){
                commit("SET_USER",{
                    displayName: user.displayName,
                    email: user.email
                });
            }
            else{
                commit("SET_USER",null)
            }
        }
    }
});
