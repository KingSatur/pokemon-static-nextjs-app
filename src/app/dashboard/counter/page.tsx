import CounterComponent from "@/src/shopping-cart/components/CounterComponent";

export const metadata = {
  title: "Counter page",
  description: "A simple counter page",
};

export default function CounterPage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CounterComponent value={10} />
    </div>
  );
}
