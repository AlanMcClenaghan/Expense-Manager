import { LightningElement, api } from "lwc";
const SERVER_URL = "http://localhost:3002"

export default class Navbar extends LightningElement {

    @api loggedInUser

    get userName() {
        return this.loggedInUser ? this.loggedInUser.name : ''
    }

    get logoutUrl(){
        return `${SERVER_URL}/oauth2/logout`
    }

}