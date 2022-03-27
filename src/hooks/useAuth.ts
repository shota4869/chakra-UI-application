/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../tyoes/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { showMessage } = useMessage();

  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            setLoading(false);
            showMessage({ title: "ユーザが見つかりません", status: "error" });
          }
        })
        .catch(() => {
          setLoading(false);
          showMessage({ title: "ユーザが見つかりません", status: "error" });
        });
    },
    [history]
  );
  return { login, loading };
};
