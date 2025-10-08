import useVoucherStore from "../stores/useVoucherStore";
import VoucherItem from "./VoucherItem";
import VoucherSummary from "./VoucherSummary";

const VoucherSection = () => {
  const { items } = useVoucherStore();

  return (
    <section className="col-span-2 flex flex-col min-h-0 bg-white dark:bg-zinc-800">
      <h3 className="p-5 text-2xl text-end text-zinc-900 dark:text-zinc-200">
        Order Items#3423
      </h3>

      <div className="px-5 flex-1 flex flex-col space-y-1.5 overflow-y-auto">
        {items.map((item) => (
          <VoucherItem key={item.id} item={item} />
        ))}
      </div>

      <div className="p-5 mt-auto border-t border-gray-300 dark:border-zinc-700">
        <VoucherSummary />

        <div className="flex justify-evenly gap-4 my-3">
          <div className="flex items-center gap-1.5">
            <input
              defaultChecked
              type="radio"
              name="order-type"
              id="dine-in-radio"
              value="dine-in"
              className="size-3"
            />
            <label
              htmlFor="dine-in-radio"
              className="text-gray-900 dark:text-gray-200 text-sm"
            >
              Dine In
            </label>
          </div>
          <div className="flex items-center gap-1.5">
            <input
              type="radio"
              name="order-type"
              id="take-away-radio"
              value="take-away"
              className="size-3"
            />
            <label
              htmlFor="take-away-radio"
              className="text-gray-900 dark:text-gray-200 text-sm"
            >
              Take Away
            </label>
          </div>
        </div>

        <button className="px-4 py-2 rounded-lg w-full font-heading text-sm font-medium text-gray-200 hover:text-gray-100 bg-blue-500 dark:bg-blue-600 shadow-sm cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring-2 dark:focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800">
          Check Out
        </button>
      </div>
    </section>
  );
};

export default VoucherSection;
