import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<GetEventsApiResponse, GetEventsApiArg>({
      query: (queryArg) => ({
        url: `/events`,
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
          filters: queryArg.filters,
          locale: queryArg.locale,
        },
      }),
    }),
    postEvents: build.mutation<PostEventsApiResponse, PostEventsApiArg>({
      query: (queryArg) => ({
        url: `/events`,
        method: "POST",
        body: queryArg.eventRequest,
      }),
    }),
    getEventsById: build.query<GetEventsByIdApiResponse, GetEventsByIdApiArg>({
      query: (queryArg) => ({ url: `/events/${queryArg.id}` }),
    }),
    putEventsById: build.mutation<
      PutEventsByIdApiResponse,
      PutEventsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/events/${queryArg.id}`,
        method: "PUT",
        body: queryArg.eventRequest,
      }),
    }),
    deleteEventsById: build.mutation<
      DeleteEventsByIdApiResponse,
      DeleteEventsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/events/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getFormLiveChats: build.query<
      GetFormLiveChatsApiResponse,
      GetFormLiveChatsApiArg
    >({
      query: (queryArg) => ({
        url: `/form-live-chats`,
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
          filters: queryArg.filters,
          locale: queryArg.locale,
        },
      }),
    }),
    postFormLiveChats: build.mutation<
      PostFormLiveChatsApiResponse,
      PostFormLiveChatsApiArg
    >({
      query: (queryArg) => ({
        url: `/form-live-chats`,
        method: "POST",
        body: queryArg.formLiveChatRequest,
      }),
    }),
    getFormLiveChatsById: build.query<
      GetFormLiveChatsByIdApiResponse,
      GetFormLiveChatsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/form-live-chats/${queryArg.id}` }),
    }),
    putFormLiveChatsById: build.mutation<
      PutFormLiveChatsByIdApiResponse,
      PutFormLiveChatsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/form-live-chats/${queryArg.id}`,
        method: "PUT",
        body: queryArg.formLiveChatRequest,
      }),
    }),
    deleteFormLiveChatsById: build.mutation<
      DeleteFormLiveChatsByIdApiResponse,
      DeleteFormLiveChatsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/form-live-chats/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getLiveChatClients: build.query<
      GetLiveChatClientsApiResponse,
      GetLiveChatClientsApiArg
    >({
      query: (queryArg) => ({
        url: `/live-chat-clients`,
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
          filters: queryArg.filters,
          locale: queryArg.locale,
        },
      }),
    }),
    postLiveChatClients: build.mutation<
      PostLiveChatClientsApiResponse,
      PostLiveChatClientsApiArg
    >({
      query: (queryArg) => ({
        url: `/live-chat-clients`,
        method: "POST",
        body: queryArg.liveChatClientRequest,
      }),
    }),
    getLiveChatClientsById: build.query<
      GetLiveChatClientsByIdApiResponse,
      GetLiveChatClientsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/live-chat-clients/${queryArg.id}` }),
    }),
    putLiveChatClientsById: build.mutation<
      PutLiveChatClientsByIdApiResponse,
      PutLiveChatClientsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/live-chat-clients/${queryArg.id}`,
        method: "PUT",
        body: queryArg.liveChatClientRequest,
      }),
    }),
    deleteLiveChatClientsById: build.mutation<
      DeleteLiveChatClientsByIdApiResponse,
      DeleteLiveChatClientsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/live-chat-clients/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getConnectByProvider: build.query<
      GetConnectByProviderApiResponse,
      GetConnectByProviderApiArg
    >({
      query: (queryArg) => ({ url: `/connect/${queryArg.provider}` }),
    }),
    postAuthLocal: build.mutation<
      PostAuthLocalApiResponse,
      PostAuthLocalApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/local`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postAuthLocalRegister: build.mutation<
      PostAuthLocalRegisterApiResponse,
      PostAuthLocalRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/local/register`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getAuthByProviderCallback: build.query<
      GetAuthByProviderCallbackApiResponse,
      GetAuthByProviderCallbackApiArg
    >({
      query: (queryArg) => ({ url: `/auth/${queryArg.provider}/callback` }),
    }),
    postAuthForgotPassword: build.mutation<
      PostAuthForgotPasswordApiResponse,
      PostAuthForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postAuthResetPassword: build.mutation<
      PostAuthResetPasswordApiResponse,
      PostAuthResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postAuthChangePassword: build.mutation<
      PostAuthChangePasswordApiResponse,
      PostAuthChangePasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/change-password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getAuthEmailConfirmation: build.query<
      GetAuthEmailConfirmationApiResponse,
      GetAuthEmailConfirmationApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/email-confirmation`,
        params: { confirmation: queryArg.confirmation },
      }),
    }),
    postAuthSendEmailConfirmation: build.mutation<
      PostAuthSendEmailConfirmationApiResponse,
      PostAuthSendEmailConfirmationApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/send-email-confirmation`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersPermissionsPermissions: build.query<
      GetUsersPermissionsPermissionsApiResponse,
      GetUsersPermissionsPermissionsApiArg
    >({
      query: () => ({ url: `/users-permissions/permissions` }),
    }),
    getUsersPermissionsRoles: build.query<
      GetUsersPermissionsRolesApiResponse,
      GetUsersPermissionsRolesApiArg
    >({
      query: () => ({ url: `/users-permissions/roles` }),
    }),
    postUsersPermissionsRoles: build.mutation<
      PostUsersPermissionsRolesApiResponse,
      PostUsersPermissionsRolesApiArg
    >({
      query: (queryArg) => ({
        url: `/users-permissions/roles`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getUsersPermissionsRolesById: build.query<
      GetUsersPermissionsRolesByIdApiResponse,
      GetUsersPermissionsRolesByIdApiArg
    >({
      query: (queryArg) => ({ url: `/users-permissions/roles/${queryArg.id}` }),
    }),
    putUsersPermissionsRolesByRole: build.mutation<
      PutUsersPermissionsRolesByRoleApiResponse,
      PutUsersPermissionsRolesByRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/users-permissions/roles/${queryArg.role}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteUsersPermissionsRolesByRole: build.mutation<
      DeleteUsersPermissionsRolesByRoleApiResponse,
      DeleteUsersPermissionsRolesByRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/users-permissions/roles/${queryArg.role}`,
        method: "DELETE",
      }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: () => ({ url: `/users?sort=createdAt:desc` }),
      providesTags: ["Users"],
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: (queryArg) => ({
        url: `/users-permissions/createDefault`,
        method: "POST",
        body: queryArg.body,
      }),
      invalidatesTags: ["Users"],
    }),
    getUsersById: build.query<GetUsersByIdApiResponse, GetUsersByIdApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    putUsersById: build.mutation<PutUsersByIdApiResponse, PutUsersByIdApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
        invalidatesTags: ["Users"],
      }),
    }),
    deleteUsersById: build.mutation<
      DeleteUsersByIdApiResponse,
      DeleteUsersByIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: "DELETE" }),
    }),
    getUsersMe: build.query<GetUsersMeApiResponse, GetUsersMeApiArg>({
      query: () => ({ url: `/users/me` }),
    }),
    getUsersCount: build.query<GetUsersCountApiResponse, GetUsersCountApiArg>({
      query: () => ({ url: `/users/count` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetEventsApiResponse = /** status 200 OK */ EventListResponse;
export type GetEventsApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
};
export type PostEventsApiResponse = /** status 200 OK */ EventResponse;
export type PostEventsApiArg = {
  eventRequest: EventRequest;
};
export type GetEventsByIdApiResponse = /** status 200 OK */ EventResponse;
export type GetEventsByIdApiArg = {
  id: number;
};
export type PutEventsByIdApiResponse = /** status 200 OK */ EventResponse;
export type PutEventsByIdApiArg = {
  id: number;
  eventRequest: EventRequest;
};
export type DeleteEventsByIdApiResponse = /** status 200 OK */ number;
export type DeleteEventsByIdApiArg = {
  id: number;
};
export type GetFormLiveChatsApiResponse =
  /** status 200 OK */ FormLiveChatListResponse;
export type GetFormLiveChatsApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
};
export type PostFormLiveChatsApiResponse =
  /** status 200 OK */ FormLiveChatResponse;
export type PostFormLiveChatsApiArg = {
  formLiveChatRequest: FormLiveChatRequest;
};
export type GetFormLiveChatsByIdApiResponse =
  /** status 200 OK */ FormLiveChatResponse;
export type GetFormLiveChatsByIdApiArg = {
  id: number;
};
export type PutFormLiveChatsByIdApiResponse =
  /** status 200 OK */ FormLiveChatResponse;
export type PutFormLiveChatsByIdApiArg = {
  id: number;
  formLiveChatRequest: FormLiveChatRequest;
};
export type DeleteFormLiveChatsByIdApiResponse = /** status 200 OK */ number;
export type DeleteFormLiveChatsByIdApiArg = {
  id: number;
};
export type GetLiveChatClientsApiResponse =
  /** status 200 OK */ LiveChatClientListResponse;
export type GetLiveChatClientsApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
};
export type PostLiveChatClientsApiResponse =
  /** status 200 OK */ LiveChatClientResponse;
export type PostLiveChatClientsApiArg = {
  liveChatClientRequest: LiveChatClientRequest;
};
export type GetLiveChatClientsByIdApiResponse =
  /** status 200 OK */ LiveChatClientResponse;
export type GetLiveChatClientsByIdApiArg = {
  id: number;
};
export type PutLiveChatClientsByIdApiResponse =
  /** status 200 OK */ LiveChatClientResponse;
export type PutLiveChatClientsByIdApiArg = {
  id: number;
  liveChatClientRequest: LiveChatClientRequest;
};
export type DeleteLiveChatClientsByIdApiResponse = /** status 200 OK */ number;
export type DeleteLiveChatClientsByIdApiArg = {
  id: number;
};
export type GetConnectByProviderApiResponse = unknown;
export type GetConnectByProviderApiArg = {
  /** Provider name */
  provider: string;
};
export type PostAuthLocalApiResponse =
  /** status 200 Connection */ UsersPermissionsUserRegistration;
export type PostAuthLocalApiArg = {
  body: {
    identifier?: string;
    password?: string;
  };
};
export type PostAuthLocalRegisterApiResponse =
  /** status 200 Successful registration */ UsersPermissionsUserRegistration;
export type PostAuthLocalRegisterApiArg = {
  body: {
    username?: string;
    email?: string;
    password?: string;
  };
};
export type GetAuthByProviderCallbackApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type GetAuthByProviderCallbackApiArg = {
  /** Provider name */
  provider: string;
};
export type PostAuthForgotPasswordApiResponse = /** status 200 Returns ok */ {
  ok?: true;
};
export type PostAuthForgotPasswordApiArg = {
  body: {
    email?: string;
  };
};
export type PostAuthResetPasswordApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type PostAuthResetPasswordApiArg = {
  body: {
    password?: string;
    passwordConfirmation?: string;
    code?: string;
  };
};
export type PostAuthChangePasswordApiResponse =
  /** status 200 Returns a jwt token and user info */ UsersPermissionsUserRegistration;
export type PostAuthChangePasswordApiArg = {
  body: {
    password: string;
    currentPassword: string;
    passwordConfirmation: string;
  };
};
export type GetAuthEmailConfirmationApiResponse = unknown;
export type GetAuthEmailConfirmationApiArg = {
  /** confirmation token received by email */
  confirmation?: string;
};
export type PostAuthSendEmailConfirmationApiResponse =
  /** status 200 Returns email and boolean to confirm email was sent */ {
    email?: string;
    sent?: true;
  };
export type PostAuthSendEmailConfirmationApiArg = {
  body: {
    email?: string;
  };
};
export type GetUsersPermissionsPermissionsApiResponse =
  /** status 200 Returns the permissions tree */ {
    permissions?: UsersPermissionsPermissionsTree;
  };
export type GetUsersPermissionsPermissionsApiArg = void;
export type GetUsersPermissionsRolesApiResponse =
  /** status 200 Returns list of roles */ {
    roles?: (UsersPermissionsRole & {
      nb_users?: number;
    })[];
  };
export type GetUsersPermissionsRolesApiArg = void;
export type PostUsersPermissionsRolesApiResponse =
  /** status 200 Returns ok if the role was create */ {
    ok?: true;
  };
export type PostUsersPermissionsRolesApiArg = {
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: UsersPermissionsPermissionsTree;
  };
};
export type GetUsersPermissionsRolesByIdApiResponse =
  /** status 200 Returns the role */ {
    role?: UsersPermissionsRole;
  };
