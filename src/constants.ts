import KeyValuePair from "./models/KeyValuePair";

export const entityOptions: KeyValuePair[] = [
  { key: "Select a value", value: "" },
  { key: "Userkey", value: "userkey" },
  { key: "First key", value: "firstkey" },
  { key: "last key", value: "lastkey" },
  { key: "Email", value: "email" },
  { key: "Avatar", value: "avatar" },
  { key: "Date", value: "date" },
  { key: "Primary ID", value: "primaryId" },
  { key: "Unique ID", value: "uniqueId" },
];

export const envvalueOptions: KeyValuePair[] = [
  { key: "Select a value", value: "" },
  { key: "String", value: "string" },
  { key: "Number", value: "number" },
  { key: "Boolean", value: "boolean" },
  { key: "Date", value: "date" },
];

export const defaultEntityFields: KeyValuePair[] = [
  { key: "userId", value: "PrimaryId" },
  { key: "userkey", value: "Userkey" },
  { key: "email", value: "Email" },
  { key: "avatar", value: "Avatar" },
];

export const defaultEnvvalueFields: KeyValuePair[] = [
  { key: "port", value: "" },
  { key: "node_env", value: "" },
  { key: "access_token_secret", value: "" },
  { key: "refresh_token_secret", value: "" },
  { key: "db_url", value: "" },
];
