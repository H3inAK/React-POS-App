/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useVoucherStore from "../stores/useVoucherStore";
import VoucherItem from "./VoucherItem";
import VoucherSummary from "./VoucherSummary";
import VoucherHeader from "./VoucherHeader";
import { useReactToPrint } from "react-to-print";
import { toast } from "sonner";

const VoucherSection = () => {
  const { items, removeAllItems } = useVoucherStore();
  const voucherRef = useRef();

  const handleVoucherPrint = useReactToPrint({
    contentRef: voucherRef,
    documentTitle: "Voucher Receipt",
    onAfterPrint: () => {
      toast.success("Voucher printed successfully!", {
        position: "bottom-center",
      });
    },
  });

  return (
    <section className="col-span-2 flex flex-col min-h-0 bg-white dark:bg-zinc-800">
      <div
        ref={voucherRef}
        className="flex flex-col voucher-receipt h-full print:w-[100mm] print:min-h-0 print:p-2 print:mx-auto print:bg-white print:text-black print:shadow-none"
      >
        <VoucherHeader />

        <div className="px-5 flex-1 flex flex-col space-y-1.5 overflow-y-auto">
          <div className="last:flex hidden h-full w-full flex-col items-center justify-center gap-1.5">
            <p className="text-sm text-gray-700 dark:text-gray-200">
              No items in cart
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Tap any product to add here
            </p>
          </div>

          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <VoucherItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="p-5 mt-auto border-t border-gray-300 dark:border-zinc-700">
          <VoucherSummary />

          <div className="flex justify-evenly gap-4 my-3 print:hidden">
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

          <button
            onClick={handleVoucherPrint}
            disabled={items.length == 0}
            className="px-4 py-2 print:hidden rounded-lg w-full font-heading text-sm font-medium text-gray-100 hover:text-gray-100 bg-blue-500 dark:bg-blue-600 shadow-sm cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring-2 dark:focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Check Out
          </button>

          <p className="text-center text-xs mt-2 hidden print:block">
            Have a nice day ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;
