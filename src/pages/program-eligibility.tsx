import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import DefaultLayout from '../components/templates/layouts/Default.Layout.Template';
import ProgramEligibility from '../components/templates/ProgramEligibility.Template';
import { MainContentProps } from '../types/content/sanity.content';

const ProgramEligibiltyPage = () => {
  const { allSanityMainContent } = useStaticQuery<{
    allSanityMainContent: MainContentProps;
  }>(graphql`
    query {
      allSanityMainContent(filter: { name: { eq: "Program Page" } }) {
        edges {
          node {
            titleText
            name
            contentNotes {
              title
              content {
                _type
                style
                children {
                  _key
                  _type
                  text
                  marks
                }
              }
            }
            subContentTitle
            subContentTitleNote
            form {
              name
              formControls {
                name
                label
                type
                placeholder
                options {
                  label
                  value
                }
              }
              button {
                text
                type
                href
              }
            }
            logoText
            logo {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  return (
    <DefaultLayout>
      <section className="container max-w-2xl mx-auto">
        <ProgramEligibility content={allSanityMainContent}></ProgramEligibility>
      </section>
    </DefaultLayout>
  );
};

export default ProgramEligibiltyPage;

export const Head: HeadFC = () => <title>Program Page</title>;
