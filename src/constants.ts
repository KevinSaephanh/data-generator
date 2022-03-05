import FormField from "./models/FormField";
import Option from "./models/Option";

export const entityOptions: Option[] = [
  { label: "Select a type", value: "" },
  { label: "Username", value: "username" },
  { label: "First Name", value: "firstName" },
  { label: "last Name", value: "lastName" },
  { label: "Email", value: "email" },
  { label: "Avatar", value: "avatar" },
  { label: "Date", value: "date" },
  { label: "Primary ID", value: "primaryId" },
  { label: "Unique ID", value: "uniqueId" },
];

export const envTypeOptions: Option[] = [
  { label: "Select a type", value: "" },
  { label: "String", value: "string" },
  { label: "Number", value: "number" },
  { label: "Boolean", value: "boolean" },
  { label: "Date", value: "date" },
];

export const defaultEntityFields: FormField[] = [
  { name: "userId", type: "uniqueId" },
  { name: "username", type: "username" },
  { name: "email", type: "email" },
  { name: "avatar", type: "avatar" },
];

export const defaultEnvTypeFields: FormField[] = [
  { name: "port", type: "number" },
  { name: "node_env", type: "string" },
  { name: "access_token_secret", type: "string" },
  { name: "refresh_token_secret", type: "string" },
  { name: "db_url", type: "string" },
];
