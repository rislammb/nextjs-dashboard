export default function CustomerPage({ params }: { params?: { id?: string } }) {
  return (
    <div>
      <h3>Details customer page</h3>
      <p>Id: {params?.id}</p>
    </div>
  );
}
