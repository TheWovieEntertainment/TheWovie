// window.localStorage.setItem(key, value);


// 'user_' + username + '_properity'
// 例如：
// 'user_' + username + '_password'
// 'user_' + username + '_gender'
// 'user_' + username + '_age'
// 'user_' + username + '_address'

function registerUser(username, password) {
    if (window.localStorage.getItem('user_' + username)) {
        return false;
    } else {
        var key = 'user_' + username + '_password';
        var value = password;
        window.localStorage.setItem(key, value);
        return true;
    }
}

function updateUser(username, user) {
    window.localStorage.setItem('user_' + username, user.username);
    // window.localStorage.setItem('user_' + username + '_password', user.password);
    window.localStorage.setItem('user_' + username + '_gender', user.gender);
    window.localStorage.setItem('user_' + username + '_age', user.age + '');
    window.localStorage.setItem('user_' + username + '_address', user.address);
}

function ungisterUser(username) {
    window.localStorage.removeItem('user_' + username);
    window.localStorage.removeItem('user_' + username + '_password');
    window.localStorage.removeItem('user_' + username + '_gender');
    window.localStorage.removeItem('user_' + username + '_age');
    window.localStorage.removeItem('user_' + username + '_address');
}

function queryUserByUsername(username) {
    if (window.localStorage.getItem('user_' + username)) {
        return {
            username: window.localStorage.getItem('user_' + username),
            password: '******',
            username: window.localStorage.getItem('user_' + username + '_gender'),
            username: window.localStorage.getItem('user_' + username + '_age'),
            username: window.localStorage.getItem('user_' + username + '_address'),
        };
    } else {
        return undefined;
    }
}