import React, { useState } from 'react';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { MainContentProps } from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import Logo from '../atoms/logo/Logo.Atom';
import { PortableText } from '@portabletext/react';
import Form from '../organisms/form/Form.Organism';

interface Props {
  content: MainContentProps;
}

const ProgramEligibility: StandardFC<Props> = (props) => {
  const contentConfig = props.content.edges[0].node;
  const {
    titleText,
    contentNotes,
    subContentTitle,
    subContentTitleNote,
    form,
  } = contentConfig;
  const formControl = form.formControls[0];
  const checkEligibility = (formValue: any) => {};

  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col  my-8 mx-6 sm:mx-0 ">
        <span className="text-3xl font-bold font-inter-700 text-mgh-dark-grey sm:text-4xl  ">
          {titleText}
        </span>
        <div className="mt-4 font-inter-400 text-base text-mgh-medium-grey ">
          <PortableText value={contentNotes[0].content} />
        </div>
      </div>
      <div
        id="subContent"
        className="flex-col fill-white border-l border-r border-b rounded-b-xl p-6 shadow-xl my-16 "
      >
        <div id="subContentTitle">
          <span className="block font-inter-700 text-l text-mgh-dark-grey sm:text-2xl font-bold ">
            {subContentTitle}
          </span>

          <span className=" font-inter-400 text-mgh-medium-grey sm:text-l ">
            {subContentTitleNote}
          </span>
        </div>
        <div className="my-6">
          <Form form={form} onSubmit={checkEligibility} />
        </div>
      </div>
    </div>
  );
};
export default ProgramEligibility;
