/**
 * This flow step will send a request to githubApp to get all the repositories that the authenticated
 * user has explicit permission to access.
 *
 */
step.listReposForUserGithubApp = function () {

	return endpoint.user.repos.get();
};