import React, { useState } from "react";
import Data from "./project pagination/data.json";

const App = () => {
    const recordsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = Math.ceil(Data.length / recordsPerPage);

    function getRecords() {
        const firstIndex = (currentPage - 1) * recordsPerPage;
        const lastIndex = firstIndex + recordsPerPage;
        return Data.slice(firstIndex, lastIndex);
    }

    function handleNext() {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div>
            {getRecords().map((value) => (
                <div key={value.id}>
                    <span>{value.id}</span> - <span>{value.name}</span>
                </div>
            ))}

            <button disabled={currentPage === 1} onClick={handlePrev}>
                Prev
            </button>
            <span>
                {currentPage} / {totalPage}
            </span>
            <button disabled={currentPage === totalPage} onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default App;
