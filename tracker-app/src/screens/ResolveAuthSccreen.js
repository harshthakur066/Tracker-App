import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSgnin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSgnin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
