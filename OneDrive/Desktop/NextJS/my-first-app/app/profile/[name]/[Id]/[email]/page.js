
export default async function Profile({ params }) {
  const { Id, name, email } = await params;

  return (

    <div>
      <h1>This is my profile page</h1>
      <h2> my id {Id}</h2>
      <h2> Name:- {name}</h2>
      <h2> Mail:- {email}</h2>
      
    </div>

  )
}