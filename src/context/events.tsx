import React, { createContext, useState, useContext, ReactNode } from "react";

interface EventContextType {
  setEventListener: (listener: () => void) => void;
  triggerEvent: () => void;
  productCategory: string;
  setProductCategory: (value: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function useEventContext() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
}

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [eventListener, setEventListener] = useState<null | (() => void)>(null);
  const [productCategory, setProductCategory] = useState<string>("All");

  const triggerEvent = () => {
    if (eventListener) {
      eventListener();
    }
  };

  const contextValue: EventContextType = {
    setEventListener,
    triggerEvent,
    productCategory,
    setProductCategory,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
