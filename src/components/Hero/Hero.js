import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I am Efraim 
      </SectionTitle>
      <SectionText>
      Diligent software engineer with of experience in developing web application, with a hands-on, high-energy approach, well-developed skills in Agile methodology, and an unapologetically user-focused philosophy. Have developed several desktop and web apps.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;