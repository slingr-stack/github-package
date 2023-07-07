/****************************************************
 Dependencies
 ****************************************************/

var httpService = svc.http;

/****************************************************
 Helpers
 ****************************************************/

exports.events = {};

exports.repos = {};

exports.repos.events = {};

exports.networks = {};

exports.networks.events = {};

exports.orgs = {};

exports.orgs.events = {};

exports.users = {};

exports.users.receivedEvents = {};

exports.users.events = {};

exports.users.events.public = {};

exports.users.events.orgs = {};

exports.feeds = {};

exports.notifications = {};

exports.repos.notifications = {};

exports.notifications.threads = {};

exports.notifications.threads.subscription = {};

exports.repos.stargazers = {};

exports.users.starred = {};

exports.user = {};

exports.user.starred = {};

exports.repos.subscribers = {};

exports.users.subscriptions = {};

exports.user.subscriptions = {};

exports.repos.subscription = {};

exports.users.gists = {};

exports.gists = {};

exports.gists.public = {};

exports.gists.starred = {};

exports.gists.commits = {};

exports.gists.star = {};

exports.gists.forks = {};

exports.repos.git = {};

exports.repos.git.blobs = {};

exports.repos.git.commits = {};

exports.repos.git.refs = {};

exports.repos.git.tags = {};

exports.repos.git.trees = {};

exports.apps = {};

exports.app = {};

exports.app.installations = {};

exports.user.installations = {};

exports.installation = {};

exports.installation.repositories = {};

exports.user.installations.repositories = {};

exports.marketplaceListing = {};

exports.marketplaceListing.plans = {};

exports.marketplaceListing.plans.accounts = {};

exports.marketplaceListing.accounts = {};

exports.user.marketplacePurchases = {};

exports.issues = {};

exports.user.issues = {};

exports.orgs.issues = {};

exports.repos.issues = {};

exports.repos.assignees = {};

exports.repos.issues.comments = {};

exports.repos.issues.events = {};

exports.repos.issues.events.byIssue = {};

exports.repos.labels = {};

exports.repos.issues.labels = {};

exports.repos.milestones = {};

exports.repos.milestones.labels = {};

exports.repos.issues.timeline = {};

exports.codesOfConduct = {};

exports.repos.community = {};

exports.repos.community.codeOfConduct = {};

exports.emojis = {};

exports.gitignore = {};

exports.gitignore.templates = {};

exports.licenses = {};

exports.repos.license = {};

exports.meta = {};

exports.rateLimit = {};

exports.user.orgs = {};

exports.organizations = {};

exports.users.orgs = {};

exports.orgs.members = {};

exports.orgs.publicMembers = {};

exports.orgs.invitations = {};

exports.orgs.memberships = {};

exports.user.memberships = {};

exports.user.memberships.orgs = {};

exports.orgs.outsideCollaborators = {};

exports.orgs.teams = {};

exports.teams = {};

exports.teams.teams = {};

exports.teams.members = {};

exports.teams.memberships = {};

exports.teams.invitations = {};

exports.teams.repos = {};

exports.user.teams = {};

exports.orgs.hooks = {};

exports.orgs.blocks = {};

exports.repos.projects = {};

exports.orgs.projects = {};

exports.projects = {};

exports.projects.columns = {};

exports.projects.columns.cards = {};

exports.projects.columns.cards.byId = {};

exports.projects.columns.byId = {};

exports.repos.pulls = {};

exports.repos.pulls.commits = {};

exports.repos.pulls.files = {};

exports.repos.pulls.merge = {};

exports.repos.pulls.reviews = {};

exports.repos.pulls.reviews.comments = {};

exports.repos.pulls.comments = {};

exports.repos.pulls.comments.byId = {};

exports.repos.pulls.requestedReviewers = {};

exports.repos.comments = {};

exports.repos.comments.reactions = {};

exports.repos.issues.reactions = {};

exports.repos.issues.comments.reactions = {};

exports.repos.pulls.comments.reactions = {};

