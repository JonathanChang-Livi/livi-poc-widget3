import { Title } from "livi-poc-core"
import { Bar } from "react-chartjs-2"
import { registerables, Chart } from "chart.js"

interface InOutRecord {
    month: number
    year: number
    in: number
    out: number
}

const demoData: InOutRecord[] = [
    { month: 8, year: 2022, in: 7000, out: -5000 },
    { month: 9, year: 2022, in: 6000, out: -2000 },
    { month: 10, year: 2022, in: 2000, out: -7000 },
    { month: 11, year: 2022, in: 8000, out: -3000 },
    { month: 12, year: 2022, in: 13000, out: -4000 },
    { month: 1, year: 2023, in: 5000, out: -1000 },
]

const getMonth = (m: number) => {
    let month = 'Jan'
    switch (m) {
        case 2:
            month = 'Feb'
            break;
        case 3:
            month = 'Mar'
            break;
        case 4:
            month = 'Apr'
            break;
        case 5:
            month = 'May'
            break;
        case 6:
            month = 'Jun'
            break;
        case 7:
            month = 'Jul'
            break;
        case 8:
            month = 'Aug'
            break;
        case 9:
            month = 'Sep'
            break;
        case 10:
            month = 'Oct'
            break;
        case 11:
            month = 'Nov'
            break;
        case 12:
            month = 'Dec'
            break;
    }
    return month
}

const ProcessData = (data: InOutRecord[]) => {
    return {
        labels: data.map(x => `${getMonth(x.month)} - ${x.year}`),
        datasets: [
            {
                label: "Total In",
                borderRadius: 30,
                data: data.map(x => x.in),
                backgroundColor: "#20E1BF",
                barThickness: 10,
                barPercentage: 0.5,
                categoryPercentage: 1,
            },
            {
                label: "Total Out",
                borderRadius: 30,
                data: data.map(x => x.out),
                backgroundColor: "#2E3D5D",
                barThickness: 10,
                barPercentage: 0.5,
                categoryPercentage: 1,
            }
        ]
    }
}

const DemoWidget = () => {
    const data = ProcessData(demoData)
    const options = {
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                grid: {
                    display: false
                },
                ticks: {
                  stepSize: 10000
                },
                max: 10000
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
    Chart.register(...registerables)
    return (
        <div className="rounded-lg flex flex-col justify-between w-full border border-slate-100 shadow-lg">
            <div className="rounded-t-lg p-4 flex flex-row w-full items-center justify-between bg-slate-200">
                <Title className="font-black" override>Cashflow</Title>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mx-4">
                        <div className="mx-2 w-4 h-4 rounded-[4px] bg-secondary" />
                        <p>{'存入 Total In'}</p>
                    </div>
                    <div className="flex flex-row items-center mx-4">
                        <div className="mx-2 w-4 h-4 rounded-[4px] bg-primary" />
                        <p>{'支出 Total Out'}</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-full p-4 flex items-center justify-center">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default DemoWidget