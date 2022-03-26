import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disable?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disable = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disable || loading}
    >
      {children}
    </Button>
  );
});
