/****************************************************
 Configuration builder

 The configuration object should be built in order to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {
        id: 'installationInfo-GitHub-User-'+sys.context.getCurrentUserRecord().id(),
        authUrl: config.authUrl,
        accessTokenUrl: config.accessTokenUrl,
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        oauthCallback: config.oauthCallback
    }
    return config;
}
