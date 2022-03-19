export const UPDATE_ENTITY_PREVIEW = "UPDATE ENTITY PREVIEW";
export const UPDATE_ENV_TYPES_PREVIEW = "UPDATE ENV TYPES PREVIEW";
export const GENERATE_PREVIEW_REQUEST = "GENERATE PREVIEW REQUEST";
export const GENERATE_PREVIEW_SUCCESS = "GENERATE PREVIEW SUCCESS";

export interface UpdateEntityPreview {
  type: typeof UPDATE_ENTITY_PREVIEW;
  payload: any[];
}

export interface UpdateEnvTypesPreview {
  type: typeof UPDATE_ENV_TYPES_PREVIEW;
  payload: any[];
}

export interface GeneratePreviewRequest {
  type: typeof GENERATE_PREVIEW_REQUEST;
}

export interface GeneratePreviewSuccess {
  type: typeof GENERATE_PREVIEW_SUCCESS;
}

export type AppActions =
  | UpdateEntityPreview
  | UpdateEnvTypesPreview
  | GeneratePreviewRequest
  | GeneratePreviewSuccess;
