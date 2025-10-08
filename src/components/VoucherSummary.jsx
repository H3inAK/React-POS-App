import React from "react";

const VoucherSummary = () => {
  const total = 37300;
  const tax = total * 0.05;
  const netTotal = total + tax;

  return (
    <table className="w-full text-end text-sm text-gray-900 dark:text-zinc-200 font-mono">
      <tbody>
        <tr>
          <td className="py-1">Total :</td>
          <td className="py-1">{total}</td>
        </tr>
        <tr>
          <td className="py-1">Tax (5%) :</td>
          <td className="py-1">{tax.toFixed(0)}</td>
        </tr>
        <tr>
          <td className="py-1 font-bold">Net Total :</td>
          <td className="py-1 font-bold">{netTotal.toFixed(0)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VoucherSummary;
