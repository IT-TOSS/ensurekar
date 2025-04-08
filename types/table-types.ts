interface TableTypes {
    header: string;
    description: string;
    tableHead: string[];
    tableData: {
      id: string;
      purpose?: string;
      date?: string;
      description?: string;
      amount?: number;
      status?: string;
      isLink?: boolean;
    }[];
  }
interface TableCell {
    className?: string;
    rowSpan?: number;
    colSpan?: number;
    content: any;
    isHeader?: boolean; 
}

interface TableRow {
    cells: TableCell[];
}

interface TableData {
    rows: TableRow[];
    headers?: TableCell[]; 
}

export type { TableTypes, TableCell, TableRow, TableData };