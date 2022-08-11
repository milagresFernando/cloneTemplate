// React Elements/Hooks
import { useState, Fragment } from "react";

// Components

import TimelineVerticalInterative from "../../../../../components/timeline/timelineVerticalInterative";
import Title from "../../../../../components/texts/title";

//Imagens

function BlocoLinhaVerticalClique() {
  const [buttons, setButtons] = useState([
    { buttonName: "1", isActive: true, check: true },
    { buttonName: "2", isActive: false, check: false },
    { buttonName: "3", isActive: false, check: false },
  ]);

  const timelineVerticalItems = [
    {
      title: {
        titleContent: "Título 1",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {},

      contents: {
        contentClassName: "",

        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Título 2",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {},

      contents: {
        contentClassName: "",

        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Título 3",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {},

      contents: {
        contentClassName: "",

        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 3 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Vertical interativa</Fragment>}
      />
      <TimelineVerticalInterative
        className=""
        buttons={buttons}
        setButtons={setButtons}
        timelineVerticalItems={timelineVerticalItems}
        withChecks={true}
      />
    </Fragment>
  );
}

export default BlocoLinhaVerticalClique;