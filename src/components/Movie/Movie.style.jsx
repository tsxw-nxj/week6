import styled from 'styled-components';

export const Movie_container = styled.div`
width : 250px;
margin : 16px;
background-color: #373b69;
color: white;
border-radius: 5px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1 );
`;

export const more = styled.div`
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
text-align: center;
position: absolute;
width: 250px;
height : 485px;
background-color: rgba(0, 0, 0, 0.7 )
`;


export const m_c_img = styled.img`
max-width:100%`

export const movie_info = styled.div`
display : flex;
padding: 20px;
justify-content: space-between;
align-items: center;

&h4 {
    margin: 0;
}

&span {
    margin-left: 3px;
}
`;
