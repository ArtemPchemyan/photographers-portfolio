import React from "react";

export function Divider({ title }: { title: string }) {
  return (
    <div className="w-full h-[1px] bg-[#71706f]">
      <h3 className="text-2xl font-semibold absolute left-1/2 -translate-x-2/4 -translate-y-2/4 block px-7 bg-default-bg">
        {title}
      </h3>
    </div>
  );
}
