"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type FileContextType = {
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

export const FileContext = createContext<FileContextType>({
  file: undefined,
  setFile: () => {},
});

// Create a provider component
export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [file, setFile] = useState<File>();

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};
