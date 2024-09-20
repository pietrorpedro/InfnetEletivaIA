import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh grid items-center justify-center xl:grid-cols-2">
      <div className="grid gap-4 text-center xl:text-left xl:pl-12">
        <h1 className="text-7xl font-bold">
          <span className="text-indigo-600">Your</span> planning.
        </h1>
        <h1 className="text-7xl font-bold">
          <span className="text-indigo-600">Your</span> goals.
        </h1>
        <h1 className="text-7xl font-bold">
          <span className="text-indigo-600">Your</span> way.
        </h1>
        <div className="mt-8">
          <p className="text-lg font-semibold">
            Simplify your study and take action with confidence.
          </p>
        </div>
        <div className="mt-8">
          <Button onClick={(e) => navigate("/form")}>Find your plan</Button>
        </div>
      </div>
      <div className="hidden xl:block">
        <img className="bg-slate-50" src="/src/assets/hero.svg" />
      </div>
    </main>
  );
}
