/****************************************************
 Dependencies
 ****************************************************/

var httpService = svc.http;

/****************************************************
 Helpers
 ****************************************************/

exports.app = {};

exports.app.app = {};

exports.app.appManifests = {};

exports.app.appManifests.conversions = {};

exports.app.app.installationRequests = {};

exports.app.app.installations = {};

exports.app.app.installations.accessTokens = {};

exports.app.app.installations.suspended = {};

exports.app.applications = {};

exports.app.applications.token = {};

exports.app.applications.token.scoped = {};

exports.app.apps = {};

exports.app.orgs = {};

exports.app.orgs.installation = {};

exports.app.repos = {};

exports.app.repos.installation = {};

exports.app.users = {};

exports.app.users.installation = {};

exports.app.app.get = function(httpOptions) {
    var url = parse('/app');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.appManifests.conversions.post = function(code, httpOptions) {
    if (!code) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [code].');
        return;
    }
    var url = parse('/app-manifests/:code/conversions', [code]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.app.app.installationRequests.get = function(httpOptions) {
    var url = parse('/app/installation-requests');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.app.installations.get = function(installationId, httpOptions) {
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

exports.app.app.installations.delete = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id', [installationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.app.app.installations.accessTokens.post = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/access_tokens', [installationId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.app.app.installations.suspended.put = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/suspended', [installationId]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.app.app.installations.suspended.delete = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/app/installations/:installation_id/suspended', [installationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.app.applications.token.scoped.post = function(clientId, httpOptions) {
    if (!clientId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [clientId].');
        return;
    }
    var url = parse('/applications/:client_id/token/scoped', [clientId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.app.apps.get = function(appSlug, httpOptions) {
    if (!appSlug) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [appSlug].');
        return;
    }
    var url = parse('/apps/:app_slug', [appSlug]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.orgs.installation.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/installation', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.repos.installation.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/installation', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.app.users.installation.get = function(username, httpOptions) {
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

/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
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
var API_URL = GITHUB_API_BASE_URL+"";

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
    options.url = API_URL + url;
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
    var futureTime = new Date(currentTime + (10 * 60 * 1000));
    return sys.utils.crypto.generateJwt(
        {
            iss: config.get("appId"),
            iat: currentTime,
            exp: futureTime
        },
        config.get("privateKey")),
        "RS256"
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