import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getSessionID } from "~/helpers/api/requests";
import { ISessionIDProps } from "~/types/general";

interface SessionStore {
  sessionId: string | null;
  checkSessionID: () => Promise<void>;
}

const useSessionStore = create<SessionStore>()(
  devtools(
    persist(
      (set, get) => ({
        sessionId: null,
        checkSessionID: async () => {
          const { sessionId } = get();
          if (sessionId !== null && sessionId !== undefined) {
            console.log("Existing Session ID:", sessionId);
          } else {
            try {
              const response = await getSessionID();
              //@ts-ignore
              await set({ sessionId: response });
              console.log("New Session ID:", response);
            } catch (error) {
              console.error("Error getting session id:", error);
            }
          }
        },
      }),
      {
        name: "session-storage",
      }
    )
  )
);

export default useSessionStore;
