/****************************************************
 Dependencies
 ****************************************************/

var httpReference = svc.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.error(JSON.stringify(error));
        sys.logs.info("[github] Handling request...");
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.app = {};

exports.appManifests = {};

exports.appManifests.conversions = {};

exports.app.installationRequests = {};

exports.app.installations = {};

exports.app.installations.accessTokens = {};

exports.app.installations.suspended = {};

exports.applications = {};

exports.applications.token = {};

exports.applications.token.scoped = {};

exports.apps = {};

exports.orgs = {};

exports.orgs.installation = {};

exports.repos = {};

exports.repos.installation = {};

exports.users = {};

exports.users.installation = {};

exports.app.get = function(httpOptions) {
    var url = parse('/app');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.appManifests.conversions.post = function(code, httpOptions) {
    if (!code) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [code].');
        return;
    }
    var url = parse('/app-manifests/:code/conversions', [code]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.app.installationRequests.get = function(httpOptions) {
    var url = parse('/app/installation-requests');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.installations.get = function(installationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
            url = parse('/app/installations');
            break;
        case 1:
            url = parse('/app/installations/:installation_id', [installationId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.installations.delete = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id', [installationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.app.installations.accessTokens.post = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/access_tokens', [installationId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.app.installations.suspended.put = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/suspended', [installationId]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.app.installations.suspended.delete = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/suspended', [installationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.applications.token.scoped.post = function(clientId, httpOptions) {
    if (!clientId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [clientId].');
        return;
    }
    var url = parse('/applications/:client_id/token/scoped', [clientId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.apps.get = function(appSlug, httpOptions) {
    if (!appSlug) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [appSlug].');
        return;
    }
    var url = parse('/apps/:app_slug', [appSlug]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.installation.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/installation', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.installation.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/installation', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.installation.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/installation', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Github(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Github(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[github] Get property: '+property);
    return config.get(property);
};

exports.utils.verifySignature = function (body, signature) {
    sys.logs.info("Checking signature");
    var secret = config.get("webhookSecret");
    if (!secret || secret === "" ||
        !sys.utils.crypto.verifySignatureWithHmac(body, signature.replace("sha1=",""), secret, "HmacSHA1")) {
        sys.logs.error("Invalid signature or body");
        return false;
    }
    return true;
};

/****************************************************
 Private helpers
 ****************************************************/

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/


var GITHUB_API_BASE_URL = "https://api.github.com";
var API_URL_GITHUB = GITHUB_API_BASE_URL+"";

/****************************************************
 Configurator
 ****************************************************/

var Github = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = API_URL_GITHUB + url;
    sys.logs.debug('[github] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    sys.logs.debug('[github] Setting header bearer');
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Authorization": "Bearer " + getJsonWebToken()});
    if (headers.Accept === undefined || headers.Accept === null || headers.Accept === "") {
        headers = mergeJSON(headers, {"Accept": "application/vnd.github.machine-man-preview+json"});
    }
    options.headers = headers;
    return options;
}

function getJsonWebToken() {
    var currentTime = new Date().getTime();
    var futureTime = new Date(currentTime + ( 10 * 60 * 1000)).getTime();
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
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
