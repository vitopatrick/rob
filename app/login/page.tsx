import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function LoginPage() {
  return (
    <div className="my-3">
      {/* card */}
      <div className="mx-auto lg:w-[40%] p-4 rounded-md shadow-md border border-neutral-400 space-y-4">
        <h4 className="text-xl lg:text-2xl font-medium">Login Account</h4>
        <div className="space-y-5">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className="w-full rounded-none bg-neutral-100 border border-neutral-200 p-4"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="tel"
              className="w-full rounded-none bg-neutral-100 border border-neutral-200 p-4"
            />
          </div>
          <Button>Login Account</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
