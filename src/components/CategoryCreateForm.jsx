import { useForm } from "react-hook-form";
import useCategoryStore from "../stores/useCategoryStore";
import { toast } from "sonner";

const CategoryCreateForm = ({ setIsOpenDrawer }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { addNewCategory } = useCategoryStore();

  const onSubmit = ({ new_category_name }) => {
    addNewCategory(new_category_name);
    reset();
    toast.success(`${new_category_name} is created`, {
      position: "top-center",
    });
  };

  const onCancel = () => {
    reset();
    setIsOpenDrawer(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
      <div className="flex-1">
        <div className="mb-6">
          <label
            htmlFor="new_category_name"
            className="block mb-2 text-[14px] font-medium text-zinc-900 dark:text-zinc-200"
          >
            New Category Name
          </label>
          <input
            type="text"
            id="new_category_name"
            {...register("new_category_name", { required: true, minLength: 3 })}
            aria-invalid={errors.new_category_name ? "true" : "false"}
            className={`bg-gray-50 border text-zinc-900 text-sm rounded-sm outline-none focus:ring-1.5 focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-1 dark:focus:ring-zinc-300 dark:focus:border-zinc-500 ${
              errors.new_category_name
                ? "border-red-600 dark:border-red-500"
                : "border-gray-300"
            }`}
            placeholder="eg. Drinks"
          />
          {errors.new_category_name?.type === "required" && (
            <p
              role="alert"
              className="text-xs mt-1 text-red-600 dark:text-red-500"
            >
              Category name is required
            </p>
          )}
          {errors.new_category_name?.type === "minLength" && (
            <p
              role="alert"
              className="text-xs mt-1 text-red-600 dark:text-red-500"
            >
              Category name must be at least 3 characters
            </p>
          )}
        </div>
        <div className="flex items-center mb-4">
          <input
            id="confirm-checkbox"
            type="checkbox"
            className={`size-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-zinc-600 dark:border-zinc-500 ${
              errors.confirm ? "border-red-600 dark:border-red-500" : ""
            }`}
            {...register("confirm", { required: true })}
          />
          <label
            htmlFor="confirm-checkbox"
            className="ms-2 text-xs font-medium text-zinc-900 dark:text-zinc-300"
          >
            I'm sure to create a new category
          </label>
        </div>
        {errors.confirm?.type === "required" && (
          <p
            role="alert"
            className="text-xs mt-1 text-red-600 dark:text-red-500"
          >
            Please confirm to create a new category
          </p>
        )}
      </div>

      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 text-sm font-medium w-full text-center text-zinc-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700"
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

export default CategoryCreateForm;
