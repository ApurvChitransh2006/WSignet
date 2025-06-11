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
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Signet
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Go to the Home Page
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="h-screen flex justify-center items-center">
        <Card className="md:min-w-md sm:min-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Signet</CardTitle>
            <CardDescription>
              Welcome to the Remote Version of the Signet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Procede with the options:</p>
          </CardContent>
          <CardFooter className="flex gap-3">
            <CardAction>
              <Button>
                <Link to={"/superuser"}>Super User</Link>
              </Button>
            </CardAction>
            <CardAction>
              <Button>Normal User</Button>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
