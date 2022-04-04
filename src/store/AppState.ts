import { Tabs } from "../components/TabList/TabList";

export interface AppState {
  activeTab: string;
  entityPreview: any[];
  envTypesPreview: string;
  isReadyToGenerate: boolean;
  isGeneratingPreview: boolean;
}

export const initialState: AppState = {
  activeTab: Tabs[Tabs.MockData],
  entityPreview: [],
  envTypesPreview: "",
  isReadyToGenerate: false,
  isGeneratingPreview: false,
};
