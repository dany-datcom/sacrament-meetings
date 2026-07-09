export default function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sacrament Meetings</h1>
            <p className="text-blue-100 mt-1">Central Ward</p>
          </div>
          <div className="mt-4 sm:mt-0 text-right">
            <p className="text-sm text-blue-100">Today</p>
            <p className="text-lg font-semibold">{formattedDate}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
