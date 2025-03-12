import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

interface AppContextType {
  data: User | null;
  setter: Dispatch<SetStateAction<User | null>>;
}

export const AppContext = createContext<AppContextType>({
  data: null,
  setter: () => {}
});
