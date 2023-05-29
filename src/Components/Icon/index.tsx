//css
import { IconWrapper } from './index.module';

// props validation
type Props = {
    handleClick: any,
    icon: any
}

/**
 * [StyledIcon]
 * @param {any} handleClick
 * @param {any} icon
 * @returns StyledIcon 
 */
export default function StyledIcon({handleClick, icon}: Props) {
    return (
        <IconWrapper onClick={handleClick}> 
          {icon}
        </IconWrapper>
    )
}