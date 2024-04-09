import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import SideEditor from "./SideEditor";

const MobileEditor = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="bg-red-500">Open</DrawerTrigger>
        <DrawerContent>
          <SideEditor/>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileEditor;
