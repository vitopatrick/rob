import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function MarketingPage() {
  return (
    <section>
      <Banner name="Speakers and Seminars" />
      {/* container */}
      <div className="w-11/12 mx-auto p-5 flex flex-col lg:flex-row">
        {/* write up */}
        <div className="space-y-5 flex-1">
          <p>
            Have Robinson Ag Marketing present at your next producer meeting or
            customer event.
          </p>
          <ul>
            <li>Education</li>
            <li>Value</li>
            <li>Experience</li>
          </ul>
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/03/chris_robinson1_web-e1517932790750.jpg"
            alt="picture"
          />
        </div>
        {/* form */}
        <div className="space-y-5 flex-1">
          <p>
            Fields marked with an <span className="text-red-500">*</span> are
            required
          </p>
          <p>
            If you would like to take part in our event, please fill in your
            details in this Event Registration Form below and you will be
            automatically registered. Event registration must be completed at
            least seven (7) days prior to the event.
          </p>
          {/* the form */}
          <div className="space-y-8">
            {/* container first and last name */}
            <div className="flex gap-2 flex-col lg:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="first name">First Name</Label>
                <Input
                  type="text"
                  className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="last Name">Last Name</Label>
                <Input
                  type="text"
                  className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
                />
              </div>
            </div>
            {/* container email and phone */}
            <div className="flex gap-2 flex-col lg:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="question">Phone</Label>
                <Input
                  type="tel"
                  className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
                />
              </div>
            </div>
            {/* question */}
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="Question">Questions/Comments?</Label>
              <Textarea className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="question"> What is 5 + 5?</Label>
              <Input
                type="question"
                className="w-full rounded-none bg-neutral-200 border border-neutral-200 p-4"
              />
            </div>
            <Button>REGISTER</Button>
          </div>
        </div>
      </div>
      <Disclaimer />
    </section>
  );
}
