"use client";
import * as React from "react";
import {
  Dialog as UIDialog,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ReusableDialogProps {
  triggerText: string;
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export function ReusableDialog({
  triggerText,
  triggerVariant = "outline",
  title,
  description,
  children,
  maxWidth = "sm:max-w-[425px]",
}: ReusableDialogProps) {
  const [open, setOpen] = React.useState(false);
  
  return (
    <UIDialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className={maxWidth}>
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </UIDialog>
  );
}