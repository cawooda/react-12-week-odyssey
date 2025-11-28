import { type ReactNode } from "react";

export default function AppContainer({ children }: { children: ReactNode }) {
  return <div className="max-w-5xl mx-auto p-6 ">{children}</div>;
}
