/****************************************************
 Configuration builder

 The configuration object should be built to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {
        id: 'installationInfo-GitHub-User-'+sys.context.getCurrentUserRecord().id(),
        authUrl: "https://github.com/login/oauth/authorize",
        accessTokenUrl: "https://github.com/login/oauth/access_token",
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        oauthCallback: config.oauthCallback
    }
    return config;
}
