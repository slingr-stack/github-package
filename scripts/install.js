/****************************************************
 Dependencies
 ****************************************************/

let httpReference = dependencies.http;

let httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};

let httpService = {};

/**
 *
 * Handles a request with retry from the platform side.
 */
function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    return requestFn(options, callbackData, callbacks);
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (let key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Sends an HTTP GET request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the GET request to.
 * @param {object} httpOptions  - The options to be included in the GET request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the GET request. [optional]
 * @return {object}             - The response of the GET request.
 */
exports.get = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.get(Github(options), callbackData, callbacks);
};

/**
 * Sends an HTTP POST request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the POST request to.
 * @param {object} httpOptions  - The options to be included in the POST request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the POST request.
 */
exports.post = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.post(Github(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PUT request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PUT request to.
 * @param {object} httpOptions  - The options to be included in the PUT request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PUT request.
 */
exports.put = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.put(Github(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PATCH request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PATCH request to.
 * @param {object} httpOptions  - The options to be included in the PATCH request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PATCH request.
 */
exports.patch = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.patch(Github(options), callbackData, callbacks);
};

/**
 * Sends an HTTP DELETE request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the DELETE request to.
 * @param {object} httpOptions  - The options to be included in the DELETE request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the DELETE request. [optional]
 * @return {object}             - The response of the DELETE request.
 */
exports.delete = function(path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.delete(Github(options), callbackData, callbacks);
};

exports.utils = {};

/**
 * Verifies the signature of the given body using the provided signature coded in sha1 or sha256.
 *
 * @param {string} body                 - The body to be verified.
 * @param {string} signature            - The signature to be checked.
 * @param {string} signature256         - The signature256 to be checked.
 * @return {boolean}                    - True if the signature is valid, false otherwise.
 */
exports.utils.verifySignature = function (body, signature, signature256) {
    sys.logs.info("Checking signature");
    let verified = true;
    let verified256 = true;
    let secret = config.get("webhookSecret");
    if (!body || body === "") {
        sys.logs.warn("The body is null or empty");
        return false;
    }
    if (!secret || secret === "" || !signature || signature === "" ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha1=",""), secret, "HmacSHA1")) {
        sys.logs.warn("Invalid signature sha1");
        verified = false;
    }
    if (!secret || secret === "" ||  !signature256 ||!signature256 ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha256=",""), secret, "HmacSHA256")) {
        sys.logs.warn("Invalid signature sha 256");
        verified256 = false;
    }

    return (verified || verified256);
};

/****************************************************
 Private helpers
 ****************************************************/

function checkHttpOptions (path, options) {
    options = options || {};
    if (!!path) {
        if (isObject(path)) {
            // take the 'path' parameter as the options
            options = path || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = path;
            } else {
                // create html package
                options = {
                    path: path,
                    body: options
                }
            }
        }
    }
    return options;
}

function isObject (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString)

/****************************************************
 Configurator
 ****************************************************/

let Github = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    let url = options.path || "";
    options.url = config.get("GITHUB_API_BASE_URL") + url;
    sys.logs.debug('[github] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    let headers = options.headers || {};
    sys.logs.debug('[github] Setting header token');

    let account;
    if (!!options.body && !!options.body.account) {
        account = options.body.account;
    }
    else {
        throw new Error('[github] the value in httpOptions.account is undefined and is required.');
    }
    let token = getAccessTokenForAccount(account);

    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Authorization": "token " + token});
    if (headers.Accept === undefined || headers.Accept === null || headers.Accept === "") {
        headers = mergeJSON(headers, {"Accept": "application/vnd.github.machine-man-preview+json"});
    }

    options.headers = headers;
    return options;
}

function getAccessTokenForAccount(account) {
    sys.logs.info('[github] Getting access token for account: ' + account);
    let installationJson = sys.storage.get('installationInfo-GitHub---'+account, {decrypt: true}) || {id: null};
    if (!installationJson.id) {
        throw new Error("Installation for account "+account+" was not found");
    }
    let token = installationJson.token || null;
    let expiration = installationJson.expiration || 0;
    if (!token || expiration < new Date().getTime()) {
        sys.logs.info('[github] Access token is expired or not found. Getting new token');
        let res = httpService.post(
            {
                url: config.get('GITHUB_API_BASE_URL') + "/app/installations/" + installationJson.id + "/access_tokens",
                headers: {
                    "Authorization": "Bearer " + getJsonWebToken(),
                    "Accept": "application/vnd.github.machine-man-preview+json"
                }
            });
        token = res.token;
        let expires_at = res.expires_at;
        expiration = new Date(new Date(expires_at) - 1 * 60 * 1000).getTime();
        installationJson = mergeJSON(installationJson, {"token": token, "expiration": expiration});
        sys.logs.info('[github] Saving new token for account: ' + account);
        sys.storage.replace('installationInfo-GitHub---'+account, installationJson, {encrypt: true});
    }
    return token;
}

function getJsonWebToken() {
    let currentTime = new Date().getTime();
    let futureTime = new Date(currentTime + ( 10 * 60 * 1000)).getTime();
    return sys.utils.crypto.jwt.generate(
        {
            iss: config.get("appId"),
            iat: currentTime,
            exp: futureTime
        },
        config.get("privateKey"),
        "RS256"
    )
}

function mergeJSON (json1, json2) {
    const result = {};
    let key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
