import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
function PrintTable(props) {
    return (
                <tbody>

                    <tr>
                        <th scope="row">
                            {props.id}
                        </th>
                        <td>
                            {props.title}
                        </td>
                        <td>
                            {props.description}
                        </td>
                        <td>
                            {props.time}
                        </td>
                        <td>
                            <Link to="/project/view" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPencil} className="mr-2" />
                                Edit
                            </Link>
                        </td>
                    </tr>
                </tbody>
    );
}


export default PrintTable;