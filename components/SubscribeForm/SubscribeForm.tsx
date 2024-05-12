"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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
    address: "bc1qz7p9xvpavtzqt7dqtcedltwxhz4jeh97jvdpqk",
    imgUrl: "/barcode.jpeg",
    name: "Bitcoin",
    routing_number: "",
    method: "Crypto",
    account: "",
  },
  {
    address: "8635 Woodward, Woodridge IL 60517",
    imgUrl: "",
    name: "PNC Bank",
    routing_number: "071921891",
    method: "Bank Transfer",
    account: " 4731912327",
  },
];

export default function SubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await messageClient(values);
      toast.success("Request Sent");
    } catch (error) {
      toast.error("Sorry Could not connect");
    }
  }

  return (
    <section className="w-11/12 mx-auto p-6">
      {/* form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* first name */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                <FormItem>
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            {/* password
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

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

            {/* subscription Model */}
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose A Subscription Plan</FormLabel>
                  <FormControl className="block py-3 px-2 rounded-md w-full border border-neutral-300">
                    <select {...field}>
                      <option>Weekly $75</option>
                      <option>Monthly $399</option>
                      <option>Yearly $1400</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="rounded-none bg-green-700 hover:bg-green-600"
            >
              SIGN UP
            </Button>
          </form>
        </Form>
        <p className="my-3">Choose Your Preferred Payment method</p>
        <div className="space-x-4">
          {methods.map((method) => (
            <AlertDialog key={method.method}>
              <AlertDialogTrigger>{method.method}</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center text-2xl">
                    {method.name}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {method.imgUrl && (
                      <img src={method.imgUrl} alt={method.name} />
                    )}
                    <p className="text-center font-mono">{method.address}</p>
                    {method.routing_number && (
                      <div className="my-4">
                        <h3 className="my-2 font-semibold text-neutral-500">
                          Routing Number
                        </h3>
                        <p className="text-xl tracking-widest">
                          {method.routing_number}
                        </p>
                      </div>
                    )}
                    {method.account && (
                      <div>
                        <h3 className="my-2 font-semibold text-neutral-500">
                          Bank Account Number
                        </h3>
                        <p className="text-xl tracking-widest">
                          {method.account}
                        </p>
                      </div>
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Continue</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </section>
  );
}
