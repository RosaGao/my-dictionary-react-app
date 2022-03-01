function Search() {
    return (
        <section className="section">
            <div className="field has-addons">
                <div className="control is-expanded">
                <input
                    className="input is-large is-fullwidth"
                    id="define-input"
                    placeholder="Enter a word"
                    type="text"
                    value="Hello"
                />
                </div>
                <div className="control">
                    <button className="button is-info is-large" id="define-btn"> Define </button>
                </div>
            </div>
        </section>
    );
}

export default Search;