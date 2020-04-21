/**
 * This method validates mapbox token.
 * This token provides a simple synchronous validation
 * @param {string} token the Mapbox token to validate
 * @return {boolean} true if token is valid, false otherwise
 */
export const validateToken = (token) => (token || "") !== "";
