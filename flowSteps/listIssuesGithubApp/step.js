/**
 * This flow step will send a request to githubApp to get all the user's issues.
 *
 */
step.listIssuesGithubApp = function () {

	return pkg.github.user.repos.issues.get();
};

/*
,
        {
            "type": "flowStep",
            "namespace": "steps",
            "path": "/flowSteps/listIssuesGithub"
        },
        {
            "type": "flowStep",
            "namespace": "steps",
            "path": "/flowSteps/listReposForUserGithub"
        }
 */