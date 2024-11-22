/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Gets a configuration from the properties.
 *
 * @param {string} property - The name of the property to get. If it is empty, return the entire configuration object.
 * @return {string} - The value of the property or the whole object as string.
 */
exports.getConfiguration = function (property) {
    if (!property) {
        return config.get();
    }
    return config.get(property);
};

/**
 * Converts a given date to a timestamp.
 *
 * @param {number | string} params      - The date to be converted.
 * @return {object}                     - An object containing the timestamp.
 */
exports.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

/**
 * Converts a timestamp to a date object.
 *
 * @param {number} timestamp            - The timestamp to convert.
 * @return {object}                     - The date object representing the timestamp.
 */
exports.fromTimestampToDate = function(timestamp) {
    return new Date(timestamp);
};
