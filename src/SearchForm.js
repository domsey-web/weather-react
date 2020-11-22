import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <form className="mb-3">
            <div className="row">
                <div className="col-9">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search City"
                        autoComplete="off"
                        autoFocus="on"
                    />
                </div>
                <div className="col-3">
                    <button type="submit" value="search" className="btn w-100">
                        <i className="fas fa-search-location"> </i>
                    </button>
                </div>
            </div>
        </form>
    )
}