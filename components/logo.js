export default function Logo() {
  return (
    <>
      <div className="outer">
        <div className="inner">La</div>
      </div>
      <style jsx>{`
      .outer {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 1px solid white;
        padding: 2px;
        align-self: center;
        margin-right: 15px;
      }
      .inner {
        line-height: 54px;
        height: 54px;
        width: 54px;
        background-color: white;
        color: #9d65f1;
        font-size: 40px;
        border-radius: 50%;
        display:flex;
        justify-content: center;
      }
      `}</style>
    </>
  );
}