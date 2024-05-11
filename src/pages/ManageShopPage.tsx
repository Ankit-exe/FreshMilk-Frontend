import {
  useCreateMyShop,
  useGetMyshop,
  useUpdateMyshop,
} from "@/api/MyShopApi";
import ManageShopForm from "@/forms/mannage-shop-form/ManageShopForm";

export default function ManageShopPage() {
  const { createShop, isLoading: isCreateLoading } = useCreateMyShop();
  const { shop } = useGetMyshop();
  const { updateShop, isLoading: isUpdateLoading } = useUpdateMyshop();

  const isEditing = !!shop;
  return (
    <ManageShopForm
      shop={shop}
      onSave={isEditing ? updateShop : createShop}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
}
