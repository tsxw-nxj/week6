import React from 'react';

export default class LoginControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isLoggedin : true };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isLoggedin : !prevState.isLoggedin
		}));
	}

	render() {
		return (
            <div
            style={{
                color:'white'
            }}>
                <button
                style={{
                    border:'none',
                    borderRadius:'20px',
                    marginLeft : '10px',
                    marginRight: '10px',
                    width:'65px',
                    height:'25px'

                }}
                onClick={this.handleClick}
                >
                    {this.state.isLoggedin ? "로그인" : "로그아웃"}
                </button>
                    {this.state.isLoggedin ? "로그인해주세요." : "환영합니다."}
            </div>
        );
	}
}