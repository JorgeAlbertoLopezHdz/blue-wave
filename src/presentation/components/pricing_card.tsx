import { Card } from "react-bootstrap";

export const PricingCard = ({ customClasses, title, subtitle}: { customClasses: string, title: string, subtitle: string }) => {
  return (
    <Card className={`card ${customClasses}`}>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
};
