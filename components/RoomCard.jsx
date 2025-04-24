export default function RoomCard({ title, description, imageSrc }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-amber-900">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  