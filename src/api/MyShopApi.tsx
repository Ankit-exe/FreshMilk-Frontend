import { Shop } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useUpdateMyshop = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updatedShopRequest = async (shopFormData: FormData): Promise<Shop> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: shopFormData,
    });
    if (!response) {
      throw new Error("Failed to update shop!");
    }

    return response.json();
  };

  const {
    mutate: updateShop,
    isLoading,
    error,
    isSuccess,
  } = useMutation(updatedShopRequest);

  if (isSuccess) {
    toast.success("Shop is updated");
  }

  if (error) {
    toast.error("unable to update shop");
  }

  return { updateShop, isLoading };
};

export const useCreateMyShop = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyShopRequest = async (shopFormData: FormData): Promise<Shop> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: shopFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: createShop,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyShopRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { createShop, isLoading };
};

export const useGetMyshop = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyShopRequest = async (): Promise<Shop> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/shop`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get shop!");
    }

    return response.json();
  };

  const { data: shop, isLoading } = useQuery("fetchMyShop", getMyShopRequest);

  return { shop, isLoading };
};
