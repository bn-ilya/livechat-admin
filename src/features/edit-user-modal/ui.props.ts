import { ModalProps } from "@nextui-org/react";
import { UsersPermissionsUser } from "../../shared/api";

export interface IEditUserModalProps extends Omit<ModalProps, 'children'> {
  handleEditUser: () => void,
  user: UsersPermissionsUser;
}