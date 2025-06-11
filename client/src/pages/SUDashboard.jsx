import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const SUDashboard = () => {
  const array = [
    { name: "Apurv", code: "AC389" },
    { name: "Arnav", code: "AC332" },
    { name: "Srijal", code: "SS383" },
    { name: "Anant", code: "DS326" },
    { name: "Apurv", code: "AC389" },
    { name: "Arnav", code: "AC332" },
    { name: "Srijal", code: "SS383" },
    { name: "Anant", code: "DS326" },
    { name: "Apurv", code: "AC389" },
    { name: "Arnav", code: "AC332" },
    { name: "Srijal", code: "SS383" },
    { name: "Anant", code: "DS326" },
    { name: "Apurv", code: "AC389" },
    { name: "Arnav", code: "AC332" },
    { name: "Srijal", code: "SS383" },
    { name: "Anant", code: "DS326" },
    { name: "Apurv", code: "AC389" },
    { name: "Arnav", code: "AC332" },
    { name: "Srijal", code: "SS383" },
    { name: "Anant", code: "DS326" },
  ];
  return (
    <>
      <Tabs
        defaultValue="accountCreate"
        className="md:min-w-md min-w-sm max-h-3/4 overflow-y-scroll"
      >
        <TabsList>
          <TabsTrigger value="accountCreate">Create Account</TabsTrigger>
          <TabsTrigger value="accountlist">Account List</TabsTrigger>
        </TabsList>
        <TabsContent value="accountCreate">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Create a New Account</CardTitle>
              <CardDescription>
                Enter your credentials below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="userName">User Name</Label>
                    <Input
                      id="userName"
                      type="userName"
                      placeholder="Apurv Chitransh"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="userCode">User Code</Label>
                    <Input
                      id="userCode"
                      type="userCode"
                      placeholder="AC334"
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
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="accountlist">
          <Table className="">
            <TableCaption>List of Firm Data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Firm Name</TableHead>
                <TableHead>Firm Code</TableHead>
                <TableHead className="">Edit</TableHead>
                <TableHead className="">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {array.map((user) => (
                <TableRow>
                  <TableCell className="">{user.name}</TableCell>
                  <TableCell>{user.code}</TableCell>
                  <TableCell>
                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <Button>
                            <MdEdit />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              you&apos;re done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Firm Name</Label>
                              <Input
                                id="name-1"
                                name="firmName"
                                defaultValue="Apurv Chitransh"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="code-1">Firm Code</Label>
                              <Input
                                id="code-1"
                                name="firmCode"
                                defaultValue="AH384"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                          <MdDelete />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SUDashboard;
