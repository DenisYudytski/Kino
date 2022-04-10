import { ChangeEventHandler, useState } from "react";

export default function useInput(initialValue: string) {
	const [value, setValue] = useState<string>(initialValue)
	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	return {
		value, onChange, setValue
	}
}