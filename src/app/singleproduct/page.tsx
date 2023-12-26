import { getSingleProduct } from "@/helpers";
import Image from "next/image";
import React from "react";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  console.log(_idString);
  const product = await getSingleProduct(_id);
  console.log(product);

  return (
    <div className="max-w-screen-xl mx-auto flex items-center gap-10 xl:gap-0">
      <Image src={product?.image} alt="" width={500} height={500} />
      <div>
        <p className="text-xl font-semibold">{product?.title}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
