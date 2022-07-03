export const UPDATE_ACTIVE_TAB = "UPDATE ACTIVE TAB";
export const UPDATE_ENTITY_PREVIEW = "UPDATE ENTITY PREVIEW";
export const UPDATE_ENV_TYPES_PREVIEW = "UPDATE ENV TYPES PREVIEW";
export const GENERATE_PREVIEW_REQUEST = "GENERATE PREVIEW REQUEST";
export const GENERATE_PREVIEW_SUCCESS = "GENERATE PREVIEW SUCCESS";
export const SET_ERROR_MESSAGE = "SET ERROR MESSAGE";
export const RESET_PREVIEWS = "RESET PREVIEWS";

export interface UpdateActiveTab {
  type: typeof UPDATE_ACTIVE_TAB;
  payload: string;
}

export interface UpdateEntityPreview {
  type: typeof UPDATE_ENTITY_PREVIEW;
  payload: any[];
}

export interface UpdateEnvTypesPreview {
  type: typeof UPDATE_ENV_TYPES_PREVIEW;
  payload: string;
}

export interface GeneratePreviewRequest {
  type: typeof GENERATE_PREVIEW_REQUEST;
}

export interface GeneratePreviewSuccess {
  type: typeof GENERATE_PREVIEW_SUCCESS;
}

export interface SetErrorMessage {
  type: typeof SET_ERROR_MESSAGE;
  payload: string;
}

export interface ResetPreviews {
  type: typeof RESET_PREVIEWS;
}

export type AppActions =
  | UpdateActiveTab
  | UpdateEntityPreview
  | UpdateEnvTypesPreview
  | GeneratePreviewRequest
  | GeneratePreviewSuccess
  | SetErrorMessage
  | ResetPreviews;
