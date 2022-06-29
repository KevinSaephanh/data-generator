import {
  AppActions,
  GENERATE_PREVIEW_REQUEST,
  GENERATE_PREVIEW_SUCCESS,
  RESET_PREVIEWS,
  UPDATE_ACTIVE_TAB,
  UPDATE_ENTITY_PREVIEW,
  UPDATE_ENV_TYPES_PREVIEW,
  UPDATE_IS_READY_TO_GENERATE,
} from "./ActionTypes";
import { initialState } from "./AppState";

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case UPDATE_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case UPDATE_ENTITY_PREVIEW:
      return { ...state, entityPreview: action.payload, isGenerating: false };
    case UPDATE_ENV_TYPES_PREVIEW:
      return { ...state, envTypesPreview: action.payload, isGenerating: false };
    case UPDATE_IS_READY_TO_GENERATE:
      return { ...state, isReadyToGenerate: action.payload };
    case GENERATE_PREVIEW_REQUEST:
      return { ...state, isReadyToGenerate: false, isGenerating: true };
    case GENERATE_PREVIEW_SUCCESS:
      return { ...state, isGenerating: false };
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
