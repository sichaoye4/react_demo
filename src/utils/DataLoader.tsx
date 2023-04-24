// utils to load data from the server using axios
import axios from 'axios';

const baseUrl = 'http://localhost:5000';
const cilentMonthlyTransDetailsUrl = `${baseUrl}/client-trans-details`;
const clientMonthlyLoanDetailsUrl = `${baseUrl}/client-loan-details`;
const loanMonthlySummaryUrl = `${baseUrl}/loan-monthly-summary`;
const transMonthlySummaryUrl = `${baseUrl}/trans-monthly-summary`;

// load client transaction details with given client id and month id
export const loadClientTransDetails = async (clientId: string, monthId: bigint) => {
    const response = await axios.get(`${cilentMonthlyTransDetailsUrl}/${clientId}/${monthId}`);
    return response.data;
};

// load client loan details with given client id and month id
export const loadClientLoanDetails = async (clientId: string, monthId: bigint) => {
    const response = await axios.get(`${clientMonthlyLoanDetailsUrl}/${clientId}/${monthId}`);
    return response.data;
};

// load loan monthly summary with given month id
export const loadLoanMonthlySummary = async (monthId: bigint) => {
    const response = await axios.get(`${loanMonthlySummaryUrl}/${monthId}`);
    // console.log(response.data)
    return response.data;
};

// load transaction monthly summary with given month id
export const loadTransMonthlySummary = async (monthId: bigint) => {
    const response = await axios.get(`${transMonthlySummaryUrl}/${monthId}`);
    // console.log(response.data)
    return response.data;
};