exports.user.repos = {};

exports.users.repos = {};

exports.orgs.repos = {};

exports.repositories = {};

exports.repos.topics = {};

exports.repos.contributors = {};

exports.repos.languages = {};

exports.repos.teams = {};

exports.repos.tags = {};

exports.repos.branches = {};

exports.repos.branches.protection = {};

exports.repos.branches.protection.requiredStatusChecks = {};

exports.repos.branches.protection.requiredStatusChecks.contexts = {};

exports.repos.branches.protection.requiredPullRequestReviews = {};

exports.repos.branches.protection.enforceAdmins = {};

exports.repos.branches.protection.restrictions = {};

exports.repos.branches.protection.restrictions.teams = {};

exports.repos.branches.protection.restrictions.users = {};

exports.repos.collaborators = {};

exports.repos.collaborators.permission = {};

exports.repos.commits = {};

exports.repos.commits.comments = {};

exports.repos.community.profile = {};

exports.repos.compare = {};

exports.repos.readme = {};

exports.repos.contents = {};

exports.repos.keys = {};

exports.repos.deployments = {};

exports.repos.deployments.statuses = {};

exports.repos.downloads = {};

exports.repos.forks = {};

exports.repos.invitations = {};

exports.user.repositoryInvitations = {};

exports.repos.pages = {};

exports.repos.pages.builds = {};

exports.repos.pages.builds.latest = {};

exports.repos.releases = {};

exports.repos.releases.latest = {};

exports.repos.releases.tags = {};

exports.repos.releases.assets = {};

exports.repos.releases.assets.byId = {};

exports.repos.stats = {};

exports.repos.stats.contributors = {};

exports.repos.stats.commitActivity = {};

exports.repos.stats.codeFrequency = {};

exports.repos.stats.participation = {};

exports.repos.stats.punchCard = {};

exports.repos.commits.statuses = {};

exports.repos.commits.status = {};

exports.repos.traffic = {};

exports.repos.traffic.popular = {};

exports.repos.traffic.popular.referrers = {};

exports.repos.traffic.popular.paths = {};

exports.repos.traffic.views = {};

exports.repos.traffic.clones = {};

exports.repos.hooks = {};

exports.search = {};

exports.search.repositories = {};

exports.search.commits = {};

exports.search.code = {};

exports.search.issues = {};

exports.search.users = {};

exports.installations = {};

exports.installations.accessTokens = {};

exports.repos.issues.assignees = {};

exports.markdown = {};

exports.markdown.raw = {};

exports.orgs.hooks.pings = {};

exports.projects.columns.cards.moves = {};

exports.projects.columns.moves = {};

exports.repos.pulls.reviews.events = {};

exports.repos.merges = {};

exports.repos.statuses = {};

exports.repos.hooks.tests = {};

exports.repos.hooks.pings = {};

exports.repos.issues.lock = {};

exports.reactions = {};

exports.repos.pulls.reviews.dismissals = {};

