'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table"

export default function Agendamento() {

    
    return(
        <div> 
            <h1>Módulos</h1>
            <Table>
        
        <TableHeader>
            <TableRow>
            <TableHead>Módulo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell onClick={()=> console.log('olaola')}>$250.00</TableCell>
            </TableRow>
        </TableBody>
        </Table>
        </div>
    )
}