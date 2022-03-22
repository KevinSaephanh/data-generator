import { Tabs } from "../components/TabList/TabList";

export interface AppState {
  activeTab: string;
  entityPreview: any[];
  envTypesPreview: any[];
  isGeneratingPreview: boolean;
}

export const initialState: AppState = {
  activeTab: Tabs[Tabs.MockData],
  entityPreview: [],
  envTypesPreview: [],
  isGeneratingPreview: false,
};
