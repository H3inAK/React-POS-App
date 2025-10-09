import { useEffect } from "react";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherHeader = () => {
  const { voucherInfo, updateTime } = useVoucherStore();

  useEffect(() => {
    const timer = setInterval(() => updateTime(), 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  return (
    <div className="flex print:flex-col justify-between items-start p-4">
      <h3 className="text-2xl text-zinc-900 dark:text-zinc-200 print:hidden">
        Order Items
      </h3>
      {/* for print version */}
      <div className="hidden print:flex print:flex-col w-full">
        <h2 className="text-center font-bold mb-1">Tzo' Barkery</h2>
        <p className="text-center text-xs mb-2">
          Thank you for shopping with us!
        </p>
        <hr />
      </div>

      <div className="text-xs text-end font-mono text-gray-600 dark:text-zinc-400 leading-tight self-end print:self-end print:text-right">
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          {voucherInfo.id}
        </p>
        <p>{voucherInfo.date}</p>
        <p>{voucherInfo.time}</p>
      </div>
    </div>
  );
};

export default VoucherHeader;
