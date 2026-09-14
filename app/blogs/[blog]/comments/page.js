export default async function Blog({ params }) {
  const { blog } = await params;

  console.log("BLOG PARAM:", blog);

  return (
    <div>
      <h1>Comments 1</h1>
      <h2>{blog}</h2>
    </div>
  );
} 

