<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>GitHub package</td>
        <td>February 06, 2023</td>
        <td>Detailed description of the API of the GitHub package.</td>
    </tr>
    </tbody>
</table>

# Overview

The GitHub package allows easily creating apps for GitHub. It provides the following features:

- Management of installations
- OAuth for users
- Shortcuts to access the REST API
- Support for webhooks

To take advantage of this package, we strongly recommend understanding how GitHub Apps work and
what you can do with the REST API:

- [GitHub Apps](https://developer.github.com/apps/)
- [GitHub REST API](https://developer.github.com/v3/)

## Configuration

To configure the package, you will need to create a GitHub App. This can be done in your personal
account or under an organization. Here you can find detailed information on how to do it:

[Registering GitHub Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/)

Once you have created your app, you will be able to configure the package.

### App ID

This is the App ID of your app.

### Client ID

This is the Client ID of your app, which is needed to perform operations on behalf of a user.

### Client secret

This is the client secret of your app, which is needed to perform operations on behalf of a user.

### Callback URL

This is the OAuth callback you need to configure in your GitHub app.

### Webhooks URL

This is the URL you need to set in your GitHub app so webhooks are sent there,
which is needed to perform operations on behalf of an installation.

### Webhooks secret

This is the secret for webhooks configured in your app. It is needed to validate the authenticity of webhooks.

### Private key

The private key can be generated in the details of your GitHub app. 
When you copy it, you do not need to add any line breaks or other especial characters, copy the content of the key.

# Javascript API

The Javascript API of the GitHub package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT`
requests to the [GitHub API](https://docs.github.com/es/rest?apiVersion=2022-11-28) like this:
```javascript
var response = pkg.github.app.get('/repos/:owner/:repo/installation')
var response = pkg.github.app.post('/applications/{client_id}/token/scoped', body)
var response = pkg.github.app.post('/applications/{client_id}/token/scoped')
var response = pkg.github.app.delete('/app/installations/:installation_id/suspended')
var response = pkg.github.app.put('/app/installations/:installation_id/suspended', body)
var response = pkg.github.app.put('/app/installations/:installation_id/suspended')
var response = pkg.github.install.get('/repos/:owner/:repo/stats/commit_activity')
var response = pkg.github.install.post('/repos/:owner/:repo/merges', body)
var response = pkg.github.install.post('/repos/:owner/:repo/merges')
var response = pkg.github.install.delete('/repos/:owner/:repo/pulls/:number/requested_reviewers')
var response = pkg.github.install.patch('/repos/:owner/:repo/comments/:id', body)
var response = pkg.github.install.patch('/repos/:owner/:repo/comments/:id')
var response = pkg.github.install.put('/notifications', body)
var response = pkg.github.install.put('/notifications')

```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>


### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,DELETE,PATCH,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/events<br>/repos/{owner}/{repo}/events<br>/networks/{owner}/{repo}/events<br>/orgs/{org}/events<br>/users/{username}/received_events<br>/users/{username}/events<br>/users/{username}/events/public<br>/users/{username}/events/orgs/{org}<br>/feeds<br>/notifications<br>/repos/{owner}/{repo}/notifications<br>/notifications/threads/{id}<br>/notifications/threads/{id}/subscription<br>/repos/{owner}/{repo}/stargazers<br>/users/{username}/starred<br>/user/starred<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscribers<br>/users/{username}/subscriptions<br>/user/subscriptions<br>/repos/{owner}/{repo}/subscription<br>/users/{username}/gists<br>/gists<br>/gists/{id}<br>/gists/{id}/{sha}<br>/gists/public<br>/gists/starred<br>/gists/{id}/commits<br>/gists/{id}/star<br>/gists/{id}/forks<br>/repos/{owner}/{repo}/git/blobs/{sha}<br>/repos/{owner}/{repo}/git/commits/{sha}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/repos/{owner}/{repo}/git/refs<br>/repos/{owner}/{repo}/git/tags/{sha}<br>/repos/{owner}/{repo}/git/trees/{sha}<br>/apps/{app_slug}<br>/app<br>/app/installations<br>/app/installations/{installation_id}<br>/user/installations<br>/installation/repositories<br>/user/installations/{installation_id}/repositories<br>/marketplace_listing/plans<br>/marketplace_listing/plans/{id}/accounts<br>/marketplace_listing/accounts/{id}<br>/user/marketplace_purchases<br>/issues<br>/user/issues<br>/orgs/{org}/issues<br>/repos/{owner}/{repo}/issues<br>/repos/{owner}/{repo}/issues/{number}<br>/repos/{owner}/{repo}/assignees<br>/repos/{owner}/{repo}/assignees/{assignee}<br>/repos/{owner}/{repo}/issues/{number}/comments<br>/repos/{owner}/{repo}/issues/comments<br>/repos/{owner}/{repo}/issues/{issue_number}/events<br>/repos/{owner}/{repo}/issues/events<br>/repos/{owner}/{repo}/issues/events/{id}<br>/repos/{owner}/{repo}/labels<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones/{number}/labels<br>/repos/{owner}/{repo}/milestones<br>/repos/{owner}/{repo}/milestones/{number}<br>/repos/{owner}/{repo}/issues/{issue_number}/timeline<br>/codes_of_conduct<br>/codes_of_conduct/{key}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/{archive_format}/{ref}<br>/repos/{owner}/{repo}/community/code_of_conduct<br>/emojis<br>/gitignore/templates<br>/gitignore/templates/{name}<br>/licenses<br>/licenses/{license}<br>/repos/{owner}/{repo}/license<br>/meta<br>/rate_limit<br>/user/orgs<br>/organizations<br>/users/{username}/orgs<br>/orgs/{org}<br>/orgs/{org}/members<br>/orgs/{org}/members/{username}<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/public_members<br>/orgs/{org}/invitations<br>/orgs/{org}/memberships/{username}<br>/user/memberships/orgs<br>/user/memberships/orgs/{org}<br>/orgs/{org}/outside_collaborators<br>/orgs/{org}/teams<br>/teams/{id}<br>/teams/{id}/teams<br>/teams/{id}/members<br>/teams/{id}/members/{username}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/invitations<br>/teams/{id}/repos<br>/teams/{id}/repos/{owner}/{repo}<br>/user/teams<br>/orgs/{org}/hooks<br>/orgs/{org}/hooks/{id}<br>/orgs/{org}/blocks<br>/orgs/{org}/blocks/{username}<br>/repos/{owner}/{repo}/projects<br>/orgs/{org}/projects<br>/projects/{id}<br>/projects/columns/{column_id}/cards<br>/projects/columns/cards/{id}<br>/projects/{project_id}/columns<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls<br>/repos/{owner}/{repo}/pulls/{number}<br>/repos/{owner}/{repo}/pulls/{number}/commits<br>/repos/{owner}/{repo}/pulls/{number}/files<br>/repos/{owner}/{repo}/pulls/{number}/merge<br>/repos/{owner}/{repo}/pulls/{number}/reviews<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/comments<br>/repos/{owner}/{repo}/pulls/{number}/comments<br>/repos/{owner}/{repo}/pulls/comments<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/repos/{owner}/{repo}/comments/{id}/reactions<br>/repos/{owner}/{repo}/issues/{number}/reactions<br>/repos/{owner}/{repo}/issues/comments/{id}/reactions<br>/repos/{owner}/{repo}/pulls/comments/{id}/reactions<br>/user/repos<br>/users/{username}/repos<br>/orgs/{org}/repos<br>/repositories<br>/repos/{owner}/{repo}/topics<br>/repos/{owner}/{repo}/contributors<br>/repos/{owner}/{repo}/languages<br>/repos/{owner}/{repo}/teams<br>/repos/{owner}/{repo}/tags<br>/repos/{owner}/{repo}/branches<br>/repos/{owner}/{repo}/branches/{branch}<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/collaborators/{username}/permission<br>/repos/{owner}/{repo}/comments<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/commits/{ref}/comments<br>/repos/{owner}/{name}/community/profile<br>/repos/{owner}/{repo}/commits<br>/repos/{owner}/{repo}/commits/{sha}<br>/repos/{owner}/{repo}/compare/{baseCommitSuspensivePointsHeadCommit}<br>/repos/{owner}/{repo}/readme<br>/repos/{owner}/{repo}/contents/{path}<br>/repos/{owner}/{repo}/keys<br>/repos/{owner}/{repo}/keys/{id}<br>/repos/{owner}/{repo}/deployments<br>/repos/{owner}/{repo}/deployments/{deployment_id}<br>/repos/{owner}/{repo}/deployments/{id}/statuses<br>/repos/{owner}/{repo}/deployments/{id}/statuses/{status_id}<br>/repos/{owner}/{repo}/downloads<br>/repos/{owner}/{repo}/downloads/{id}<br>/repos/{owner}/{repo}/forks<br>/repos/{owner}/{repo}/invitations<br>/user/repository_invitations<br>/repos/{owner}/{repo}/pages<br>/repos/{owner}/{repo}/pages/builds<br>/repos/{owner}/{repo}/pages/builds/{id}<br>/repos/{owner}/{repo}/pages/builds/latest<br>/repos/{owner}/{repo}/releases<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/latest<br>/repos/{owner}/{repo}/releases/tags/{tag}<br>/repos/{owner}/{repo}/releases/{id}/assets<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/stats/contributors<br>/repos/{owner}/{repo}/stats/commit_activity<br>/repos/{owner}/{repo}/stats/code_frequency<br>/repos/{owner}/{repo}/stats/participation<br>/repos/{owner}/{repo}/stats/punch_card<br>/repos/{owner}/{repo}/commits/{ref}/statuses<br>/repos/{owner}/{repo}/commits/{ref}/status<br>/repos/{owner}/{repo}/traffic/popular/referrers<br>/repos/{owner}/{repo}/traffic/popular/paths<br>/repos/{owner}/{repo}/traffic/views<br>/repos/{owner}/{repo}/traffic/clones<br>/repos/{owner}/{repo}/hooks<br>/repos/{owner}/{repo}/hooks/{id}<br>/search/repositories<br>/search/commits<br>/search/code<br>/search/issues<br>/search/users<br>/gists<br>/gists/{id}/forks<br>/repos/{owner}/{repo}/git/blobs<br>/repos/{owner}/{repo}/git/commits<br>/repos/{owner}/{repo}/git/refs<br>/repos/{owner}/{repo}/git/tags<br>/repos/{owner}/{repo}/git/trees<br>/installations/{installation_id}/access_tokens<br>/repos/{owner}/{repo}/issues<br>/repos/{owner}/{repo}/issues/{number}/assignees<br>/repos/{owner}/{repo}/issues/{number}/comments<br>/repos/{owner}/{repo}/labels<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones<br>/markdown<br>/markdown/raw<br>/orgs/{org}/teams<br>/orgs/{org}/hooks<br>/orgs/{org}/hooks/{id}/pings<br>/repos/{owner}/{repo}/projects<br>/orgs/{org}/projects<br>/projects/columns/{column_id}/cards<br>/projects/columns/cards/{id}/moves<br>/projects/{project_id}/columns<br>/projects/columns/{id}/moves<br>/repos/{owner}/{repo}/pulls<br>/repos/{owner}/{repo}/pulls/{number}/reviews<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/events<br>/repos/{owner}/{repo}/pulls/{number}/comments<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/repos/{owner}/{repo}/comments/{id}/reactions<br>/repos/{owner}/{repo}/issues/{number}/reactions<br>/repos/{owner}/{repo}/issues/comments/{id}/reactions<br>/repos/{owner}/{repo}/pulls/comments/{id}/reactions<br>/user/repos<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/commits/{sha}/comments<br>/repos/{owner}/{repo}/keys<br>/repos/{owner}/{repo}/merges<br>/repos/{owner}/{repo}/pages/builds<br>/repos/{owner}/{repo}/releases<br>/repos/{owner}/{repo}/statuses/{sha}<br>/repos/{owner}/{repo}/hooks<br>/repos/{owner}/{repo}/hooks/{id}/tests<br>/repos/{owner}/{repo}/hooks/{id}/pings<br>/notifications/threads/{id}/subscription<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscription<br>/gists/{id}/star<br>/gists/{id}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/user/installations/{installation_id}/repositories/{repository_id}<br>/repos/{owner}/{repo}/issues/{number}/lock<br>/repos/{owner}/{repo}/issues/{number}/assignees<br>/repos/{owner}/{repo}/issues/comments/{id}<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels/{name}<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/repos/{owner}/{repo}/milestones/{number}<br>/orgs/{org}/members/{username}<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/outside_collaborators/{username}<br>/teams/{id}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/repos/{owner}/{repo}<br>/orgs/{org}/hooks/{id}<br>/orgs/{org}/blocks/{username}<br>/projects/{id}<br>/projects/columns/cards/{id}<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}/pulls/{number}/requested_reviewers<br>/reactions/{id}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/contents/{path}<br>/repos/{owner}/{repo}/keys/{id}<br>/repos/{owner}/{repo}/deployments<br>/repos/{owner}/{repo}/deployments/{id}/statuses<br>/repos/{owner}/{repo}/downloads/{id}<br>/repos/{owner}/{repo}/forks<br>/repos/{owner}/{repo}/invitations/{invitation_id}<br>/user/repository_invitations/{invitation_id}<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/hooks/{id}<br>/notifications/threads/{id}<br>/gists/{id}<br>/repos/{owner}/{repo}/git/refs/{ref}<br>/repos/{owner}/{repo}/issues/{number}<br>/repos/{owner}/{repo}/issues/comments/{id}<br>/repos/{owner}/{repo}/labels/{name}<br>/repos/{owner}/{repo}/milestones/{number}<br>/orgs/{org}<br>/user/memberships/orgs/{org}<br>/teams/{id}<br>/orgs/{org}/hooks/{id}<br>/projects/{id}<br>/projects/columns/cards/{id}<br>/projects/columns/{id}<br>/repos/{owner}/{repo}/pulls/{number}<br>/repos/{owner}/{repo}/pulls/comments/{id}<br>/repos/{owner}/{repo}<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews<br>/repos/{owner}/{repo}/comments/{id}<br>/repos/{owner}/{repo}/invitations/{invitation_id}<br>/user/repository_invitations/{invitation_id}<br>/repos/{owner}/{repo}/releases/{id}<br>/repos/{owner}/{repo}/releases/assets/{id}<br>/repos/{owner}/{repo}/hooks/{id}<br>/notifications<br>/repos/{owner}/{repo}/notifications<br>/notifications/threads/{id}/subscription<br>/user/starred/{owner}/{repo}<br>/repos/{owner}/{repo}/subscription<br>/gists/{id}/star<br>/user/installations/{installation_id}/repositories/{repository_id}<br>/repos/{owner}/{repo}/issues/{number}/lock<br>/repos/{owner}/{repo}/issues/{number}/labels<br>/orgs/{org}/public_members/{username}<br>/orgs/{org}/memberships/{username}<br>/orgs/{org}/outside_collaborators/{username}<br>/teams/{id}/members/{username}<br>/teams/{id}/memberships/{username}<br>/teams/{id}/repos/{org}/{repo}<br>/orgs/{org}/blocks/{username}<br>/repos/{owner}/{repo}/pulls/{number}/merge<br>/repos/{owner}/{repo}/pulls/{number}/reviews/{id}/dismissals<br>/repos/{owner}/{repo}/topics<br>/repos/{owner}/{repo}/branches/{branch}/protection<br>/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams<br>/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users<br>/repos/{owner}/{repo}/collaborators/{username}<br>/repos/{owner}/{repo}/contents/{path}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>It Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true, the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty, the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Includes extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, 
take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

### Shortcuts

### Utils

There are some utilities to help you work with data coming from GitHub.

GitHub has timestamps with a format like this: `2013-02-12T13:22:01Z`.

## Dependencies
* HTTP Service (v1.3.8)
* Oauth Package (v1.0.24)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
