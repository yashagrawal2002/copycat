import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Clipboard, ClipboardCopy, Copy, Trash } from "lucide-react";
import { string } from "zod";
import { toast } from "sonner";

export interface listType {
  id: string;
  text: string;
}
function SaveData({
  data,
  setData,
  roomId,
}: {
  data: listType[];
  setData: React.Dispatch<React.SetStateAction<listType[]>>;
  roomId: string;
}) {
  const deleteData = (id: string) => {
    const deletedData = data.filter((item) => item.id !== id);
    localStorage.setItem(roomId, JSON.stringify(deletedData));
    setData(deletedData);
    toast("Text Deleted");
  };
  const CopyTextComponent = (id: string) => {
    const [textToCopy, SetTextToCopy] = useState("this is text to copy!");
  };

  // const copyToClipborad = () => {
  //   navigator.clipboard
  //     .writeText(setData.text)
  //     .then(() => alert("Text copied to clipboard!"));

  return (
    <div className="mt-4 h-[400px] w-full max-w-4xl overflow-y-scroll">
      {data.map((text) => (
        <Card key={text.id} className="my-4 w-full">
          <CardContent className="flex items-center justify-between py-4">
            <CardDescription>{text.text}</CardDescription>
            <div className="space-x-2">
              <Button
                //variant="outline"
                size="icon"
                onClick={() => {
                  navigator.clipboard
                    .writeText(text.text)
                    .then(() => toast("Text copied to clipboard!"));
                }}
              >
                {/* <Copy className="h-4 w-4" /> */}

                <Clipboard className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => deleteData(text.id)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SaveData;
