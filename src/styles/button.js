import styled from "styled-components";

export const DarkButton = styled.button`
    background: rgba(80, 129, 251, 0.08);
    border-radius: 8px;
    color: white;
    border: none;

    :hover {
        background-color: rgba(80, 129, 251, 0.16);
        cursor: pointer;
    }
    :focus {
        background-color: rgba(80, 129, 251, 0.16);
    }
    :active {
        border: 4px solid rgba(80, 129, 251, 0.24);
        background-color: rgba(80, 129, 251, 0.16);
    }
`
export const BlueButton = styled.button`
    background-color: #5081FB;
    border-radius: 8px;
    color: white;
    border: none;
    min-height: 56px;
    font-size: 16px;
    color: #051D3B;
    :hover {
        background-color: #7BA4FC;
        cursor: pointer;
    }
    :focus {
        background-color: #96B9FD;
    }
    :active {
        border: 4px solid #5081FB;
    }
`