exports.events.get = function(httpOptions) {
    var url = parse('/events');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.events.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/events', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.networks.events.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/networks/:owner/:repo/events', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.events.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/events', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.receivedEvents.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/received_events', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.events.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/events', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.events.public.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/events/public', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.events.orgs.get = function(username, org, httpOptions) {
    if (!username || !org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username,org].');
        return;
    }
    var url = parse('/users/:username/events/orgs/:org', [username, org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.feeds.get = function(httpOptions) {
    var url = parse('/feeds');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.notifications.get = function(httpOptions) {
    var url = parse('/notifications');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.notifications.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/notifications', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.notifications.threads.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.notifications.threads.subscription.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stargazers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stargazers', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.starred.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/starred', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.starred.get = function(owner, repo, httpOptions) {
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
			url = parse('/user/starred');
			break;
		case 2:
			url = parse('/user/starred/:owner/:repo', [owner, repo]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.subscribers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscribers', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.subscriptions.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/subscriptions', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.subscriptions.get = function(httpOptions) {
    var url = parse('/user/subscriptions');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.subscription.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.gists.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/gists', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.get = function(id, sha, httpOptions) {
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
			url = parse('/gists');
			break;
		case 1:
			url = parse('/gists/:id', [id]);
			break;
		case 2:
			url = parse('/gists/:id/:sha', [id, sha]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.gists.public.get = function(httpOptions) {
    var url = parse('/gists/public');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.starred.get = function(httpOptions) {
    var url = parse('/gists/starred');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.commits.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/commits', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.star.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.forks.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/forks', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.git.blobs.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/blobs/:sha', [owner, repo, sha]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.git.commits.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/commits/:sha', [owner, repo, sha]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.git.refs.get = function(owner, repo, ref, httpOptions) {
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
        case 3:
			url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
			break;
		case 2:
			url = parse('/repos/:owner/:repo/git/refs', [owner, repo]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.git.tags.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/tags/:sha', [owner, repo, sha]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.git.trees.get = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/trees/:sha', [owner, repo, sha]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
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

exports.app.get = function(httpOptions) {
    var url = parse('/app');
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

exports.user.installations.get = function(httpOptions) {
    var url = parse('/user/installations');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.installation.repositories.get = function(httpOptions) {
    var url = parse('/installation/repositories');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.installations.repositories.get = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories', [installationId]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.marketplaceListing.plans.get = function(httpOptions) {
    var url = parse('/marketplace_listing/plans');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.marketplaceListing.plans.accounts.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/marketplace_listing/plans/:id/accounts', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.marketplaceListing.accounts.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/marketplace_listing/accounts/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.marketplacePurchases.get = function(httpOptions) {
    var url = parse('/user/marketplace_purchases');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.issues.get = function(httpOptions) {
    var url = parse('/issues');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.issues.get = function(httpOptions) {
    var url = parse('/user/issues');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.issues.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/issues', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.issues.get = function(owner, repo, number, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/issues', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/issues/:number', [owner, repo, number]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.assignees.get = function(owner, repo, assignee, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/assignees', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/assignees/:assignee', [owner, repo, assignee]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.issues.comments.get = function(owner, repo, number, httpOptions) {
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
        case 3:
			url = parse('/repos/:owner/:repo/issues/:number/comments', [owner, repo, number]);
			break;
		case 2:
			url = parse('/repos/:owner/:repo/issues/comments', [owner, repo]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.issues.events.byIssue.get = function(owner, repo, issueNumber, httpOptions) {
    if (!owner || !repo || !issueNumber) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,issueNumber].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:issue_number/events', [owner, repo, issueNumber]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.issues.events.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/issues/events', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/issues/events/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.labels.get = function(owner, repo, name, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/labels', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.issues.labels.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.milestones.labels.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number/labels', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.milestones.get = function(owner, repo, number, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/milestones', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.issues.timeline.get = function(owner, repo, issueNumber, httpOptions) {
    if (!owner || !repo || !issueNumber) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,issueNumber].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:issue_number/timeline', [owner, repo, issueNumber]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.codesOfConduct.get = function(key, httpOptions) {
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
			url = parse('/codes_of_conduct');
			break;
		case 1:
			url = parse('/codes_of_conduct/:key', [key]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.get = function(owner, repo, archiveFormat, ref, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo', [owner, repo]);
			break;
		case 4:
			url = parse('/repos/:owner/:repo/:archive_format/:ref', [owner, repo, archiveFormat, ref]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.community.codeOfConduct.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/community/code_of_conduct', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.emojis.get = function(httpOptions) {
    var url = parse('/emojis');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gitignore.templates.get = function(name, httpOptions) {
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
			url = parse('/gitignore/templates');
			break;
		case 1:
			url = parse('/gitignore/templates/:name', [name]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.licenses.get = function(license, httpOptions) {
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
			url = parse('/licenses');
			break;
		case 1:
			url = parse('/licenses/:license', [license]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.license.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/license', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.meta.get = function(httpOptions) {
    var url = parse('/meta');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.rateLimit.get = function(httpOptions) {
    var url = parse('/rate_limit');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.orgs.get = function(httpOptions) {
    var url = parse('/user/orgs');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.organizations.get = function(httpOptions) {
    var url = parse('/organizations');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.orgs.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/orgs', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.members.get = function(org, username, httpOptions) {
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
        case 1:
			url = parse('/orgs/:org/members', [org]);
			break;
		case 2:
			url = parse('/orgs/:org/members/:username', [org, username]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.orgs.publicMembers.get = function(org, username, httpOptions) {
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
        case 2:
			url = parse('/orgs/:org/public_members/:username', [org, username]);
			break;
		case 1:
			url = parse('/orgs/:org/public_members', [org]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.orgs.invitations.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/invitations', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.memberships.get = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/memberships/:username', [org, username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.memberships.orgs.get = function(org, httpOptions) {
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
			url = parse('/user/memberships/orgs');
			break;
		case 1:
			url = parse('/user/memberships/orgs/:org', [org]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.orgs.outsideCollaborators.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.teams.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/teams', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.teams.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.teams.teams.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id/teams', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.teams.members.get = function(id, username, httpOptions) {
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
        case 1:
			url = parse('/teams/:id/members', [id]);
			break;
		case 2:
			url = parse('/teams/:id/members/:username', [id, username]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.teams.memberships.get = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.teams.invitations.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id/invitations', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.teams.repos.get = function(id, owner, repo, httpOptions) {
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
        case 1:
			url = parse('/teams/:id/repos', [id]);
			break;
		case 3:
			url = parse('/teams/:id/repos/:owner/:repo', [id, owner, repo]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.user.teams.get = function(httpOptions) {
    var url = parse('/user/teams');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.hooks.get = function(org, id, httpOptions) {
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
        case 1:
			url = parse('/orgs/:org/hooks', [org]);
			break;
		case 2:
			url = parse('/orgs/:org/hooks/:id', [org, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.orgs.blocks.get = function(org, username, httpOptions) {
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
        case 1:
			url = parse('/orgs/:org/blocks', [org]);
			break;
		case 2:
			url = parse('/orgs/:org/blocks/:username', [org, username]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.projects.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/projects', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.projects.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/projects', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.projects.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.projects.columns.cards.get = function(columnId, httpOptions) {
    if (!columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [columnId].');
        return;
    }
    var url = parse('/projects/columns/:column_id/cards', [columnId]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.projects.columns.cards.byId.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.projects.columns.get = function(projectId, httpOptions) {
    if (!projectId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [projectId].');
        return;
    }
    var url = parse('/projects/:project_id/columns', [projectId]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.projects.columns.byId.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id', [id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.get = function(owner, repo, number, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/pulls', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/pulls/:number', [owner, repo, number]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.pulls.commits.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/commits', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.files.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/files', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.merge.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/merge', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.reviews.get = function(owner, repo, number, id, httpOptions) {
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
        case 3:
			url = parse('/repos/:owner/:repo/pulls/:number/reviews', [owner, repo, number]);
			break;
		case 4:
			url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id', [owner, repo, number, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.pulls.reviews.comments.get = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/comments', [owner, repo, number, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.comments.get = function(owner, repo, number, httpOptions) {
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
        case 3:
			url = parse('/repos/:owner/:repo/pulls/:number/comments', [owner, repo, number]);
			break;
		case 2:
			url = parse('/repos/:owner/:repo/pulls/comments', [owner, repo]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.pulls.comments.byId.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.requestedReviewers.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.issues.reactions.get = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/reactions', [owner, repo, number]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.issues.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pulls.comments.reactions.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.repos.get = function(httpOptions) {
    var url = parse('/user/repos');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.users.repos.get = function(username, httpOptions) {
    if (!username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [username].');
        return;
    }
    var url = parse('/users/:username/repos', [username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.orgs.repos.get = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/repos', [org]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repositories.get = function(httpOptions) {
    var url = parse('/repositories');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.topics.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/topics', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.contributors.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contributors', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.languages.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/languages', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.teams.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/teams', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.tags.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/tags', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.get = function(owner, repo, branch, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/branches', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/branches/:branch', [owner, repo, branch]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.branches.protection.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.contexts.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.requiredPullRequestReviews.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.enforceAdmins.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.restrictions.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.restrictions.teams.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.branches.protection.restrictions.users.get = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.collaborators.get = function(owner, repo, username, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/collaborators', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.collaborators.permission.get = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username/permission', [owner, repo, username]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.comments.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/comments', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.commits.comments.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/comments', [owner, repo, ref]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.community.profile.get = function(owner, name, httpOptions) {
    if (!owner || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,name].');
        return;
    }
    var url = parse('/repos/:owner/:name/community/profile', [owner, name]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.commits.get = function(owner, repo, sha, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/commits', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/commits/:sha', [owner, repo, sha]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.compare.get = function(owner, repo, baseCommitSuspensivePointsHeadCommit, httpOptions) {
    if (!owner || !repo || !baseCommitSuspensivePointsHeadCommit) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,baseCommitSuspensivePointsHeadCommit].');
        return;
    }
    var url = parse('/repos/:owner/:repo/compare/:baseCommitSuspensivePointsHeadCommit', [owner, repo, baseCommitSuspensivePointsHeadCommit]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.readme.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/readme', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.contents.get = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.keys.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/keys', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/keys/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.deployments.get = function(owner, repo, deploymentId, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/deployments', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/deployments/:deployment_id', [owner, repo, deploymentId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.deployments.statuses.get = function(owner, repo, id, statusId, httpOptions) {
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
        case 3:
			url = parse('/repos/:owner/:repo/deployments/:id/statuses', [owner, repo, id]);
			break;
		case 4:
			url = parse('/repos/:owner/:repo/deployments/:id/statuses/:status_id', [owner, repo, id, statusId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.downloads.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/downloads', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/downloads/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.forks.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/forks', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.invitations.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.user.repositoryInvitations.get = function(httpOptions) {
    var url = parse('/user/repository_invitations');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pages.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.pages.builds.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/pages/builds', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/pages/builds/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.pages.builds.latest.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages/builds/latest', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.releases.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/releases', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.repos.releases.latest.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/latest', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.releases.tags.get = function(owner, repo, tag, httpOptions) {
    if (!owner || !repo || !tag) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,tag].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/tags/:tag', [owner, repo, tag]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.releases.assets.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/:id/assets', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.releases.assets.byId.get = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stats.contributors.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/contributors', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stats.commitActivity.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/commit_activity', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stats.codeFrequency.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/code_frequency', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stats.participation.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/participation', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.stats.punchCard.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/stats/punch_card', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.commits.statuses.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/statuses', [owner, repo, ref]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.commits.status.get = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:ref/status', [owner, repo, ref]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.traffic.popular.referrers.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/popular/referrers', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.traffic.popular.paths.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/popular/paths', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.traffic.views.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/views', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.traffic.clones.get = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/traffic/clones', [owner, repo]);
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.repos.hooks.get = function(owner, repo, id, httpOptions) {
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
        case 2:
			url = parse('/repos/:owner/:repo/hooks', [owner, repo]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Github(options));
};

exports.search.repositories.get = function(httpOptions) {
    var url = parse('/search/repositories');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.search.commits.get = function(httpOptions) {
    var url = parse('/search/commits');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.search.code.get = function(httpOptions) {
    var url = parse('/search/code');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.search.issues.get = function(httpOptions) {
    var url = parse('/search/issues');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.search.users.get = function(httpOptions) {
    var url = parse('/search/users');
    sys.logs.debug('[github] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Github(options));
};

exports.gists.post = function(httpOptions) {
    var url = parse('/gists');
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.gists.forks.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/forks', [id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.git.blobs.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/blobs', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.git.commits.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/commits', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.git.refs.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.git.tags.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/tags', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.git.trees.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/trees', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.installations.accessTokens.post = function(installationId, httpOptions) {
    if (!installationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId].');
        return;
    }
    var url = parse('/installations/:installation_id/access_tokens', [installationId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.assignees.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/assignees', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.comments.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/comments', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.labels.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.labels.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.milestones.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.markdown.post = function(httpOptions) {
    var url = parse('/markdown');
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.markdown.raw.post = function(httpOptions) {
    var url = parse('/markdown/raw');
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.orgs.teams.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/teams', [org]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.orgs.hooks.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/hooks', [org]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.orgs.hooks.pings.post = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id/pings', [org, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.projects.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/projects', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.orgs.projects.post = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org/projects', [org]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.projects.columns.cards.post = function(columnId, httpOptions) {
    if (!columnId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [columnId].');
        return;
    }
    var url = parse('/projects/columns/:column_id/cards', [columnId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.projects.columns.cards.moves.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id/moves', [id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.projects.columns.post = function(projectId, httpOptions) {
    if (!projectId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [projectId].');
        return;
    }
    var url = parse('/projects/:project_id/columns', [projectId]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.projects.columns.moves.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id/moves', [id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.reviews.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.reviews.events.post = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/events', [owner, repo, number, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.comments.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/comments', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.requestedReviewers.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.reactions.post = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/reactions', [owner, repo, number]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.issues.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pulls.comments.reactions.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id/reactions', [owner, repo, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.user.repos.post = function(httpOptions) {
    var url = parse('/user/repos');
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.contexts.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.branches.protection.enforceAdmins.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.branches.protection.restrictions.teams.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.branches.protection.restrictions.users.post = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.commits.comments.post = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/commits/:sha/comments', [owner, repo, sha]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.keys.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/keys', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.merges.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/merges', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.pages.builds.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pages/builds', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.releases.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.statuses.post = function(owner, repo, sha, httpOptions) {
    if (!owner || !repo || !sha) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,sha].');
        return;
    }
    var url = parse('/repos/:owner/:repo/statuses/:sha', [owner, repo, sha]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.hooks.post = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks', [owner, repo]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.hooks.tests.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id/tests', [owner, repo, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.repos.hooks.pings.post = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id/pings', [owner, repo, id]);
    sys.logs.debug('[github] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Github(options));
};

exports.notifications.threads.subscription.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.user.starred.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/user/starred/:owner/:repo', [owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.subscription.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.gists.star.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.gists.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.git.refs.delete = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.user.installations.repositories.delete = function(installationId, repositoryId, httpOptions) {
    if (!installationId || !repositoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId,repositoryId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories/:repository_id', [installationId, repositoryId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.issues.lock.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/lock', [owner, repo, number]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.issues.assignees.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/assignees', [owner, repo, number]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.issues.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.labels.delete = function(owner, repo, name, httpOptions) {
    if (!owner || !repo || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,name].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.issues.labels.delete = function(owner, repo, number, name, httpOptions) {
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
        case 4:
			url = parse('/repos/:owner/:repo/issues/:number/labels/:name', [owner, repo, number, name]);
			break;
		case 3:
			url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[github] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.delete(Github(options));
};

exports.repos.milestones.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.members.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/members/:username', [org, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.publicMembers.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/public_members/:username', [org, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.memberships.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/memberships/:username', [org, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.outsideCollaborators.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators/:username', [org, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.teams.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.teams.memberships.delete = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.teams.repos.delete = function(id, owner, repo, httpOptions) {
    if (!id || !owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,owner,repo].');
        return;
    }
    var url = parse('/teams/:id/repos/:owner/:repo', [id, owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.hooks.delete = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id', [org, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.orgs.blocks.delete = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/blocks/:username', [org, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.projects.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.projects.columns.cards.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.projects.columns.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.pulls.reviews.delete = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id', [owner, repo, number, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.pulls.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.pulls.requestedReviewers.delete = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/requested_reviewers', [owner, repo, number]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.reactions.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/reactions/:id', [id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo', [owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.contexts.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.requiredPullRequestReviews.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.enforceAdmins.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/enforce_admins', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.restrictions.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.restrictions.teams.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.branches.protection.restrictions.users.delete = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.collaborators.delete = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.comments.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.contents.delete = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.keys.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/keys/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.deployments.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/deployments', [owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.deployments.statuses.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/deployments/:id/statuses', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.downloads.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/downloads/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.forks.delete = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/forks', [owner, repo]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.invitations.delete = function(owner, repo, invitationId, httpOptions) {
    if (!owner || !repo || !invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,invitationId].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations/:invitation_id', [owner, repo, invitationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.user.repositoryInvitations.delete = function(invitationId, httpOptions) {
    if (!invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invitationId].');
        return;
    }
    var url = parse('/user/repository_invitations/:invitation_id', [invitationId]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.releases.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.releases.assets.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.repos.hooks.delete = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
    sys.logs.debug('[github] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Github(options));
};

exports.notifications.threads.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.gists.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.git.refs.patch = function(owner, repo, ref, httpOptions) {
    if (!owner || !repo || !ref) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,ref].');
        return;
    }
    var url = parse('/repos/:owner/:repo/git/refs/:ref', [owner, repo, ref]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.issues.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number', [owner, repo, number]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.issues.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.labels.patch = function(owner, repo, name, httpOptions) {
    if (!owner || !repo || !name) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,name].');
        return;
    }
    var url = parse('/repos/:owner/:repo/labels/:name', [owner, repo, name]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.milestones.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/milestones/:number', [owner, repo, number]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.orgs.patch = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/orgs/:org', [org]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.user.memberships.orgs.patch = function(org, httpOptions) {
    if (!org) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org].');
        return;
    }
    var url = parse('/user/memberships/orgs/:org', [org]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.teams.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/teams/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.orgs.hooks.patch = function(org, id, httpOptions) {
    if (!org || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,id].');
        return;
    }
    var url = parse('/orgs/:org/hooks/:id', [org, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.projects.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.projects.columns.cards.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/cards/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.projects.columns.patch = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/projects/columns/:id', [id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.pulls.patch = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number', [owner, repo, number]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.pulls.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.patch = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo', [owner, repo]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.patch = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks', [owner, repo, branch]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.branches.protection.requiredPullRequestReviews.patch = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews', [owner, repo, branch]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.comments.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/comments/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.invitations.patch = function(owner, repo, invitationId, httpOptions) {
    if (!owner || !repo || !invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,invitationId].');
        return;
    }
    var url = parse('/repos/:owner/:repo/invitations/:invitation_id', [owner, repo, invitationId]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.user.repositoryInvitations.patch = function(invitationId, httpOptions) {
    if (!invitationId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [invitationId].');
        return;
    }
    var url = parse('/user/repository_invitations/:invitation_id', [invitationId]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.releases.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.releases.assets.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/releases/assets/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.repos.hooks.patch = function(owner, repo, id, httpOptions) {
    if (!owner || !repo || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/hooks/:id', [owner, repo, id]);
    sys.logs.debug('[github] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Github(options));
};

exports.notifications.put = function(httpOptions) {
    var url = parse('/notifications');
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.notifications.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/notifications', [owner, repo]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.notifications.threads.subscription.put = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/notifications/threads/:id/subscription', [id]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.user.starred.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/user/starred/:owner/:repo', [owner, repo]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.subscription.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/subscription', [owner, repo]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.gists.star.put = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/gists/:id/star', [id]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.user.installations.repositories.put = function(installationId, repositoryId, httpOptions) {
    if (!installationId || !repositoryId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [installationId,repositoryId].');
        return;
    }
    var url = parse('/user/installations/:installation_id/repositories/:repository_id', [installationId, repositoryId]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.issues.lock.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/lock', [owner, repo, number]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.issues.labels.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/issues/:number/labels', [owner, repo, number]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.orgs.publicMembers.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/public_members/:username', [org, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.orgs.memberships.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/memberships/:username', [org, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.orgs.outsideCollaborators.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/outside_collaborators/:username', [org, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.teams.members.put = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/members/:username', [id, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.teams.memberships.put = function(id, username, httpOptions) {
    if (!id || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,username].');
        return;
    }
    var url = parse('/teams/:id/memberships/:username', [id, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.teams.repos.put = function(id, org, repo, httpOptions) {
    if (!id || !org || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,org,repo].');
        return;
    }
    var url = parse('/teams/:id/repos/:org/:repo', [id, org, repo]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.orgs.blocks.put = function(org, username, httpOptions) {
    if (!org || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [org,username].');
        return;
    }
    var url = parse('/orgs/:org/blocks/:username', [org, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.pulls.merge.put = function(owner, repo, number, httpOptions) {
    if (!owner || !repo || !number) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/merge', [owner, repo, number]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.pulls.reviews.dismissals.put = function(owner, repo, number, id, httpOptions) {
    if (!owner || !repo || !number || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,number,id].');
        return;
    }
    var url = parse('/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals', [owner, repo, number, id]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.topics.put = function(owner, repo, httpOptions) {
    if (!owner || !repo) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo].');
        return;
    }
    var url = parse('/repos/:owner/:repo/topics', [owner, repo]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.branches.protection.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection', [owner, repo, branch]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.branches.protection.requiredStatusChecks.contexts.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts', [owner, repo, branch]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.branches.protection.restrictions.teams.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/teams', [owner, repo, branch]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.branches.protection.restrictions.users.put = function(owner, repo, branch, httpOptions) {
    if (!owner || !repo || !branch) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,branch].');
        return;
    }
    var url = parse('/repos/:owner/:repo/branches/:branch/protection/restrictions/users', [owner, repo, branch]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.collaborators.put = function(owner, repo, username, httpOptions) {
    if (!owner || !repo || !username) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,username].');
        return;
    }
    var url = parse('/repos/:owner/:repo/collaborators/:username', [owner, repo, username]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
};

exports.repos.contents.put = function(owner, repo, path, httpOptions) {
    if (!owner || !repo || !path) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [owner,repo,path].');
        return;
    }
    var url = parse('/repos/:owner/:repo/contents/:path', [owner, repo, path]);
    sys.logs.debug('[github] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Github(options));
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

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[github] Get property: '+property);
    return config.get(property);
};

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
    sys.logs.debug('[github] Setting header token');

    var account;
    if (options.account !== undefined) {
        account = options.account
    }
    else {
        throw new Error('[github] the value in httpOptions.account is undefined and is required.');
    }
    var token = getAccessTokenForAccount(account);

    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Authorization": "token " + token});
    if (headers.Accept === undefined || headers.Accept === null || headers.Accept === "") {
        headers = mergeJSON(headers, {"Accept": "application/vnd.github.machine-man-preview+json"});
    }

    options.headers = headers;
    return options;
}

function getAccessTokenForAccount(account) {
    var installationJson = sys.storage.put('installationInfo-GitHub---'+account);
    if (installationJson == null) {
        throw new Error("Installation for account "+account+" was not found");
    }

    var token;

    if (token == null || token['expiration'] == null || token['expiration']< new Date()) {
        var res = httpService.post(setApiUri({
            path: "/app/installations/" + installationInfo['id'] + "/access_tokens",
            headers: {
                "Authorization": "Bearer " + getJsonWebToken(),
                "Accept": "application/vnd.github.machine-man-preview+json"
            }
        }));
        token = res['token'];
        var expiration = new Date(new Date(res["expires_at"]) - 1 * 60 * 1000);

        installationJson = mergeJSON(installationJson, {"token": token, "expiration": expiration});
        sys.storage.replace('installationInfo-GitHub---'+installation['account']['login'], installationJson);
    }
    return token;
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