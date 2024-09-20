import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="_app" className="min-h-dvh bg-slate-50">
      <div className="min-h-dvh container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
