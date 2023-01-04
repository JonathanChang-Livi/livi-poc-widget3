import { ComponentProps, Group } from "livi-poc-core"

export interface TableHeaderProps {
    header: TableHead[]
}

export interface TableHead {
    value: string
    width: number
    position?: 'left' | 'center' | 'right'
}

const TableHeader = ({ header, className, override, style }: TableHeaderProps & ComponentProps) => {
    const headClass = 'justify-around w-full h-6 mb-5'
    return (
        <Group className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {<></>}
            {header.map((head, i) => {
                return (
                    <div className={`${head.width && head.width !== 12 ? `w-${head.width}/12` : ''} flex p-2`}>
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
    const headClass = 'justify-around w-full'
    return (
        <Group className={`${override && override ? '' : headClass} ${className || ''}`} style={style}>
            {<></>}
            {field.map((f, i) => {
                return (
                    <div className={`flex p-2 w-${header[i].width}/12`}>
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