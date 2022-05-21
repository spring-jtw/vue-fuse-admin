const getters = {
    token: state => state.user.token,
    user_info: state => state.user.userInfo,
    routes: state => state.routes.routes
}
export default getters