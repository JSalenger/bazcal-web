function Page({ data }) {
    // Render data...
    return (
        <ul>
          {data.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
    )
}
  
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default Page;