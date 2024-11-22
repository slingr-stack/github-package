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
        sys.logs.info("Received Github webhook. Processing and triggering a package event.", event);
        var body = event.data.body;
        var headers = event.data.headers;
        var signature = headers["x-hub-signature"];
        var signature256 = headers["x-hub-signature-256"];

        var installation = {account: {login: null}};
        var eventName = headers["x-github-event"];
        if (eventName.equals("installation")) {
            var action = body.action;
            if (body.installation) installation = body.installation;
            if ("deleted".equals(action) && installation.account.login) {
                if (!pkg.github.install.utils.verifySignature(JSON.stringify(body), signature, signature256)) {
                    throw new Error("[Github] Invalid signature for uninstallation.");
                }
                sys.logs.info("[Github] Removing installation for account " + installation.account.login);
                sys.storage.remove("installationInfo-GitHub---" + installation.account.login);
            } else {
                if (installation.account.login) {
                    if (!pkg.github.install.utils.verifySignature(JSON.stringify(body), signature, signature256)) {
                        throw new Error("[Github] Invalid signature for installation.");
                    }
                    sys.logs.info("[Github] Creating installation for account " + installation.account.login);
                    sys.storage.put("installationInfo-GitHub---" + installation.account.login, installation, {encrypt: true});
                }
            }
        } else {
            if (eventName.equals("installation_repositories")) {
                if (body.installation) installation = body.installation;
                if (installation.account.login !== "") {
                    if (!pkg.github.install.utils.verifySignature(JSON.stringify(body), signature, signature256)) {
                        throw new Error("[Github] Invalid signature for update installation.");
                    }
                    sys.logs.info("[Github] Updating installation for account " + installation.account.login);
                    sys.storage.replace("installationInfo-GitHub---" + installation.account.login, installation, {encrypt: true});
                }
            }
        }
        body.event_name = eventName;
        sys.logs.info("[Github] Valid webhook received. Triggering event.", eventName);
        sys.events.triggerEvent("github:webhook", event.data);
        return true;
    }
};
