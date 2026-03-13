import { RootLayoutProps } from "../../types";
import Sidebar from "./components/aside";

function ModelsLayouts({ children }: RootLayoutProps) {
  return (
    <div className="models-list-page layout-container relative flex flex-col gap-1 md:flex-row">
      <Sidebar />
      <main className="grow">{children}</main>
    </div>
  );
}

export default ModelsLayouts;
