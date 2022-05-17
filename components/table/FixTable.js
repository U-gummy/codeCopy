export default function FixTable() {
  return (
    <>
      <section className="fixed">
        <div className="wrap">
          <table>
            <thead>
              <tr>
                <th>
                  First Name
                  <div>First Name</div>
                </th>
                <th>
                  Last Name
                  <div>Last Name</div>
                </th>
                <th>
                  City
                  <div>City</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maria</td>
                <td>Smith</td>
                <td>Los Angeles</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Decker</td>
                <td>New Jersey</td>
              </tr>
              <tr>
                <td>Brian</td>
                <td>Anderson</td>
                <td>Sao Paulo</td>
              </tr>
              <tr>
                <td>Harold</td>
                <td>Derek</td>
                <td>Cairo</td>
              </tr>
              <tr>
                <td>Paola</td>
                <td>Howard</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td>Andrea</td>
                <td>James</td>
                <td>Sydney</td>
              </tr>
              <tr>
                <td>Kevin</td>
                <td>Spoelstra</td>
                <td>The Hague</td>
              </tr>
              <tr>
                <td>Merci</td>
                <td>Gasol</td>
                <td>Florence</td>
              </tr>
              <tr>
                <td>Kenny</td>
                <td>Williams</td>
                <td>Hong Kong</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <style jsx>{`
        section.fixed {
          position: relative;
          border: 1px solid #333;
          padding-top: 50px;
          background: #d3e4cd;
        }
        .fixed .wrap {
          overflow-y: auto;
          height: 190px;
        }
        .fixed table {
          border-spacing: 0;
          width: 100%;
        }
        .fixed td + td {
          border-left: 1px solid #333;
        }
        .fixed td,
        .fixed th {
          border-bottom: 1px solid #333;
          background: #fff;
          color: #333;
          padding: 17px 20px;
        }
        .fixed th {
          height: 0;
          line-height: 0;
          padding-top: 0;
          padding-bottom: 0;
          color: transparent;
          border: none;
          white-space: nowrap;
        }
        .fixed th div {
          position: absolute;
          height: 50px;
          color: #333;
          padding: 12px 20px;
          top: 0;
          margin-left: -21px;
          line-height: normal;
          border-left: 1px solid #333;
        }
        .fixed th:first-child div {
          border: none;
        }
      `}</style>
    </>
  );
}