export type GetUsersPermissionsRolesByIdApiArg = {
  /** role Id */
  id: string;
};
export type PutUsersPermissionsRolesByRoleApiResponse =
  /** status 200 Returns ok if the role was udpated */ {
    ok?: true;
  };
export type PutUsersPermissionsRolesByRoleApiArg = {
  /** role Id */
  role: string;
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: UsersPermissionsPermissionsTree;
  };
};
export type DeleteUsersPermissionsRolesByRoleApiResponse =
  /** status 200 Returns ok if the role was delete */ {
    ok?: true;
  };
export type DeleteUsersPermissionsRolesByRoleApiArg = {
  /** role Id */
  role: string;
};
export type GetUsersApiResponse =
  /** status 200 Returns an array of users */ UsersPermissionsUser[];
export type GetUsersApiArg = void;
export type PostUsersApiResponse =
  /** status 201 Returns created user info */ UsersPermissionsUser & {
    role?: UsersPermissionsRole;
  };
export type PostUsersApiArg = {
  body: {
    name: string;
    email?: string;
    username?: string;
    password?: string;
  };
};
export type GetUsersByIdApiResponse =
  /** status 200 Returns a user */ UsersPermissionsUser;
export type GetUsersByIdApiArg = {
  /** user Id */
  id: string;
};
export type PutUsersByIdApiResponse =
  /** status 200 Returns updated user info */ UsersPermissionsUser & {
    role?: UsersPermissionsRole;
  };
