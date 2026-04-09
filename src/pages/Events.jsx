import "./Events.css";
import { NavLink, useSearchParams } from "react-router-dom";
import { campusEvents } from "../data/events";

export function Events() {
  const [params, setParams] = useSearchParams();
  const q = (params.get(`q`) || ``).toLowerCase();
  const tag = params.get(`tag`) || ``;

  const filteredList = campusEvents.filter(
    (e) =>
      (!q || e.name.toLowerCase().includes(q)) && (!tag || e.tags.includes(tag))
  );
  return (
    <section>
      <h2>Welcome to the Events List Page</h2>
      <input
        type="text"
        value={q}
        onChange={(e) => setParams({ q: e.target.value, tag })}
        placeholder="type a search query"
      />
      <select
        value={tag}
        onChange={(e) => setParams({ tag: e.target.value, q })}
      >
        <option value="">all</option>
        <option value="innovation">innovation</option>
        <option value="showcase">showcase</option>
        <option value="networking">networking</option>
      </select>
      <ul>
        {filteredList.map((e) => (
          <li key={e.id}>
            <NavLink to="/events/details">{e.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
