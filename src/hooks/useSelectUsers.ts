import { useCallback, useState } from "react";

import { User } from "../tyoes/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザ情報を特定しモーダル画面を表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
