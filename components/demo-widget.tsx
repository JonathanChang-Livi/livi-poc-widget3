import { Card, CardBody, CardHeader, Title } from "livi-poc-core"
import Table from "./table"
import TableHeader, { TableHead } from "./table"

const DemoWidget = () => {
    const heads: TableHead[] = [
        { value: 'Date', width: 2 },
        { value: 'Type', width: 2 },
        { value: 'Target', width: 6 },
        { value: 'Amount', width: 2 }
    ]

    const data = [
        ['01 Jan 2023', 'In', 'Test Supplier 1', <p className=" text-green-700 font-black">HKD   +$100.00</p>],
        ['01 Jan 2023', 'In', 'Test Supplier 2', <p className="text-green-700 font-black">HKD   +$100.00</p>],
        ['01 Jan 2023', 'Out', 'Test Supplier 3', <p className="text-red-700 font-black">HKD   -$100.00</p>],
        ['01 Jan 2023', 'Out', 'Test Supplier 4', <p className="text-red-700 font-black">HKD   -$100.00</p>],
        ['01 Jan 2023', 'Out', 'Test Supplier 5', <p className="text-red-700 font-black">HKD   -$100.00</p>],
    ]
    return (
        <Card>
            <CardHeader className="text-2xl">Transaction History</CardHeader>
            <CardBody>
                <div style={{display: 'none'}} className='text-secondary w-2/12 w-6/12 flex flex-col'></div>
                <Table header={heads} data={data}/>
            </CardBody>
        </Card>
    )
}

export default DemoWidget