export default function Rate({ rate }) {
    return ( //rate component gets rate data and displays it in a table using map
        <div className="rate-container">
            <table>
                <tbody>
                    {Object.keys(rate).map((key, index) => (
                        <tr key={index}>
                            <th>
                                {key}
                            </th>
                            <td>
                                {rate[key]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
