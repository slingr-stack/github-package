/**
 * This flow step will send a request to githubApp to get all the user's issues.
 *
 */
step.listIssuesGithubApp = function () {

	return endpoint.repos.issues.get();
};