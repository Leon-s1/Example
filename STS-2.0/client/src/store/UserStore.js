import {makeAutoObservable} from 'mobx'

class UserStore {
    id = null
    email = "admin@mail.ru"
    pass = 'sts'
    // isAuth = false
    // isAdmin = false

    constructor() {
        makeAutoObservable(this)
    }
}

export default UserStore