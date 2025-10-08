import { useForm } from "react-hook-form";
import useProductStore, {
  ProductCreateDrawerStatus,
} from "../stores/useProductStore";
import useCategoryStore from "../stores/useCategoryStore";
import { toast } from "sonner";

const ProductCreateForm = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { setOpenDrawerStatus, addNewProduct } = useProductStore();
  const { categories } = useCategoryStore();

  const onSubmit = ({ new_product_name, product_price, product_category }) => {
    addNewProduct(new_product_name, product_price, product_category);
    reset();
    toast.success(`${new_product_name} has been created`, {
      position: "top-center",
    });
  };

  const onCancel = () => {
    reset();
    setOpenDrawerStatus(ProductCreateDrawerStatus.HIDE);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
      <div className="flex-1">
        {/* Product Name */}
        <div className="mb-6">
          <label
            htmlFor="new_product_name"
            className="block mb-2 text-[14px] font-medium text-zinc-900 dark:text-zinc-200"
          >
            New Product Name
          </label>
          <input
            type="text"
            id="new_product_name"
            {...register("new_product_name", { required: true, minLength: 3 })}
            aria-invalid={errors.new_product_name ? "true" : "false"}
            className={`bg-gray-50 border text-zinc-900 text-sm rounded-sm outline-none focus:ring-1.5 focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-1 dark:focus:ring-zinc-300 dark:focus:border-zinc-500 ${
              errors.new_product_name
                ? "border-red-600 dark:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="eg. Drinks"
          />
          {errors.new_product_name?.type === "required" && (
            <p
              role="alert"
              className="text-xs mt-1 text-red-600 dark:text-red-500"
            >
              Product name is required
            </p>
          )}
        </div>

        {/* Product Price */}
        <div className="mb-6">
          <label
            htmlFor="product_price"
            className="block mb-2 text-[14px] font-medium text-zinc-900 dark:text-zinc-200"
          >
            Product Price
          </label>
          <input
            type="number"
            id="product_price"
            {...register("product_price", { required: true, min: 100 })}
            aria-invalid={errors.product_price ? "true" : "false"}
            className={`bg-gray-50 border text-zinc-900 text-sm rounded-sm outline-none focus:ring-1.5 focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-1 dark:focus:ring-zinc-300 dark:focus:border-zinc-500 ${
              errors.product_price
                ? "border-red-600 dark:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="$ 7500"
          />
          {errors.product_price && (
            <p
              role="alert"
              className="text-xs mt-1 text-red-600 dark:text-red-500"
            >
              Valid product price is required
            </p>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="product_category"
            className="block mb-2 text-[14px] font-medium text-zinc-900 dark:text-zinc-200"
          >
            Product Category
          </label>

          <div className="relative">
            <select
              id="product_category"
              {...register("product_category", { required: true })}
              className={`appearance-none w-full bg-gray-50 border text-zinc-900 text-sm rounded-sm outline-none focus:ring-1.5 focus:ring-blue-300 dark:foucs:ring-zinc-400 focus:border-blue-500 dark:focus:border-zinc-500  block p-2.5 pr-10 dark:bg-zinc-600 dark:border-zinc-500 dark:text-white ${
                errors.product_category
                  ? "border-red-600 dark:border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="">-- Select Category --</option>
              {categories
                .filter((cat) => cat.title !== "All")
                .map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
            </select>

            {/* Custom chevron */}
            <svg
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {errors.product_category && (
            <p
              role="alert"
              className="text-xs mt-1 text-red-600 dark:text-red-500"
            >
              Category is required
            </p>
          )}
        </div>

        {/* Confirm Checkbox */}
        <div className="flex items-center mb-4">
          <input
            id="confirm-checkbox-2"
            type="checkbox"
            {...register("confirm", { required: true })}
            className={`size-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-zinc-600 dark:border-zinc-500 ${
              errors.confirm ? "border-red-600 dark:border-red-500" : ""
            }`}
          />
          <label
            htmlFor="confirm-checkbox-2"
            className="ms-2 text-xs font-medium text-zinc-900 dark:text-zinc-300"
          >
            I'm sure to create a new product
          </label>
        </div>
        {errors.confirm && (
          <p
            role="alert"
            className="text-xs mt-1 text-red-600 dark:text-red-500"
          >
            Please confirm to create a new product
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 text-sm font-medium w-full text-center text-zinc-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductCreateForm;
