# Javascript API

The Javascript API of the github endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE`,`PUT` requests to the [github API](API_URL_HERE) like this:
```javascript
var response = pkg.github.app.get('/repos/:owner/:repo/installation')
var response = pkg.github.app.post('/applications/{client_id}/token/scoped', body)
var response = pkg.github.app.post('/applications/{client_id}/token/scoped')
var response = pkg.github.app.delete('/app/installations/:installation_id/suspended')
var response = pkg.github.app.put('/app/installations/:installation_id/suspended', body)
var response = pkg.github.app.put('/app/installations/:installation_id/suspended')
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
            <i><strong>GET,POST,DELETE,PUT</strong></i>
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
            <i><strong>/app<br>/app/installation-requests<br>/app/installations<br>/app/installations/{installation_id}<br>/apps/{app_slug}<br>/orgs/{org}/installation<br>/repos/{owner}/{repo}/installation<br>/users/{username}/installation<br>/app-manifests/{code}/conversions<br>/app/installations/{installation_id}/access_tokens<br>/applications/{client_id}/token/scoped<br>/app/installations/{installation_id}<br>/app/installations/{installation_id}/suspended<br>/app/installations/{installation_id}/suspended<br></strong></i>
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

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*