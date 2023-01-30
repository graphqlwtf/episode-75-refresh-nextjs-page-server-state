/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetAllPosts($first: Int!) {\n    postCollection(first: $first) {\n      edges {\n        node {\n          id\n          title\n          slug\n          likes\n        }\n      }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  query GetPostBySlug($slug: String!) {\n    post(by: { slug: $slug }) {\n      id\n      title\n      slug\n      likes\n    }\n  }\n": types.GetPostBySlugDocument,
    "\n  mutation IncrementPostLikesById($id: ID!) {\n    postUpdate(by: { id: $id }, input: { likes: { increment: 1 } }) {\n      post {\n        id\n        likes\n      }\n    }\n  }\n": types.IncrementPostLikesByIdDocument,
};

export function graphql(source: "\n  query GetAllPosts($first: Int!) {\n    postCollection(first: $first) {\n      edges {\n        node {\n          id\n          title\n          slug\n          likes\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPosts($first: Int!) {\n    postCollection(first: $first) {\n      edges {\n        node {\n          id\n          title\n          slug\n          likes\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetPostBySlug($slug: String!) {\n    post(by: { slug: $slug }) {\n      id\n      title\n      slug\n      likes\n    }\n  }\n"): (typeof documents)["\n  query GetPostBySlug($slug: String!) {\n    post(by: { slug: $slug }) {\n      id\n      title\n      slug\n      likes\n    }\n  }\n"];
export function graphql(source: "\n  mutation IncrementPostLikesById($id: ID!) {\n    postUpdate(by: { id: $id }, input: { likes: { increment: 1 } }) {\n      post {\n        id\n        likes\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IncrementPostLikesById($id: ID!) {\n    postUpdate(by: { id: $id }, input: { likes: { increment: 1 } }) {\n      post {\n        id\n        likes\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;