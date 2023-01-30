import { Counter } from "../../../components/counter";
import { Likes } from "../../../components/likes";
import { graphql } from "../../../gql";
import { graphqlClient } from "../../../lib/graphql-client";

export const revalidate = 3600;

const GetPostBySlugDocument = graphql(/* GraphQL */ `
  query GetPostBySlug($slug: String!) {
    post(by: { slug: $slug }) {
      id
      title
      slug
      likes
    }
  }
`);

const Page = async ({ params }: { params: { slug: string } }) => {
  const { post } = await graphqlClient.request(GetPostBySlugDocument, {
    slug: params.slug,
  });

  if (!post) {
    return <h1>404</h1>;
  }

  return (
    <>
      <Counter />
      <h1>{post.title}</h1>
      <Likes postId={post.id} likes={post.likes ?? 0} />
    </>
  );
};

export default Page;
