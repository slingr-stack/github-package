/****************************************************
 Configuration builder

 The configuration object should be built in order to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {}
    let oauthConfig =  config.oauth
    oauthConfig.id = config.id;
    oauthConfig.authUrl = config.authUrl;
    oauthConfig.accessTokenUrl = config.accessTokenUrl;
    oauthConfig.clientId = config.clientId;
    oauthConfig.clientSecret = config.clientSecret;
    oauthConfig.oauthCallback = config.oauthCallback;
    return config;
}
