import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(

        )
        .then((res) => res.json())
        .then((d) => setData(d.hits));
    }, [search]);
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {data.map((item, index) =>{
        return (
            <section key={index}>
                <img src={item.webformatURL}
                height={item.webformatHeight}
                width={item.webformatWiidth}
                />
            </section>
        );
      })}
    </div>
  );
};

export default App;
