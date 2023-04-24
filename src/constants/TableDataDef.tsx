import type { ColumnsType} from 'antd/es/table';

export interface monthlyLoanSummaryDataType {
    client_id: string;
    month_id: bigint;
    number_of_loans: bigint;
    total_loan_amount: number;
}

export interface monthlyTransSummaryDataType {
    client_id: string;
    month_id: bigint;
    operation: string;
    number_of_trans: bigint;
    total_trans_amount: number;
}

// define the columns of monthlyLoanSummary Table using ColumnsType
export const monthlyLoanSummaryColumns: ColumnsType<monthlyLoanSummaryDataType> = [
    {
        title: 'Client ID',
        dataIndex: 'client_id',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Month ID',
        dataIndex: 'month_id',
        width: '20%',
    },
    {
        title: 'Number of Loans',
        dataIndex: 'number_of_loans',
        width: '20%',
    },
    {
        title: 'Total Loan Amount',
        dataIndex: 'total_loan_amount',
    }
];

// define the columns of monthlyTransSummary Table using ColumnsType
export const monthlyTransSummaryColumns: ColumnsType<monthlyTransSummaryDataType> = [
    {
        title: 'Client ID',
        dataIndex: 'client_id',
        sorter: true,
        width: '15%',
    },
    {
        title: 'Month ID',
        dataIndex: 'month_id',
        width: '15%',
    },
    {
        title: 'Operation',
        dataIndex: 'operation',
        filters: [
            { text: 'Credit Card Withdrawal', value: 'Credit Card Withdrawal' },
            { text: 'Credit in Cash', value: 'Credit in Cash' },
            { text: 'Withdrawal in Cash', value: 'Withdrawal in Cash' },
            { text: 'Collection from another bank', value: 'Collection from another bank' },
            { text: 'Remittance to another bank', value: 'Remittance to another bank' },
          ],
        width: '15%',
    },
    {
        title: 'Number of Transactions',
        dataIndex: 'number_of_trans',
        width: '15%',
    },
    {
        title: 'Total Transaction Amount',
        dataIndex: 'total_trans_amount',
    }
];

