import "./home.scss";
export default function Home() {
  return (
    <main id="p_home">
      <div className="decor-tl">
        <div className="edgething"></div>
        <div className="blocks-a">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <div className="stats-block">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <div className="logs">
          <p>{">>"} Executing Startup.exe</p>
          <p>{">>"} Hacking into the mainframe...</p>
          <p>{">>"} Initializing Nik OS Prod Ver 1.44.3</p>
          <p> {">>"} ▉ ▉ ▉ ▉ ▉ ▉ ▉ ▉▉ ▉ ▉ ▉▉</p>
          <p> {">>"} ▉ ▉ ▉ ▉ ▉▉ ▉ ▉▉ ▉ ▉ ▉▉</p>
        </div>
      </div>
      <div className="decor-tr">
        <img src="/d/decor-tr.png" alt="" className="tr" />
      </div>
      <img src="/g/logo.png" alt="" className="main-logo" />
    </main>
  );
}
