import { useState, useEffect } from "react";
import axios from "axios";
import { AgendaListType } from "../types/agenda-api";

interface fetchAPIProps {
  url: string;
  type: string;
  variables?: Record<string, any>;
}

const defaultValue = {
  attrs: {
    heading: "",
    intro: "",
  },
  innerBlocks: [
    {
      attrs: {
        category: "",
        day: "",
        duration: 0,
        startTime: "",
        title: "",
        speakerList: [
          {
            name: "",
            position: "",
            id: 0,
            image: {
              alt: "",
              srcset: "",
              id: 0,
              url: "",
            },
            company_logo: [
              {
                alt: "",
                srcset: "",
                mediaId: 0,
                mediaUrl: "",
              },
            ],
            title: "",
          },
        ],
      },
    },
  ],
};

const useFetch = ({ url, variables }: fetchAPIProps) => {
  const [data, setData] = useState<AgendaListType>(defaultValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");
    axios
      .post(url, variables)
      .then((res: any) => {
        setLoading(false);
        res.data?.blocks && setData(res.data.blocks[0]);
      })
      .catch((err: any) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;
