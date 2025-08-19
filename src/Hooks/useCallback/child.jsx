import React from "react";

const Child = ({ learning }) => {
    console.log("This is Child Component");
    return
    <div>Child</div>;

};

export default React.memo(Child);