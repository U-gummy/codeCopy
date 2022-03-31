export default function Title({ name }) {
  return (
    <>
      <h2>{name}</h2>
      <style jsx>{`
        h2 {
          font-size: 40px;
          color: #000;
          letter-spacing: 5px;
        }
      `}</style>
    </>
  );
}
