"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';
import { Label } from './ui/label';
import { Input } from './ui/input';
import OrderSummary from './order-summary';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <ShoppingCart />
          </NavigationMenuLink>
        </DialogTrigger>
        <DialogContent className="animate-from-left left-auto right-0 h-screen translate-x-0 data-[state=closed]:!zoom-out-100 data-[state=open]:!zoom-in-100 data-[state=closed]:slide-out-to-right-full data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-right-full data-[state=open]:slide-in-from-top-1/2 sm:max-w-[425px]">
          <DialogHeader className="gap-4">
            <DialogTitle>Order Summary</DialogTitle>
            <DialogDescription>
              <OrderSummary className="px-4" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-4 text-center">
          <DrawerTitle className="text-center">Order Summary</DrawerTitle>
          <DrawerDescription>
            <OrderSummary className="px-4" />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
