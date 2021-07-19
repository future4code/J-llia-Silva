import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

const useControlPages = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/LoginPage");
    }
  }, [history]);
};

export default useControlPages;