import React from "react";
import "./../styles/Results.css";

const Results = () => {
  return (
    <div className="results">
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Test</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Results;
