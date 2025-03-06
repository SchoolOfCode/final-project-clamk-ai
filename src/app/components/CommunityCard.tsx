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
    <div className="bg-white text-custom-green rounded-md shadow p-4 m-2 hover:scale-103 hover:shadow-xl hover:rotate-1 transition-scale-shadow duration-100 ease-out h-80 w-64 flex flex-col justify-center items-center">
      <h3 className="font-bold text-black text-center p-3">{name}</h3>
      <p className="text-black text-center p-3 flex-grow">{purpose}</p>
      <a
        className="font-bold text-blue-500 text-center"
        href={`${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See website
      </a>
    </div>
  );
}
