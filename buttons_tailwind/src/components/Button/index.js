import { ButtonDefaultBs } from './ButtonDefaultBs';
import { ButtonPrimaryBs } from './ButtonPrimary';
import { ButtonTextBs } from './ButtonText';
export const BaseButtonBs = props => {
	switch (props.variant) {
		case 'primary': {
			return <ButtonPrimaryBs {...props} />;
		}
		case 'text': {
			return <ButtonTextBs {...props} />;
		}
		default:
			return <ButtonDefaultBs {...props} />;
	}
};
