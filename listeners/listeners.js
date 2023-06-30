/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhook = {
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
        sys.logs.info('Received Github webhook. Processing and triggering a package event.');
        sys.logs.warn(JSON.stringify(event));
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        var headers = event.data.headers;
        var signature = headers['x-hub-signature'];
        var secret = config.get("webhookSecret");

        if (!verifySignature(body, signature, secret)) {
            throw new Error("Invalid signature or body.");
        }

        var installation = '';
        var eventName = headers['x-github-event'];
        if (eventName.equals("installation")) {
            var action = body['action'];
            installation = body['installation'];
            if ("deleted".equals(action)) {
                sys.logs.info("Removing installation for account "+ installation['account']['login']);
                // delete DS

                //{"data":{"action":"deleted","installation":{"id":39160877,"account":{"login":"pasaperez-slingr","id":119679724,"node_id":"U_kgDOByIq7A","avatar_url":"https://avatars.githubusercontent.com/u/119679724?v=4","gravatar_id":"","url":"https://api.github.com/users/pasaperez-slingr","html_url":"https://github.com/pasaperez-slingr","followers_url":"https://api.github.com/users/pasaperez-slingr/followers","following_url":"https://api.github.com/users/pasaperez-slingr/following{/other_user}","gists_url":"https://api.github.com/users/pasaperez-slingr/gists{/gist_id}","starred_url":"https://api.github.com/users/pasaperez-slingr/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pasaperez-slingr/subscriptions","organizations_url":"https://api.github.com/users/pasaperez-slingr/orgs","repos_url":"https://api.github.com/users/pasaperez-slingr/repos","events_url":"https://api.github.com/users/pasaperez-slingr/events{/privacy}","received_events_url":"https://api.github.com/users/pasaperez-slingr/received_events","type":"User","site_admin":false},"repository_selection":"all","access_tokens_url":"https://api.github.com/app/installations/39160877/access_tokens","repositories_url":"https://api.github.com/installation/repositories","html_url":"https://github.com/settings/installations/39160877","app_id":351764,"app_slug":"endpoint-local","target_id":119679724,"target_type":"User","permissions":{"pages":"write","checks":"write","issues":"write","actions":"write","secrets":"write","contents":"write","metadata":"read","packages":"write","statuses":"write","workflows":"write","codespaces":"write","deployments":"write","discussions":"write","environments":"write","merge_queues":"write","pull_requests":"write","administration":"write","security_events":"write","repository_hooks":"write","actions_variables":"write","codespaces_secrets":"write","dependabot_secrets":"write","codespaces_metadata":"read","repository_projects":"admin","vulnerability_alerts":"write","repository_advisories":"write","secret_scanning_alerts":"write","codespaces_lifecycle_admin":"write"},"events":["branch_protection_rule","check_run","check_suite","code_scanning_alert","commit_comment","create","delete","dependabot_alert","deployment","deployment_protection_rule","deployment_review","deployment_status","deploy_key","discussion","discussion_comment","fork","gollum","issues","issue_comment","label","member","merge_group","merge_queue_entry","milestone","page_build","project","project_card","project_column","public","pull_request","pull_request_review","pull_request_review_comment","pull_request_review_thread","push","registry_package","release","repository","repository_advisory","repository_dispatch","repository_ruleset","secret_scanning_alert","secret_scanning_alert_location","security_and_analysis","star","status","watch","workflow_dispatch","workflow_job","workflow_run"],"created_at":"2023-06-30T19:35:23.000Z","updated_at":"2023-06-30T19:35:23.000Z","single_file_name":null,"has_multiple_single_files":false,"single_file_paths":[],"suspended_by":null,"suspended_at":null},"repositories":[{"id":599767166,"node_id":"R_kgDOI7-4fg","name":"Test","full_name":"pasaperez-slingr/Test","private":false},{"id":608642720,"node_id":"R_kgDOJEcmoA","name":"API-REST-Test","full_name":"pasaperez-slingr/API-REST-Test","private":false}],"sender":{"login":"pasaperez-slingr","id":119679724,"node_id":"U_kgDOByIq7A","avatar_url":"https://avatars.githubusercontent.com/u/119679724?v=4","gravatar_id":"","url":"https://api.github.com/users/pasaperez-slingr","html_url":"https://github.com/pasaperez-slingr","followers_url":"https://api.github.com/users/pasaperez-slingr/followers","following_url":"https://api.github.com/users/pasaperez-slingr/following{/other_user}","gists_url":"https://api.github.com/users/pasaperez-slingr/gists{/gist_id}","starred_url":"https://api.github.com/users/pasaperez-slingr/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pasaperez-slingr/subscriptions","organizations_url":"https://api.github.com/users/pasaperez-slingr/orgs","repos_url":"https://api.github.com/users/pasaperez-slingr/repos","events_url":"https://api.github.com/users/pasaperez-slingr/events{/privacy}","received_events_url":"https://api.github.com/users/pasaperez-slingr/received_events","type":"User","site_admin":false},"event_name":"installation"},"type":"ENDPOINT","endpointEvent":"webhook"}
                //installations.remove(Json.map().set("installationId", installation.longInteger("id")));
                sys.storage.remove('installationInfo-GitHub---'+installation['account']['login']);
            } else {
                // save DS

                //{"data":{"action":"created","installation":{"id":39160877,"account":{"login":"pasaperez-slingr","id":119679724,"node_id":"U_kgDOByIq7A","avatar_url":"https://avatars.githubusercontent.com/u/119679724?v=4","gravatar_id":"","url":"https://api.github.com/users/pasaperez-slingr","html_url":"https://github.com/pasaperez-slingr","followers_url":"https://api.github.com/users/pasaperez-slingr/followers","following_url":"https://api.github.com/users/pasaperez-slingr/following{/other_user}","gists_url":"https://api.github.com/users/pasaperez-slingr/gists{/gist_id}","starred_url":"https://api.github.com/users/pasaperez-slingr/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pasaperez-slingr/subscriptions","organizations_url":"https://api.github.com/users/pasaperez-slingr/orgs","repos_url":"https://api.github.com/users/pasaperez-slingr/repos","events_url":"https://api.github.com/users/pasaperez-slingr/events{/privacy}","received_events_url":"https://api.github.com/users/pasaperez-slingr/received_events","type":"User","site_admin":false},"repository_selection":"all","access_tokens_url":"https://api.github.com/app/installations/39160877/access_tokens","repositories_url":"https://api.github.com/installation/repositories","html_url":"https://github.com/settings/installations/39160877","app_id":351764,"app_slug":"endpoint-local","target_id":119679724,"target_type":"User","permissions":{"pages":"write","checks":"write","issues":"write","actions":"write","secrets":"write","contents":"write","metadata":"read","packages":"write","statuses":"write","workflows":"write","codespaces":"write","deployments":"write","discussions":"write","environments":"write","merge_queues":"write","pull_requests":"write","administration":"write","security_events":"write","repository_hooks":"write","actions_variables":"write","codespaces_secrets":"write","dependabot_secrets":"write","codespaces_metadata":"read","repository_projects":"admin","vulnerability_alerts":"write","repository_advisories":"write","secret_scanning_alerts":"write","codespaces_lifecycle_admin":"write"},"events":["branch_protection_rule","check_run","check_suite","code_scanning_alert","commit_comment","create","delete","dependabot_alert","deployment","deployment_protection_rule","deployment_review","deployment_status","deploy_key","discussion","discussion_comment","fork","gollum","issues","issue_comment","label","member","merge_group","merge_queue_entry","milestone","page_build","project","project_card","project_column","public","pull_request","pull_request_review","pull_request_review_comment","pull_request_review_thread","push","registry_package","release","repository","repository_advisory","repository_dispatch","repository_ruleset","secret_scanning_alert","secret_scanning_alert_location","security_and_analysis","star","status","watch","workflow_dispatch","workflow_job","workflow_run"],"created_at":"2023-06-30T16:35:23.000-03:00","updated_at":"2023-06-30T16:35:23.000-03:00","single_file_name":null,"has_multiple_single_files":false,"single_file_paths":[],"suspended_by":null,"suspended_at":null},"repositories":[{"id":599767166,"node_id":"R_kgDOI7-4fg","name":"Test","full_name":"pasaperez-slingr/Test","private":false},{"id":608642720,"node_id":"R_kgDOJEcmoA","name":"API-REST-Test","full_name":"pasaperez-slingr/API-REST-Test","private":false}],"requester":null,"sender":{"login":"pasaperez-slingr","id":119679724,"node_id":"U_kgDOByIq7A","avatar_url":"https://avatars.githubusercontent.com/u/119679724?v=4","gravatar_id":"","url":"https://api.github.com/users/pasaperez-slingr","html_url":"https://github.com/pasaperez-slingr","followers_url":"https://api.github.com/users/pasaperez-slingr/followers","following_url":"https://api.github.com/users/pasaperez-slingr/following{/other_user}","gists_url":"https://api.github.com/users/pasaperez-slingr/gists{/gist_id}","starred_url":"https://api.github.com/users/pasaperez-slingr/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/pasaperez-slingr/subscriptions","organizations_url":"https://api.github.com/users/pasaperez-slingr/orgs","repos_url":"https://api.github.com/users/pasaperez-slingr/repos","events_url":"https://api.github.com/users/pasaperez-slingr/events{/privacy}","received_events_url":"https://api.github.com/users/pasaperez-slingr/received_events","type":"User","site_admin":false},"event_name":"installation"},"type":"ENDPOINT","endpointEvent":"webhook"}
                //saveInstallationInfo(installation);
                sys.storage.put('installationInfo-GitHub---'+installation['account']['login'], installation);
            }
        } else if (eventName.equals("installation_repositories")) {
            installation = body['installation'];
            // update DS

            // {"data":{"action":"updated","security_advisory":{"ghsa_id":"GHSA-jjhj-8gx7-x836","cve_id":"CVE-2018-12028","summary":"Incorrect Access Control in Phusion Passenger","description":"An Incorrect Access Control vulnerability in SpawningKit in Phusion Passenger 5.3.x before 5.3.2 allows a Passenger-managed malicious application, upon spawning a child process, to report an arbitrary different PID back to Passenger's process manager. If the malicious application then generates an error, it would cause Passenger's process manager to kill said reported arbitrary PID.","severity":"high","identifiers":[{"value":"GHSA-jjhj-8gx7-x836","type":"GHSA"},{"value":"CVE-2018-12028","type":"CVE"}],"references":[{"url":"https://nvd.nist.gov/vuln/detail/CVE-2018-12028"},{"url":"https://blog.phusion.nl/passenger-5-3-2"},{"url":"https://security.gentoo.org/glsa/201807-02"},{"url":"https://github.com/phusion/passenger/commit/1e7c82deb4901c438f583737d8c9f2aac264737c"},{"url":"https://github.com/rubysec/ruby-advisory-db/blob/master/gems/passenger/CVE-2018-12028.yml"},{"url":"https://github.com/advisories/GHSA-jjhj-8gx7-x836"}],"published_at":"2022-05-13T01:49:24Z","updated_at":"2023-06-30T19:32:15Z","withdrawn_at":null,"vulnerabilities":[{"package":{"ecosystem":"rubygems","name":"passenger"},"severity":"high","vulnerable_version_range":">= 5.3.0, < 5.3.2","first_patched_version":{"identifier":"5.3.2"}}],"cvss":{"vector_string":"CVSS:3.0/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H","score":7.8},"cwes":[{"cwe_id":"CWE-732","name":"Incorrect Permission Assignment for Critical Resource"}]},"event_name":"security_advisory"},"type":"ENDPOINT","endpointEvent":"webhook"}
            //updateInstallationRepos(installation.json("account").string("login"));

            sys.storage.replace('installationInfo-GitHub---'+installation['account']['login'], installation);
        }
        body['event_name'] = eventName;

        sys.logs.info('Valid webhook received. Triggering event.');
        sys.events.triggerEvent('github:webhook', {
            body: body,
            params: params
        });
        return "ok";
    }
};

function verifySignature(body, signature, secret) {
    if (!secret || secret === "" || !sys.utils.crypto.verifySignatureWithHmac(body, signature, secret, "HmacSHA1")) {
        sys.logs.error("Invalid signature or body");
        return false;
    }
    return true;
}