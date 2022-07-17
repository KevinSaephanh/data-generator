import KeyValuePair from "./models/KeyValuePair";

export const entityOptions: KeyValuePair[] = [
  { key: "Select a value", value: "" },
  { key: "Username", value: "username" },
  { key: "FirstName", value: "firstName" },
  { key: "LastName", value: "lastName" },
  { key: "Email", value: "email" },
  { key: "Avatar", value: "avatar" },
  { key: "Date", value: "date" },
  { key: "Primary ID", value: "primaryId" },
  { key: "Unique ID", value: "uniqueId" },
  { key: "Number", value: "number" },
  { key: "Boolean", value: "boolean" },
  { key: "Encrypt", value: "encrypt" },
];

export enum EntityOptionsValues {
  Username,
  FirstName,
  LastName,
  Email,
  Avatar,
  Date,
  PrimaryId,
  UniqueId,
  Number,
  Boolean,
  Encrypt,
}

export const envvalueOptions: KeyValuePair[] = [
  { key: "Select a value", value: "" },
  { key: "String", value: "string" },
  { key: "Number", value: "number" },
  { key: "Boolean", value: "boolean" },
  { key: "Date", value: "date" },
];

export const defaultEntityFields: KeyValuePair[] = [
  { key: "", value: "" },
  { key: "", value: "" },
  { key: "", value: "" },
  { key: "", value: "" },
  { key: "", value: "" },
];

export const defaultEnvvalueFields: KeyValuePair[] = [
  { key: "port", value: "" },
  { key: "node_env", value: "" },
  { key: "access_token_secret", value: "" },
  { key: "refresh_token_secret", value: "" },
  { key: "db_url", value: "" },
];

export const entitySuggestions = [
  "username",
  "firstName",
  "lastName",
  "email",
  "password",
  "avatar",
  "createdAt",
  "updatedAt",
  "isAdmin",
  "id",
  "uid",
  "primaryId",
];
