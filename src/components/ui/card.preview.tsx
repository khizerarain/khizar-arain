import type { ComponentPreviewMeta } from "@/lib/component-preview";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export const meta = {
  description: "Composable card with header, content, and footer slots.",
} satisfies ComponentPreviewMeta;

export default function CardPreview() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Project brief</CardTitle>
        <CardDescription>Scope, timeline, and deliverables.</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        A short summary of the work goes here.
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline">
          View details
        </Button>
      </CardFooter>
    </Card>
  );
}
