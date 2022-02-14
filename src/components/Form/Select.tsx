import { FC } from "react";

export const Select: FC = () => {
  return (
    <>
      <select className="w-48 mb-5 p-2">
        <option value="">Select...</option>
        <option value="Username">Username</option>
        <option value="Name">Name</option>
        <option value="Email">Email</option>
        <option value="Avatar">Avatar</option>
        <option value="String">String</option>
        <option value="Number">Number</option>
        <option value="Boolean">Boolean</option>
        <option value="Date">Date</option>
        <option value="PrimaryId">Primary Id</option>
        <option value="UniqueId">Unique Id</option>
      </select>
    </>
  );
};
