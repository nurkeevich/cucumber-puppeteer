let array = {
    LOGIN: "[name='user_login']",
    PASSWORD: "#user_password",
    SIGNIN: "[name='submit']",
    FORGOT_YOUR_PASSWORD: "[class='offset3 span6'] > a"
};

/**
 * Returns element value.
 *
 * @param {string} key
 * @returns {string} 
 */
function getValue(key) {
    return array[key];
};

module.exports = getValue