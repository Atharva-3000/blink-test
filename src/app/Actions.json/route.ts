import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";
import {Transaction} from "@solana/web3.js"
export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/",
        apiPath: "/api/donate/",
      },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;