import { Link } from "react-router-dom";

const themeStyles = {
  sky: "bg-sky-100 text-sky-900",
  amber: "bg-amber-100 text-amber-900",
  rose: "bg-rose-100 text-rose-900",
  lime: "bg-lime-100 text-lime-900",
};

export default function NewsCard({ item }) {
  const themeClass = themeStyles[item.theme] || themeStyles.sky;

  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 shadow-lg">
      <Link to={`/noticias/${item.id}`} className="block h-full">
        <img
          src={item.cardImage}
          alt={item.title}
          className="h-48 w-full object-cover"
        />
        <div className={`px-6 py-6 ${themeClass}`}>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700/80">
            {item.summary}
          </p>
          <div className="mt-5 text-right text-xs font-semibold uppercase tracking-wide">
            {item.date}
          </div>
        </div>
      </Link>
    </article>
  );
}
