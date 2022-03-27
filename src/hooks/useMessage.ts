import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warnig" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((Props) => {
    const { title, status } = Props;
    toast({
      position: "top",
      duration: 2000,
      isClosable: true,
      status,
      title
    });
  }, []);

  return { showMessage };
};
