import { PieChart } from 'react-minimal-pie-chart';

export default function Graph({ values }) { //graph component will get values and display them in a pie chart using PieChart component
    return (
        <div className="graph-container">
            <PieChart
                center={[50, 50]}
                data={[
                    {
                        color: "#E38627",
                        value: Math.round(values[0] * 100 / (values[0] + values[1] + values[2])),
                    },
                    {
                        color: "#C13C37",
                        value: Math.round(values[1] * 100 / (values[0] + values[1] + values[2])),
                    },
                    {
                        color: "#6A2135",
                        value: Math.round(values[2] * 100 / (values[0] + values[1] + values[2])),
                    },
                ]}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={0}
                radius={50}
                rounded
                startAngle={0}
                viewBoxSize={[400, 100]}
                label={(data) => `${data.dataEntry.value}%`}
                labelPosition={65}
                labelStyle={{
                    fontSize: "10px",
                    fontColor: "FFFFFA",
                    fontWeight: "400",
                }}
            />
        </div>
    )
}
