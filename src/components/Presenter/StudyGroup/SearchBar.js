import "./search.css";

export default function SearchBar({ onChange }) {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="스터디룸을 검색해 보세요"
        className="search_bar"
        name="searchText"
        onChange={onChange}
      />
    </form>
  );
}
