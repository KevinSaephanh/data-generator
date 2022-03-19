export interface AppState {
  entityPreview: any[];
  envTypesPreview: any[];
  isGeneratingPreview: boolean;
}

export const initialState: AppState = {
  entityPreview: [],
  envTypesPreview: [],
  isGeneratingPreview: false,
};
