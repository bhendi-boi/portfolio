import { useContext } from "react";
import { ScrollRefContext } from "../context/ScrollRef";

export const useScrollRef = () => {
  // const values = useContext(ScrollRefContext);
  // if (values === undefined) {
  //   throw new Error("gh");
  // }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return handleScrollToTop;
  //   return null;
};
