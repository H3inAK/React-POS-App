import { Plus } from "lucide-react";
import useProductStore, {
  ProductCreateDrawerStatus,
} from "../stores/useProductStore";

const ProductAddBtn = () => {
  const { setOpenDrawerStatus } = useProductStore();

  const handleClick = () => {
    setOpenDrawerStatus(ProductCreateDrawerStatus.SHOW);
  };

  return (
    <button
      onClick={handleClick}
      className="size-12 bg-blue-600 rounded-full duration-200 active:scale-90 hover:scale-90 flex justify-center items-center absolute bottom-5 right-5 text-white"
    >
      <Plus className="size-6" />
    </button>
  );
};

export default ProductAddBtn;
