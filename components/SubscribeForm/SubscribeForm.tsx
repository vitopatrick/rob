"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { messageClient } from "@/actions/Message";
import { toast } from "sonner";
import { ThumbsUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  number: z.string().min(2).max(50),
  email: z.string().min(2).max(50).email(),
  // password: z.string().min(2).max(50),
  plan: z.string(),
  product: z.string(),
});

const methods = [
  {
    address: "8635 Woodward, Woodridge IL 60517",
    imgUrl: "",
    name: "PNC Bank",
    routing_number: "071921891",
    method: "Bank Transfer",
    account: " 4731912327",
  },
  {
    method: "Cryptocurrency",
    coins: [
      {
        address: "bc1qz7p9xvpavtzqt7dqtcedltwxhz4jeh97jvdpqk",
        imgUrl: "/barcode.jpeg",
        name: "Bitcoin",
        routing_number: "",
        method: "BITCOIN",
        account: "",
      },
      {
        address: "0x7c323DFf5307c45E2F21bc0C3B08eAF26064110A",
        imgUrl: "/erc20.jpeg",
        name: "ERC20",
        routing_number: "",
        method: "USDT ERC20",
        account: "",
      },
      {
        address: "TDN5oN4Hk62DZsLhLWD67ZT7tNwSwPD34A",
        imgUrl: "/trc20.jpeg",
        name: "TRC20",
        routing_number: "",
        method: "USDT TRC20",
        account: "",
      },
      {
        address: "0x7c323DFf5307c45E2F21bc0C3B08eAF26064110A",
        imgUrl: "/eth.jpeg",
        name: "ETH",
        routing_number: "",
        method: "ETH",
        account: "",
      },
      {
        address: "TDN5oN4Hk62DZsLhLWD67ZT7tNwSwPD34A",
        imgUrl: "/trx.jpeg",
        name: "TRX",
        routing_number: "",
        method: "TRX",
        account: "",
      },
    ],
  },
];

export default function SubscribeForm() {
  const params = useSearchParams();
  const price = params.get("price");
  const product = params.get("product");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [selectedCoin, setCoin] = useState<any>();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await messageClient(values);
      toast.success("Request Sent");
    } catch (error) {
      toast.error("Sorry Could not connect");
    }
  }

  const findCoin = (name: string) => {
    const coinFound = methods[1].coins?.find((coin) => coin.method === name);

    setCoin(coinFound);
  };

  return (
    <>
      <section className="lg:w-[50%] mx-auto p-6">
        {/* form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4 flex-col lg:flex-row">
                {/* first name */}
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* last name */}
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* phone number */}
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Product i.e choose the product you is subscribing to */}
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select A Product</FormLabel>
                    <FormControl className="block py-3 px-2 rounded-md w-full border border-neutral-300">
                      <select {...field}>
                        <option>AI</option>
                        <option>Cryptocurrency</option>
                        <option>Investment Tools</option>
                        <option>Quant And Research</option>
                        <option>Trade And Income</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="rounded-none bg-green-700 hover:bg-green-600 block w-full"
              >
                SIGN UP
              </Button>
            </form>
          </Form>
          <div className="my-4 border border-neutral-300 p-4 rounded-lg shadow-lg space-y-6">
            <h5 className="font-medium text-xl">Cart Summary</h5>
            <div className="flex justify-between">
              <p>Product</p>
              <h4 className="font-medium">{product}</h4>
            </div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <h4 className="font-medium">$0</h4>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <h4 className="font-medium">{price}</h4>
            </div>
            <p className="my-3 text-center text-xl lg:text-2xl font-medium">
              Choose Your Preferred Payment method
            </p>
            <div className="gap-4 flex items-center justify-center flex-wrap">
              {methods.map((method) =>
                method.method === "Bank Transfer" ? (
                  <AlertDialog key={method.method}>
                    <AlertDialogTrigger className=" border-2 px-5 py-3 rounded-lg border-neutral-500 ">
                      {method.method}
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-2xl ">
                          {method.name}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div className="my-4">
                            <h3 className="my-2 font-semibold text-neutral-500">
                              Routing Number
                            </h3>
                            <p className="text-xl tracking-widest">
                              {method.routing_number}
                            </p>
                          </div>

                          <div>
                            <h3 className="my-2 font-semibold text-neutral-500">
                              Bank Account Number
                            </h3>
                            <p className="text-xl tracking-widest">
                              {method.account}
                            </p>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Continue</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <AlertDialog key={method.method}>
                    <AlertDialogTrigger className=" border-2 px-5 py-3 rounded-lg border-neutral-500 ">
                      {method.method}
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-2xl ">
                          Select Coin
                        </AlertDialogTitle>
                        <div className="flex items-center justify-evenly">
                          {method.coins?.map((coin) => (
                            <button
                              key={coin.method}
                              onClick={() => findCoin(coin.method)}
                              className={
                                selectedCoin &&
                                selectedCoin?.method == coin.method
                                  ? "bg-red-400 text-white rounded-lg px-4 py-2"
                                  : ""
                              }
                            >
                              {coin.method}
                            </button>
                          ))}
                        </div>
                        {selectedCoin && (
                          <div>
                            <img
                              src={selectedCoin.imgUrl}
                              alt={selectedCoin.method}
                            />
                            <p className="font-mono text-center">
                              {selectedCoin.address}
                            </p>
                            <p className="text-center my-4">
                              {selectedCoin.method}
                            </p>
                          </div>
                        )}
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Continue</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )
              )}
            </div>
            <div>
              <AlertDialog>
                <AlertDialogTrigger className=" bg-green-600 text-white capitalize block w-full px-5 py-3 rounded-lg">
                  i Have made payment
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-center font-bold text-3xl">
                      Thank You
                    </h4>
                    <ThumbsUp size={150} strokeWidth={0.8} color="#166534" />
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="block w-full">
                      Continue
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

