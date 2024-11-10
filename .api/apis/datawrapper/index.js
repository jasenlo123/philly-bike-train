"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'datawrapper/2.9.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Retrieves all login tokens associated to the current user.
     *
     * @summary Retrieves login tokens
     */
    SDK.prototype.getAuthLogintokens = function (metadata) {
        return this.core.fetch('/auth/login-tokens', 'get', metadata);
    };
    /**
     * Creates a new login token to authenticate a user, for use in CMS integrations. Login
     * tokens are valid for five minutes and can only be used once.
     *
     * @summary Creates a login token
     */
    SDK.prototype.postAuthLogintokens = function (body) {
        return this.core.fetch('/auth/login-tokens', 'post', body);
    };
    /**
     * Deletes an existing login token by the current user.
     *
     * @summary Deletes a login token
     */
    SDK.prototype.deleteAuthLogintokensId = function (metadata) {
        return this.core.fetch('/auth/login-tokens/{id}', 'delete', metadata);
    };
    /**
     * Login using a one-time login token and redirect to the URL associated with the token.
     * For use in CMS integrations.
     *
     * @summary Login using login token
     */
    SDK.prototype.getAuthLoginToken = function (metadata) {
        return this.core.fetch('/auth/login/{token}', 'get', metadata);
    };
    /**
     * Requires scope `auth:read`.
     *
     * @summary Get list of valid token scopes.
     */
    SDK.prototype.getAuthTokenscopes = function () {
        return this.core.fetch('/auth/token-scopes', 'get');
    };
    /**
     * Response will not include full tokens for security reasons. Requires scope `auth:read`.
     *
     * @summary List API tokens
     */
    SDK.prototype.getAuthTokens = function (metadata) {
        return this.core.fetch('/auth/tokens', 'get', metadata);
    };
    /**
     * This endpoint will create a new API Token and show it in the response body.
     *                      It is possible to create a comment with every token to have a
     * reference where it is used.
     *                      Make sure to save the token somewhere, since you won't be able to
     * see it again.  Requires scope `auth:write`.
     *
     * @summary Create API token
     */
    SDK.prototype.postAuthTokens = function (body) {
        return this.core.fetch('/auth/tokens', 'post', body);
    };
    /**
     * Delete (=revoke) an API access token. Check [/v3/auth/tokens](ref:authtokens) to get the
     * IDs of your available tokens.  Requires scope `auth:write`.
     *
     * @summary Delete API token
     */
    SDK.prototype.deleteAuthTokensId = function (metadata) {
        return this.core.fetch('/auth/tokens/{id}', 'delete', metadata);
    };
    /**
     * Edit an API access token. Check [/v3/auth/tokens](ref:authtokens) to get the IDs of your
     * available tokens.  Requires scope `auth:write`.
     *
     * @summary Edit API token
     */
    SDK.prototype.putAuthTokensId = function (body, metadata) {
        return this.core.fetch('/auth/tokens/{id}', 'put', body, metadata);
    };
    /**
     * This endpoint fetches a list of available basemaps (metadata only)
     *
     * @summary Get list of all available basemaps
     */
    SDK.prototype.getBasemaps = function () {
        return this.core.fetch('/basemaps', 'get');
    };
    /**
     * This endpoint fetches a basemap's content and metadata.
     *
     * @summary Fetch basemap content and metadata
     */
    SDK.prototype.getBasemapsId = function (metadata) {
        return this.core.fetch('/basemaps/{id}', 'get', metadata);
    };
    /**
     * This endpoint fetches a list of all available values for a basemap key, e.g.
     * https://api.datawrapper.de/v3/basemaps/world-2019/DW_NAME
     *
     * @summary Fetch list of key values in a basemap
     */
    SDK.prototype.getBasemapsIdKey = function (metadata) {
        return this.core.fetch('/basemaps/{id}/{key}', 'get', metadata);
    };
    /**
     * Search and filter a list of your charts.
     *                         The returned chart objects, do not include the full chart
     * metadata.
     *                         To get the full metadata add ?expand=true or use
     * [/v3/charts/{id}](ref:getchartsid).  Requires scope `chart:read`.
     *
     * @summary List charts
     */
    SDK.prototype.getCharts = function (metadata) {
        return this.core.fetch('/charts', 'get', metadata);
    };
    /**
     * Requires scopes `chart:write`.
     *
     * @summary Moves charts into a folder
     */
    SDK.prototype.patchCharts = function (body) {
        return this.core.fetch('/charts', 'patch', body);
    };
    /**
     * Requires scope `chart:write`.
     *
     * @summary Create new visualization
     */
    SDK.prototype.postCharts = function (body) {
        return this.core.fetch('/charts', 'post', body);
    };
    /**
     * Requires scopes `chart:write`.
     *
     * @summary Copies charts in place or into another folder
     */
    SDK.prototype.postChartsCopy = function (body) {
        return this.core.fetch('/charts/copy', 'post', body);
    };
    /**
     * This action is permanent. Be careful when using this endpoint.
     *                         If this endpoint should be used in an application (CMS), it is
     * recommended to
     *                         ask the user for confirmation.  Requires scope `chart:write`.
     *
     * @summary Delete a chart
     */
    SDK.prototype.deleteChartsId = function (metadata) {
        return this.core.fetch('/charts/{id}', 'delete', metadata);
    };
    /**
     * Requires scope `chart:read` or `chart:write`.
     *
     * @summary Fetch chart metadata
     */
    SDK.prototype.getChartsId = function (metadata) {
        return this.core.fetch('/charts/{id}', 'get', metadata);
    };
    SDK.prototype.patchChartsId = function (body, metadata) {
        return this.core.fetch('/charts/{id}', 'patch', body, metadata);
    };
    SDK.prototype.putChartsId = function (body, metadata) {
        return this.core.fetch('/charts/{id}', 'put', body, metadata);
    };
    /**
     * Request an asset associated with a chart. Requires scope `chart:read`.
     *
     * @summary Fetch chart asset
     */
    SDK.prototype.getChartsIdAssetsAsset = function (metadata) {
        return this.core.fetch('/charts/{id}/assets/{asset}', 'get', metadata);
    };
    SDK.prototype.putChartsIdAssetsAsset = function (body, metadata) {
        return this.core.fetch('/charts/{id}/assets/{asset}', 'put', body, metadata);
    };
    /**
     * Requires scope `chart:read`.
     *
     * @summary Gets all comments for a chart
     */
    SDK.prototype.getChartsIdComments = function (metadata) {
        return this.core.fetch('/charts/{id}/comments', 'get', metadata);
    };
    /**
     * Requires scope `chart:write`.
     *
     * @summary Create a new comment for a chart
     */
    SDK.prototype.postChartsIdComments = function (body, metadata) {
        return this.core.fetch('/charts/{id}/comments', 'post', body, metadata);
    };
    /**
     * Requires scope `chart:write`.
     *
     * @summary Copies a chart
     */
    SDK.prototype.postChartsIdCopy = function (metadata) {
        return this.core.fetch('/charts/{id}/copy', 'post', metadata);
    };
    /**
     * Request the data of a chart, which is usually a CSV. Requires scope `chart:read`.
     *
     * @summary Fetch chart data
     */
    SDK.prototype.getChartsIdData = function (metadata) {
        return this.core.fetch('/charts/{id}/data', 'get', metadata);
    };
    SDK.prototype.putChartsIdData = function (body, metadata) {
        return this.core.fetch('/charts/{id}/data', 'put', body, metadata);
    };
    /**
     * If a chart has an external data source configured, this endpoint fetches the data and
     * saves it to the chart. Requires scope `chart:read`.
     *
     * @summary Updates a chart's external data source.
     */
    SDK.prototype.postChartsIdDataRefresh = function (metadata) {
        return this.core.fetch('/charts/{id}/data/refresh', 'post', metadata);
    };
    /**
     * Request the available URLs to directly share a chart.
     *
     * @summary Get share URLs for a chart
     */
    SDK.prototype.getChartsIdDisplayurls = function (metadata) {
        return this.core.fetch('/charts/{id}/display-urls', 'get', metadata);
    };
    /**
     * Request the responsive and static embed code of a chart. Requires scope `chart:read`.
     *
     * @summary Get embed codes for a chart
     */
    SDK.prototype.getChartsIdEmbedcodes = function (metadata) {
        return this.core.fetch('/charts/{id}/embed-codes', 'get', metadata);
    };
    /**
     * Export your chart as image or document for use in print or presentations.
     *                         Not all formats might be available to you, based on your
     * account. Requires scope `chart:read`.
     *
     * @summary Export chart
     */
    SDK.prototype.getChartsIdExportFormat = function (metadata) {
        return this.core.fetch('/charts/{id}/export/{format}', 'get', metadata);
    };
    SDK.prototype.postChartsIdExportFormatAsync = function (body, metadata) {
        return this.core.fetch('/charts/{id}/export/{format}/async', 'post', body, metadata);
    };
    /**
     * After triggering an asynchronous export this route can be used to find out if the export
     * has finished, yet. It returns either the HTTP code 425 to indicate that the export isn't
     * ready or HTTP code 200 along with the export result.
     *
     * @summary Export chart
     */
    SDK.prototype.getChartsIdExportFormatAsyncExportid = function (metadata) {
        return this.core.fetch('/charts/{id}/export/{format}/async/{exportId}', 'get', metadata);
    };
    /**
     * This creates an editable copy of a reusable visualization from the [Datawrapper
     * River](https://river.datawrapper.de/). Requires scope `chart:write`.
     *
     * @summary Fork a chart
     */
    SDK.prototype.postChartsIdFork = function (metadata) {
        return this.core.fetch('/charts/{id}/fork', 'post', metadata);
    };
    /**
     * Requires scopes `chart:read` *and* `chart:write` *and* `theme:read` *and*
     * `visualization:read`.
     *
     * @summary Publish a chart
     */
    SDK.prototype.postChartsIdPublish = function (metadata) {
        return this.core.fetch('/charts/{id}/publish', 'post', metadata);
    };
    /**
     * Check the publish status of a chart.  Requires scope `chart:read`.
     *
     * @summary Get publish status
     */
    SDK.prototype.getChartsIdPublishStatusVersion = function (metadata) {
        return this.core.fetch('/charts/{id}/publish/status/{version}', 'get', metadata);
    };
    /**
     * This will remove all public files, including the embeds and published images. Requires
     * scope `chart:write`.
     *
     * @summary Unpublish a published visualization
     */
    SDK.prototype.postChartsIdUnpublish = function (metadata) {
        return this.core.fetch('/charts/{id}/unpublish', 'post', metadata);
    };
    /**
     * Get a list of folders and their associated charts. Requires scope `folder:read`.
     *
     * @summary List folders
     */
    SDK.prototype.getFolders = function (metadata) {
        return this.core.fetch('/folders', 'get', metadata);
    };
    /**
     * Requires scope `folder:write`.
     *
     * @summary Create a folder
     */
    SDK.prototype.postFolders = function (body) {
        return this.core.fetch('/folders', 'post', body);
    };
    /**
     * Requires scope `folder:write`.
     *
     * @summary Copy folders to a new destination folder/team/user.
     */
    SDK.prototype.postFoldersCopy = function (body) {
        return this.core.fetch('/folders/copy', 'post', body);
    };
    /**
     * Requires scope `folder:write`.
     *
     * @summary Move folders to a new destination folder/team/user.
     */
    SDK.prototype.patchFoldersMove = function (body) {
        return this.core.fetch('/folders/move', 'patch', body);
    };
    /**
     * Deletes the specified folder. Requires scope `folder:write`.
     *
     * @summary Delete a folder
     */
    SDK.prototype.deleteFoldersId = function (metadata) {
        return this.core.fetch('/folders/{id}', 'delete', metadata);
    };
    /**
     * Get a specific folder. Requires scope `folder:read`.
     *
     * @summary Get a folder
     */
    SDK.prototype.getFoldersId = function (metadata) {
        return this.core.fetch('/folders/{id}', 'get', metadata);
    };
    SDK.prototype.patchFoldersId = function (body, metadata) {
        return this.core.fetch('/folders/{id}', 'patch', body, metadata);
    };
    /**
     * Update a folder. Requires scope `folder:write`.
     *
     * @summary Updates a folder
     */
    SDK.prototype.putFoldersId = function (body, metadata) {
        return this.core.fetch('/folders/{id}', 'put', body, metadata);
    };
    /**
     * **Be careful!** This is a destructive action.
     *                         By deleting your account you will loose access to all of your
     * charts.
     *                         If this endpoint should be used in an application (CMS), it is
     * recommended to
     *                         ask the user for confirmation. Requires scope `user:write`.
     *
     * @summary Delete your account
     */
    SDK.prototype.deleteMe = function (body) {
        return this.core.fetch('/me', 'delete', body);
    };
    /**
     * Requires scope `user:read`.
     *
     * @summary Fetch your account information
     */
    SDK.prototype.getMe = function () {
        return this.core.fetch('/me', 'get');
    };
    /**
     * Requires scope `user:write`.
     *
     * @summary Update your account information
     */
    SDK.prototype.patchMe = function (body) {
        return this.core.fetch('/me', 'patch', body);
    };
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of your recently edited charts
     */
    SDK.prototype.getMeRecentlyeditedcharts = function (metadata) {
        return this.core.fetch('/me/recently-edited-charts', 'get', metadata);
    };
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of your recently published charts
     */
    SDK.prototype.getMeRecentlypublishedcharts = function (metadata) {
        return this.core.fetch('/me/recently-published-charts', 'get', metadata);
    };
    /**
     * Use this endpoint to change your active team. Requires scope `user:write`.
     *
     * @summary Update your account settings
     */
    SDK.prototype.patchMeSettings = function (body) {
        return this.core.fetch('/me/settings', 'patch', body);
    };
    /**
     * Retreive embedding information about a Datawrapper visualization. See our [oEmbed
     * tutorial](https://developer.datawrapper.de/docs/embedding-charts-via-oembed) and the
     * official [oEmbed specification](https://oembed.com/) for more information.
     *
     * @summary Get oEmbed information
     */
    SDK.prototype.getOembed = function (metadata) {
        return this.core.fetch('/oembed', 'get', metadata);
    };
    /**
     * Search and filter a list of your River charts
     *
     * @summary List River charts
     */
    SDK.prototype.getRiver = function (metadata) {
        return this.core.fetch('/river', 'get', metadata);
    };
    /**
     * Show details for individual River chart
     *
     * @summary Show River chart
     */
    SDK.prototype.getRiverChartid = function (metadata) {
        return this.core.fetch('/river/{chartId}', 'get', metadata);
    };
    /**
     * Update metadata of chart published in River
     *
     * @summary Update River chart
     */
    SDK.prototype.putRiverId = function (body, metadata) {
        return this.core.fetch('/river/{id}', 'put', body, metadata);
    };
    /**
     * Get a list of teams you are part of.
     *
     * @summary List teams
     */
    SDK.prototype.getTeams = function (metadata) {
        return this.core.fetch('/teams', 'get', metadata);
    };
    /**
     * Create a team
     *
     */
    SDK.prototype.postTeams = function (body) {
        return this.core.fetch('/teams', 'post', body);
    };
    /**
     * **Be careful!** This is a destructive action that can only be performed by team owners.
     * Requires scope `team:write`.
     *
     * @summary Delete a team
     */
    SDK.prototype.deleteTeamsId = function (metadata) {
        return this.core.fetch('/teams/{id}', 'delete', metadata);
    };
    /**
     * Requires scope `team:read` or `team:write`.
     *
     * @summary Fetch team information
     */
    SDK.prototype.getTeamsId = function (metadata) {
        return this.core.fetch('/teams/{id}', 'get', metadata);
    };
    SDK.prototype.patchTeamsId = function (body, metadata) {
        return this.core.fetch('/teams/{id}', 'patch', body, metadata);
    };
    SDK.prototype.putTeamsId = function (body, metadata) {
        return this.core.fetch('/teams/{id}', 'put', body, metadata);
    };
    /**
     * Requires scope `team:write`.
     *
     * @summary Invite a person
     */
    SDK.prototype.postTeamsIdInvites = function (body, metadata) {
        return this.core.fetch('/teams/{id}/invites', 'post', body, metadata);
    };
    /**
     * Reject a team invitation
     *
     */
    SDK.prototype.deleteTeamsIdInvitesToken = function (metadata) {
        return this.core.fetch('/teams/{id}/invites/{token}', 'delete', metadata);
    };
    /**
     * Requires scope `team:write`.
     *
     * @summary Accept a team invitation
     */
    SDK.prototype.postTeamsIdInvitesToken = function (metadata) {
        return this.core.fetch('/teams/{id}/invites/{token}', 'post', metadata);
    };
    /**
     * Get a list of team members and some additional information like their team role.
     * Requires scopes `team:read` *and* `user:read`.
     *
     * @summary List team members
     */
    SDK.prototype.getTeamsIdMembers = function (metadata) {
        return this.core.fetch('/teams/{id}/members', 'get', metadata);
    };
    /**
     * Requires scope `team:write`.
     *
     * @summary Remove a team member
     */
    SDK.prototype.deleteTeamsIdMembersUserid = function (metadata) {
        return this.core.fetch('/teams/{id}/members/{userId}', 'delete', metadata);
    };
    /**
     * Requires scope `team:write`.
     *
     * @summary Set team member status
     */
    SDK.prototype.putTeamsIdMembersUseridStatus = function (body, metadata) {
        return this.core.fetch('/teams/{id}/members/{userId}/status', 'put', body, metadata);
    };
    /**
     * Get a list of themes accessible by the authenticated user
     *                         The returned theme objects do not include the full theme
     * configuration.
     *                         Requires scope `chart:read`.
     *
     * @summary List themes
     */
    SDK.prototype.getThemes = function (metadata) {
        return this.core.fetch('/themes', 'get', metadata);
    };
    /**
     * Requires scope `user:read`.
     *
     * @summary List users
     */
    SDK.prototype.getUsers = function (metadata) {
        return this.core.fetch('/users', 'get', metadata);
    };
    SDK.prototype.deleteUsersId = function (body, metadata) {
        return this.core.fetch('/users/{id}', 'delete', body, metadata);
    };
    /**
     * Requires scope `user:read`.
     *
     * @summary Fetch user information
     */
    SDK.prototype.getUsersId = function (metadata) {
        return this.core.fetch('/users/{id}', 'get', metadata);
    };
    SDK.prototype.patchUsersId = function (body, metadata) {
        return this.core.fetch('/users/{id}', 'patch', body, metadata);
    };
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of recently edited charts
     */
    SDK.prototype.getUsersIdRecentlyeditedcharts = function (metadata) {
        return this.core.fetch('/users/{id}/recently-edited-charts', 'get', metadata);
    };
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of recently published charts
     */
    SDK.prototype.getUsersIdRecentlypublishedcharts = function (metadata) {
        return this.core.fetch('/users/{id}/recently-published-charts', 'get', metadata);
    };
    SDK.prototype.patchUsersIdSettings = function (body, metadata) {
        return this.core.fetch('/users/{id}/settings', 'patch', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
