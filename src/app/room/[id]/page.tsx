"use client";
import React, { useEffect, useState } from "react";
import AddDataForm from "~/app/_components/adddata";
import SaveData, { listType } from "~/app/_components/savedata";

function page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<listType[]>([]);
  useEffect(() => {
    const rawData = localStorage.getItem(params.id);
    if (rawData) {
      console.log(rawData);
      const Sobject = JSON.parse(rawData ?? "") as listType[];
      setData(Sobject);
    }
  }, []);
  return (
    <main className="container my-4 flex h-screen flex-col items-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Room {params.id}
      </h2>
      <AddDataForm odata={data} setData={setData} roomId={params.id} />
      <SaveData data={data} setData={setData} roomId={params.id} />
    </main>
  );
}

export default page;
