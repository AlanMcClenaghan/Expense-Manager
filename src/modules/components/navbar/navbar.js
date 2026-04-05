import { LightningElement, api } from "lwc";

export default class Navbar extends LightningElement {

    @api loggedInUser
    @api backendUrl

    get userName() {
        return this.loggedInUser ? this.loggedInUser.name : ''
    }

    get logoutUrl(){
        return `${this.backendUrl}/oauth2/logout`
    }

}