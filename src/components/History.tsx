
export const History = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10" />
      <img
        src="https://mikisangyo.co.jp/en/wp-content/themes/mikitheme/assets/images/history-back.jpg"
        alt="Company History"
        className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <a
            href="https://mikisangyo.co.jp/en/brand/history/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:text-accent transition-colors">
              350 years of history of Miki Sangyo
            </h2>
          </a>
        </div>
      </div>
    </section>
  );
};
