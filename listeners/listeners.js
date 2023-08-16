/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookGithub = {
    label: 'Catch HTTP github events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/github',
        }
    },
    callback: function(event) {
        sys.logs.info("Received Github webhook. Processing and triggering a package event.");
        var body = event.data.body;
        var params = event.data.parameters;
        var headers = event.data.headers;
        var signature = headers["x-hub-signature"];
        //TODO uncomment when pepito credentials are fixed
      /*  if (!pkg.github.install.utils.verifySignature(JSON.stringify(body), signature)) {
            throw new Error("Invalid signature or body.");
        }
       */
        var installation = {account: {login: null}};
        var eventName = headers["x-github-event"];
        if (eventName.equals("installation")) {
            var action = body.action;
            if (body.installation) installation = body.installation;
            if ("deleted".equals(action) && installation.account.login) {
                sys.logs.info("Removing installation for account " + installation.account.login);
                sys.storage.remove("installationInfo-GitHub---" + installation.account.login);
            } else {
                if (installation.account.login) {
                    sys.logs.info("Creating installation for account " + installation.account.login);
                    sys.storage.put("installationInfo-GitHub---" + installation.account.login, installation, {encrypt: true});
                }
            }
        } else {
            if (eventName.equals("installation_repositories")) {
                if (body.installation) installation = body.installation;
                if (installation.account.login !== "") {
                    sys.logs.info("Updating installation for account " + installation.account.login);
                    sys.storage.replace("installationInfo-GitHub---" + installation.account.login, installation, {encrypt: true});
                }
            }
        }
        body.event_name = eventName;
        sys.logs.info("Valid webhook received. Triggering event.");
        sys.events.triggerEvent("github:webhook", {body: body, params: params});
        return "ok";
    }
};