export type PutUsersByIdApiArg = {
  /** user Id */
  id: string;
  body: {
    name?: string;
    phone?: string;
    email?: string;
    username?: string;
    password?: string;
    lc_form_id?: string;
  };
};
export type DeleteUsersByIdApiResponse =
  /** status 200 Returns deleted user info */ UsersPermissionsUser;
export type DeleteUsersByIdApiArg = {
  /** user Id */
  id: string;
};
export type GetUsersMeApiResponse =
  /** status 200 Returns user info */ UsersPermissionsUser;
export type GetUsersMeApiArg = void;
export type GetUsersCountApiResponse =
  /** status 200 Returns a number */ number;
export type GetUsersCountApiArg = void;
export type Event = {
  name?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: {};
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    actionParameters?: any;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                  };
                }[];
              };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        createdAt?: string;
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
};
export type EventListResponseDataItem = {
  id?: number;
  attributes?: Event;
};
export type EventListResponse = {
  data?: EventListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type Error = {
  data?: ((object | null) | (object[] | null)) | null;
  error: {
    status: number;
    name?: string;
    message: string;
    details?: object;
  };
};
export type EventResponseDataObject = {
  id?: number;
  attributes?: Event;
};
export type EventResponse = {
  data?: EventResponseDataObject;
  meta?: object;
};
export type EventRequest = {
  data: {
    name?: string;
    date?: string;
  };
};
export type FormLiveChat = {
  name?: string;
  city?: string;
  tel?: string;
  count?: number;
  comment?: string;
  cheque?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: {};
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: {};
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                    folderPath?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: {};
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: {};
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                  };
                }[];
              };
              path?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
            };
          };
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
      };
    }[];
  };
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
};
export type FormLiveChatListResponseDataItem = {
  id?: number;
  attributes?: FormLiveChat;
};
export type FormLiveChatListResponse = {
  data?: FormLiveChatListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type FormLiveChatResponseDataObject = {
  id?: number;
  attributes?: FormLiveChat;
};
export type FormLiveChatResponse = {
  data?: FormLiveChatResponseDataObject;
  meta?: object;
};
export type FormLiveChatRequest = {
  data: {
    name?: string;
    city?: string;
    tel?: string;
    count?: number;
    comment?: string;
    cheque?: (number | string)[];
  };
};
export interface ILiveChatClientChildren {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface ILiveChatClientChildrenUi {
  name: string;
  parent?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export type LiveChatClient = {
  turnout?: string;
  city: string;
  count: number;
  comment?: string;
  senderName?: string;
  live_chat_client_childrens?: ILiveChatClientChildren[];
  cheques?: Array<{
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      data?: {
        id?: number;
        attributes?: {};
      }[];
    };
    folder?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: {};
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: {};
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: {};
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: {};
                  };
                };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: {};
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  actionParameters?: any;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {};
                                    };
                                  };
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {};
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {};
                                    };
                                  };
                                };
                              }[];
                            };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: {};
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: {};
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {};
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: {};
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: {};
                  };
                };
              };
            }[];
          };
          path?: string;
          createdAt?: string;
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: {};
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: {};
            };
          };
        };
      };
    };
    folderPath?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {};
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: {};
      };
    };
  }>;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  debt?: number;
  paid?: number;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
};
export type LiveChatClientListResponseDataItem = {
  id?: number;
  attributes?: LiveChatClient;
};
export type LiveChatClientListResponse = {
  data?: LiveChatClientListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type LiveChatClientResponseDataObject = {
  id?: number;
  attributes?: LiveChatClient;
};
export type LiveChatClientResponse = {
  data?: LiveChatClientResponseDataObject;
  meta?: object;
};
export type LiveChatClientRequest = {
  data: {
    turnout?: number;
    city?: string;
    count?: number;
    paid?: number;
    debt?: number;
    comment?: string;
    cheques?: (number | string)[];
  };
};
export type UsersPermissionsUser = {
  id: number;
  username?: string;
  phone?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  code?: number;
  lc_form_id?: number;
  lc_form: LiveChatClient;
};
export type UsersPermissionsUserRegistration = {
  jwt?: string;
  user?: UsersPermissionsUser;
};
export type UsersPermissionsPermissionsTree = {
  [key: string]: {
    /** every controller of the api */
    controllers?: {
      [key: string]: {
        [key: string]: {
          enabled?: boolean;
          policy?: string;
        };
      };
    };
  };
};
export type UsersPermissionsRole = {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
};
export const {
  useGetEventsQuery,
  usePostEventsMutation,
  useGetEventsByIdQuery,
  usePutEventsByIdMutation,
  useDeleteEventsByIdMutation,
  useGetFormLiveChatsQuery,
  usePostFormLiveChatsMutation,
  useGetFormLiveChatsByIdQuery,
  usePutFormLiveChatsByIdMutation,
  useDeleteFormLiveChatsByIdMutation,
  useGetLiveChatClientsQuery,
  usePostLiveChatClientsMutation,
  useGetLiveChatClientsByIdQuery,
  usePutLiveChatClientsByIdMutation,
  useDeleteLiveChatClientsByIdMutation,
  useGetConnectByProviderQuery,
  usePostAuthLocalMutation,
  usePostAuthLocalRegisterMutation,
  useGetAuthByProviderCallbackQuery,
  usePostAuthForgotPasswordMutation,
  usePostAuthResetPasswordMutation,
  usePostAuthChangePasswordMutation,
  useGetAuthEmailConfirmationQuery,
  usePostAuthSendEmailConfirmationMutation,
  useGetUsersPermissionsPermissionsQuery,
  useGetUsersPermissionsRolesQuery,
  usePostUsersPermissionsRolesMutation,
  useGetUsersPermissionsRolesByIdQuery,
  usePutUsersPermissionsRolesByRoleMutation,
  useDeleteUsersPermissionsRolesByRoleMutation,
  useGetUsersQuery,
  usePostUsersMutation,
  useGetUsersByIdQuery,
  usePutUsersByIdMutation,
  useDeleteUsersByIdMutation,
  useGetUsersMeQuery,
  useGetUsersCountQuery,
} = injectedRtkApi;
