import React from "react";

import MenuItem from "@mui/material/MenuItem";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

const Login = () => {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};

	return (
		<Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
			<Modal.Header>
				<Text id="modal-title" size={18}>
					Login
				</Text>
			</Modal.Header>
			<Modal.Body>
				<Input type="text" clearable bordered fullWidth color="primary" size="lg" placeholder="Email" contentLeft={<Mail fill="currentColor" />} />
				<Input type="password" clearable bordered fullWidth color="primary" size="lg" placeholder="Password" contentLeft={<Password fill="currentColor" />} />
				<Row justify="space-between">
					<Checkbox>
						<Text size={14}>Remember me</Text>
					</Checkbox>
					<Text size={14}>Forgot password?</Text>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button auto flat color="error" onClick={closeHandler}>
					Cancel
				</Button>
				<Button auto onClick={closeHandler}>
					Sign in
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Login;
