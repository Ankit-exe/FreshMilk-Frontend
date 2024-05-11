import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/shop-options-config";
import { useFormContext } from "react-hook-form";
import { CuisineCheckBox } from "./CuisineCheckbox";

export const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cusines</h2>
        <FormDescription>
          Select the cusines that your shop serves
        </FormDescription>
        <div>
          <FormField
            control={control}
            name="cuisines"
            render={({ field }) => (
              <FormItem>
                <div className="grid md:grid-cols-3 gap-1">
                  {cuisineList.map((cuisineItem) => (
                    <CuisineCheckBox cuisine={cuisineItem} field={field} />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};
