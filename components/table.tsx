import { ComponentProps, Group } from "livi-poc-core"

export interface TableHeaderProps {
    header: TableHead[]
}

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface TableHead {
    value: string
    width: ColumnSize
    position?: 'left' | 'center' | 'right'
}

const TableHeader = ({ header, className, override, style }: TableHeaderProps & ComponentProps) => {
    const headClass = 'justify-around w-full h-6 mb-5 grid grid-cols-12'
    return (
        <Group className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {header.map((head: { width: number; position: any; value: any }, i: any) => {
                return (
                    <div className={`col-span-${head.width} flex p-2`}>
                        <p className={`w-full text-base font-semibold text-slate-500 text-${head.position || 'left'} `}>{head.value}</p>
                    </div>
                )
            })}
        </Group>
    )
}

export interface TableRowProps {
    field: React.ReactNode[]
    header: TableHead[]
}

const TableRow = ({ field, header, className, override, style }: TableRowProps & ComponentProps) => {
    const headClass = 'justify-around w-full grid grid-cols-12'
    return (
        <Group className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {<></>}
            {field.map((f, i) => {
                return (
                    <div className={`flex p-2 col-span-${header[i].width}`}>
                        {f}
                    </div>
                )
            })}
        </Group>
    )
}

export interface TableProps {
    header: TableHead[]
    data: React.ReactNode[][]
}

const Table = ({ header, data, className, override, style }: TableProps & ComponentProps) => {
    const tableClass = ''
    return (
        <div className={`${override && override ? '' : tableClass} ${className || ''}`} style={style}>
            <TableHeader header={header} />
            {data.map((d) => {
                return (
                    <TableRow field={d} header={header} />
                )
            })}
        </div>
    )
}

export default Table