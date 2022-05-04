export default function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
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
        </tbody>
      </table>

      <table>
        <colgroup>
          <col width="31%" />
          <col width="23%" />
          <col width="23%" />
          <col width="23%" />
        </colgroup>
        <tbody>
          <tr>
            <th>First Name</th>
            <td>Maria</td>
            <td>Smith</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <th>City</th>
            <td>John</td>
            <td>Decker</td>
            <td>New Jersey</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          border-spacing: 0;
          width: 100%;
          border: 1px solid #333;
        }
        table + table {
          margin-top: 40px;
        }
        td + td {
          border-left: 1px solid #333;
        }
        td,
        th {
          border-bottom: 1px solid #333;
          border-left: 1px solid #333;
          background: #fff;
          color: #333;
          padding: 17px 20px;
        }
        tr:last-child td,
        tr:last-child th {
          border-bottom: none;
        }
        th {
          background: #2f5d62;
          white-space: nowrap;
          color: #fff;

          border-top: 1px solid #333;
        }
      `}</style>
    </>
  );
}
