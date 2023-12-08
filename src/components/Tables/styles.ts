import { styled } from 'styled-components';

const Table = styled.table`

    width: 100%;
    border-spacing: 0 0.5rem;
    border: 1px solid #d7d7d7;
    
    td {
        padding: 1rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background-color: #fff;
        color: #363f5f;
    }

    th {
        padding: 1rem;
        text-align: left;
        line-height: 1.5rem;
        font-weight: 400;
        background-color: #f0f2f5;
        color: #969cb3;
    }

`;

export default Table;
