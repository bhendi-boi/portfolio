import { createContext, useRef } from "react";

export const ScrollRefContext = createContext();

export const ScrollRefProvider = ({ childern }) => {
  const timeline = useRef(null);
  const projects = useRef(null);
  const co = useRef(null);
  const contact = useRef(null);

  const values = { timeline, projects, co, contact };

  return (
    <ScrollRefContext.Provider value={values}>
      {childern}
    </ScrollRefContext.Provider>
  );
};
