import { useRouter } from 'next/router';

export default function Home({ data }) {
  const router = useRouter();

  return (
    <div>
      {data.map((participant) => (
        <div key={participant.id}>
          <h2>{participant.name}</h2>
          <h2>{participant.Country}</h2>
          <h2>{participant.School}</h2>
          <h2>{participant.Participation}</h2>
          <h2>{participant.Award}</h2>
          {/* Add more fields here */}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://contest-sakha.pages.dev/api/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
