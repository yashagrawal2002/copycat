"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { toast } from "sonner";
import { Separator } from "~/components/ui/separator";
import { listType } from "./savedata";

const FormSchema = z.object({
  text: z.string().min(1, {
    message: "text is required",
  }),
});
export default function AddDataForm({
  odata,
  setData,
  roomId,
}: {
  odata: listType[];
  setData: React.Dispatch<React.SetStateAction<listType[]>>;
  roomId: string;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // save data
    const newData = [
      ...odata,
      {
        id: String(Math.random()),
        text: data.text,
      },
    ];
    setData(newData);
    localStorage.setItem(roomId, JSON.stringify(newData));
    // setData([
    //   {
    //     id: String(Math.random()),
    //     text: data.text,
    //   },
    // ]);
    toast.success("Data Added");

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 w-full max-w-xs space-y-2"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="type something" {...field} autoFocus />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
