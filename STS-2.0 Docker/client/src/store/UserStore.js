import {makeAutoObservable} from 'mobx'

class UserStore {
    id = null
    email = "yadykina_ov@sibtranss.ru"
    pass = 'sts'
    // isAuth = false
    // isAdmin = false

    constructor() {
        makeAutoObservable(this)
    }
}

export default UserStore