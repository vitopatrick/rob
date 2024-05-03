import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function ContactUs() {
  return (
    <section>
      {/* banner */}
      <Banner name="Contact Us" />
      {/* flex container and form*/}
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row p-4 lg:p-10">
        {/* write up */}
        <div className="flex-1 space-y-6">
          <p>
            If you would like to learn more about working with Christian
            Robinson or need more information about subscriptions, please fill
            out the form below. Thank you for your interest in The Robinson
            Review.
          </p>
          <p>904-590-5103</p>
        </div>
        {/* form */}
        <div className="flex-1">
          <p>
            Fields marked with an <span className="text-red-500">*</span> are
            required
          </p>
          {/* form */}
          <div className="mt-4 space-y-4">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="question">5 + 5</Label>
              <Input
                type="question"
                className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
              />
            </div>
            <Button>SUBMIT</Button>
          </div>
        </div>
      </div>
      {/* disclaimer*/}
      <Disclaimer />
    </section>
  );
}
