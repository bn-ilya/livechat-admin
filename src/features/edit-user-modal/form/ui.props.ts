import { UsersPermissionsUser } from "../../../shared/api";

export interface IFormProps {
  handleEditUser: () => void;
  user: UsersPermissionsUser;
}