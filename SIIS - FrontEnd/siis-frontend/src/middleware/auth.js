import jwtDecode from 'jwt-decode';

class auth{

    constructor() {
        this.token = null
    }
    
    login(token, callback){
        localStorage.setItem('token', token);
        callback();
    }

    logout(callback){
        localStorage.removeItem('token');
        localStorage.clear();
        callback();
    }

    getDecodedToken(){
        const token = jwtDecode(localStorage.getItem('token'));
        this.token = token
        return jwtDecode(token);
    }

    logoutWithout() {
    localStorage.removeItem("token");
    localStorage.clear();
    }

    getToken(){
        return localStorage.getItem('token');
    }

    isAuthenticated(){
        
       try{
           const token = jwtDecode(localStorage.getItem('token'));
           this.token = token;
           return true;
       }
       catch(ex){
           return false;
       }
    }

}

export default new auth();