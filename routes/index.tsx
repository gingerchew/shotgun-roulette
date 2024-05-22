import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <h1 class="text-4xl mb-4">Enter the roulette?</h1>
      <div class="flex gap-x-3 justify-center items-center">
        <a href="/roulette" class="bg-slate-700 text-sky-200 px-5 py-2 rounded-md">
          Enter
        </a>
        <a href="/what" class="bg-slate-200 text-sky-800 px-5 py-2 rounded-md">
          What?
        </a>
      </div>
    </>
  );
}
