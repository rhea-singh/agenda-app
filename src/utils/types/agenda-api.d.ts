type HeaderAttrsType = {
  heading: string;
  intro: string;
};

type ImageType = {
  alt: string;
  srcset: string;
  id: number;
  url: string;
};

type CompanyLogoType = {
  alt: string;
  srcset: string;
  mediaId: number;
  mediaUrl: string;
};

type SpeakersType = {
  name: string;
  position: string;
  id: number;
  image: ImageType;
  company_logo: CompanyLogoType[];
  title: string;
};

type BlockAttrsType = {
  category: string;
  day: string;
  duration: number;
  startTime: string;
  title: string;
  speakerList: SpeakersType[];
};

type InnerBlocksType = {
  attrs: BlockAttrsType;
  innerBlocks: {
    innerHTML: string;
  }[];
};

export type AgendaListType = {
  attrs: HeaderAttrsType;
  innerBlocks: InnerBlocksType[];
};
