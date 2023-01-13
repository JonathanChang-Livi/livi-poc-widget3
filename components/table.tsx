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
    const headClass = 'w-full h-6 mb-5 grid grid-cols-12'
    return (
        <div className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {header.map((head, i) => {
                return (
                    <div className={`col-span-${head.width} p-2`}>
                        <p className={`w-full text-base font-semibold text-slate-500 text-${head.position || 'left'} `}>{head.value}</p>
                    </div>
                )
            })}
        </div>
    )
}

export interface TableRowProps {
    field: React.ReactNode[]
    header: TableHead[]
}

const TableRow = ({ field, header, className, override, style }: TableRowProps & ComponentProps) => {
    const headClass = 'w-full grid grid-cols-12'
    return (
        <div className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {<></>}
            {field.map((f, i) => {
                return (
                    <div className={`p-2 col-span-${header[i].width}`}>
                        {f}
                    </div>
                )
            })}
        </div>
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
            <div className='overflow-y-auto'>
                {data.map((d) => {
                    return (
                        <TableRow field={d} header={header} />
                    )
                })}
            </div>
        </div>
    )
}

export default Table