import React, { useState } from 'react';
import { MainContentProps } from '../../types/content/sanity.content';
import { StandardFC } from '../../types/libs/react.lib';
import { PortableText } from '@portabletext/react';
import Form from '../organisms/form/Form.Organism';
import Eligibility from '../organisms/content/EligibilityStatus.Organism';
import { evaluate } from '../../services/rules-engine.service';
interface Props {
  content: MainContentProps;
}

const ProgramEligibility: StandardFC<Props> = ({ content, ...props }) => {
  const {
    titleText,
    contentNotes,
    subContentTitle,
    subContentTitleNote,
    form,
    ruleGroups,
  } = content;

  const [showCalculationStatus, setshowCalculationStatus] = useState(false);

  const [eligibility, setEligibility] = useState('');

  const checkEligibility = async (formValue: any) => {
    setshowCalculationStatus(true);
    const rsp = await evaluate(ruleGroups, formValue);
    await waitForSpinner();
    setshowCalculationStatus(false);
    setEligibility(rsp);
  };

  const waitForSpinner = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
  };

  const components = {
    types: {
      break: (props: any) => {
        const { style } = props.value;
        if (style === 'lineBreak') {
          return <br className="lineBreak" />;
        }
        return null;
      },
    },
    marks: {
      internalLink: (props: any) => {
        return (
          <a
            className="underline text-[#206B9E] hover:cursor-pointer"
            href={props.value.href}
          >
            {props.children}
          </a>
        );
      },
    },
  };

  return (
    <div className="flex-col justify-center">
      <div id="contentHeader" className="flex-col  my-8 mx-6  ">
        <span className="text-3xl font-bold font-inter-700 text-mgh-dark-grey sm:text-4xl  ">
          {titleText}
        </span>
        <div className="mt-4 font-inter-400 text-base text-mgh-medium-grey ">
          <PortableText
            value={contentNotes[0]._rawContent}
            components={components}
          />
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
          {!showCalculationStatus && !eligibility && (
            <Form form={form} onSubmit={checkEligibility} />
          )}
          {showCalculationStatus && (
            <div className="flex-col justify-center">
              <div className="flex justify-center">
                <p className="font-inter-700 text-mgh-primary text-2xl font-bold">
                  Calculating...
                </p>
              </div>
              <div className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto bg-none block"
                  width="134px"
                  height="134px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <g transform="translate(50 50)">
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0;30"
                        keyTimes="0;1"
                        dur="0.29069767441860467s"
                        repeatCount="indefinite"
                      ></animateTransform>
                      <path
                        d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 28.29040915882124 9.982622382244216 L28.29040915882124 9.982622382244216 L35.21861238909675 13.982622382244216 L29.718612389096755 23.50890182387304 L22.790409158821245 19.50890182387304 A30 30 0 0 1 19.508901823873043 22.790409158821237 L19.508901823873043 22.790409158821237 L23.508901823873043 29.718612389096748 L13.98262238224422 35.21861238909675 L9.98262238224422 28.29040915882124 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -9.98262238224421 28.290409158821245 L-9.98262238224421 28.290409158821245 L-13.98262238224421 35.218612389096755 L-23.50890182387304 29.71861238909675 L-19.50890182387304 22.79040915882124 A30 30 0 0 1 -22.790409158821234 19.508901823873053 L-22.790409158821234 19.508901823873053 L-29.71861238909674 23.508901823873057 L-35.21861238909675 13.982622382244223 L-28.29040915882124 9.982622382244221 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -28.290409158821245 -9.982622382244202 L-28.290409158821245 -9.982622382244202 L-35.218612389096755 -13.9826223822442 L-29.718612389096755 -23.50890182387304 L-22.790409158821245 -19.50890182387304 A30 30 0 0 1 -19.508901823873053 -22.79040915882123 L-19.508901823873053 -22.79040915882123 L-23.508901823873057 -29.718612389096737 L-13.982622382244227 -35.21861238909675 L-9.982622382244223 -28.29040915882124 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 9.982622382244188 -28.29040915882125 L9.982622382244188 -28.29040915882125 L13.982622382244182 -35.21861238909676 L23.508901823873018 -29.718612389096762 L19.508901823873025 -22.79040915882125 A30 30 0 0 1 22.79040915882123 -19.508901823873053 L22.79040915882123 -19.508901823873053 L29.718612389096737 -23.508901823873057 L35.21861238909675 -13.982622382244227 L28.29040915882124 -9.982622382244225 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
                        fill="#206b9e"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          )}
          {!showCalculationStatus && eligibility && (
            <Eligibility eligibility={eligibility} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProgramEligibility;
