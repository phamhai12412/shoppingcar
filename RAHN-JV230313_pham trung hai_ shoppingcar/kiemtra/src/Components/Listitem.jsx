import React from "react";
import Item from "./Item";

function Listitem({
  thembot,
  keyadd,
  dataitem,
  settrangthaimua,
  trangthaimua,
  themsl,
  check,
}) {
  return (
    <div className="list">
      {dataitem.map((e, i) => (
        <Item
          keyadd={keyadd}
          key={i}
          e={e}
          settrangthaimua={settrangthaimua}
          trangthaimua={trangthaimua}
          i={i}
          thembot={thembot}
          themsl={themsl}
          check={check}
        />
      ))}
    </div>
  );
}

export default Listitem;
