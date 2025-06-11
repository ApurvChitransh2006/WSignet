import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-500">
      <Card className="md:min-w-md sm:min-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Signet</CardTitle>
          <CardDescription>Welcome to the Remote Version of the Signet</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Procede with the options:</p>
        </CardContent>
        <CardFooter className="flex gap-3">
          <CardAction><Button ><Link to={'/superuser'}>Super User</Link></Button></CardAction>
          <CardAction><Button >Normal User</Button></CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
