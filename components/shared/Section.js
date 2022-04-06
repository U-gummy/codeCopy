export default function Section({ title, children }) {
  return (
    <>
      <section>
        <h3>{title}</h3>
        {children}
      </section>
      <style jsx>{`
        section {
          margin-top: 40px;
          padding: 15px 10px;
          background: #dcd6f7;
          border-radius: 15px;
        }
        section + section {
          margin-top: 20px;
        }
        h3 {
          padding-bottom: 20px;
          font-size: 22px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
