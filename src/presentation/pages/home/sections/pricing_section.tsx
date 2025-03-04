import { Col, Container, Row } from "react-bootstrap";
import { PricingCard } from "../../../components/pricing_card";

export const PricingSection = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <PricingCard customClasses="primary-card" title="Post Construction" subtitle="Cleaning" />
        </Col>
        <Col md={4}>
          <PricingCard customClasses="secondary-card" title="Office" subtitle="Cleaning"></PricingCard>
        </Col>
        <Col md={4}>
          <PricingCard customClasses="primary-card" title="Comercial" subtitle="Cleaning"></PricingCard>
        </Col>
      </Row>
    </Container>
  );
};
