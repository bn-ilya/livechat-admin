import {
  ILiveChatClientChildrenUi,
  UsersPermissionsUser,
} from "../../shared/api";

export const ListUsers = ({
  items,
}: {
  items: (UsersPermissionsUser | ILiveChatClientChildrenUi)[];
}) => {
  return items.map((item, index) => {
    if ("parent" in item) {
      const childUser = item as ILiveChatClientChildrenUi;

      return (
        <div key={index}>
          <p>
            {index + 1}. {childUser.name}
          </p>
          <p style={{ fontSize: "12px" }}>
            Родитель: <span>{childUser.parent}</span>
          </p>
        </div>
      );
    }

    if ("lc_form" in item) {
      const userRegister = item as UsersPermissionsUser;
      const isPayed =
        !!userRegister.lc_form.cheques?.length ||
        userRegister.lc_form.senderName;

      const status = isPayed ? "Оплачено" : "Не оплачено";
      const color = isPayed ? "green" : "yellow";
      return (
        <div key={index}>
          <p>
            {index + 1}. {item.name}
          </p>
          <p style={{ fontSize: "12px" }}>
            Статус: <span style={{ color: color }}>{status}</span>
          </p>
        </div>
      );
    }

    return (
      <div key={index}>
        <p>
          {index + 1}. {item.name}
        </p>
        <p style={{ fontSize: "12px" }}>
          Статус: <span style={{ color: "red" }}>регистрация не завершена</span>
        </p>
      </div>
    );
  });
};
