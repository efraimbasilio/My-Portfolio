import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, tags } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="project">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
     <GridContainer>
       {projects.map((p,i) =>(
         <BlogCard key={i}>
          <Img src={p.image}/>
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t,i)=>(
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          {/* <UtilityList>
            <ExternalLinks href={p.visit}>Code</ExternalLinks>
            <ExternalLinks href={p.source}>Source</ExternalLinks>
          </UtilityList> */}
         </BlogCard>
       ))}
     </GridContainer>
  </Section>
);

export default Projects;