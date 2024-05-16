import CardPrice from "./PriceCards";

const plans = [
  {
    title: "Trial",
    about: "Try a one month give away offer with Robinson AG marketing hub,",
    price: "$50",
  },
  {
    title: "Weekly",
    about: "Get Weekly newsletters and information from us ",
    price: "$75",
  },
  {
    title: "Monthly",
    about:
      "Get the latest in-depth summary of every trade and market transactions.",
    price: "$399",
  },
  {
    title: "Yearly",
    about: "Save More than 10% when you sign up for a monthly subscription",
    price: "$1400",
  },
];

const SubscribeCards = () => {
  return (
    <div className="w-[90%] mx-auto p-4">
      {/* header */}
      <h4 className="text-xl lg:text-2xl font-bold text-center mb-3">
        Choose A subscription Plan
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <CardPrice plan={plan} key={plan.title} />
        ))}
      </div>
    </div>
  );
};

export default SubscribeCards;
