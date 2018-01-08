import React from "react";
import styled from "styled-components";

const LeadInSection = styled.section`
  padding: 2em;
`;

const LeadInContent = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1.5em;
`;

const LeadIn = () => (
  <LeadInSection>
    <LeadInContent>
      Design-minded <br />Development <br />For Web & Mobile
    </LeadInContent>
  </LeadInSection>
);

export default LeadIn;
