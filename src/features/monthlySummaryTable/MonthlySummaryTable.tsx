import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
import { loadLoanMonthlySummary, loadTransMonthlySummary } from '../../utils/DataLoader';
import { monthlyLoanSummaryColumns, monthlyTransSummaryColumns, monthlyLoanSummaryDataType, monthlyTransSummaryDataType} from '../../constants/TableDataDef';


interface TableParams {
  pagination: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}


const MonthlySummaryTable: React.FC = () => {
  const [data, setData] = useState<monthlyLoanSummaryDataType[]>();
  const [loading, setLoading] = useState(false);
  const [monthId, setMonthId] = useState<bigint>(BigInt(199801));
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const fetchData = () => {
    setLoading(true);
    loadLoanMonthlySummary(monthId)
    .then(( results ) => {
        if (results.length > 0 && tableParams.pagination.current && tableParams.pagination.pageSize) {
            setData(results.slice((tableParams.pagination.current - 1) * tableParams.pagination.pageSize, tableParams.pagination.current * tableParams.pagination.pageSize));
        }
        setLoading(false);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: results.length,
            },
        });
    })
  };

  useEffect(() => {

    fetchData();
  }, [JSON.stringify(tableParams)]);

  // handle change of pagination, filters, sorter for ant Table onChange event
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<monthlyLoanSummaryDataType> | SorterResult<monthlyLoanSummaryDataType>[],
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };


  return (
    <Table
      columns={monthlyLoanSummaryColumns}
      rowKey={(record) => record.client_id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default MonthlySummaryTable;