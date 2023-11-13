/****************************************************
 Dependencies
 ****************************************************/

let httpService = dependencies.http;

/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiCallGithubInstall = function (inputs) {

	let inputsLogic = {
		headers: inputs.headers || [],
		params: inputs.params || [],
		body: inputs.body || {},
		followRedirects: inputs.followRedirects || false,
		download: inputs.download || false,
		fileName: inputs.fileName || "",
		fullResponse: inputs.fullResponse || false,
		connectionTimeout: inputs.connectionTimeout || 5000,
		readTimeout: inputs.readTimeout || 60000,
		path: inputs.path || "",
		method: inputs.method || "get"
	};

	let options = {
		path: inputsLogic.path,
		params: isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params),
		headers: isObject(inputsLogic.headers) ? inputsLogic.headers : stringToObject(inputsLogic.headers),
		body: isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body),
		followRedirects: inputsLogic.followRedirects,
		forceDownload: inputsLogic.download,
		downloadSync: false,
		fileName: inputsLogic.fileName,
		fullResponse: inputsLogic.fullResponse,
		connectionTimeout: inputsLogic.connectionTimeout,
		readTimeout: inputsLogic.readTimeout
	};

	setApiUri(options)
	setRequestHeaders(options);

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return httpService.get(options);
		case 'post':
			return httpService.post(options);
		case 'put':
			return httpService.put(options);
		case 'patch':
			return httpService.patch(options);
		case 'delete':
			return httpService.delete(options);
		case 'head':
			return httpService.head(options);
		case 'options':
			return httpService.options(options);
	}

	return null;
};

function isObject (obj) {
	return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString);

function stringToObject (obj) {
	if (!!obj){
		let keyValue = obj.toString().split(',');
		let parseObj = {};
		for(let i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
}

function setApiUri(options) {
	let url = options.path || "";
	options.url = config.get("API_URL_GITHUB") + url;
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
				url: API_URL_GITHUB + "/app/installations/" + installationJson.id + "/access_tokens",
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
