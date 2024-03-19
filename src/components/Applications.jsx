import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function RenderingArrayOfObjects() {

    const jsonData = localStorage.getItem("applicationsData");
    let data = JSON.parse(jsonData);

    const tableRows = data.map((element) => {
        return (
            <tr className="items" key={element.company}>
                <td>{element.date}</td>
                <td>{element.company}</td>
                <td>{element.outcome}</td>
            </tr>
        );
    });

    return (
        <div className="container">
            <Table hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Outcome</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </Table>
        </div>
    );
}

export default RenderingArrayOfObjects;