import { CodegenConfig } from "@graphql-codegen/cli";

const url = process.env.NEXT_PUBLIC_GRAFBASE_API_URL as string;
const xApiKey = process.env.NEXT_PUBLIC_GRAFBASE_API_KEY as string;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          "x-api-key": xApiKey,
        },
      },
    },
  ],
  documents: ["app/**/*.tsx", "app/**/*.tsx", "components/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
