import React, { useState } from 'react';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { MainContentProps } from '../../../types/content/sanity.content';
import { StandardFC } from '../../../types/libs/react.lib';
import Logo from '../../atoms/logo/Logo.Atom';
import { PortableText } from '@portabletext/react';
import Form from '../form/Form.Organism';

interface Props {
  content: MainContentProps;
}

const Content: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const { subContentTitle, subContentTitleNote, logo } = contentConfig;
  const contentTitle = contentConfig.titleText;
  const footerlogoText = contentConfig.logoText;
  const formControl = contentConfig.form.formControls[0];
  function transitToProgram() {
    navigate('/program-eligibility');
  }

  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col text-center my-8">
        <span className="text-3xl font-bold font-inter-700 text-mgh-dark-grey sm:text-4xl ">
          {contentTitle}
        </span>
        <div className="mt-4 font-inter-400 text-mgh-medium-grey mx-4 sm:mx-0">
          <PortableText value={contentConfig.contentNotes[0].content} />
        </div>
      </div>
      <div
        id="subContent"
        className="flex-col fill-white border-l border-r border-b rounded-b-xl p-6 shadow-xl my-16 "
      >
        <div id="subContentTitle">
          <span className="block font-inter-700 text-l text-mgh-dark-grey sm:text-2xl sm:font-bold">
            {subContentTitle}
          </span>

          <span className=" font-inter-400 text-mgh-medium-grey sm:text-l ">
            {subContentTitleNote}
          </span>
        </div>
        <div className="my-6">
          <Form form={contentConfig.form} onSubmit={transitToProgram} />
        </div>
      </div>
      <div id="contentFooter" className="mt-4">
        <div className="flex-col justify-center">
          <div id="contentFooterNote"></div>

          <div className="relative mx-auto">
            <div className=" w-full border-t border-gray-300" />
          </div>

          <div className="flex justify-center mt-12 mb-4">
            <span className="text-xs text-mgh-dark-grey font-medium">
              {footerlogoText}
            </span>
          </div>
          <div id="contentFooterLogo" className="flex justify-center">
            <div className={clsx('h-16', 'sm:h-24')}>
              <Logo gatsbyImageData={logo?.asset?.gatsbyImageData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
