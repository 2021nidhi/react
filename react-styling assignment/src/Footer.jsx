import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Table, } from 'reactstrap'

export default function Footer() {
    return (
        <div><Table borderless>
            <thead>
                <tr>
                    <th>
                    CONTACT
                    </th>
                    <th>
                        PROFILE
                    </th>
                    <th>
                        CATEGORY
                    </th>
                    <th>
                        INFORMATION
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}
