import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * A simple sidebar built with Radix Accordion. Each accordion section
 * represents a category of navigation links. This sidebar can be easily
 * expanded with additional items or nested accordions. To keep things
 * generic and scalable, the links are just anchors for now. In a more
 * complex application you might hook these up to a router or update
 * application state when clicked.
 */
export default function Sidebar() {
  return (
    <aside className="bg-background border-r w-60 p-4">
      <Accordion type="single" collapsible defaultValue="general">
        <AccordionItem value="general">
          <AccordionTrigger className="text-sm">General</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              <li>
                <a href="#overview" className="text-sm hover:underline text-foreground">
                  Overview
                </a>
              </li>
              <li>
                <a href="#transactions" className="text-sm hover:underline text-foreground">
                  Transactions
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="reports">
          <AccordionTrigger className="text-sm">Reports</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              <li>
                <a href="#monthly" className="text-sm hover:underline text-foreground">
                  Monthly
                </a>
              </li>
              <li>
                <a href="#yearly" className="text-sm hover:underline text-foreground">
                  Yearly
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
