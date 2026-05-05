import { useParams } from "react-router-dom";
import "../style/blog.css";

const posts = [
  {
    id: 1,
    title: "Mastering React Components",
    subtitle: "Unlock the power of reusable UI  this blog by Tamil Thendral K P",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    externalLink : 
    "https://react.dev/reference/react/Component",
    content: `
React components are the building blocks of modern web applications.

Components allow you to split the UI into independent, reusable pieces. Each component can manage its own state and logic.

There are two main types: Functional and Class Components

Today, functional components with hooks are the standard.

When you master components, you unlock the true power of React.
Then, by using modern tools like tailwind CSS, you can create stunning UIs with ease,
By using the power of AnimeJS you can create more interactive animations, and also by using 
the power of React Router you can create a multi-page experience without reloading the page.
then, by using formik for efficient form handling, you can create complex forms with ease, the possibilities are endless when you master Reacct components



    `,
  },
  {
    id: 2,
    title: "Understanding React Router",
    subtitle: "Navigate your React app like a pro this blog by Tamil Thendral K P",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    externalLink : "https://react.dev/learn/react-router",
    content: `
React Router enables navigation without reloading the page.

It allows you to define routes like:
• /
• /about
• /blog/:id

Using useParams, you can dynamically load content.

Routing makes your React app behave like a real multi-page website.

    `,
  },
  {
    id: 3,
    title : "Connecting React with APIs and backend services",
    subtitle : "Learn how to fetch data and integrate backend services in your React applications this blog by Tamil Thendral K P",
    image : "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    externalLink : "https://react.dev/learn/communicating-with-server",
    content : `
Connecting React with APIs is essential for dynamic applications.
Using fetch or axios, you can retrieve data from RESTful APIs.
With tools like GraphQL, you can query only the data you need.
Integrating backend services allows you to create full-stack applications.
By mastering API integration, you can build powerful and dynamic React apps.
` 
  },
];

function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="section">
        <h2>Blog Not Found</h2>
      </section>
    );
  }

  return (
    <section className="section blog-detail">
      <h1>{post.title}</h1>
      <p className="detail-subtitle">{post.subtitle}</p>
      <img src={post.image} alt={post.title} className="detail-img" />
      <p className="detail-content">{post.content}</p>
      <a href={post.externalLink} target="_blank" rel="noopener noreferrer">
        Read more by this link ({post.externalLink})
      </a>
    </section>
  );
}

export default BlogDetail;