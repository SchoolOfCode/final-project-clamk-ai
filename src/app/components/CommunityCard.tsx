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
    <div className="bg-custom-white border-3 border-emerald-300/30 text-custom-green rounded-2xl shadow p-4 m-2 hover:scale-103 hover:shadow-xl hover:rotate-1 transition-scale-shadow duration-100 ease-out h-64 w-90 flex flex-col justify-center items-center">
      <h3 className="font-bold text-gray-800 text-center p-3">{name}</h3>
      <p className="text-gray-800 text-center p-3 flex-grow">{purpose}</p>
      <a
        className="font-bold text-emerald-800 text-center"
        href={`${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See website
      </a>
    </div>
  );
}
