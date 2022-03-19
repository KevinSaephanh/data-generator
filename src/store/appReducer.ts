import {
  AppActions,
  GENERATE_PREVIEW_REQUEST,
  GENERATE_PREVIEW_SUCCESS,
  UPDATE_ENTITY_PREVIEW,
  UPDATE_ENV_TYPES_PREVIEW,
} from "./ActionTypes";
import { initialState } from "./AppState";

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case UPDATE_ENTITY_PREVIEW:
      return { ...state, entityPreview: action.payload, isGenerating: false };
    case UPDATE_ENV_TYPES_PREVIEW:
      return { ...state, envTypesPreview: action.payload, isGenerating: false };
    case GENERATE_PREVIEW_REQUEST:
      return { ...state, isGernerating: true };
    case GENERATE_PREVIEW_SUCCESS:
      return { ...state, isGenerating: false };
    default:
      return state;
  }
};
