import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Retrieves all login tokens associated to the current user.
     *
     * @summary Retrieves login tokens
     */
    getAuthLogintokens(metadata?: types.GetAuthLogintokensMetadataParam): Promise<FetchResponse<number, types.GetAuthLogintokensResponseDefault>>;
    /**
     * Creates a new login token to authenticate a user, for use in CMS integrations. Login
     * tokens are valid for five minutes and can only be used once.
     *
     * @summary Creates a login token
     */
    postAuthLogintokens(body: types.PostAuthLogintokensBodyParam): Promise<FetchResponse<number, types.PostAuthLogintokensResponseDefault>>;
    /**
     * Deletes an existing login token by the current user.
     *
     * @summary Deletes a login token
     */
    deleteAuthLogintokensId(metadata: types.DeleteAuthLogintokensIdMetadataParam): Promise<FetchResponse<number, types.DeleteAuthLogintokensIdResponseDefault>>;
    /**
     * Login using a one-time login token and redirect to the URL associated with the token.
     * For use in CMS integrations.
     *
     * @summary Login using login token
     */
    getAuthLoginToken(metadata: types.GetAuthLoginTokenMetadataParam): Promise<FetchResponse<number, types.GetAuthLoginTokenResponseDefault>>;
    /**
     * Requires scope `auth:read`.
     *
     * @summary Get list of valid token scopes.
     */
    getAuthTokenscopes(): Promise<FetchResponse<number, types.GetAuthTokenscopesResponseDefault>>;
    /**
     * Response will not include full tokens for security reasons. Requires scope `auth:read`.
     *
     * @summary List API tokens
     */
    getAuthTokens(metadata?: types.GetAuthTokensMetadataParam): Promise<FetchResponse<200, types.GetAuthTokensResponse200>>;
    /**
     * This endpoint will create a new API Token and show it in the response body.
     *                      It is possible to create a comment with every token to have a
     * reference where it is used.
     *                      Make sure to save the token somewhere, since you won't be able to
     * see it again.  Requires scope `auth:write`.
     *
     * @summary Create API token
     */
    postAuthTokens(body: types.PostAuthTokensBodyParam): Promise<FetchResponse<200, types.PostAuthTokensResponse200>>;
    /**
     * Delete (=revoke) an API access token. Check [/v3/auth/tokens](ref:authtokens) to get the
     * IDs of your available tokens.  Requires scope `auth:write`.
     *
     * @summary Delete API token
     */
    deleteAuthTokensId(metadata: types.DeleteAuthTokensIdMetadataParam): Promise<FetchResponse<204, types.DeleteAuthTokensIdResponse204>>;
    /**
     * Edit an API access token. Check [/v3/auth/tokens](ref:authtokens) to get the IDs of your
     * available tokens.  Requires scope `auth:write`.
     *
     * @summary Edit API token
     */
    putAuthTokensId(body: types.PutAuthTokensIdBodyParam, metadata: types.PutAuthTokensIdMetadataParam): Promise<FetchResponse<204, types.PutAuthTokensIdResponse204>>;
    /**
     * This endpoint fetches a list of available basemaps (metadata only)
     *
     * @summary Get list of all available basemaps
     */
    getBasemaps(): Promise<FetchResponse<number, types.GetBasemapsResponseDefault>>;
    /**
     * This endpoint fetches a basemap's content and metadata.
     *
     * @summary Fetch basemap content and metadata
     */
    getBasemapsId(metadata: types.GetBasemapsIdMetadataParam): Promise<FetchResponse<number, types.GetBasemapsIdResponseDefault>>;
    /**
     * This endpoint fetches a list of all available values for a basemap key, e.g.
     * https://api.datawrapper.de/v3/basemaps/world-2019/DW_NAME
     *
     * @summary Fetch list of key values in a basemap
     */
    getBasemapsIdKey(metadata: types.GetBasemapsIdKeyMetadataParam): Promise<FetchResponse<number, types.GetBasemapsIdKeyResponseDefault>>;
    /**
     * Search and filter a list of your charts.
     *                         The returned chart objects, do not include the full chart
     * metadata.
     *                         To get the full metadata add ?expand=true or use
     * [/v3/charts/{id}](ref:getchartsid).  Requires scope `chart:read`.
     *
     * @summary List charts
     */
    getCharts(metadata?: types.GetChartsMetadataParam): Promise<FetchResponse<200, types.GetChartsResponse200>>;
    /**
     * Requires scopes `chart:write`.
     *
     * @summary Moves charts into a folder
     */
    patchCharts(body: types.PatchChartsBodyParam): Promise<FetchResponse<200, types.PatchChartsResponse200>>;
    /**
     * Requires scope `chart:write`.
     *
     * @summary Create new visualization
     */
    postCharts(body?: types.PostChartsBodyParam): Promise<FetchResponse<200, types.PostChartsResponse200>>;
    /**
     * Requires scopes `chart:write`.
     *
     * @summary Copies charts in place or into another folder
     */
    postChartsCopy(body: types.PostChartsCopyBodyParam): Promise<FetchResponse<200, types.PostChartsCopyResponse200>>;
    /**
     * This action is permanent. Be careful when using this endpoint.
     *                         If this endpoint should be used in an application (CMS), it is
     * recommended to
     *                         ask the user for confirmation.  Requires scope `chart:write`.
     *
     * @summary Delete a chart
     */
    deleteChartsId(metadata: types.DeleteChartsIdMetadataParam): Promise<FetchResponse<204, types.DeleteChartsIdResponse204>>;
    /**
     * Requires scope `chart:read` or `chart:write`.
     *
     * @summary Fetch chart metadata
     */
    getChartsId(metadata: types.GetChartsIdMetadataParam): Promise<FetchResponse<200, types.GetChartsIdResponse200>>;
    /**
     * Allows for partial metadata updates (via JSON merge patch). Requires scope
     * `chart:write`.
     *
     * @summary Update specific chart properties.
     */
    patchChartsId(body: types.PatchChartsIdBodyParam, metadata: types.PatchChartsIdMetadataParam): Promise<FetchResponse<200, types.PatchChartsIdResponse200>>;
    patchChartsId(metadata: types.PatchChartsIdMetadataParam): Promise<FetchResponse<200, types.PatchChartsIdResponse200>>;
    /**
     * Replaces the entire metadata object. Requires scope `chart:write`.
     *
     * @summary Update all chart properties
     */
    putChartsId(body: types.PutChartsIdBodyParam, metadata: types.PutChartsIdMetadataParam): Promise<FetchResponse<200, types.PutChartsIdResponse200>>;
    putChartsId(metadata: types.PutChartsIdMetadataParam): Promise<FetchResponse<200, types.PutChartsIdResponse200>>;
    /**
     * Request an asset associated with a chart. Requires scope `chart:read`.
     *
     * @summary Fetch chart asset
     */
    getChartsIdAssetsAsset(metadata: types.GetChartsIdAssetsAssetMetadataParam): Promise<FetchResponse<number, types.GetChartsIdAssetsAssetResponseDefault>>;
    /**
     * Upload data for a chart, which is usually a CSV.
     *                         An example looks like this: `/v3/charts/{id}/assets/{id}.csv`.
     * Requires scope `chart:write`.
     *
     * @summary Upload chart data
     */
    putChartsIdAssetsAsset(body: types.PutChartsIdAssetsAssetBodyParam, metadata: types.PutChartsIdAssetsAssetMetadataParam): Promise<FetchResponse<204, types.PutChartsIdAssetsAssetResponse204>>;
    putChartsIdAssetsAsset(metadata: types.PutChartsIdAssetsAssetMetadataParam): Promise<FetchResponse<204, types.PutChartsIdAssetsAssetResponse204>>;
    /**
     * Requires scope `chart:read`.
     *
     * @summary Gets all comments for a chart
     */
    getChartsIdComments(metadata: types.GetChartsIdCommentsMetadataParam): Promise<FetchResponse<number, types.GetChartsIdCommentsResponseDefault>>;
    /**
     * Requires scope `chart:write`.
     *
     * @summary Create a new comment for a chart
     */
    postChartsIdComments(body: types.PostChartsIdCommentsBodyParam, metadata: types.PostChartsIdCommentsMetadataParam): Promise<FetchResponse<number, types.PostChartsIdCommentsResponseDefault>>;
    /**
     * Requires scope `chart:write`.
     *
     * @summary Copies a chart
     */
    postChartsIdCopy(metadata: types.PostChartsIdCopyMetadataParam): Promise<FetchResponse<number, types.PostChartsIdCopyResponseDefault>>;
    /**
     * Request the data of a chart, which is usually a CSV. Requires scope `chart:read`.
     *
     * @summary Fetch chart data
     */
    getChartsIdData(metadata: types.GetChartsIdDataMetadataParam): Promise<FetchResponse<number, types.GetChartsIdDataResponseDefault>>;
    /**
     * Upload data for a chart or map. Requires scope `chart:write`.
     *
     * @summary Upload chart data
     */
    putChartsIdData(body: types.PutChartsIdDataBodyParam, metadata: types.PutChartsIdDataMetadataParam): Promise<FetchResponse<204, types.PutChartsIdDataResponse204>>;
    putChartsIdData(metadata: types.PutChartsIdDataMetadataParam): Promise<FetchResponse<204, types.PutChartsIdDataResponse204>>;
    /**
     * If a chart has an external data source configured, this endpoint fetches the data and
     * saves it to the chart. Requires scope `chart:read`.
     *
     * @summary Updates a chart's external data source.
     */
    postChartsIdDataRefresh(metadata: types.PostChartsIdDataRefreshMetadataParam): Promise<FetchResponse<number, types.PostChartsIdDataRefreshResponseDefault>>;
    /**
     * Request the available URLs to directly share a chart.
     *
     * @summary Get share URLs for a chart
     */
    getChartsIdDisplayurls(metadata: types.GetChartsIdDisplayurlsMetadataParam): Promise<FetchResponse<200, types.GetChartsIdDisplayurlsResponse200>>;
    /**
     * Request the responsive and static embed code of a chart. Requires scope `chart:read`.
     *
     * @summary Get embed codes for a chart
     */
    getChartsIdEmbedcodes(metadata: types.GetChartsIdEmbedcodesMetadataParam): Promise<FetchResponse<200, types.GetChartsIdEmbedcodesResponse200>>;
    /**
     * Export your chart as image or document for use in print or presentations.
     *                         Not all formats might be available to you, based on your
     * account. Requires scope `chart:read`.
     *
     * @summary Export chart
     */
    getChartsIdExportFormat(metadata: types.GetChartsIdExportFormatMetadataParam): Promise<FetchResponse<number, types.GetChartsIdExportFormatResponseDefault>>;
    /**
     * Export your chart as image or document for use in print or presentations. Returns the
     * URL to query the async export status.
     *                         Not all formats might be available to you, based on your
     * account. Requires scope `chart:read`.
     *
     * @summary Export chart in async mode
     */
    postChartsIdExportFormatAsync(body: types.PostChartsIdExportFormatAsyncBodyParam, metadata: types.PostChartsIdExportFormatAsyncMetadataParam): Promise<FetchResponse<number, types.PostChartsIdExportFormatAsyncResponseDefault>>;
    postChartsIdExportFormatAsync(metadata: types.PostChartsIdExportFormatAsyncMetadataParam): Promise<FetchResponse<number, types.PostChartsIdExportFormatAsyncResponseDefault>>;
    /**
     * After triggering an asynchronous export this route can be used to find out if the export
     * has finished, yet. It returns either the HTTP code 425 to indicate that the export isn't
     * ready or HTTP code 200 along with the export result.
     *
     * @summary Export chart
     */
    getChartsIdExportFormatAsyncExportid(metadata: types.GetChartsIdExportFormatAsyncExportidMetadataParam): Promise<FetchResponse<number, types.GetChartsIdExportFormatAsyncExportidResponseDefault>>;
    /**
     * This creates an editable copy of a reusable visualization from the [Datawrapper
     * River](https://river.datawrapper.de/). Requires scope `chart:write`.
     *
     * @summary Fork a chart
     */
    postChartsIdFork(metadata: types.PostChartsIdForkMetadataParam): Promise<FetchResponse<number, types.PostChartsIdForkResponseDefault>>;
    /**
     * Requires scopes `chart:read` *and* `chart:write` *and* `theme:read` *and*
     * `visualization:read`.
     *
     * @summary Publish a chart
     */
    postChartsIdPublish(metadata: types.PostChartsIdPublishMetadataParam): Promise<FetchResponse<200, types.PostChartsIdPublishResponse200>>;
    /**
     * Check the publish status of a chart.  Requires scope `chart:read`.
     *
     * @summary Get publish status
     */
    getChartsIdPublishStatusVersion(metadata: types.GetChartsIdPublishStatusVersionMetadataParam): Promise<FetchResponse<200, types.GetChartsIdPublishStatusVersionResponse200>>;
    /**
     * This will remove all public files, including the embeds and published images. Requires
     * scope `chart:write`.
     *
     * @summary Unpublish a published visualization
     */
    postChartsIdUnpublish(metadata: types.PostChartsIdUnpublishMetadataParam): Promise<FetchResponse<number, types.PostChartsIdUnpublishResponseDefault>>;
    /**
     * Get a list of folders and their associated charts. Requires scope `folder:read`.
     *
     * @summary List folders
     */
    getFolders(metadata?: types.GetFoldersMetadataParam): Promise<FetchResponse<200, types.GetFoldersResponse200>>;
    /**
     * Requires scope `folder:write`.
     *
     * @summary Create a folder
     */
    postFolders(body: types.PostFoldersBodyParam): Promise<FetchResponse<number, types.PostFoldersResponseDefault>>;
    /**
     * Requires scope `folder:write`.
     *
     * @summary Copy folders to a new destination folder/team/user.
     */
    postFoldersCopy(body: types.PostFoldersCopyBodyParam): Promise<FetchResponse<number, types.PostFoldersCopyResponseDefault>>;
    /**
     * Requires scope `folder:write`.
     *
     * @summary Move folders to a new destination folder/team/user.
     */
    patchFoldersMove(body: types.PatchFoldersMoveBodyParam): Promise<FetchResponse<number, types.PatchFoldersMoveResponseDefault>>;
    /**
     * Deletes the specified folder. Requires scope `folder:write`.
     *
     * @summary Delete a folder
     */
    deleteFoldersId(metadata: types.DeleteFoldersIdMetadataParam): Promise<FetchResponse<204, types.DeleteFoldersIdResponse204>>;
    /**
     * Get a specific folder. Requires scope `folder:read`.
     *
     * @summary Get a folder
     */
    getFoldersId(metadata: types.GetFoldersIdMetadataParam): Promise<FetchResponse<200, types.GetFoldersIdResponse200>>;
    /**
     * Update a folder. Requires scope `folder:write`.
     *
     * @summary Updates a folder
     */
    patchFoldersId(body: types.PatchFoldersIdBodyParam, metadata: types.PatchFoldersIdMetadataParam): Promise<FetchResponse<200, types.PatchFoldersIdResponse200>>;
    patchFoldersId(metadata: types.PatchFoldersIdMetadataParam): Promise<FetchResponse<200, types.PatchFoldersIdResponse200>>;
    /**
     * Update a folder. Requires scope `folder:write`.
     *
     * @summary Updates a folder
     */
    putFoldersId(body: types.PutFoldersIdBodyParam, metadata: types.PutFoldersIdMetadataParam): Promise<FetchResponse<200, types.PutFoldersIdResponse200>>;
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
    deleteMe(body: types.DeleteMeBodyParam): Promise<FetchResponse<204, types.DeleteMeResponse204>>;
    /**
     * Requires scope `user:read`.
     *
     * @summary Fetch your account information
     */
    getMe(): Promise<FetchResponse<200, types.GetMeResponse200>>;
    /**
     * Requires scope `user:write`.
     *
     * @summary Update your account information
     */
    patchMe(body?: types.PatchMeBodyParam): Promise<FetchResponse<200, types.PatchMeResponse200>>;
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of your recently edited charts
     */
    getMeRecentlyeditedcharts(metadata?: types.GetMeRecentlyeditedchartsMetadataParam): Promise<FetchResponse<200, types.GetMeRecentlyeditedchartsResponse200>>;
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of your recently published charts
     */
    getMeRecentlypublishedcharts(metadata?: types.GetMeRecentlypublishedchartsMetadataParam): Promise<FetchResponse<200, types.GetMeRecentlypublishedchartsResponse200>>;
    /**
     * Use this endpoint to change your active team. Requires scope `user:write`.
     *
     * @summary Update your account settings
     */
    patchMeSettings(body?: types.PatchMeSettingsBodyParam): Promise<FetchResponse<200, types.PatchMeSettingsResponse200>>;
    /**
     * Retreive embedding information about a Datawrapper visualization. See our [oEmbed
     * tutorial](https://developer.datawrapper.de/docs/embedding-charts-via-oembed) and the
     * official [oEmbed specification](https://oembed.com/) for more information.
     *
     * @summary Get oEmbed information
     */
    getOembed(metadata: types.GetOembedMetadataParam): Promise<FetchResponse<200, types.GetOembedResponse200>>;
    /**
     * Search and filter a list of your River charts
     *
     * @summary List River charts
     */
    getRiver(metadata?: types.GetRiverMetadataParam): Promise<FetchResponse<200, types.GetRiverResponse200>>;
    /**
     * Show details for individual River chart
     *
     * @summary Show River chart
     */
    getRiverChartid(metadata: types.GetRiverChartidMetadataParam): Promise<FetchResponse<number, types.GetRiverChartidResponseDefault>>;
    /**
     * Update metadata of chart published in River
     *
     * @summary Update River chart
     */
    putRiverId(body: types.PutRiverIdBodyParam, metadata: types.PutRiverIdMetadataParam): Promise<FetchResponse<number, types.PutRiverIdResponseDefault>>;
    /**
     * Get a list of teams you are part of.
     *
     * @summary List teams
     */
    getTeams(metadata?: types.GetTeamsMetadataParam): Promise<FetchResponse<200, types.GetTeamsResponse200>>;
    /**
     * Create a team
     *
     */
    postTeams(body: types.PostTeamsBodyParam): Promise<FetchResponse<200, types.PostTeamsResponse200>>;
    /**
     * **Be careful!** This is a destructive action that can only be performed by team owners.
     * Requires scope `team:write`.
     *
     * @summary Delete a team
     */
    deleteTeamsId(metadata: types.DeleteTeamsIdMetadataParam): Promise<FetchResponse<204, types.DeleteTeamsIdResponse204>>;
    /**
     * Requires scope `team:read` or `team:write`.
     *
     * @summary Fetch team information
     */
    getTeamsId(metadata: types.GetTeamsIdMetadataParam): Promise<FetchResponse<200, types.GetTeamsIdResponse200>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Update a team
     */
    patchTeamsId(body: types.PatchTeamsIdBodyParam, metadata: types.PatchTeamsIdMetadataParam): Promise<FetchResponse<200, types.PatchTeamsIdResponse200>>;
    patchTeamsId(metadata: types.PatchTeamsIdMetadataParam): Promise<FetchResponse<200, types.PatchTeamsIdResponse200>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Update a team
     */
    putTeamsId(body: types.PutTeamsIdBodyParam, metadata: types.PutTeamsIdMetadataParam): Promise<FetchResponse<200, types.PutTeamsIdResponse200>>;
    putTeamsId(metadata: types.PutTeamsIdMetadataParam): Promise<FetchResponse<200, types.PutTeamsIdResponse200>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Invite a person
     */
    postTeamsIdInvites(body: types.PostTeamsIdInvitesBodyParam, metadata: types.PostTeamsIdInvitesMetadataParam): Promise<FetchResponse<201, types.PostTeamsIdInvitesResponse201>>;
    /**
     * Reject a team invitation
     *
     */
    deleteTeamsIdInvitesToken(metadata: types.DeleteTeamsIdInvitesTokenMetadataParam): Promise<FetchResponse<204, types.DeleteTeamsIdInvitesTokenResponse204>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Accept a team invitation
     */
    postTeamsIdInvitesToken(metadata: types.PostTeamsIdInvitesTokenMetadataParam): Promise<FetchResponse<201, types.PostTeamsIdInvitesTokenResponse201>>;
    /**
     * Get a list of team members and some additional information like their team role.
     * Requires scopes `team:read` *and* `user:read`.
     *
     * @summary List team members
     */
    getTeamsIdMembers(metadata: types.GetTeamsIdMembersMetadataParam): Promise<FetchResponse<200, types.GetTeamsIdMembersResponse200>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Remove a team member
     */
    deleteTeamsIdMembersUserid(metadata: types.DeleteTeamsIdMembersUseridMetadataParam): Promise<FetchResponse<204, types.DeleteTeamsIdMembersUseridResponse204>>;
    /**
     * Requires scope `team:write`.
     *
     * @summary Set team member status
     */
    putTeamsIdMembersUseridStatus(body: types.PutTeamsIdMembersUseridStatusBodyParam, metadata: types.PutTeamsIdMembersUseridStatusMetadataParam): Promise<FetchResponse<204, types.PutTeamsIdMembersUseridStatusResponse204>>;
    /**
     * Get a list of themes accessible by the authenticated user
     *                         The returned theme objects do not include the full theme
     * configuration.
     *                         Requires scope `chart:read`.
     *
     * @summary List themes
     */
    getThemes(metadata?: types.GetThemesMetadataParam): Promise<FetchResponse<200, types.GetThemesResponse200>>;
    /**
     * Requires scope `user:read`.
     *
     * @summary List users
     */
    getUsers(metadata?: types.GetUsersMetadataParam): Promise<FetchResponse<200, types.GetUsersResponse200>>;
    /**
     * **Be careful!** This is a destructive action.
     *                         By deleting your account you will loose access to all of your
     * charts.
     *                         If this endpoint should be used in an application (CMS), it is
     * recommended to
     *                         ask the user for confirmation. Requires scope `user:write`.
     *
     * @summary Delete user
     */
    deleteUsersId(body: types.DeleteUsersIdBodyParam, metadata: types.DeleteUsersIdMetadataParam): Promise<FetchResponse<204, types.DeleteUsersIdResponse204>>;
    deleteUsersId(metadata: types.DeleteUsersIdMetadataParam): Promise<FetchResponse<204, types.DeleteUsersIdResponse204>>;
    /**
     * Requires scope `user:read`.
     *
     * @summary Fetch user information
     */
    getUsersId(metadata: types.GetUsersIdMetadataParam): Promise<FetchResponse<200, types.GetUsersIdResponse200>>;
    /**
     * Requires scope `user:write`.
     *
     * @summary Update user information
     */
    patchUsersId(body: types.PatchUsersIdBodyParam, metadata: types.PatchUsersIdMetadataParam): Promise<FetchResponse<200, types.PatchUsersIdResponse200>>;
    patchUsersId(metadata: types.PatchUsersIdMetadataParam): Promise<FetchResponse<200, types.PatchUsersIdResponse200>>;
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of recently edited charts
     */
    getUsersIdRecentlyeditedcharts(metadata: types.GetUsersIdRecentlyeditedchartsMetadataParam): Promise<FetchResponse<200, types.GetUsersIdRecentlyeditedchartsResponse200>>;
    /**
     * Requires scopes `user:read` *and* `chart:read`.
     *
     * @summary Get a list of recently published charts
     */
    getUsersIdRecentlypublishedcharts(metadata: types.GetUsersIdRecentlypublishedchartsMetadataParam): Promise<FetchResponse<200, types.GetUsersIdRecentlypublishedchartsResponse200>>;
    /**
     * Requires scope `user:write`.
     *
     * @summary Update user settings
     */
    patchUsersIdSettings(body: types.PatchUsersIdSettingsBodyParam, metadata: types.PatchUsersIdSettingsMetadataParam): Promise<FetchResponse<200, types.PatchUsersIdSettingsResponse200>>;
    patchUsersIdSettings(metadata: types.PatchUsersIdSettingsMetadataParam): Promise<FetchResponse<200, types.PatchUsersIdSettingsResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
