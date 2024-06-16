import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  author: string;
  content: string;
  imageUrl: string;
  className?: string;
};

const ReviewCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl shadow-lg bg-[#1F1F24] shadow-background-600  p-4  text-sm text-gray-500",
        props.className
      )}
    >
      <div className={cn("flex-1 py-4")}>
        <div
          className="prose prose-sm  max-w-none text-[#F4F4F4]"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
      <div className="flex items-center  gap-x-3 py-4">
        <img
          src={props.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <h3 className="font-medium text-primary-500 ">{props.author}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
