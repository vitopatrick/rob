import Link from "next/link";

const services = [
  {
    url: "/daily-comments",
    title: "Daily Comments",
    about:
      "The Robinson Review is a daily brief and succinct commentary on the global capital markets, economic and technical trends both short term and long term.",
    cover:
      "https://www.robinsonagmarketing.com/wp-content/uploads/2020/09/1.jpg",
  },
  {
    url: "/marketing",
    title: "Futures Trading",
    about:
      "Cash grain/hedging and spreading. Futures call and put options strategies/trading. Breaking news, sudden price movements, basis changes, etc.",
    cover:
      "https://www.robinsonagmarketing.com/wp-content/uploads/2020/08/1-2.jpg",
  },
  {
    url: "/hedging",
    title: "Hedging",
    about:
      "Managing price risk for your farm, grain marketing. Let us manage your price risk and volatility, provide you with the strategy and insight needed.",
    cover:
      "https://www.robinsonagmarketing.com/wp-content/uploads/2020/09/06.jpg",
  },
];

export default function Srvices() {
  return (
    <div className="bg-neutral-100">
      {/* container */}
      <div className="w-11/12 mx-auto p-4">
        <h3 className="text-center text-2xl my-8">Our Services</h3>
        {/* the services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  ">
          {services.map((service) => (
            <div className="relative shadow-sm bg-white" key={service.title}>
              {/* image */}
              <div>
                <img src={service.cover} alt="the image" />
              </div>
              <div className="text-center space-y-4 p-4 bg-neutral-50 w-[80%] mx-auto relative bottom-10">
                <h4>{service.title}</h4>
                <p>{service.about}</p>
                <Link href="/" className="text-green-700 block">
                  MORE INFO
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
