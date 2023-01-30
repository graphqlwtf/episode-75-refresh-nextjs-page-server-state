"use client";

import { useRouter } from "next/navigation";

import { graphql } from "../gql";
import { graphqlClient } from "../lib/graphql-client";

const IncrementPostLikesByIdDocument = graphql(/* GraphQL */ `
  mutation IncrementPostLikesById($id: ID!) {
    postUpdate(by: { id: $id }, input: { likes: { increment: 1 } }) {
      post {
        id
        likes
      }
    }
  }
`);

export const Likes = ({ postId, likes }: { postId: string; likes: number }) => {
  const router = useRouter();

  const handleClick = async () => {
    await graphqlClient.request(IncrementPostLikesByIdDocument, {
      id: postId,
    });

    // handle any errors from above...

    // Update data somehow...
    router.refresh();
  };

  return (
    <button onClick={handleClick}>
      {likes} like{likes === 1 ? "" : "s"}
    </button>
  );
};
