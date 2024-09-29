// contexts/EventCategoryContext.tsx
import { createContext, useContext, useState } from "react";

interface EventCategoryContextType {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const EventCategoryContext = createContext<
  EventCategoryContextType | undefined
>(undefined);

export const EventCategoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("Сите");

  return (
    <EventCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      {children}
    </EventCategoryContext.Provider>
  );
};

export const useEventCategory = () => {
  const context = useContext(EventCategoryContext);
  if (!context) {
    throw new Error(
      "useEventCategory must be used within an EventCategoryProvider"
    );
  }
  return context;
};
