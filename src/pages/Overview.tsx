import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Overview() {
  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Spending</CardTitle>
          <CardDescription>Track your spending against your monthly budget</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">You've spent $350 of your $500 budget.</p>
          <Progress value={70} />
        </CardContent>
      </Card>
      {/* Additional overview sections can be added here */}
    </div>
  );
}
