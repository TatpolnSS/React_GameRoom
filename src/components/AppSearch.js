import "./AppSearch.css";

function AppSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div class="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Search game types..."
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
}
export default AppSearch;
