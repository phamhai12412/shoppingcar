import React from "react";

function Item({
  thembot,
  themsl,
  i,
  e,
  settrangthaimua,
  trangthaimua,
  keyadd,
  check,
}) {
  const setmua = () => {
    settrangthaimua(!trangthaimua, i);
    check();
  };
  const dong = () => {
    settrangthaimua(!trangthaimua, i);
  };
  const bot = () => {
    thembot(themsl - 1);
  };
  const them = () => {
    thembot(themsl + 1);
  };
  return (
    <div>
      <div className="card">
        <img src={e.imageUrl} alt="" />
        <div className="ten">
          <p className="tenten"> {e.name}</p>
          <p>
            <span className="tim">♥️</span>
            {trangthaimua == true && keyadd == i ? (
              <>
                <span onClick={bot}>◀️</span> {themsl}
                <span></span> <span onClick={them}>▶️</span>
                <p className="dong" onClick={dong}>
                  đóng
                </p>
              </>
            ) : (
              <button className="add" onClick={() => setmua(i)}>
                add
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
