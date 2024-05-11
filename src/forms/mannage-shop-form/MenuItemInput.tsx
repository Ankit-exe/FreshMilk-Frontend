import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};
export const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormLabel className="flex items-center gap-1">
            Name
            <FormMessage />
            <FormControl>
              <Input {...field} placeholder="Cheese" className="bg-white" />
            </FormControl>
          </FormLabel>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormLabel className="flex items-center gap-1">
            Price (NPR)
            <FormMessage />
            <FormControl>
              <Input {...field} placeholder="120" className="bg-white" />
            </FormControl>
          </FormLabel>
        )}
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500  max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};
