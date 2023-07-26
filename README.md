<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Github package</td>
        <td>June 30, 2023</td>
        <td>Detailed description of the API of the GitHub package.</td>
    </tr>
    </tbody>
</table>

# Overview

The GitHub package allows to easily create apps for GitHub. It provides the following features:

- Management of installations
- OAuth for users
- Shortcuts to access the REST API
- Support for webhooks

In order to take advantage of this endpoint we strongly recommend to understand how GitHub Apps work and
what you can do with the REST API:

- [GitHub Apps](https://developer.github.com/apps/)
- [GitHub REST API](https://developer.github.com/v3/)

## Configuration

In order to configure the endpoint you will need to create a GitHub App. This can be done in your personal
account or under an organization. Here you can find detailed information on how to do it:

[Registering GitHub Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/)

Once you have created your app you will be able to configure the endpoint.

### App ID

This is the App ID of your app.

### Client ID

This is the Client ID of your app, which is needed in order to perform operations on behalf of a user.

### Client secret

This is the client secret of your app, which is needed in order to perform operations on behalf of a user.

### Callback URL

This is the OAuth callback you need to configure in your GitHub app.

### Webhooks URL

This is the URL you need to set in your GitHub app so webhooks are sent there, which is needed in order to perform operations on behalf of an installation.

### Webhooks secret

This is the secret for webhooks configured in your app. It is needed to validate the authenticity of webhooks.

### Private key

The private key can be generated in the details of your GitHub app. When you copy it you do not need to add any line breaks or other especial characters, just copy the content of the key.

# Quick start

Once your endpoint is configured, you can read an issue like this:

```js
var issue = pkg.github.user.repos.issues.get('repo-owner', 'repo-name', 123);
```

And can post a comment to the issue with this code:

```js
var newComment = pkg.github.user.repos.issues.comments.post('repo-owner', 'repo-name', 123, {body: 'test comment'});
```

# Javascript API

The Javascript API of the GitHub endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT` requests to the [github API](https://docs.github.com/es/rest?apiVersion=2022-11-28) like this:
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

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/app'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.app.get()
```
---
* API URL: '/app/installation-requests'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.app.installationRequests.get()
```
---
* API URL: '/app/installations'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.app.installations.get()
```
---
* API URL: '/app/installations/:installation_id'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.app.installations.get()
```
---
* API URL: '/apps/:app_slug'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.apps.get(appSlug)
```
---
* API URL: '/orgs/:org/installation'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.orgs.installation.get(org)
```
---
* API URL: '/repos/:owner/:repo/installation'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.repos.installation.get(owner, repo)
```
---
* API URL: '/users/:username/installation'
* HTTP Method: 'GET'
```javascript
pkg.github.app.app.users.installation.get(username)
```
---
* API URL: '/app-manifests/:code/conversions'
* HTTP Method: 'POST'
```javascript
pkg.github.app.app.appManifests.conversions.post(body)
```
---
* API URL: '/app/installations/:installation_id/access_tokens'
* HTTP Method: 'POST'
```javascript
pkg.github.app.app.app.installations.accessTokens.post(installationId, body)
```
---
* API URL: '/applications/:client_id/token/scoped'
* HTTP Method: 'POST'
```javascript
pkg.github.app.app.applications.token.scoped.post(body)
```
---
* API URL: '/app/installations/:installation_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.app.app.app.installations.delete(installationId)
```
---
* API URL: '/app/installations/:installation_id/suspended'
* HTTP Method: 'DELETE'
```javascript
pkg.github.app.app.app.installations.suspended.delete(installationId)
```
---
* API URL: '/app/installations/:installation_id/suspended'
* HTTP Method: 'PUT'
```javascript
pkg.github.app.app.app.installations.suspended.put(installationId, body)
```
---
* API URL: '/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.events.get()
```
---
* API URL: '/repos/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.events.get(owner, repo)
```
---
* API URL: '/networks/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.networks.events.get(owner, repo)
```
---
* API URL: '/orgs/:org/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.events.get(org)
```
---
* API URL: '/users/:username/received_events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.receivedEvents.get(username)
```
---
* API URL: '/users/:username/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.events.get(username)
```
---
* API URL: '/users/:username/events/public'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.events.public.get(username)
```
---
* API URL: '/users/:username/events/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.events.orgs.get(username, org)
```
---
* API URL: '/feeds'
* HTTP Method: 'GET'
```javascript
pkg.github.install.feeds.get()
```
---
* API URL: '/notifications'
* HTTP Method: 'GET'
```javascript
pkg.github.install.notifications.get()
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.notifications.get(owner, repo)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.notifications.threads.get(id)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'GET'
```javascript
pkg.github.install.notifications.threads.subscription.get(id)
```
---
* API URL: '/repos/:owner/:repo/stargazers'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stargazers.get(owner, repo)
```
---
* API URL: '/users/:username/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.starred.get(username)
```
---
* API URL: '/user/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.starred.get()
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.starred.get(owner)
```
---
* API URL: '/repos/:owner/:repo/subscribers'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.subscribers.get(owner, repo)
```
---
* API URL: '/users/:username/subscriptions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.subscriptions.get(username)
```
---
* API URL: '/user/subscriptions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.subscriptions.get()
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.subscription.get(owner, repo)
```
---
* API URL: '/users/:username/gists'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.gists.get(username)
```
---
* API URL: '/gists'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.get()
```
---
* API URL: '/gists/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.get()
```
---
* API URL: '/gists/:id/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.get(id)
```
---
* API URL: '/gists/public'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.public.get()
```
---
* API URL: '/gists/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.starred.get()
```
---
* API URL: '/gists/:id/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.commits.get(id)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.star.get(id)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gists.forks.get(id)
```
---
* API URL: '/repos/:owner/:repo/git/blobs/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.blobs.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/commits/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.commits.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.refs.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.refs.get(owner)
```
---
* API URL: '/repos/:owner/:repo/git/tags/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.tags.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/trees/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.git.trees.get(owner, repo, sha)
```
---
* API URL: '/apps/:app_slug'
* HTTP Method: 'GET'
```javascript
pkg.github.install.apps.get(appSlug)
```
---
* API URL: '/app'
* HTTP Method: 'GET'
```javascript
pkg.github.install.app.get()
```
---
* API URL: '/app/installations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.app.installations.get()
```
---
* API URL: '/app/installations/:installation_id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.app.installations.get()
```
---
* API URL: '/user/installations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.installations.get()
```
---
* API URL: '/installation/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.install.installation.repositories.get()
```
---
* API URL: '/user/installations/:installation_id/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.installations.repositories.get(installationId)
```
---
* API URL: '/marketplace_listing/plans'
* HTTP Method: 'GET'
```javascript
pkg.github.install.marketplaceListing.plans.get()
```
---
* API URL: '/marketplace_listing/plans/:id/accounts'
* HTTP Method: 'GET'
```javascript
pkg.github.install.marketplaceListing.plans.accounts.get(id)
```
---
* API URL: '/marketplace_listing/accounts/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.marketplaceListing.accounts.get(id)
```
---
* API URL: '/user/marketplace_purchases'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.marketplacePurchases.get()
```
---
* API URL: '/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.install.issues.get()
```
---
* API URL: '/user/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.issues.get()
```
---
* API URL: '/orgs/:org/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.issues.get(org)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/assignees'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.assignees.get(owner)
```
---
* API URL: '/repos/:owner/:repo/assignees/:assignee'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.assignees.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.events.byIssue.get(owner, repo, issueNumber)
```
---
* API URL: '/repos/:owner/:repo/issues/events'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.events.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/events/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.events.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.labels.get(owner)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.labels.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.milestones.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.milestones.get(owner)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.milestones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/timeline'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.timeline.get(owner, repo, issueNumber)
```
---
* API URL: '/codes_of_conduct'
* HTTP Method: 'GET'
```javascript
pkg.github.install.codesOfConduct.get()
```
---
* API URL: '/codes_of_conduct/:key'
* HTTP Method: 'GET'
```javascript
pkg.github.install.codesOfConduct.get()
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.get(owner)
```
---
* API URL: '/repos/:owner/:repo/:archive_format/:ref'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.get(owner, repo, archiveFormat)
```
---
* API URL: '/repos/:owner/:repo/community/code_of_conduct'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.community.codeOfConduct.get(owner, repo)
```
---
* API URL: '/emojis'
* HTTP Method: 'GET'
```javascript
pkg.github.install.emojis.get()
```
---
* API URL: '/gitignore/templates'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gitignore.templates.get()
```
---
* API URL: '/gitignore/templates/:name'
* HTTP Method: 'GET'
```javascript
pkg.github.install.gitignore.templates.get()
```
---
* API URL: '/licenses'
* HTTP Method: 'GET'
```javascript
pkg.github.install.licenses.get()
```
---
* API URL: '/licenses/:license'
* HTTP Method: 'GET'
```javascript
pkg.github.install.licenses.get()
```
---
* API URL: '/repos/:owner/:repo/license'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.license.get(owner, repo)
```
---
* API URL: '/meta'
* HTTP Method: 'GET'
```javascript
pkg.github.install.meta.get()
```
---
* API URL: '/rate_limit'
* HTTP Method: 'GET'
```javascript
pkg.github.install.rateLimit.get()
```
---
* API URL: '/user/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.orgs.get()
```
---
* API URL: '/organizations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.organizations.get()
```
---
* API URL: '/users/:username/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.orgs.get(username)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.get(org)
```
---
* API URL: '/orgs/:org/members'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.members.get()
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.members.get(org)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.publicMembers.get(org)
```
---
* API URL: '/orgs/:org/public_members'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.publicMembers.get()
```
---
* API URL: '/orgs/:org/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.invitations.get(org)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.memberships.get(org, username)
```
---
* API URL: '/user/memberships/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.memberships.orgs.get()
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.memberships.orgs.get()
```
---
* API URL: '/orgs/:org/outside_collaborators'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.outsideCollaborators.get(org)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.teams.get(org)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.get(id)
```
---
* API URL: '/teams/:id/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.teams.get(id)
```
---
* API URL: '/teams/:id/members'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.members.get()
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.members.get(id)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.memberships.get(id, username)
```
---
* API URL: '/teams/:id/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.invitations.get(id)
```
---
* API URL: '/teams/:id/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.repos.get()
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.install.teams.repos.get(id, owner)
```
---
* API URL: '/user/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.teams.get()
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.hooks.get()
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.hooks.get(org)
```
---
* API URL: '/orgs/:org/blocks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.blocks.get()
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.blocks.get(org)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.projects.get(owner, repo)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.projects.get(org)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.projects.get(id)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'GET'
```javascript
pkg.github.install.projects.columns.cards.get(columnId)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.projects.columns.cards.byId.get(id)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'GET'
```javascript
pkg.github.install.projects.columns.get(projectId)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.projects.columns.byId.get(id)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.commits.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/files'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.files.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.merge.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.reviews.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.reviews.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.reviews.comments.get(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.comments.byId.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.requestedReviewers.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.reactions.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.issues.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pulls.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/user/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.repos.get()
```
---
* API URL: '/users/:username/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.install.users.repos.get(username)
```
---
* API URL: '/orgs/:org/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.install.orgs.repos.get(org)
```
---
* API URL: '/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repositories.get()
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.topics.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contributors'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/languages'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.languages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.teams.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/tags'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.tags.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.get(owner)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.contexts.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.requiredPullRequestReviews.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.enforceAdmins.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.restrictions.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.restrictions.teams.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.branches.protection.restrictions.users.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.collaborators.get(owner)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.collaborators.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username/permission'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.collaborators.permission.get(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.commits.comments.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:name/community/profile'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.community.profile.get(owner, name)
```
---
* API URL: '/repos/:owner/:repo/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.commits.get(owner)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.commits.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/compare/:baseCommitSuspensivePointsHeadCommit'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.compare.get(owner, repo, baseCommitSuspensivePointsHeadCommit)
```
---
* API URL: '/repos/:owner/:repo/readme'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.readme.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.contents.get(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.keys.get(owner)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.keys.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.deployments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/deployments/:deployment_id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.deployments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.deployments.statuses.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses/:status_id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.deployments.statuses.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/downloads'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.downloads.get(owner)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.downloads.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.forks.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.invitations.get(owner, repo)
```
---
* API URL: '/user/repository_invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.install.user.repositoryInvitations.get()
```
---
* API URL: '/repos/:owner/:repo/pages'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pages.builds.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pages.builds.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/latest'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.pages.builds.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.get(owner)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/latest'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/tags/:tag'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.tags.get(owner, repo, tag)
```
---
* API URL: '/repos/:owner/:repo/releases/:id/assets'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.assets.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.releases.assets.byId.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/stats/contributors'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stats.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/commit_activity'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stats.commitActivity.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/code_frequency'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stats.codeFrequency.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/participation'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stats.participation.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/punch_card'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.stats.punchCard.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/statuses'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.commits.statuses.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/status'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.commits.status.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/referrers'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.traffic.popular.referrers.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/paths'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.traffic.popular.paths.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/views'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.traffic.views.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/clones'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.traffic.clones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.hooks.get(owner)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.install.repos.hooks.get(owner, repo)
```
---
* API URL: '/search/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.install.search.repositories.get()
```
---
* API URL: '/search/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.install.search.commits.get()
```
---
* API URL: '/search/code'
* HTTP Method: 'GET'
```javascript
pkg.github.install.search.code.get()
```
---
* API URL: '/search/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.install.search.issues.get()
```
---
* API URL: '/search/users'
* HTTP Method: 'GET'
```javascript
pkg.github.install.search.users.get()
```
---
* API URL: '/gists'
* HTTP Method: 'POST'
```javascript
pkg.github.install.gists.post(body)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'POST'
```javascript
pkg.github.install.gists.forks.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/blobs'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.git.blobs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/commits'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.git.commits.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.git.refs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/tags'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.git.tags.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/trees'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.git.trees.post(owner, repo, body)
```
---
* API URL: '/installations/:installation_id/access_tokens'
* HTTP Method: 'POST'
```javascript
pkg.github.install.installations.accessTokens.post(installationId, body)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.assignees.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.labels.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.labels.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.milestones.post(owner, repo, body)
```
---
* API URL: '/markdown'
* HTTP Method: 'POST'
```javascript
pkg.github.install.markdown.post(body)
```
---
* API URL: '/markdown/raw'
* HTTP Method: 'POST'
```javascript
pkg.github.install.markdown.raw.post(body)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'POST'
```javascript
pkg.github.install.orgs.teams.post(org, body)
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'POST'
```javascript
pkg.github.install.orgs.hooks.post(org, body)
```
---
* API URL: '/orgs/:org/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
pkg.github.install.orgs.hooks.pings.post(org, id, body)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.projects.post(owner, repo, body)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'POST'
```javascript
pkg.github.install.orgs.projects.post(org, body)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'POST'
```javascript
pkg.github.install.projects.columns.cards.post(columnId, body)
```
---
* API URL: '/projects/columns/cards/:id/moves'
* HTTP Method: 'POST'
```javascript
pkg.github.install.projects.columns.cards.moves.post(id, body)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'POST'
```javascript
pkg.github.install.projects.columns.post(projectId, body)
```
---
* API URL: '/projects/columns/:id/moves'
* HTTP Method: 'POST'
```javascript
pkg.github.install.projects.columns.moves.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.reviews.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/events'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.reviews.events.post(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.requestedReviewers.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.reactions.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.issues.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pulls.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/user/repos'
* HTTP Method: 'POST'
```javascript
pkg.github.install.user.repos.post(body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.contexts.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.branches.protection.enforceAdmins.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.branches.protection.restrictions.teams.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.branches.protection.restrictions.users.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.commits.comments.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.keys.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/merges'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.merges.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.pages.builds.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.releases.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/statuses/:sha'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.statuses.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.hooks.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/tests'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.hooks.tests.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
pkg.github.install.repos.hooks.pings.post(owner, repo, id, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.notifications.threads.subscription.delete(id)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.user.starred.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.subscription.delete(owner, repo)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.gists.star.delete(id)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.gists.delete(id)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.git.refs.delete(owner, repo, ref)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.user.installations.repositories.delete(installationId, repositoryId)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.issues.lock.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.issues.assignees.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.issues.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.labels.delete(owner, repo, name)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels/:name'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.issues.labels.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.issues.labels.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.milestones.delete(owner, repo, number)
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.members.delete(org, username)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.publicMembers.delete(org, username)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.memberships.delete(org, username)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.outsideCollaborators.delete(org, username)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.teams.delete(id)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.teams.memberships.delete(id, username)
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.teams.repos.delete(id, owner, repo)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.hooks.delete(org, id)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.orgs.blocks.delete(org, username)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.projects.delete(id)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.projects.columns.cards.delete(id)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.projects.columns.delete(id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.pulls.reviews.delete(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.pulls.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.pulls.requestedReviewers.delete(owner, repo, number)
```
---
* API URL: '/reactions/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.reactions.delete(id)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.contexts.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.requiredPullRequestReviews.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.enforceAdmins.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.restrictions.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.restrictions.teams.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.branches.protection.restrictions.users.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.collaborators.delete(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.contents.delete(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.keys.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.deployments.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.deployments.statuses.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.downloads.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.forks.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.invitations.delete(owner, repo, invitationId)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.user.repositoryInvitations.delete(invitationId)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.releases.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.releases.assets.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.install.repos.hooks.delete(owner, repo, id)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.notifications.threads.patch(id, body)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.gists.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.git.refs.patch(owner, repo, ref, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.issues.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.issues.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.labels.patch(owner, repo, name, body)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.milestones.patch(owner, repo, number, body)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.orgs.patch(org, body)
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.user.memberships.orgs.patch(org, body)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.teams.patch(id, body)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.orgs.hooks.patch(org, id, body)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.projects.patch(id, body)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.projects.columns.cards.patch(id, body)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.projects.columns.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.pulls.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.pulls.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.patch(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.branches.protection.requiredPullRequestReviews.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.invitations.patch(owner, repo, invitationId, body)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.user.repositoryInvitations.patch(invitationId, body)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.releases.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.releases.assets.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.install.repos.hooks.patch(owner, repo, id, body)
```
---
* API URL: '/notifications'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.notifications.put(body)
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.notifications.put(owner, repo, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.notifications.threads.subscription.put(id, body)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.user.starred.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.subscription.put(owner, repo, body)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.gists.star.put(id, body)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.user.installations.repositories.put(installationId, repositoryId, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.issues.lock.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.issues.labels.put(owner, repo, number, body)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.orgs.publicMembers.put(org, username, body)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.orgs.memberships.put(org, username, body)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.orgs.outsideCollaborators.put(org, username, body)
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.teams.members.put(id, username, body)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.teams.memberships.put(id, username, body)
```
---
* API URL: '/teams/:id/repos/:org/:repo'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.teams.repos.put(id, org, repo, body)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.orgs.blocks.put(org, username, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.pulls.merge.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.pulls.reviews.dismissals.put(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.topics.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.branches.protection.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.branches.protection.requiredStatusChecks.contexts.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.branches.protection.restrictions.teams.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.branches.protection.restrictions.users.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.collaborators.put(owner, repo, username, body)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'PUT'
```javascript
pkg.github.install.repos.contents.put(owner, repo, path, body)
```
---
* API URL: '/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.events.get()
```
---
* API URL: '/repos/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.events.get(owner, repo)
```
---
* API URL: '/networks/:owner/:repo/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.networks.events.get(owner, repo)
```
---
* API URL: '/orgs/:org/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.events.get(org)
```
---
* API URL: '/users/:username/received_events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.receivedEvents.get(username)
```
---
* API URL: '/users/:username/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.events.get(username)
```
---
* API URL: '/users/:username/events/public'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.events.public.get(username)
```
---
* API URL: '/users/:username/events/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.events.orgs.get(username, org)
```
---
* API URL: '/feeds'
* HTTP Method: 'GET'
```javascript
pkg.github.user.feeds.get()
```
---
* API URL: '/notifications'
* HTTP Method: 'GET'
```javascript
pkg.github.user.notifications.get()
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.notifications.get(owner, repo)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.notifications.threads.get(id)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'GET'
```javascript
pkg.github.user.notifications.threads.subscription.get(id)
```
---
* API URL: '/repos/:owner/:repo/stargazers'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stargazers.get(owner, repo)
```
---
* API URL: '/users/:username/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.starred.get(username)
```
---
* API URL: '/user/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.starred.get()
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.starred.get(owner)
```
---
* API URL: '/repos/:owner/:repo/subscribers'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.subscribers.get(owner, repo)
```
---
* API URL: '/users/:username/subscriptions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.subscriptions.get(username)
```
---
* API URL: '/user/subscriptions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.subscriptions.get()
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.subscription.get(owner, repo)
```
---
* API URL: '/users/:username/gists'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.gists.get(username)
```
---
* API URL: '/gists'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.get()
```
---
* API URL: '/gists/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.get()
```
---
* API URL: '/gists/:id/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.get(id)
```
---
* API URL: '/gists/public'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.public.get()
```
---
* API URL: '/gists/starred'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.starred.get()
```
---
* API URL: '/gists/:id/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.commits.get(id)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.star.get(id)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gists.forks.get(id)
```
---
* API URL: '/repos/:owner/:repo/git/blobs/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.blobs.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/commits/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.commits.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.refs.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.refs.get(owner)
```
---
* API URL: '/repos/:owner/:repo/git/tags/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.tags.get(owner, repo, sha)
```
---
* API URL: '/repos/:owner/:repo/git/trees/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.git.trees.get(owner, repo, sha)
```
---
* API URL: '/apps/:app_slug'
* HTTP Method: 'GET'
```javascript
pkg.github.user.apps.get(appSlug)
```
---
* API URL: '/app'
* HTTP Method: 'GET'
```javascript
pkg.github.user.app.get()
```
---
* API URL: '/app/installations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.app.installations.get()
```
---
* API URL: '/app/installations/:installation_id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.app.installations.get()
```
---
* API URL: '/user/installations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.installations.get()
```
---
* API URL: '/installation/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.user.installation.repositories.get()
```
---
* API URL: '/user/installations/:installation_id/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.installations.repositories.get(installationId)
```
---
* API URL: '/marketplace_listing/plans'
* HTTP Method: 'GET'
```javascript
pkg.github.user.marketplaceListing.plans.get()
```
---
* API URL: '/marketplace_listing/plans/:id/accounts'
* HTTP Method: 'GET'
```javascript
pkg.github.user.marketplaceListing.plans.accounts.get(id)
```
---
* API URL: '/marketplace_listing/accounts/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.marketplaceListing.accounts.get(id)
```
---
* API URL: '/user/marketplace_purchases'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.marketplacePurchases.get()
```
---
* API URL: '/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.user.issues.get()
```
---
* API URL: '/user/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.issues.get()
```
---
* API URL: '/orgs/:org/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.issues.get(org)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/assignees'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.assignees.get(owner)
```
---
* API URL: '/repos/:owner/:repo/assignees/:assignee'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.assignees.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.events.byIssue.get(owner, repo, issueNumber)
```
---
* API URL: '/repos/:owner/:repo/issues/events'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.events.get(owner)
```
---
* API URL: '/repos/:owner/:repo/issues/events/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.events.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.labels.get(owner)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.labels.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number/labels'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.milestones.labels.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.milestones.get(owner)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.milestones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/issues/:issue_number/timeline'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.timeline.get(owner, repo, issueNumber)
```
---
* API URL: '/codes_of_conduct'
* HTTP Method: 'GET'
```javascript
pkg.github.user.codesOfConduct.get()
```
---
* API URL: '/codes_of_conduct/:key'
* HTTP Method: 'GET'
```javascript
pkg.github.user.codesOfConduct.get()
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.get(owner)
```
---
* API URL: '/repos/:owner/:repo/:archive_format/:ref'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.get(owner, repo, archiveFormat)
```
---
* API URL: '/repos/:owner/:repo/community/code_of_conduct'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.community.codeOfConduct.get(owner, repo)
```
---
* API URL: '/emojis'
* HTTP Method: 'GET'
```javascript
pkg.github.user.emojis.get()
```
---
* API URL: '/gitignore/templates'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gitignore.templates.get()
```
---
* API URL: '/gitignore/templates/:name'
* HTTP Method: 'GET'
```javascript
pkg.github.user.gitignore.templates.get()
```
---
* API URL: '/licenses'
* HTTP Method: 'GET'
```javascript
pkg.github.user.licenses.get()
```
---
* API URL: '/licenses/:license'
* HTTP Method: 'GET'
```javascript
pkg.github.user.licenses.get()
```
---
* API URL: '/repos/:owner/:repo/license'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.license.get(owner, repo)
```
---
* API URL: '/meta'
* HTTP Method: 'GET'
```javascript
pkg.github.user.meta.get()
```
---
* API URL: '/rate_limit'
* HTTP Method: 'GET'
```javascript
pkg.github.user.rateLimit.get()
```
---
* API URL: '/user/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.orgs.get()
```
---
* API URL: '/organizations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.organizations.get()
```
---
* API URL: '/users/:username/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.orgs.get(username)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.get(org)
```
---
* API URL: '/orgs/:org/members'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.members.get()
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.members.get(org)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.publicMembers.get(org)
```
---
* API URL: '/orgs/:org/public_members'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.publicMembers.get()
```
---
* API URL: '/orgs/:org/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.invitations.get(org)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.memberships.get(org, username)
```
---
* API URL: '/user/memberships/orgs'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.memberships.orgs.get()
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.memberships.orgs.get()
```
---
* API URL: '/orgs/:org/outside_collaborators'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.outsideCollaborators.get(org)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.teams.get(org)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.get(id)
```
---
* API URL: '/teams/:id/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.teams.get(id)
```
---
* API URL: '/teams/:id/members'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.members.get()
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.members.get(id)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.memberships.get(id, username)
```
---
* API URL: '/teams/:id/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.invitations.get(id)
```
---
* API URL: '/teams/:id/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.repos.get()
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'GET'
```javascript
pkg.github.user.teams.repos.get(id, owner)
```
---
* API URL: '/user/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.teams.get()
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.hooks.get()
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.hooks.get(org)
```
---
* API URL: '/orgs/:org/blocks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.blocks.get()
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.blocks.get(org)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.projects.get(owner, repo)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.projects.get(org)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.projects.get(id)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'GET'
```javascript
pkg.github.user.projects.columns.cards.get(columnId)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.projects.columns.cards.byId.get(id)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'GET'
```javascript
pkg.github.user.projects.columns.get(projectId)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.projects.columns.byId.get(id)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.commits.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/files'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.files.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.merge.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.reviews.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.reviews.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.reviews.comments.get(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.comments.byId.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.requestedReviewers.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.reactions.get(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.issues.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pulls.comments.reactions.get(owner, repo, id)
```
---
* API URL: '/user/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.repos.get()
```
---
* API URL: '/users/:username/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.user.users.repos.get(username)
```
---
* API URL: '/orgs/:org/repos'
* HTTP Method: 'GET'
```javascript
pkg.github.user.orgs.repos.get(org)
```
---
* API URL: '/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repositories.get()
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.topics.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contributors'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/languages'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.languages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.teams.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/tags'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.tags.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.get(owner)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.contexts.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.requiredPullRequestReviews.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.enforceAdmins.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.restrictions.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.restrictions.teams.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.branches.protection.restrictions.users.get(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.collaborators.get(owner)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.collaborators.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username/permission'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.collaborators.permission.get(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.comments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.comments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/comments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.commits.comments.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:name/community/profile'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.community.profile.get(owner, name)
```
---
* API URL: '/repos/:owner/:repo/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.commits.get(owner)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.commits.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/compare/:baseCommitSuspensivePointsHeadCommit'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.compare.get(owner, repo, baseCommitSuspensivePointsHeadCommit)
```
---
* API URL: '/repos/:owner/:repo/readme'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.readme.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.contents.get(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.keys.get(owner)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.keys.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.deployments.get(owner)
```
---
* API URL: '/repos/:owner/:repo/deployments/:deployment_id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.deployments.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.deployments.statuses.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses/:status_id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.deployments.statuses.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/downloads'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.downloads.get(owner)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.downloads.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.forks.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.invitations.get(owner, repo)
```
---
* API URL: '/user/repository_invitations'
* HTTP Method: 'GET'
```javascript
pkg.github.user.user.repositoryInvitations.get()
```
---
* API URL: '/repos/:owner/:repo/pages'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pages.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pages.builds.get(owner)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pages.builds.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/pages/builds/latest'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.pages.builds.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.get(owner)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/latest'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.latest.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/releases/tags/:tag'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.tags.get(owner, repo, tag)
```
---
* API URL: '/repos/:owner/:repo/releases/:id/assets'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.assets.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.releases.assets.byId.get(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/stats/contributors'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stats.contributors.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/commit_activity'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stats.commitActivity.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/code_frequency'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stats.codeFrequency.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/participation'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stats.participation.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/stats/punch_card'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.stats.punchCard.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/statuses'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.commits.statuses.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/commits/:ref/status'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.commits.status.get(owner, repo, ref)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/referrers'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.traffic.popular.referrers.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/popular/paths'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.traffic.popular.paths.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/views'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.traffic.views.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/traffic/clones'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.traffic.clones.get(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.hooks.get(owner)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'GET'
```javascript
pkg.github.user.repos.hooks.get(owner, repo)
```
---
* API URL: '/search/repositories'
* HTTP Method: 'GET'
```javascript
pkg.github.user.search.repositories.get()
```
---
* API URL: '/search/commits'
* HTTP Method: 'GET'
```javascript
pkg.github.user.search.commits.get()
```
---
* API URL: '/search/code'
* HTTP Method: 'GET'
```javascript
pkg.github.user.search.code.get()
```
---
* API URL: '/search/issues'
* HTTP Method: 'GET'
```javascript
pkg.github.user.search.issues.get()
```
---
* API URL: '/search/users'
* HTTP Method: 'GET'
```javascript
pkg.github.user.search.users.get()
```
---
* API URL: '/gists'
* HTTP Method: 'POST'
```javascript
pkg.github.user.gists.post(body)
```
---
* API URL: '/gists/:id/forks'
* HTTP Method: 'POST'
```javascript
pkg.github.user.gists.forks.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/blobs'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.git.blobs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/commits'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.git.commits.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.git.refs.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/tags'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.git.tags.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/git/trees'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.git.trees.post(owner, repo, body)
```
---
* API URL: '/installations/:installation_id/access_tokens'
* HTTP Method: 'POST'
```javascript
pkg.github.user.installations.accessTokens.post(installationId, body)
```
---
* API URL: '/repos/:owner/:repo/issues'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.assignees.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/labels'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.labels.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.labels.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/milestones'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.milestones.post(owner, repo, body)
```
---
* API URL: '/markdown'
* HTTP Method: 'POST'
```javascript
pkg.github.user.markdown.post(body)
```
---
* API URL: '/markdown/raw'
* HTTP Method: 'POST'
```javascript
pkg.github.user.markdown.raw.post(body)
```
---
* API URL: '/orgs/:org/teams'
* HTTP Method: 'POST'
```javascript
pkg.github.user.orgs.teams.post(org, body)
```
---
* API URL: '/orgs/:org/hooks'
* HTTP Method: 'POST'
```javascript
pkg.github.user.orgs.hooks.post(org, body)
```
---
* API URL: '/orgs/:org/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
pkg.github.user.orgs.hooks.pings.post(org, id, body)
```
---
* API URL: '/repos/:owner/:repo/projects'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.projects.post(owner, repo, body)
```
---
* API URL: '/orgs/:org/projects'
* HTTP Method: 'POST'
```javascript
pkg.github.user.orgs.projects.post(org, body)
```
---
* API URL: '/projects/columns/:column_id/cards'
* HTTP Method: 'POST'
```javascript
pkg.github.user.projects.columns.cards.post(columnId, body)
```
---
* API URL: '/projects/columns/cards/:id/moves'
* HTTP Method: 'POST'
```javascript
pkg.github.user.projects.columns.cards.moves.post(id, body)
```
---
* API URL: '/projects/:project_id/columns'
* HTTP Method: 'POST'
```javascript
pkg.github.user.projects.columns.post(projectId, body)
```
---
* API URL: '/projects/columns/:id/moves'
* HTTP Method: 'POST'
```javascript
pkg.github.user.projects.columns.moves.post(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.reviews.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/events'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.reviews.events.post(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.comments.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.requestedReviewers.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.reactions.post(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.issues.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id/reactions'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pulls.comments.reactions.post(owner, repo, id, body)
```
---
* API URL: '/user/repos'
* HTTP Method: 'POST'
```javascript
pkg.github.user.user.repos.post(body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.contexts.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.branches.protection.enforceAdmins.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.branches.protection.restrictions.teams.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.branches.protection.restrictions.users.post(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/commits/:sha/comments'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.commits.comments.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/keys'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.keys.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/merges'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.merges.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/pages/builds'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.pages.builds.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/releases'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.releases.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/statuses/:sha'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.statuses.post(owner, repo, sha, body)
```
---
* API URL: '/repos/:owner/:repo/hooks'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.hooks.post(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/tests'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.hooks.tests.post(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id/pings'
* HTTP Method: 'POST'
```javascript
pkg.github.user.repos.hooks.pings.post(owner, repo, id, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.notifications.threads.subscription.delete(id)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.user.starred.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.subscription.delete(owner, repo)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.gists.star.delete(id)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.gists.delete(id)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.git.refs.delete(owner, repo, ref)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.user.installations.repositories.delete(installationId, repositoryId)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.issues.lock.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/assignees'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.issues.assignees.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.issues.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.labels.delete(owner, repo, name)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels/:name'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.issues.labels.delete(owner, repo, number)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.issues.labels.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.milestones.delete(owner, repo, number)
```
---
* API URL: '/orgs/:org/members/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.members.delete(org, username)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.publicMembers.delete(org, username)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.memberships.delete(org, username)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.outsideCollaborators.delete(org, username)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.teams.delete(id)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.teams.memberships.delete(id, username)
```
---
* API URL: '/teams/:id/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.teams.repos.delete(id, owner, repo)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.hooks.delete(org, id)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.orgs.blocks.delete(org, username)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.projects.delete(id)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.projects.columns.cards.delete(id)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.projects.columns.delete(id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.pulls.reviews.delete(owner, repo, number, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.pulls.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/requested_reviewers'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.pulls.requestedReviewers.delete(owner, repo, number)
```
---
* API URL: '/reactions/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.reactions.delete(id)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.contexts.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.requiredPullRequestReviews.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/enforce_admins'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.enforceAdmins.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.restrictions.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.restrictions.teams.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.branches.protection.restrictions.users.delete(owner, repo, branch)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.collaborators.delete(owner, repo, username)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.comments.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.contents.delete(owner, repo, path)
```
---
* API URL: '/repos/:owner/:repo/keys/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.keys.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/deployments'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.deployments.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/deployments/:id/statuses'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.deployments.statuses.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/downloads/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.downloads.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/forks'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.forks.delete(owner, repo)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.invitations.delete(owner, repo, invitationId)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.user.repositoryInvitations.delete(invitationId)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.releases.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.releases.assets.delete(owner, repo, id)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'DELETE'
```javascript
pkg.github.user.repos.hooks.delete(owner, repo, id)
```
---
* API URL: '/notifications/threads/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.notifications.threads.patch(id, body)
```
---
* API URL: '/gists/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.gists.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/git/refs/:ref'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.git.refs.patch(owner, repo, ref, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.issues.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.issues.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/labels/:name'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.labels.patch(owner, repo, name, body)
```
---
* API URL: '/repos/:owner/:repo/milestones/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.milestones.patch(owner, repo, number, body)
```
---
* API URL: '/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.orgs.patch(org, body)
```
---
* API URL: '/user/memberships/orgs/:org'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.user.memberships.orgs.patch(org, body)
```
---
* API URL: '/teams/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.teams.patch(id, body)
```
---
* API URL: '/orgs/:org/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.orgs.hooks.patch(org, id, body)
```
---
* API URL: '/projects/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.projects.patch(id, body)
```
---
* API URL: '/projects/columns/cards/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.projects.columns.cards.patch(id, body)
```
---
* API URL: '/projects/columns/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.projects.columns.patch(id, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.pulls.patch(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.pulls.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.patch(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.branches.protection.requiredPullRequestReviews.patch(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/comments/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.comments.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.invitations.patch(owner, repo, invitationId, body)
```
---
* API URL: '/user/repository_invitations/:invitation_id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.user.repositoryInvitations.patch(invitationId, body)
```
---
* API URL: '/repos/:owner/:repo/releases/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.releases.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/releases/assets/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.releases.assets.patch(owner, repo, id, body)
```
---
* API URL: '/repos/:owner/:repo/hooks/:id'
* HTTP Method: 'PATCH'
```javascript
pkg.github.user.repos.hooks.patch(owner, repo, id, body)
```
---
* API URL: '/notifications'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.notifications.put(body)
```
---
* API URL: '/repos/:owner/:repo/notifications'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.notifications.put(owner, repo, body)
```
---
* API URL: '/notifications/threads/:id/subscription'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.notifications.threads.subscription.put(id, body)
```
---
* API URL: '/user/starred/:owner/:repo'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.user.starred.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/subscription'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.subscription.put(owner, repo, body)
```
---
* API URL: '/gists/:id/star'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.gists.star.put(id, body)
```
---
* API URL: '/user/installations/:installation_id/repositories/:repository_id'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.user.installations.repositories.put(installationId, repositoryId, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/lock'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.issues.lock.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/issues/:number/labels'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.issues.labels.put(owner, repo, number, body)
```
---
* API URL: '/orgs/:org/public_members/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.orgs.publicMembers.put(org, username, body)
```
---
* API URL: '/orgs/:org/memberships/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.orgs.memberships.put(org, username, body)
```
---
* API URL: '/orgs/:org/outside_collaborators/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.orgs.outsideCollaborators.put(org, username, body)
```
---
* API URL: '/teams/:id/members/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.teams.members.put(id, username, body)
```
---
* API URL: '/teams/:id/memberships/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.teams.memberships.put(id, username, body)
```
---
* API URL: '/teams/:id/repos/:org/:repo'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.teams.repos.put(id, org, repo, body)
```
---
* API URL: '/orgs/:org/blocks/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.orgs.blocks.put(org, username, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/merge'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.pulls.merge.put(owner, repo, number, body)
```
---
* API URL: '/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.pulls.reviews.dismissals.put(owner, repo, number, id, body)
```
---
* API URL: '/repos/:owner/:repo/topics'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.topics.put(owner, repo, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.branches.protection.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.branches.protection.requiredStatusChecks.contexts.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/teams'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.branches.protection.restrictions.teams.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/branches/:branch/protection/restrictions/users'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.branches.protection.restrictions.users.put(owner, repo, branch, body)
```
---
* API URL: '/repos/:owner/:repo/collaborators/:username'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.collaborators.put(owner, repo, username, body)
```
---
* API URL: '/repos/:owner/:repo/contents/:path'
* HTTP Method: 'PUT'
```javascript
pkg.github.user.repos.contents.put(owner, repo, path, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>


### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

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
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
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

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

### Shortcuts

### Utils

There are some utilities to help you work with data coming from GitHub.

#### Date time parser and formatter

```js
var date = pkg.githubApp.utils.parseTimestamp(str);
var str = pkg.githubApp.utils.formatTimestamp(date);
```

GitHub has timestamps with a format like this: `2013-02-12T13:22:01Z`. This two methods allow to convert
it to a `Date` object and the other way around.

## Events

### Webhook

This event is triggered every time a webhook is triggered on any of the organizations and repositories your app is 
installed.

In the listener handling webhook events, you will be able to see the body of the event in `event.data`:

```js
var body = event.data;
sys.logs.info('Event: '+JSON.stringify(body));
```

The format is as specified in [Event types & payloads](https://developer.github.com/v3/activity/events/types/).

The only difference is that we add a field called `event_name` which is what GitHub sends in the header
`X-GitHub-Event`. This way you can easily know the event type:

```js
var body = event.data;
sys.logs.info('Event name: '+body.event_name);
```

{% include links.html %}

## Dependencies
* HTTP Service (Latest Version)
* Oauth Package (v1.0.0)

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
