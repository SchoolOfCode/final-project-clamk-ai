interface CommunityCardProps {
  name: string;
  purpose: string;
  url: string;
}

export default function CommunityCard({
  name,
  purpose,
  url,
}: CommunityCardProps) {
  return (
    <div className="bg-white text-custom-green rounded-md shadow p-4 m-2 hover:scale-103 hover:shadow-xl hover:rotate-1 transition-scale-shadow duration-100 ease-out">
      <h3 className="font-medium text-center p-3">{name}</h3>
      <p className="p-3">{purpose}</p>
      <a className="text-gray-700" href={`${url}`}>
        See website
      </a>
    </div>
  );
}
