
# Overview

Repo: [https://github.com/slingr-stack/github-package](https://github.com/slingr-stack/google-drive-package)


The GitHub [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) allows easily creating apps for GitHub. It provides the following features:

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

**Name**: `appId`
**Type**: text
**Mandatory**: true

### Client ID

This is the Client ID of your app, which is needed to perform operations on behalf of a user.


**Name**: `clientId`
**Type**: text
**Mandatory**: false

### Client secret

This is the client secret of your app, which is needed to perform operations on behalf of a user.


**Name**: `clientSecret`
**Type**: text
**Mandatory**: false

### OAuth Callback

This is the OAuth callback you need to configure in your GitHub app.

**Name**: `oauthCallback`
**Type**: label

### Webhooks URL

This is the URL you need to set in your GitHub app so webhooks are sent there,
which is needed to perform operations on behalf of an installation.

**Name**: `webhook`
**Type**: label

### Webhooks Secret

This is the secret for webhooks configured in your app. It is needed to validate the authenticity of webhooks.

**Name**: `webhookSecret`
**Type**: text
**Mandatory**: true

### Private key

The private key can be generated in the details of your GitHub app. 
When you copy it, you do not need to add any line breaks or other especial characters, copy the content of the key.

**Name**: `privateKey`
**Type**: text
**Mandatory**: true

# Javascript API

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT` and `PATCH` 
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

### Shortcuts

### Utils

There are some utilities to help you work with data coming from GitHub.

GitHub has timestamps with a format like this: `2013-02-12T13:22:01Z`.

```javascript

let dateFromTimestamp = pkg.github.utils.fromDateToTimestamp("2025-04-16"); // the result will be the following {"timestamp":1744761600000}
let timestampFromDate = pkg.github.utils.fromTimestampToDate(1744135508824);  // the result will be the following "2025-04-08T18:05:08.824Z"

```

## Dependencies
* HTTP Service
* Oauth Package

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
