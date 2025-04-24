export default function NavItem({ label, active }) {
    return (
      <div className={`px-4 py-2 text-lg font-semibold cursor-pointer hover:bg-amber-200 ${active ? 'bg-amber-300' : ''}`}>
        {label}
      </div>
    );
  }
  