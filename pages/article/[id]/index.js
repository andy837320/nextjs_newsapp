// import React from "react";
// // import { useRouter } from "next/router";
// import Link from "next/link";

// const article = ({ article }) => {
//   //     commenting this so that we can use server site props
//   // //   const router = useRouter();
//   //   const { id } = router.query;
//   return (
//     <>
//       <h1>{article.title}</h1>
//       <p>{article.body}</p>
//       <br />
//       <Link href="/"> Go Back</Link>
//     </>
//   );
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default article;

import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
