import {
  AppActions,
  GENERATE_PREVIEW_REQUEST,
  GENERATE_PREVIEW_SUCCESS,
  RESET_PREVIEWS,
  SET_ERROR_MESSAGE,
  UPDATE_ACTIVE_TAB,
  UPDATE_ENTITY_PREVIEW,
  UPDATE_ENV_TYPES_PREVIEW,
} from "./ActionTypes";
import { initialState } from "./AppState";

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case UPDATE_ACTIVE_TAB:
      return { ...state, activeTab: action.payload, errorMessage: "" };
    case UPDATE_ENTITY_PREVIEW:
      return {
        ...state,
        entityPreview: action.payload,
        errorMessage: "",
      };
    case UPDATE_ENV_TYPES_PREVIEW:
      return {
        ...state,
        envTypesPreview: action.payload,
        errorMessage: "",
      };
    case GENERATE_PREVIEW_REQUEST:
      return { ...state, isReadyToGenerate: false, isGenerating: true, errorMessage: "" };
    case GENERATE_PREVIEW_SUCCESS:
      return { ...state, isGenerating: false };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload, envTypesPreview: "", entityPreview: [] };
    case RESET_PREVIEWS:
      return {
        ...state,
        entityPreview: [],
        envTypesPreview: "",
      };
    default:
      return state;
  }
};
