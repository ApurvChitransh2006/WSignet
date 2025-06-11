import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Outlet, useNavigate } from "react-router-dom";

const SuperUser = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="h-screen flex justify-center items-center">
      {login ? (
        <Outlet/>
      ) : (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your Superuser account</CardTitle>
            <CardDescription>
              Enter your username below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="username"
                    placeholder="Apurv Chitransh"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" onClick={()=> {setLogin(!login); navigate('dashboard')}}>Login</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default SuperUser;
