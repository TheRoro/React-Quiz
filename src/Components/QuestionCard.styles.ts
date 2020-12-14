import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 20px;
    max-width: 1100px;
    width: 800px;
    height: 400px;
    /* background: #000; 
    border-radius: 10px;
    border: 2px solid #000;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25); 
    */
    padding: 20px;
    
    text-align: center;

    p {
        color: #fff;
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        filter: brightness(0.8);
        /* opacity: 0.8 */
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        padding: 15px;
        margin: 10px 0;
        background: ${({ correct, userClicked}) => 
            correct
            ? 'linear-gradient(90deg, #00ff48, #00ff48)' /* Correct Answer */
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff3c00, #ff3c00)' /* Incorrect Answer */
            : 'linear-gradient(90deg, #03ffee, #03ffee)' /* All Answers */
        };
        border: ${({ correct, userClicked}) => 
            correct
            ? '3px solid #02d13d' /* Correct Answer */
            : !correct && userClicked
            ? '3px solid #c73002' /* Incorrect Answer */
            : '3px solid #02d1c3' /* All Answers */
        };
        border-radius: 10px;
        color: #000;
        text-shadow: 0px 1px 0px rgba(0,0,0,0.25);
    }
`;
