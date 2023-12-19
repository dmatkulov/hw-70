import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search for TV Shows..."
      />
        <button
          className="btn btn-primary"
          type="button"
        >
          Button
        </button>
    </div>
  );
};

export default Search;