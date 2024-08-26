"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  roomId: z.string().min(3, {
    message: "Room Id must be at least 8 characters.",
  }),
});

export default function NewRoomForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      roomId: "",
    },
  });
  const router = useRouter();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/room/${data.roomId}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 w-full max-w-xs space-y-2"
      >
        <FormField
          control={form.control}
          name="roomId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Room ID Here " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
        <div className="flex w-full max-w-xs items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Separator className="w-[45%]" /> <span>or</span>{" "}
          <Separator className="w-[45%]" />
        </div>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => {
            const newRoomId = String(Math.random());
            router.push(`/room/${newRoomId}`);
          }}
        >
          Create Room
        </Button>
      </form>
    </Form>
  );
}
