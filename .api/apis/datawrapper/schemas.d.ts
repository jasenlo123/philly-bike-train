declare const DeleteAuthLogintokensId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid login token.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAuthTokensId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the token to be deleted.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteChartsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteFoldersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Folder ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteMe: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "User email address to confirm deletion.";
                readonly "x-format": {
                    readonly email: true;
                };
                readonly examples: readonly ["zola@hydra.com"];
            };
            readonly password: {
                readonly type: "string";
                readonly description: "User password to confirm deletion";
            };
        };
        readonly required: readonly ["password"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTeamsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team to delete.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTeamsIdInvitesToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID (eg. guardians-of-the-galaxy)";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid team invitation token";
                };
            };
            readonly required: readonly ["id", "token"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteTeamsIdMembersUserid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team";
                };
                readonly userId: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team member to remove from team.";
                };
            };
            readonly required: readonly ["id", "userId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteUsersId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "User email address to confirm deletion.";
                readonly "x-format": {
                    readonly email: true;
                };
                readonly examples: readonly ["james.barnes@shield.com"];
            };
            readonly password: {
                readonly type: "string";
                readonly description: "User password to confirm deletion";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAuthLoginToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid login token.";
                };
            };
            readonly required: readonly ["token"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAuthLogintokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAuthTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAuthTokenscopes: {
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBasemaps: {
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBasemapsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Basemap ID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly wgs84: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set to true if you want the basemap in WGS84";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBasemapsIdKey: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Basemap ID";
                };
                readonly key: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Basemap Metadata Key";
                };
            };
            readonly required: readonly ["id", "key"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User id of visualization author";
                };
                readonly authorId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User id of visualization author";
                };
                readonly published: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Flag to filter results by publish status";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for charts with a specific title.";
                };
                readonly folderId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List visualizations inside a specific folder";
                };
                readonly teamId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List visualizations belonging to a specific team. Use teamId=null to search for user visualizations not part of a team";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly default: "DESC";
                    readonly description: "Result order (ascending or descending)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly enum: readonly ["authorId", "createdAt", "lastEditStep", "lastModifiedAt", "publishedAt", "title", "type"];
                    readonly default: "createdAt";
                    readonly description: "Attribute to order by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly minLastEditStep: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 5;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter visualizations by the last editor step they've been opened in (1=upload, 2=describe, 3=visualize, etc)";
                };
                readonly expand: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "When set to true, the response includes additional properties such as visualization metadata.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the visualization";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the visualization";
                            };
                            readonly publicId: {
                                readonly type: "string";
                                readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                            };
                            readonly authorId: {
                                readonly type: "integer";
                                readonly description: "ID of user that created the visualization.";
                            };
                            readonly organizationId: {
                                readonly type: "string";
                                readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                            };
                            readonly folderId: {
                                readonly type: "integer";
                                readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Visualization language (output locale), e.g `en-US`";
                            };
                            readonly theme: {
                                readonly type: "string";
                                readonly description: "ID of theme applied to the visualization";
                                readonly minLength: 2;
                                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                                readonly "x-convert": {
                                    readonly case: "lower";
                                };
                                readonly examples: readonly ["datawrapper"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was created.";
                            };
                            readonly lastModifiedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last edited.";
                            };
                            readonly publishedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                            };
                            readonly lastEditStep: {
                                readonly type: "integer";
                                readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                                readonly minimum: 0;
                                readonly maximum: 5;
                            };
                            readonly publicVersion: {
                                readonly type: "integer";
                                readonly description: "Indicates how many times a visualization has been published.";
                                readonly minimum: 0;
                            };
                            readonly publicUrl: {
                                readonly type: "string";
                                readonly description: "URL of published visualization.";
                            };
                            readonly author: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the user who created the visualization";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email address of the user who created the visualization";
                                    };
                                    readonly avatar: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the user avatar";
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly description: "Color chosen by the user";
                                    };
                                };
                            };
                            readonly thumbnails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly full: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                                    };
                                    readonly plain: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "All of the visualization's settings.";
                                readonly additionalProperties: true;
                            };
                            readonly guestSession: {
                                readonly type: "string";
                                readonly description: "Guest session id";
                            };
                            readonly customFields: {
                                readonly "x-alternatives": readonly [{
                                    readonly type: "object";
                                }, {
                                    readonly type: "array";
                                    readonly "x-constraint": {
                                        readonly length: 0;
                                    };
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly readonlyKeys: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly published: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID of the visualization";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "Title of the visualization";
                };
                readonly publicId: {
                    readonly type: "string";
                    readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                };
                readonly authorId: {
                    readonly type: "integer";
                    readonly description: "ID of user that created the visualization.";
                };
                readonly organizationId: {
                    readonly type: "string";
                    readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                };
                readonly folderId: {
                    readonly type: "integer";
                    readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                };
                readonly language: {
                    readonly type: "string";
                    readonly description: "Visualization language (output locale), e.g `en-US`";
                };
                readonly theme: {
                    readonly type: "string";
                    readonly description: "ID of theme applied to the visualization";
                    readonly minLength: 2;
                    readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                    readonly "x-convert": {
                        readonly case: "lower";
                    };
                    readonly examples: readonly ["datawrapper"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was created.";
                };
                readonly lastModifiedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last edited.";
                };
                readonly publishedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                };
                readonly lastEditStep: {
                    readonly type: "integer";
                    readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                    readonly minimum: 0;
                    readonly maximum: 5;
                };
                readonly publicVersion: {
                    readonly type: "integer";
                    readonly description: "Indicates how many times a visualization has been published.";
                    readonly minimum: 0;
                };
                readonly author: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the user who created the visualization";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email address of the user who created the visualization";
                        };
                        readonly avatar: {
                            readonly type: "string";
                            readonly description: "URL pointing to the user avatar";
                        };
                        readonly color: {
                            readonly type: "string";
                            readonly description: "Color chosen by the user";
                        };
                    };
                };
                readonly thumbnails: {
                    readonly type: "object";
                    readonly properties: {
                        readonly full: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                        };
                        readonly plain: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                        };
                    };
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                };
                readonly guestSession: {
                    readonly type: "string";
                    readonly description: "Guest session id";
                };
                readonly readonlyKeys: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly publicUrl: {
                    readonly type: "string";
                    readonly description: "URL of published visualization.";
                };
                readonly deleted: {
                    readonly type: "boolean";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was deleted.";
                };
                readonly forkable: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                };
                readonly isFork: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization is a copy of another visualization.";
                };
                readonly forkedFrom: {
                    readonly type: "string";
                    readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                };
                readonly externalData: {
                    readonly type: "string";
                    readonly description: "External data URL, relevant for live visualizations.";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly description: "All of the visualization's settings.";
                    readonly additionalProperties: true;
                };
                readonly customFields: {
                    readonly "x-alternatives": readonly [{
                        readonly type: "object";
                    }, {
                        readonly type: "array";
                        readonly "x-constraint": {
                            readonly length: 0;
                        };
                        readonly items: {
                            readonly type: "string";
                        };
                    }];
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly keywords: {
                    readonly type: "string";
                    readonly description: "Keywords";
                };
                readonly utf8: {
                    readonly type: "boolean";
                    readonly description: "UTF-8";
                };
                readonly river: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                        };
                        readonly sourceUrl: {
                            readonly type: "string";
                        };
                    };
                };
                readonly basedOnByline: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdAssetsAsset: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Full filename including extension.";
                };
            };
            readonly required: readonly ["id", "asset"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdComments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly pattern: "^[0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_\\-]{5}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdData: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdDisplayurls: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly url: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdEmbedcodes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly preferred: {
                        readonly type: "boolean";
                    };
                    readonly title: {
                        readonly type: "string";
                    };
                    readonly template: {
                        readonly type: "string";
                    };
                    readonly text: {
                        readonly type: "string";
                    };
                    readonly code: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdExportFormat: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Export format";
                };
            };
            readonly required: readonly ["id", "format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly unit: {
                    readonly type: "string";
                    readonly enum: readonly ["in", "mm", "px"];
                    readonly default: "px";
                    readonly description: "Default: px";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly mode: {
                    readonly type: "string";
                    readonly enum: readonly ["rgb", "cmyk"];
                    readonly default: "rgb";
                    readonly description: "Default: rgb";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly width: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly height: {
                    readonly type: "number";
                    readonly minimum: 1;
                    readonly enum: readonly ["auto"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly plain: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly scale: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly zoom: {
                    readonly type: "number";
                    readonly default: 2;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly borderWidth: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly borderColor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly download: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly fullVector: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly ligatures: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly transparent: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly logo: {
                    readonly type: "string";
                    readonly enum: readonly ["auto", "on", "off"];
                    readonly default: "auto";
                    readonly description: "Default: auto";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly logoId: {
                    readonly type: "string";
                    readonly pattern: "^[a-zA-Z0-9-]+$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly dark: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdExportFormatAsyncExportid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Export format";
                };
                readonly exportId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id", "format", "exportId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly download: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetChartsIdPublishStatusVersion: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly version: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id", "version"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly progress: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFolders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly compact: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If present, the response will only include the number of charts in each folder. Otherwise the response includes the full chart information.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFoldersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Folder ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "User-defined folder name";
                };
                readonly userId: {
                    readonly type: "integer";
                    readonly description: "If set, this is a private folder, and it belongs to the indicated user. If unset, the folder is located in a shared team archive (see `teamId`).";
                };
                readonly teamId: {
                    readonly type: "string";
                    readonly description: "The ID of the team that this folder is in. If unset, this folder is private.";
                };
                readonly parentId: {
                    readonly type: "integer";
                    readonly description: "The id of the folder that this folder is in. If 'null', the folder is in the root of either a team, or your private charts. (See `userId` and `teamId`, to determine which)";
                };
                readonly children: {
                    readonly type: "array";
                    readonly description: "List of top-level subfolders of this folder.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                        };
                    };
                };
                readonly charts: {
                    readonly type: "array";
                    readonly description: "List of visualizations in this folder. To access the visualizations in subfolders of this folder, those folders must be queried separately.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMe: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly language: {
                    readonly type: "string";
                };
                readonly presenceColor: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMeRecentlyeditedcharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly minLastEditStep: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 5;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter visualizations by the last editor step they've been opened in (1=upload, 2=describe, 3=visualize, etc)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the visualization";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the visualization";
                            };
                            readonly publicId: {
                                readonly type: "string";
                                readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                            };
                            readonly authorId: {
                                readonly type: "integer";
                                readonly description: "ID of user that created the visualization.";
                            };
                            readonly organizationId: {
                                readonly type: "string";
                                readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                            };
                            readonly folderId: {
                                readonly type: "integer";
                                readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Visualization language (output locale), e.g `en-US`";
                            };
                            readonly theme: {
                                readonly type: "string";
                                readonly description: "ID of theme applied to the visualization";
                                readonly minLength: 2;
                                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                                readonly "x-convert": {
                                    readonly case: "lower";
                                };
                                readonly examples: readonly ["datawrapper"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was created.";
                            };
                            readonly lastModifiedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last edited.";
                            };
                            readonly publishedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                            };
                            readonly lastEditStep: {
                                readonly type: "integer";
                                readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                                readonly minimum: 0;
                                readonly maximum: 5;
                            };
                            readonly publicVersion: {
                                readonly type: "integer";
                                readonly description: "Indicates how many times a visualization has been published.";
                                readonly minimum: 0;
                            };
                            readonly publicUrl: {
                                readonly type: "string";
                                readonly description: "URL of published visualization.";
                            };
                            readonly author: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the user who created the visualization";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email address of the user who created the visualization";
                                    };
                                    readonly avatar: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the user avatar";
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly description: "Color chosen by the user";
                                    };
                                };
                            };
                            readonly thumbnails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly full: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                                    };
                                    readonly plain: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "All of the visualization's settings.";
                                readonly additionalProperties: true;
                            };
                            readonly guestSession: {
                                readonly type: "string";
                                readonly description: "Guest session id";
                            };
                            readonly customFields: {
                                readonly "x-alternatives": readonly [{
                                    readonly type: "object";
                                }, {
                                    readonly type: "array";
                                    readonly "x-constraint": {
                                        readonly length: 0;
                                    };
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly readonlyKeys: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMeRecentlypublishedcharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly minLastEditStep: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 5;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter visualizations by the last editor step they've been opened in (1=upload, 2=describe, 3=visualize, etc)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the visualization";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the visualization";
                            };
                            readonly publicId: {
                                readonly type: "string";
                                readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                            };
                            readonly authorId: {
                                readonly type: "integer";
                                readonly description: "ID of user that created the visualization.";
                            };
                            readonly organizationId: {
                                readonly type: "string";
                                readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                            };
                            readonly folderId: {
                                readonly type: "integer";
                                readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Visualization language (output locale), e.g `en-US`";
                            };
                            readonly theme: {
                                readonly type: "string";
                                readonly description: "ID of theme applied to the visualization";
                                readonly minLength: 2;
                                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                                readonly "x-convert": {
                                    readonly case: "lower";
                                };
                                readonly examples: readonly ["datawrapper"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was created.";
                            };
                            readonly lastModifiedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last edited.";
                            };
                            readonly publishedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                            };
                            readonly lastEditStep: {
                                readonly type: "integer";
                                readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                                readonly minimum: 0;
                                readonly maximum: 5;
                            };
                            readonly publicVersion: {
                                readonly type: "integer";
                                readonly description: "Indicates how many times a visualization has been published.";
                                readonly minimum: 0;
                            };
                            readonly publicUrl: {
                                readonly type: "string";
                                readonly description: "URL of published visualization.";
                            };
                            readonly author: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the user who created the visualization";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email address of the user who created the visualization";
                                    };
                                    readonly avatar: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the user avatar";
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly description: "Color chosen by the user";
                                    };
                                };
                            };
                            readonly thumbnails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly full: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                                    };
                                    readonly plain: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "All of the visualization's settings.";
                                readonly additionalProperties: true;
                            };
                            readonly guestSession: {
                                readonly type: "string";
                                readonly description: "Guest session id";
                            };
                            readonly customFields: {
                                readonly "x-alternatives": readonly [{
                                    readonly type: "object";
                                }, {
                                    readonly type: "array";
                                    readonly "x-constraint": {
                                        readonly length: 0;
                                    };
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly readonlyKeys: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOembed: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["json"];
                    readonly default: "json";
                    readonly description: "The response format. Currenly only JSON is supported.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly url: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The URL of the Datawrapper visualization you want to retreive embedding information";
                };
                readonly maxwidth: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum width of the embedded visualization";
                };
                readonly maxheight: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum height of the embedded visualization";
                };
                readonly iframe: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Force iframe-only embedding";
                };
            };
            readonly required: readonly ["url"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                };
                readonly version: {
                    readonly type: "string";
                };
                readonly provider_name: {
                    readonly type: "string";
                };
                readonly provider_url: {
                    readonly type: "string";
                };
                readonly title: {
                    readonly type: "string";
                };
                readonly html: {
                    readonly type: "string";
                };
                readonly width: {
                    readonly type: "integer";
                };
                readonly height: {
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRiver: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly approved: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter only approved charts";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly default: 48;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for charts with a specific title.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRiverChartid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chartId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["chartId"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTeams: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for a team name or id including this term.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly default: "ASC";
                    readonly description: "Result order (ascending or descending)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly enum: readonly ["name", "createdAt"];
                    readonly default: "name";
                    readonly description: "Attribute to order by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTeamsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team to fetch.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTeamsIdMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team to fetch members for.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for a team name or id including this term.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly default: "ASC";
                    readonly description: "Result order (ascending or descending)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly enum: readonly ["name", "createdAt"];
                    readonly default: "name";
                    readonly description: "Attribute to order by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetThemes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly deleted: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly teamId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter users by team.";
                };
                readonly search: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for a user.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["ASC", "DESC"];
                    readonly default: "ASC";
                    readonly description: "Result order (ascending or descending)";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly enum: readonly ["id", "email", "name", "createdAt", "chartCount"];
                    readonly default: "id";
                    readonly description: "Attribute to order by";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly email: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsersIdRecentlyeditedcharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly minLastEditStep: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 5;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter visualizations by the last editor step they've been opened in (1=upload, 2=describe, 3=visualize, etc)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the visualization";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the visualization";
                            };
                            readonly publicId: {
                                readonly type: "string";
                                readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                            };
                            readonly authorId: {
                                readonly type: "integer";
                                readonly description: "ID of user that created the visualization.";
                            };
                            readonly organizationId: {
                                readonly type: "string";
                                readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                            };
                            readonly folderId: {
                                readonly type: "integer";
                                readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Visualization language (output locale), e.g `en-US`";
                            };
                            readonly theme: {
                                readonly type: "string";
                                readonly description: "ID of theme applied to the visualization";
                                readonly minLength: 2;
                                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                                readonly "x-convert": {
                                    readonly case: "lower";
                                };
                                readonly examples: readonly ["datawrapper"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was created.";
                            };
                            readonly lastModifiedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last edited.";
                            };
                            readonly publishedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                            };
                            readonly lastEditStep: {
                                readonly type: "integer";
                                readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                                readonly minimum: 0;
                                readonly maximum: 5;
                            };
                            readonly publicVersion: {
                                readonly type: "integer";
                                readonly description: "Indicates how many times a visualization has been published.";
                                readonly minimum: 0;
                            };
                            readonly publicUrl: {
                                readonly type: "string";
                                readonly description: "URL of published visualization.";
                            };
                            readonly author: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the user who created the visualization";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email address of the user who created the visualization";
                                    };
                                    readonly avatar: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the user avatar";
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly description: "Color chosen by the user";
                                    };
                                };
                            };
                            readonly thumbnails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly full: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                                    };
                                    readonly plain: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "All of the visualization's settings.";
                                readonly additionalProperties: true;
                            };
                            readonly guestSession: {
                                readonly type: "string";
                                readonly description: "Guest session id";
                            };
                            readonly customFields: {
                                readonly "x-alternatives": readonly [{
                                    readonly type: "object";
                                }, {
                                    readonly type: "array";
                                    readonly "x-constraint": {
                                        readonly length: 0;
                                    };
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly readonlyKeys: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUsersIdRecentlypublishedcharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum items to fetch. Useful for pagination.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to skip. Useful for pagination.";
                };
                readonly minLastEditStep: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 5;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter visualizations by the last editor step they've been opened in (1=upload, 2=describe, 3=visualize, etc)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly list: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the visualization";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "Title of the visualization";
                            };
                            readonly publicId: {
                                readonly type: "string";
                                readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                            };
                            readonly authorId: {
                                readonly type: "integer";
                                readonly description: "ID of user that created the visualization.";
                            };
                            readonly organizationId: {
                                readonly type: "string";
                                readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                            };
                            readonly folderId: {
                                readonly type: "integer";
                                readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Visualization language (output locale), e.g `en-US`";
                            };
                            readonly theme: {
                                readonly type: "string";
                                readonly description: "ID of theme applied to the visualization";
                                readonly minLength: 2;
                                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                                readonly "x-convert": {
                                    readonly case: "lower";
                                };
                                readonly examples: readonly ["datawrapper"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was created.";
                            };
                            readonly lastModifiedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last edited.";
                            };
                            readonly publishedAt: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                            };
                            readonly lastEditStep: {
                                readonly type: "integer";
                                readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                                readonly minimum: 0;
                                readonly maximum: 5;
                            };
                            readonly publicVersion: {
                                readonly type: "integer";
                                readonly description: "Indicates how many times a visualization has been published.";
                                readonly minimum: 0;
                            };
                            readonly publicUrl: {
                                readonly type: "string";
                                readonly description: "URL of published visualization.";
                            };
                            readonly author: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the user who created the visualization";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "Email address of the user who created the visualization";
                                    };
                                    readonly avatar: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the user avatar";
                                    };
                                    readonly color: {
                                        readonly type: "string";
                                        readonly description: "Color chosen by the user";
                                    };
                                };
                            };
                            readonly thumbnails: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly full: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                                    };
                                    readonly plain: {
                                        readonly type: "string";
                                        readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly description: "All of the visualization's settings.";
                                readonly additionalProperties: true;
                            };
                            readonly guestSession: {
                                readonly type: "string";
                                readonly description: "Guest session id";
                            };
                            readonly customFields: {
                                readonly "x-alternatives": readonly [{
                                    readonly type: "object";
                                }, {
                                    readonly type: "array";
                                    readonly "x-constraint": {
                                        readonly length: 0;
                                    };
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }];
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly readonlyKeys: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly next: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchCharts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ids: {
                readonly type: "array";
                readonly description: "The IDs of the charts that should be updated.";
                readonly maxItems: 1000;
                readonly items: {
                    readonly type: "string";
                    readonly pattern: "^[0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_\\-]{5}$";
                };
            };
            readonly patch: {
                readonly type: "object";
                readonly description: "An object containing the chart attributes that should be updated.";
                readonly properties: {
                    readonly folderId: {
                        readonly type: "number";
                        readonly description: "ID of the folder that the visualization should be moved into. The authenticated user must have access to this folder.";
                    };
                    readonly teamId: {
                        readonly type: "string";
                        readonly description: "ID of the team that should own the visualization. The authenticated user must have access to this team.";
                        readonly examples: readonly ["ABCdEFgh"];
                    };
                };
                readonly required: readonly ["folderId"];
            };
        };
        readonly required: readonly ["ids", "patch"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "ID of the visualization";
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Title of the visualization";
                    };
                    readonly publicId: {
                        readonly type: "string";
                        readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                    };
                    readonly authorId: {
                        readonly type: "integer";
                        readonly description: "ID of user that created the visualization.";
                    };
                    readonly organizationId: {
                        readonly type: "string";
                        readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                    };
                    readonly folderId: {
                        readonly type: "integer";
                        readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                    };
                    readonly language: {
                        readonly type: "string";
                        readonly description: "Visualization language (output locale), e.g `en-US`";
                    };
                    readonly theme: {
                        readonly type: "string";
                        readonly description: "ID of theme applied to the visualization";
                        readonly minLength: 2;
                        readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                        readonly "x-convert": {
                            readonly case: "lower";
                        };
                        readonly examples: readonly ["datawrapper"];
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was created.";
                    };
                    readonly lastModifiedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was last edited.";
                    };
                    readonly publishedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                    };
                    readonly lastEditStep: {
                        readonly type: "integer";
                        readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                        readonly minimum: 0;
                        readonly maximum: 5;
                    };
                    readonly publicVersion: {
                        readonly type: "integer";
                        readonly description: "Indicates how many times a visualization has been published.";
                        readonly minimum: 0;
                    };
                    readonly author: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the user who created the visualization";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "Email address of the user who created the visualization";
                            };
                            readonly avatar: {
                                readonly type: "string";
                                readonly description: "URL pointing to the user avatar";
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly description: "Color chosen by the user";
                            };
                        };
                    };
                    readonly thumbnails: {
                        readonly type: "object";
                        readonly properties: {
                            readonly full: {
                                readonly type: "string";
                                readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                            };
                            readonly plain: {
                                readonly type: "string";
                                readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                            };
                        };
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                    };
                    readonly guestSession: {
                        readonly type: "string";
                        readonly description: "Guest session id";
                    };
                    readonly readonlyKeys: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly publicUrl: {
                        readonly type: "string";
                        readonly description: "URL of published visualization.";
                    };
                    readonly deleted: {
                        readonly type: "boolean";
                    };
                    readonly deletedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was deleted.";
                    };
                    readonly forkable: {
                        readonly type: "boolean";
                        readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                    };
                    readonly isFork: {
                        readonly type: "boolean";
                        readonly description: "Indicates if the visualization is a copy of another visualization.";
                    };
                    readonly forkedFrom: {
                        readonly type: "string";
                        readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                    };
                    readonly externalData: {
                        readonly type: "string";
                        readonly description: "External data URL, relevant for live visualizations.";
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly description: "All of the visualization's settings.";
                        readonly additionalProperties: true;
                    };
                    readonly customFields: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly keywords: {
                        readonly type: "string";
                        readonly description: "Keywords";
                    };
                    readonly utf8: {
                        readonly type: "boolean";
                        readonly description: "UTF-8";
                    };
                    readonly river: {
                        readonly type: "object";
                        readonly properties: {
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly sourceUrl: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly basedOnByline: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchChartsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly description: "Title of your chart. This will be the chart headline.";
                readonly examples: readonly ["My cool chart"];
            };
            readonly theme: {
                readonly type: "string";
                readonly minLength: 2;
                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                readonly "x-convert": {
                    readonly case: "lower";
                };
                readonly examples: readonly ["datawrapper"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the chart ([Reference](https://developer.datawrapper.de/v3.0/docs/chart-types))";
                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                readonly examples: readonly ["d3-lines"];
            };
            readonly externalData: {
                readonly type: "string";
                readonly description: "URL of external dataset";
                readonly "x-format": {
                    readonly uri: true;
                };
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Visualization locale (e.g. en-US)";
                readonly pattern: "^[a-z]{2}([_-][A-Z]{2})?$";
            };
            readonly lastEditStep: {
                readonly type: "integer";
                readonly description: "Current position in chart editor workflow";
                readonly minimum: 1;
                readonly maximum: 5;
            };
            readonly publicVersion: {
                readonly type: "integer";
            };
            readonly publicUrl: {
                readonly type: "string";
                readonly "x-format": {
                    readonly uri: true;
                };
            };
            readonly publishedAt: {
                readonly type: "string";
                readonly format: "date";
            };
            readonly metadata: {
                readonly type: "object";
                readonly description: "Metadata that saves all chart specific settings and options.";
                readonly properties: {
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transpose: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly authorId: {
                readonly type: "integer";
            };
            readonly organizationId: {
                readonly type: "string";
                readonly description: "ID of the team (formerly known as organization) that the visualization should be created in.  The authenticated user must have access to this team.";
            };
            readonly folderId: {
                readonly type: "integer";
                readonly description: "ID of the folder that the visualization should be created in. The authenticated user must have access to this folder.";
            };
            readonly organization_id: {
                readonly type: "string";
                readonly description: "Deprecated. Use organizationId instead.";
            };
            readonly folder_id: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly inFolder: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly in_folder: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly external_data: {
                readonly type: "string";
                readonly description: "Deprecated. Use externalData instead.";
            };
            readonly last_edit_step: {
                readonly type: "integer";
                readonly description: "Deprecated. Use lastEditStep instead.";
                readonly minimum: 1;
                readonly maximum: 5;
            };
            readonly author_id: {
                readonly type: "integer";
                readonly description: "Deprecated. Use authorId instead.";
            };
            readonly public_version: {
                readonly type: "integer";
                readonly description: "Deprecated. Use publicVersion instead.";
            };
            readonly public_url: {
                readonly type: "string";
                readonly description: "Deprecated. Use publicUrl instead.";
            };
            readonly published_at: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "Deprecated. Use publishedAt instead.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID of the visualization";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "Title of the visualization";
                };
                readonly publicId: {
                    readonly type: "string";
                    readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                };
                readonly authorId: {
                    readonly type: "integer";
                    readonly description: "ID of user that created the visualization.";
                };
                readonly organizationId: {
                    readonly type: "string";
                    readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                };
                readonly folderId: {
                    readonly type: "integer";
                    readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                };
                readonly language: {
                    readonly type: "string";
                    readonly description: "Visualization language (output locale), e.g `en-US`";
                };
                readonly theme: {
                    readonly type: "string";
                    readonly description: "ID of theme applied to the visualization";
                    readonly minLength: 2;
                    readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                    readonly "x-convert": {
                        readonly case: "lower";
                    };
                    readonly examples: readonly ["datawrapper"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was created.";
                };
                readonly lastModifiedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last edited.";
                };
                readonly publishedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                };
                readonly lastEditStep: {
                    readonly type: "integer";
                    readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                    readonly minimum: 0;
                    readonly maximum: 5;
                };
                readonly publicVersion: {
                    readonly type: "integer";
                    readonly description: "Indicates how many times a visualization has been published.";
                    readonly minimum: 0;
                };
                readonly author: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the user who created the visualization";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email address of the user who created the visualization";
                        };
                        readonly avatar: {
                            readonly type: "string";
                            readonly description: "URL pointing to the user avatar";
                        };
                        readonly color: {
                            readonly type: "string";
                            readonly description: "Color chosen by the user";
                        };
                    };
                };
                readonly thumbnails: {
                    readonly type: "object";
                    readonly properties: {
                        readonly full: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                        };
                        readonly plain: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                        };
                    };
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                };
                readonly guestSession: {
                    readonly type: "string";
                    readonly description: "Guest session id";
                };
                readonly readonlyKeys: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly publicUrl: {
                    readonly type: "string";
                    readonly description: "URL of published visualization.";
                };
                readonly deleted: {
                    readonly type: "boolean";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was deleted.";
                };
                readonly forkable: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                };
                readonly isFork: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization is a copy of another visualization.";
                };
                readonly forkedFrom: {
                    readonly type: "string";
                    readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                };
                readonly externalData: {
                    readonly type: "string";
                    readonly description: "External data URL, relevant for live visualizations.";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly description: "All of the visualization's settings.";
                    readonly additionalProperties: true;
                };
                readonly customFields: {
                    readonly "x-alternatives": readonly [{
                        readonly type: "object";
                    }, {
                        readonly type: "array";
                        readonly "x-constraint": {
                            readonly length: 0;
                        };
                        readonly items: {
                            readonly type: "string";
                        };
                    }];
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly keywords: {
                    readonly type: "string";
                    readonly description: "Keywords";
                };
                readonly utf8: {
                    readonly type: "boolean";
                    readonly description: "UTF-8";
                };
                readonly river: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                        };
                        readonly sourceUrl: {
                            readonly type: "string";
                        };
                    };
                };
                readonly basedOnByline: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchFoldersId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Folder name.";
            };
            readonly parentId: {
                readonly type: "number";
                readonly description: "Parent folder.";
            };
            readonly userId: {
                readonly type: "string";
                readonly description: "The user this folder belongs to.";
            };
            readonly teamId: {
                readonly type: "string";
                readonly description: "The team this folder belongs to.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Folder ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "User-defined folder name";
                };
                readonly userId: {
                    readonly type: "integer";
                    readonly description: "If set, this is a private folder, and it belongs to the indicated user. If unset, the folder is located in a shared team archive (see `teamId`).";
                };
                readonly teamId: {
                    readonly type: "string";
                    readonly description: "The ID of the team that this folder is in. If unset, this folder is private.";
                };
                readonly parentId: {
                    readonly type: "integer";
                    readonly description: "The id of the folder that this folder is in. If 'null', the folder is in the root of either a team, or your private charts. (See `userId` and `teamId`, to determine which)";
                };
                readonly children: {
                    readonly type: "array";
                    readonly description: "List of top-level subfolders of this folder.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                        };
                    };
                };
                readonly charts: {
                    readonly type: "array";
                    readonly description: "List of visualizations in this folder. To access the visualizations in subfolders of this folder, those folders must be queried separately.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchFoldersMove: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly destination: {
                readonly type: "object";
                readonly properties: {
                    readonly folderId: {
                        readonly type: "number";
                        readonly description: "ID of the folder that the folders should be copied into. The authenticated user must have access to this folder. Null is the root folder of user or team.";
                        readonly examples: readonly [123];
                    };
                    readonly teamId: {
                        readonly type: "string";
                        readonly description: "ID of the team that owns the desination folder and will own the copied folders and charts. If folderId is provided the team owning this folder must match with this ID. The authenticated user must have access to this team. Null is the user's private archive.";
                        readonly examples: readonly ["ABCdEFgh"];
                    };
                };
                readonly required: readonly ["folderId"];
            };
            readonly folders: {
                readonly type: "array";
                readonly description: "IDs of folders that should be moved to the new destination. Must be accessible by the authenticated user. Not more than 1000 are allowed per request.";
                readonly maxItems: 1000;
                readonly items: {
                    readonly type: "number";
                };
            };
        };
        readonly required: readonly ["folders"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchMe: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Your new user name.";
                readonly pattern: "^[^<>'\"]*$";
                readonly examples: readonly ["Carol Danvers"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Your new email address.";
                readonly "x-format": {
                    readonly email: true;
                };
                readonly examples: readonly ["ronin@avengers.com"];
            };
            readonly role: {
                readonly type: "string";
                readonly description: "Your new role. This can only be changed if you are an admin.";
                readonly enum: readonly ["editor", "admin"];
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Your new language preference.";
                readonly examples: readonly ["en_US"];
            };
            readonly password: {
                readonly type: "string";
                readonly description: "Strong user password.";
                readonly minLength: 8;
                readonly examples: readonly ["13-binary-1968"];
            };
            readonly oldPassword: {
                readonly type: "string";
                readonly description: "The previous user password.";
            };
            readonly presenceColor: {
                readonly type: "string";
                readonly description: "The preferred color to use for user precense pin.";
                readonly pattern: "^[a-zA-Z-\\d]+$";
            };
            readonly avatar: {
                readonly type: "string";
                readonly description: "`''` sets the avatar to the initial, while `null` sets avatar to custom_avatar.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly language: {
                    readonly type: "string";
                };
                readonly presenceColor: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchMeSettings: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly activeTeam: {
                readonly type: "string";
                readonly description: "Your active team";
                readonly examples: readonly ["teamxyz"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly activeTeam: {
                    readonly type: "string";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchTeamsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["New Revengers"];
            };
            readonly defaultTheme: {
                readonly type: "string";
                readonly examples: readonly ["light"];
            };
            readonly settings: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchUsersId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "New user name";
                readonly pattern: "^[^<>'\"]*$";
                readonly examples: readonly ["Carol Danvers"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "New user email address";
                readonly "x-format": {
                    readonly email: true;
                };
                readonly examples: readonly ["89P13@half.world"];
            };
            readonly role: {
                readonly type: "string";
                readonly description: "New user role. Can only be changed by admins.";
                readonly enum: readonly ["editor", "admin"];
            };
            readonly language: {
                readonly type: "string";
                readonly description: "New language preference.";
                readonly examples: readonly ["en_US"];
            };
            readonly activateToken: {
                readonly type: "string";
                readonly description: "Activate token, typically used to unset it when activating user.";
            };
            readonly password: {
                readonly type: "string";
                readonly description: "Strong user password.";
                readonly minLength: 8;
                readonly examples: readonly ["13-binary-1968"];
            };
            readonly oldPassword: {
                readonly type: "string";
                readonly description: "The previous user password.";
            };
            readonly presenceColor: {
                readonly type: "string";
                readonly description: "The preferred color to use for user precense pin.";
                readonly pattern: "^[a-zA-Z-\\d]+$";
            };
            readonly avatar: {
                readonly type: "string";
                readonly description: "`''` sets the avatar to fallback, while `null` sets avatar to custom_avatar.";
                readonly "x-format": {
                    readonly uri: true;
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly email: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PatchUsersIdSettings: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly activeTeam: {
                readonly type: "string";
                readonly description: "The active team for the user";
                readonly examples: readonly ["teamxyz"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "User ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly activeTeam: {
                    readonly type: "string";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAuthLogintokens: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly chartId: {
                readonly type: "string";
                readonly description: "A chart ID.";
                readonly "x-constraint": {
                    readonly length: 5;
                };
            };
            readonly step: {
                readonly type: "string";
                readonly description: "An edit step in the chart editor.\n\nDefault: `edit`";
                readonly default: "edit";
                readonly enum: readonly ["edit", "upload", "describe", "visualize", "publish", "basemap", "data", "markers", "design", "annotate", "preview"];
            };
        };
        readonly required: readonly ["chartId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAuthTokens: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly comment: {
                readonly type: "string";
                readonly description: "The comment can be everything. Tip: Use something to remember where this specific token is used.";
                readonly examples: readonly ["Token for fun project"];
            };
            readonly scopes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly description: "scopes to be granted for this token";
                    readonly pattern: "^[a-z-:]+$";
                };
            };
        };
        readonly required: readonly ["comment"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly scopes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly token: {
                    readonly type: "string";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCharts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly description: "Title of your visualization. This will be the visualization headline.";
                readonly examples: readonly ["My cool chart"];
            };
            readonly theme: {
                readonly type: "string";
                readonly description: "Chart theme to use.";
                readonly minLength: 2;
                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                readonly "x-convert": {
                    readonly case: "lower";
                };
                readonly examples: readonly ["datawrapper"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the chart ([Reference](https://developer.datawrapper.de/v3.0/docs/chart-types))";
                readonly examples: readonly ["d3-lines"];
            };
            readonly forkable: {
                readonly type: "boolean";
                readonly description: "Set to true if you want to allow other users to fork this visualization";
            };
            readonly organizationId: {
                readonly type: "string";
                readonly description: "ID of the team (formerly known as organization) that the visualization should be created in.  The authenticated user must have access to this team.";
            };
            readonly folderId: {
                readonly type: "integer";
                readonly description: "ID of the folder that the visualization should be created in. The authenticated user must have access to this folder.";
            };
            readonly externalData: {
                readonly type: "string";
                readonly description: "URL of external dataset";
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Visualization locale (e.g. en-US)";
                readonly pattern: "^[a-z]{2}([_-][A-Z]{2})?$";
            };
            readonly lastEditStep: {
                readonly type: "integer";
                readonly description: "Current position in chart editor workflow";
                readonly default: 3;
                readonly minimum: 1;
                readonly maximum: 4;
            };
            readonly metadata: {
                readonly type: "object";
                readonly description: "Metadata that saves all visualization specific settings and options.";
                readonly properties: {
                    readonly axes: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                            readonly description: "Mapping of dataset columns to visualization \"axes\"";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly description: "Mapping of dataset columns to visualization \"axes\"";
                        readonly additionalProperties: true;
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transpose: {
                                readonly type: "boolean";
                            };
                        };
                    };
                    readonly describe: {
                        readonly type: "object";
                        readonly properties: {
                            readonly intro: {
                                readonly type: "string";
                                readonly description: "The visualization description";
                            };
                            readonly byline: {
                                readonly type: "string";
                                readonly description: "Byline as shown in the visualization footer";
                            };
                            readonly "source-name": {
                                readonly type: "string";
                                readonly description: "Source as shown in visualization footer";
                            };
                            readonly "source-url": {
                                readonly type: "string";
                                readonly description: "Source URL as shown in visualization footer";
                            };
                            readonly "aria-description": {
                                readonly type: "string";
                                readonly description: "Alternative description of visualization shown in screen readers (instead of the visualization)";
                            };
                        };
                    };
                    readonly annotate: {
                        readonly type: "object";
                        readonly properties: {
                            readonly notes: {
                                readonly type: "string";
                                readonly description: "Notes as shown underneath visualization";
                            };
                        };
                    };
                    readonly publish: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly custom: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID of the visualization";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "Title of the visualization";
                };
                readonly publicId: {
                    readonly type: "string";
                    readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                };
                readonly authorId: {
                    readonly type: "integer";
                    readonly description: "ID of user that created the visualization.";
                };
                readonly organizationId: {
                    readonly type: "string";
                    readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                };
                readonly folderId: {
                    readonly type: "integer";
                    readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                };
                readonly language: {
                    readonly type: "string";
                    readonly description: "Visualization language (output locale), e.g `en-US`";
                };
                readonly theme: {
                    readonly type: "string";
                    readonly description: "ID of theme applied to the visualization";
                    readonly minLength: 2;
                    readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                    readonly "x-convert": {
                        readonly case: "lower";
                    };
                    readonly examples: readonly ["datawrapper"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was created.";
                };
                readonly lastModifiedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last edited.";
                };
                readonly publishedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                };
                readonly lastEditStep: {
                    readonly type: "integer";
                    readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                    readonly minimum: 0;
                    readonly maximum: 5;
                };
                readonly publicVersion: {
                    readonly type: "integer";
                    readonly description: "Indicates how many times a visualization has been published.";
                    readonly minimum: 0;
                };
                readonly author: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the user who created the visualization";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email address of the user who created the visualization";
                        };
                        readonly avatar: {
                            readonly type: "string";
                            readonly description: "URL pointing to the user avatar";
                        };
                        readonly color: {
                            readonly type: "string";
                            readonly description: "Color chosen by the user";
                        };
                    };
                };
                readonly thumbnails: {
                    readonly type: "object";
                    readonly properties: {
                        readonly full: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                        };
                        readonly plain: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                        };
                    };
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                };
                readonly guestSession: {
                    readonly type: "string";
                    readonly description: "Guest session id";
                };
                readonly readonlyKeys: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly publicUrl: {
                    readonly type: "string";
                    readonly description: "URL of published visualization.";
                };
                readonly deleted: {
                    readonly type: "boolean";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was deleted.";
                };
                readonly forkable: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                };
                readonly isFork: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization is a copy of another visualization.";
                };
                readonly forkedFrom: {
                    readonly type: "string";
                    readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                };
                readonly externalData: {
                    readonly type: "string";
                    readonly description: "External data URL, relevant for live visualizations.";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly description: "All of the visualization's settings.";
                    readonly additionalProperties: true;
                };
                readonly customFields: {
                    readonly "x-alternatives": readonly [{
                        readonly type: "object";
                    }, {
                        readonly type: "array";
                        readonly "x-constraint": {
                            readonly length: 0;
                        };
                        readonly items: {
                            readonly type: "string";
                        };
                    }];
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly keywords: {
                    readonly type: "string";
                    readonly description: "Keywords";
                };
                readonly utf8: {
                    readonly type: "boolean";
                    readonly description: "UTF-8";
                };
                readonly river: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                        };
                        readonly sourceUrl: {
                            readonly type: "string";
                        };
                    };
                };
                readonly basedOnByline: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsCopy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ids: {
                readonly type: "array";
                readonly description: "The IDs of the charts that should be copied.";
                readonly maxItems: 1000;
                readonly items: {
                    readonly type: "string";
                    readonly pattern: "^[0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_\\-]{5}$";
                };
            };
            readonly destination: {
                readonly type: "object";
                readonly description: "Destination for the copied charts. If not provided, charts will be copied in place.";
                readonly properties: {
                    readonly folderId: {
                        readonly type: "number";
                        readonly description: "ID of the folder that the visualization should be duplicated into. The authenticated user must have access to this folder. Null is the root folder of user or team.";
                    };
                    readonly teamId: {
                        readonly type: "string";
                        readonly description: "ID of the team that should own the visualization. The authenticated user must have access to this team. Null is the user's private archive.";
                        readonly examples: readonly ["ABCdEFgh"];
                    };
                };
                readonly required: readonly ["folderId", "teamId"];
            };
            readonly markAsCopy: {
                readonly type: "boolean";
                readonly description: "Determines whether \"(Copy)\" will be added to the title of the copied chart. Will be overriden if the source chart is a template owned by another team/user (\"Edit in Datawrapper\"), in which case \"(Copy)\" is never added.";
                readonly default: true;
            };
        };
        readonly required: readonly ["ids"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "ID of the visualization";
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Title of the visualization";
                    };
                    readonly publicId: {
                        readonly type: "string";
                        readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                    };
                    readonly authorId: {
                        readonly type: "integer";
                        readonly description: "ID of user that created the visualization.";
                    };
                    readonly organizationId: {
                        readonly type: "string";
                        readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                    };
                    readonly folderId: {
                        readonly type: "integer";
                        readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                    };
                    readonly language: {
                        readonly type: "string";
                        readonly description: "Visualization language (output locale), e.g `en-US`";
                    };
                    readonly theme: {
                        readonly type: "string";
                        readonly description: "ID of theme applied to the visualization";
                        readonly minLength: 2;
                        readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                        readonly "x-convert": {
                            readonly case: "lower";
                        };
                        readonly examples: readonly ["datawrapper"];
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was created.";
                    };
                    readonly lastModifiedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was last edited.";
                    };
                    readonly publishedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                    };
                    readonly lastEditStep: {
                        readonly type: "integer";
                        readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                        readonly minimum: 0;
                        readonly maximum: 5;
                    };
                    readonly publicVersion: {
                        readonly type: "integer";
                        readonly description: "Indicates how many times a visualization has been published.";
                        readonly minimum: 0;
                    };
                    readonly author: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the user who created the visualization";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "Email address of the user who created the visualization";
                            };
                            readonly avatar: {
                                readonly type: "string";
                                readonly description: "URL pointing to the user avatar";
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly description: "Color chosen by the user";
                            };
                        };
                    };
                    readonly thumbnails: {
                        readonly type: "object";
                        readonly properties: {
                            readonly full: {
                                readonly type: "string";
                                readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                            };
                            readonly plain: {
                                readonly type: "string";
                                readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                            };
                        };
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                    };
                    readonly guestSession: {
                        readonly type: "string";
                        readonly description: "Guest session id";
                    };
                    readonly readonlyKeys: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly publicUrl: {
                        readonly type: "string";
                        readonly description: "URL of published visualization.";
                    };
                    readonly deleted: {
                        readonly type: "boolean";
                    };
                    readonly deletedAt: {
                        readonly type: "string";
                        readonly format: "date";
                        readonly description: "Time and date when the visualization was deleted.";
                    };
                    readonly forkable: {
                        readonly type: "boolean";
                        readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                    };
                    readonly isFork: {
                        readonly type: "boolean";
                        readonly description: "Indicates if the visualization is a copy of another visualization.";
                    };
                    readonly forkedFrom: {
                        readonly type: "string";
                        readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                    };
                    readonly externalData: {
                        readonly type: "string";
                        readonly description: "External data URL, relevant for live visualizations.";
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly description: "All of the visualization's settings.";
                        readonly additionalProperties: true;
                    };
                    readonly customFields: {
                        readonly "x-alternatives": readonly [{
                            readonly type: "object";
                        }, {
                            readonly type: "array";
                            readonly "x-constraint": {
                                readonly length: 0;
                            };
                            readonly items: {
                                readonly type: "string";
                            };
                        }];
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly keywords: {
                        readonly type: "string";
                        readonly description: "Keywords";
                    };
                    readonly utf8: {
                        readonly type: "boolean";
                        readonly description: "UTF-8";
                    };
                    readonly river: {
                        readonly type: "object";
                        readonly properties: {
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly sourceUrl: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly basedOnByline: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdComments: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly body: {
                readonly type: "string";
            };
            readonly parentId: {
                readonly type: "integer";
            };
        };
        readonly required: readonly ["body"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly pattern: "^[0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_\\-]{5}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdCopy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly pattern: "^[0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_\\-]{5}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdDataRefresh: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdExportFormatAsync: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly unit: {
                readonly type: "string";
                readonly default: "px";
                readonly enum: readonly ["in", "mm", "px"];
                readonly description: "Default: px";
            };
            readonly mode: {
                readonly type: "string";
                readonly default: "rgb";
                readonly enum: readonly ["rgb", "cmyk"];
                readonly description: "Default: rgb";
            };
            readonly width: {
                readonly type: "number";
                readonly minimum: 1;
            };
            readonly height: {
                readonly type: "number";
                readonly enum: readonly ["auto"];
                readonly minimum: 1;
            };
            readonly plain: {
                readonly type: "boolean";
                readonly default: false;
            };
            readonly scale: {
                readonly type: "number";
                readonly default: 1;
            };
            readonly zoom: {
                readonly type: "number";
                readonly default: 2;
            };
            readonly border: {
                readonly type: "object";
                readonly properties: {
                    readonly width: {
                        readonly type: "number";
                    };
                    readonly color: {
                        readonly type: "string";
                        readonly default: "auto";
                    };
                };
            };
            readonly fullVector: {
                readonly type: "boolean";
                readonly default: false;
            };
            readonly ligatures: {
                readonly type: "boolean";
                readonly default: true;
            };
            readonly transparent: {
                readonly type: "boolean";
                readonly default: false;
            };
            readonly logo: {
                readonly type: "string";
                readonly default: "auto";
                readonly enum: readonly ["auto", "on", "off"];
                readonly description: "Default: auto";
            };
            readonly logoId: {
                readonly type: "string";
                readonly pattern: "^[a-zA-Z0-9-]+$";
            };
            readonly dark: {
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
                readonly format: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Export format";
                };
            };
            readonly required: readonly ["id", "format"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdFork: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdPublish: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly "x-alternatives": readonly [{
                        readonly type: "object";
                    }, {
                        readonly type: "array";
                        readonly "x-constraint": {
                            readonly length: 0;
                        };
                        readonly items: {
                            readonly type: "string";
                        };
                    }];
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly version: {
                    readonly type: "integer";
                };
                readonly url: {
                    readonly type: "string";
                    readonly "x-format": {
                        readonly uri: true;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostChartsIdUnpublish: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostFolders: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly organizationId: {
                readonly type: "string";
                readonly description: "DEPRECATED: use `teamId` instead.";
            };
            readonly teamId: {
                readonly type: "string";
                readonly description: "The team that the folder belongs to. If `teamId` is empty, the folder will belong to the user directly.";
            };
            readonly parentId: {
                readonly type: "number";
                readonly description: "The parent folder that the folder belongs to.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the folder.";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostFoldersCopy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly destination: {
                readonly type: "object";
                readonly properties: {
                    readonly folderId: {
                        readonly type: "number";
                        readonly description: "ID of the folder that the folders should be copied into. The authenticated user must have access to this folder. Null is the root folder of user or team.";
                        readonly examples: readonly [123];
                    };
                    readonly teamId: {
                        readonly type: "string";
                        readonly description: "ID of the team that owns the destination folder and will own the copied folders and charts. If folderId is provided the team owning this folder must match with this ID. The authenticated user must have access to this team. Null is the user's private archive.";
                        readonly examples: readonly ["ABCdEFgh"];
                    };
                };
                readonly required: readonly ["folderId"];
            };
            readonly folders: {
                readonly type: "array";
                readonly description: "IDs of folders that should be moved to the new destination. Must be accessible by the authenticated user. Not more than 100 are allowed per request.";
                readonly maxItems: 100;
                readonly items: {
                    readonly type: "number";
                };
            };
        };
        readonly required: readonly ["folders"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTeams: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly examples: readonly ["revengers"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Revengers"];
            };
            readonly settings: {
                readonly type: "object";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                    };
                };
            };
            readonly defaultTheme: {
                readonly type: "string";
                readonly examples: readonly ["space"];
            };
            readonly ownerId: {
                readonly type: "number";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTeamsIdInvites: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly "x-format": {
                    readonly email: true;
                };
                readonly examples: readonly ["thor@gmail.com"];
            };
            readonly role: {
                readonly type: "string";
                readonly enum: readonly ["owner", "admin", "member"];
            };
        };
        readonly required: readonly ["email", "role"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID (eg. guardians-of-the-galaxy)";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTeamsIdInvitesToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID (eg. guardians-of-the-galaxy)";
                };
                readonly token: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid team invitation token";
                };
            };
            readonly required: readonly ["id", "token"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutAuthTokensId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly comment: {
                readonly type: "string";
                readonly description: "The comment can be everything. Tip: Use something to remember where this specific token is used.";
                readonly examples: readonly ["Token for fun project"];
            };
            readonly scopes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly description: "scopes to be granted for this token";
                    readonly pattern: "^[a-z-:]+$";
                };
            };
        };
        readonly required: readonly ["comment"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the token to be edited.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutChartsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly title: {
                readonly type: "string";
                readonly description: "Title of your chart. This will be the chart headline.";
                readonly examples: readonly ["My cool chart"];
            };
            readonly theme: {
                readonly type: "string";
                readonly minLength: 2;
                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                readonly "x-convert": {
                    readonly case: "lower";
                };
                readonly examples: readonly ["datawrapper"];
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of the chart ([Reference](https://developer.datawrapper.de/v3.0/docs/chart-types))";
                readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                readonly examples: readonly ["d3-lines"];
            };
            readonly externalData: {
                readonly type: "string";
                readonly description: "URL of external dataset";
                readonly "x-format": {
                    readonly uri: true;
                };
            };
            readonly language: {
                readonly type: "string";
                readonly description: "Visualization locale (e.g. en-US)";
                readonly pattern: "^[a-z]{2}([_-][A-Z]{2})?$";
            };
            readonly lastEditStep: {
                readonly type: "integer";
                readonly description: "Current position in chart editor workflow";
                readonly minimum: 1;
                readonly maximum: 5;
            };
            readonly publicVersion: {
                readonly type: "integer";
            };
            readonly publicUrl: {
                readonly type: "string";
                readonly "x-format": {
                    readonly uri: true;
                };
            };
            readonly publishedAt: {
                readonly type: "string";
                readonly format: "date";
            };
            readonly metadata: {
                readonly type: "object";
                readonly description: "Metadata that saves all chart specific settings and options.";
                readonly properties: {
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly transpose: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly authorId: {
                readonly type: "integer";
            };
            readonly organizationId: {
                readonly type: "string";
                readonly description: "ID of the team (formerly known as organization) that the visualization should be created in.  The authenticated user must have access to this team.";
            };
            readonly folderId: {
                readonly type: "integer";
                readonly description: "ID of the folder that the visualization should be created in. The authenticated user must have access to this folder.";
            };
            readonly organization_id: {
                readonly type: "string";
                readonly description: "Deprecated. Use organizationId instead.";
            };
            readonly folder_id: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly inFolder: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly in_folder: {
                readonly type: "integer";
                readonly description: "Deprecated. Use folderId instead.";
            };
            readonly external_data: {
                readonly type: "string";
                readonly description: "Deprecated. Use externalData instead.";
            };
            readonly last_edit_step: {
                readonly type: "integer";
                readonly description: "Deprecated. Use lastEditStep instead.";
                readonly minimum: 1;
                readonly maximum: 5;
            };
            readonly author_id: {
                readonly type: "integer";
                readonly description: "Deprecated. Use authorId instead.";
            };
            readonly public_version: {
                readonly type: "integer";
                readonly description: "Deprecated. Use publicVersion instead.";
            };
            readonly public_url: {
                readonly type: "string";
                readonly description: "Deprecated. Use publicUrl instead.";
            };
            readonly published_at: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "Deprecated. Use publishedAt instead.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID of the visualization";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "Title of the visualization";
                };
                readonly publicId: {
                    readonly type: "string";
                    readonly description: "Public ID of the visualization. May be different from the internal ID, if *hash publishing* is enabled.";
                };
                readonly authorId: {
                    readonly type: "integer";
                    readonly description: "ID of user that created the visualization.";
                };
                readonly organizationId: {
                    readonly type: "string";
                    readonly description: "ID of the team that the visualization is located in. If `null`, visualization is private.";
                };
                readonly folderId: {
                    readonly type: "integer";
                    readonly description: "ID of the folder that the visualization is located in. If `null`, visualization is in the root of a team, or your private archive.";
                };
                readonly language: {
                    readonly type: "string";
                    readonly description: "Visualization language (output locale), e.g `en-US`";
                };
                readonly theme: {
                    readonly type: "string";
                    readonly description: "ID of theme applied to the visualization";
                    readonly minLength: 2;
                    readonly pattern: "^[a-z0-9]+(?:-{1,2}[a-z0-9]+)*$";
                    readonly "x-convert": {
                        readonly case: "lower";
                    };
                    readonly examples: readonly ["datawrapper"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "Type of visualization, e.g `d3-lines`, `d3-maps-choropleth`, `tables`";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was created.";
                };
                readonly lastModifiedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last edited.";
                };
                readonly publishedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was last published. `null`, if the visualization has not been published yet.";
                };
                readonly lastEditStep: {
                    readonly type: "integer";
                    readonly description: "A number encoding which of the editor steps this chart has been edited in so far. 5 = published.";
                    readonly minimum: 0;
                    readonly maximum: 5;
                };
                readonly publicVersion: {
                    readonly type: "integer";
                    readonly description: "Indicates how many times a visualization has been published.";
                    readonly minimum: 0;
                };
                readonly author: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the user who created the visualization";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email address of the user who created the visualization";
                        };
                        readonly avatar: {
                            readonly type: "string";
                            readonly description: "URL pointing to the user avatar";
                        };
                        readonly color: {
                            readonly type: "string";
                            readonly description: "Color chosen by the user";
                        };
                    };
                };
                readonly thumbnails: {
                    readonly type: "object";
                    readonly properties: {
                        readonly full: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image includes header & footer).";
                        };
                        readonly plain: {
                            readonly type: "string";
                            readonly description: "URL pointing to the most recently generated preview thumbnail for the visualization. (Image is just the visualization, without header & footer).";
                        };
                    };
                };
                readonly url: {
                    readonly type: "string";
                    readonly description: "API URL for the visualization, can be used to retreive additional information, including its metadata.";
                };
                readonly guestSession: {
                    readonly type: "string";
                    readonly description: "Guest session id";
                };
                readonly readonlyKeys: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly publicUrl: {
                    readonly type: "string";
                    readonly description: "URL of published visualization.";
                };
                readonly deleted: {
                    readonly type: "boolean";
                };
                readonly deletedAt: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "Time and date when the visualization was deleted.";
                };
                readonly forkable: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization has been shared in the Datawrapper River.";
                };
                readonly isFork: {
                    readonly type: "boolean";
                    readonly description: "Indicates if the visualization is a copy of another visualization.";
                };
                readonly forkedFrom: {
                    readonly type: "string";
                    readonly description: "ID of the visualization that this visualization was copied from. `null` if it is not a copy.";
                };
                readonly externalData: {
                    readonly type: "string";
                    readonly description: "External data URL, relevant for live visualizations.";
                };
                readonly metadata: {
                    readonly type: "object";
                    readonly description: "All of the visualization's settings.";
                    readonly additionalProperties: true;
                };
                readonly customFields: {
                    readonly "x-alternatives": readonly [{
                        readonly type: "object";
                    }, {
                        readonly type: "array";
                        readonly "x-constraint": {
                            readonly length: 0;
                        };
                        readonly items: {
                            readonly type: "string";
                        };
                    }];
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly keywords: {
                    readonly type: "string";
                    readonly description: "Keywords";
                };
                readonly utf8: {
                    readonly type: "boolean";
                    readonly description: "UTF-8";
                };
                readonly river: {
                    readonly type: "object";
                    readonly properties: {
                        readonly source: {
                            readonly type: "string";
                        };
                        readonly sourceUrl: {
                            readonly type: "string";
                        };
                    };
                };
                readonly basedOnByline: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutChartsIdAssetsAsset: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly asset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Full filename including extension.";
                };
            };
            readonly required: readonly ["id", "asset"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutChartsIdData: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutFoldersId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Folder name.";
            };
            readonly parentId: {
                readonly type: "number";
                readonly description: "Parent folder.";
            };
            readonly userId: {
                readonly type: "string";
                readonly description: "The user this folder belongs to.";
            };
            readonly teamId: {
                readonly type: "string";
                readonly description: "The team this folder belongs to.";
            };
        };
        readonly required: readonly ["name", "parentId", "userId", "teamId"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Folder ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "User-defined folder name";
                };
                readonly userId: {
                    readonly type: "integer";
                    readonly description: "If set, this is a private folder, and it belongs to the indicated user. If unset, the folder is located in a shared team archive (see `teamId`).";
                };
                readonly teamId: {
                    readonly type: "string";
                    readonly description: "The ID of the team that this folder is in. If unset, this folder is private.";
                };
                readonly parentId: {
                    readonly type: "integer";
                    readonly description: "The id of the folder that this folder is in. If 'null', the folder is in the root of either a team, or your private charts. (See `userId` and `teamId`, to determine which)";
                };
                readonly children: {
                    readonly type: "array";
                    readonly description: "List of top-level subfolders of this folder.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                        };
                    };
                };
                readonly charts: {
                    readonly type: "array";
                    readonly description: "List of visualizations in this folder. To access the visualizations in subfolders of this folder, those folders must be queried separately.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutRiverId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly description: {
                readonly type: "string";
            };
            readonly attribution: {
                readonly type: "integer";
            };
            readonly byline: {
                readonly type: "string";
            };
            readonly tags: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly forkable: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["description", "attribution", "byline", "tags", "forkable"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "5 character long chart ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly default: {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutTeamsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["New Revengers"];
            };
            readonly defaultTheme: {
                readonly type: "string";
                readonly examples: readonly ["light"];
            };
            readonly settings: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutTeamsIdMembersUseridStatus: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly enum: readonly ["owner", "admin", "member"];
            };
        };
        readonly required: readonly ["status"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Team ID";
                };
                readonly userId: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the team member you want to change the status of.";
                };
            };
            readonly required: readonly ["id", "userId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteAuthLogintokensId, DeleteAuthTokensId, DeleteChartsId, DeleteFoldersId, DeleteMe, DeleteTeamsId, DeleteTeamsIdInvitesToken, DeleteTeamsIdMembersUserid, DeleteUsersId, GetAuthLoginToken, GetAuthLogintokens, GetAuthTokens, GetAuthTokenscopes, GetBasemaps, GetBasemapsId, GetBasemapsIdKey, GetCharts, GetChartsId, GetChartsIdAssetsAsset, GetChartsIdComments, GetChartsIdData, GetChartsIdDisplayurls, GetChartsIdEmbedcodes, GetChartsIdExportFormat, GetChartsIdExportFormatAsyncExportid, GetChartsIdPublishStatusVersion, GetFolders, GetFoldersId, GetMe, GetMeRecentlyeditedcharts, GetMeRecentlypublishedcharts, GetOembed, GetRiver, GetRiverChartid, GetTeams, GetTeamsId, GetTeamsIdMembers, GetThemes, GetUsers, GetUsersId, GetUsersIdRecentlyeditedcharts, GetUsersIdRecentlypublishedcharts, PatchCharts, PatchChartsId, PatchFoldersId, PatchFoldersMove, PatchMe, PatchMeSettings, PatchTeamsId, PatchUsersId, PatchUsersIdSettings, PostAuthLogintokens, PostAuthTokens, PostCharts, PostChartsCopy, PostChartsIdComments, PostChartsIdCopy, PostChartsIdDataRefresh, PostChartsIdExportFormatAsync, PostChartsIdFork, PostChartsIdPublish, PostChartsIdUnpublish, PostFolders, PostFoldersCopy, PostTeams, PostTeamsIdInvites, PostTeamsIdInvitesToken, PutAuthTokensId, PutChartsId, PutChartsIdAssetsAsset, PutChartsIdData, PutFoldersId, PutRiverId, PutTeamsId, PutTeamsIdMembersUseridStatus };
