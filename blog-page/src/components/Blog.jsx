import { Link } from "react-router-dom";
import "../style/blog.css";

const posts = [
  {
    id: 1,
    title: "Mastering React Components And Making Better UI's",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    summary:
      "Learn how React components work and how to build reusable UI blocks efficiently and various techniques and tools to ake better UI's.",
  },
  {
    id: 2,
    title: "Understanding React Router",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    summary:
      "A complete guide to routing in React applications using React Router.",
  },
  {
    id: 3,
    title: "Connecting React with APIs and backend services",
    image: "https://terminallearning.com/nodejs/images/expressRoutes1.png",
    summary:
      "Learn how to fetch data and integrate backend services in your React applications.",
  },
 
];

function Blog() {
  return (
    <section className="section">
      <h2>Latest Blogs</h2>

      {posts.map((post) => (
        <div key={post.id} className="card">
          <img src={post.image} alt={post.title} className="card-img" />
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`} className="read-btn">
            Read Full Article →
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Blog;