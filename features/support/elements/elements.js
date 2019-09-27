var elements = {
    // Login page
    USERNAME: '#username',
    PASSWORD: '#password',
    LOGIN: '#LoginUserControl_Submit',
    INVALIDUSERNAMEPASSWORD: '#LoginUserControl_errorMessage'
}

/**
 * returns element value
 *
 * @param {string} key
 * @returns {string}
 */
function getValue(key) {
    return elements[key];
}

module.exports = getValue;