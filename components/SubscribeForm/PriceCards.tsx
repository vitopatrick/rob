import Link from "next/link";

const CardPrice = ({ plan }: any) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {plan.about}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
        <span className="text-gray-500 dark:text-gray-400">{plan.other}</span>
      </div>

      <Link
        href={{
          pathname: "/payment",
          query: {
            price: plan.price,
            product: plan.title,
          },
        }}
        className="bg-green-500 p-3 rounded text-white border-green-300 block"
      >
        Get started
      </Link>
    </div>
  );
};

export default CardPrice;
