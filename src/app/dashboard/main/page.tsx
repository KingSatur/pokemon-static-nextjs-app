import { SimpleWidget } from "@/src/components";

export default function MainPage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}
