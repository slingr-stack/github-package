/****************************************************
 Configuration builder

 The configuration object should be built in order to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    let newConfig = {
        oauth: {}
    };
    let oauthConfig = newConfig.oauth
    oauthConfig.id = config.id;
    oauthConfig.authUrl = config.authUrl;
    oauthConfig.accessTokenUrl = config.accessTokenUrl;
    oauthConfig.clientId = config.clientId;
    oauthConfig.clientSecret = config.clientSecret;
    oauthConfig.scope = config.scope;
    oauthConfig.state = config.state;
    oauthConfig.oauthCallback = config.oauthCallback;
    return newConfig;
}
